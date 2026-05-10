<?php

namespace App\Repositories\Admin;

use App\Models\Cause;
use App\Models\Invoice;
use App\Models\Order;
use App\Models\Setting;
use App\Repositories\Traits\ModelRepositoryTraits;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Storage;

class OrderRepository
{
    use ModelRepositoryTraits;

    /**
     * Object model will be used to modify posts table
     */
    protected Order $model;

    /**
     * Constructor for Order repository
     */
    public function __construct(Order $order)
    {
        $this->model = $order;
    }

    /**
     * Get search result with pagination
     */
    public function paginateSearchResult($search, array $sort = [], array $filter = []): LengthAwarePaginator
    {
        $query = $this->model->with(['orderitems'])->newQuery();

        $query->where('status', '!=', 'initialize');

        if ($search) {
            $query->whereHas('orderitems', function ($q) use ($search) {
                $q->where('product_name', 'like', "%{$search}%");
            })
                ->orWhere('order_number', 'like', "%$search%")
                ->orWhere('customer_name', 'like', "%$search%")
                ->orWhere('customer_phone', 'like', "%$search%")
                ->orWhere('customer_email', 'like', "%$search%");
        }

        if (isset($sort['column']) && isset($sort['order'])) {
            $column = $sort['column'];
            $order = $sort['order'];

            if ($column === 'product_name') {
                $query->join('order_items', 'orders.id', '=', 'order_items.order_id')
                    ->groupBy('orders.id')
                    ->orderBy('order_items.product_name', $order)
                    ->select('orders.*');
            } else {
                $query->orderBy($column, $order);
            }
        }

        // Filter by status
        if (isset($filter['status']) && $filter['status'] !== 'All Order') {
            $query->where('status', $filter['status']);
        }

        if (isset($filter['type']) && $filter['type'] !== 'All') {
            $query->where('type', $filter['type']);
        }

        if (isset($filter['cause_id']) && $filter['cause_id'] !== 'All') {
            $query->where('cause_id', $filter['cause_id']);
        }

        // Filter by payment status
        if (isset($filter['payment_status']) && $filter['payment_status'] !== 'All Payment') {
            $query->where('payment_status', $filter['payment_status']);
        }

        return $query->paginate(30)->appends(array_filter([
            'search' => $search,
            'sort' => $sort,
        ]));
    }

    public function store(Request $request)
    {
        $specialImagePath = null;
        if ($request->hasFile('special_image')) {
            $specialImagePath = upload_file($request->file('special_image'), 'special_images');
        }
        $totalPrice = $request->cause_amount;

        if ($request->items) {
            foreach ($request->items as $item) {
                $qty = $item['quantity'] ?? 1;
                $totalPrice += ($item['amount'] * $qty);
            }
        }

        $order = $this->model->create([
            'order_number'    => date('Ymd') . mt_rand(1000, 9999),
            'customer_name'   => $request->customer_name,
            'customer_email'  => $request->customer_email,
            'customer_phone'  => $request->customer_phone,
            'shipping_address' => $request->shipping_address,
            'pancard'         => $request->pancard,
            'is_80g'          => $request->is_80g ? 1 : 0,
            'status'          => $request->status ?? 'pending',
            'payment_status'  => $request->payment_status ?? 0,
            'payment_method'  => $request->payment_method ?? 'Cash',
            'total_price'     => $totalPrice,
            'type'            => 'manual',
            'cause_id'        => $request->cause_id,
            'special_name'    => $request->special_name,
            'special_message' => $request->special_message,
            'special_date'    => $request->special_date ? \Carbon\Carbon::parse($request->special_date)->format('Y-m-d') : null,
            'special_video'   => $request->special_video,
            'special_image'   => $specialImagePath,
            'order_notes'     => $request->order_notes,
        ]);

        $orderItems = [];

        $cause = Cause::find($request->cause_id);
        $causeName = $cause && $cause->content ? $cause->content->title : 'Donation Cause';

        $orderItems[] = [
            'item_id'     => $request->cause_id,
            'item_type'   => \App\Models\Cause::class,
            'item_name'   => $causeName,
            'item_price'  => $request->cause_amount,
            'quantity'    => 1,
            'total_price' => $request->cause_amount,
        ];

        if ($request->items) {
            foreach ($request->items as $item) {
                $itemTypeClass = match ($item['type']) {
                    'product' => \App\Models\Product::class,
                    'gift'    => \App\Models\Gift::class,
                    default   => \App\Models\Product::class,
                };

                $orderItems[] = [
                    'item_id'     => $item['id'],
                    'item_type'   => $itemTypeClass,
                    'item_name'   => $item['name'],
                    'item_price'  => $item['amount'],
                    'quantity'    => $item['quantity'],
                    'total_price' => $item['amount'] * $item['quantity'],
                ];
            }
        }

        $order->orderitems()->createMany($orderItems);

        $invData = generate_invoice_number();

        $invoice = Invoice::create([
            'invoice_number'        => $invData['number'],
            'invoice_count'         => $invData['count'],
            'order_id'              => $order->id,
            'customer_name'         => $order->customer_name,
            'customer_email'        => $order->customer_email,
            'customer_phone'        => $order->customer_phone,
            'shipping_address'      => $order->shipping_address,
            'state'                 => $order->state,
            'is_80g'                => $order->is_80g ?? false,
            'pancard'               => $order->pancard,
            'financial_year'        => $invData['fy'],
            'financial_year_start'  => $invData['start'],
            'financial_year_end'    => $invData['end'],
            'total_price'           => $order->total_price,
            'payment_method'        => $order->payment_method,
            'type'                  => $order->type,
            'payment_date'          => now(),
            'status'                => 'paid',
        ]);

        $data['invoice'] = $invoice;

        return $order;
    }

    public function updateDetails(Request $request, Order $order)
    {
        $data = $request->only([
            'customer_name',
            'customer_email',
            'customer_phone',
            'shipping_address',
            'pancard',
            'status',
            'payment_status',
            'payment_method',
            'special_name',
            'special_message',
            'special_date',
            'special_video',
            'order_notes'
        ]);

        $data['is_80g'] = $request->boolean('is_80g') ? 1 : 0;

        if ($request->hasFile('special_image')) {
            if ($order->special_image) {
                Storage::disk(config('filesystems.default'))->delete($order->special_image);
            }
            $data['special_image'] = upload_file($request->file('special_image'), 'special_image');
        }

        $order->update($data);
    }

    public function updateStatus(Request $request, Order $order)
    {
        $order->update([
            'status' => $request->status,
            'payment_status' => $request->payment_status,
        ]);
    }

    /**
     * Get invoice front name
     */
    public function getInvoiceFrontName(): string
    {
        $language_code = session()->get('lang') ?? Setting::pull('default_lang');
        $currency_code = Setting::pull('currency_code');

        if (
            $currency_code == 'BDT' ||
            $language_code == 'bd'
        ) {
            // bengali font
            $font_family = "'Hind Siliguri','freeserif'";
        } elseif (
            $currency_code == 'KHR' ||
            $language_code == 'kh'
        ) {
            // khmer font
            $font_family = "'Hanuman','sans-serif'";
        } elseif ($currency_code == 'AMD') {
            // Armenia font
            $font_family = "'arnamu','sans-serif'";
        } elseif (
            $currency_code == 'AED' ||
            $currency_code == 'EGP' ||
            $language_code == 'sa' ||
            $currency_code == 'IQD' ||
            $language_code == 'ir' ||
            $language_code == 'om' ||
            $currency_code == 'ROM' ||
            $currency_code == 'SDG' ||
            $currency_code == 'ILS' ||
            $language_code == 'jo' ||
            $language_code == 'ar'
        ) {
            $font_family = 'xbriyaz';
        } elseif ($currency_code == 'THB') {
            $font_family = "'Kanit','sans-serif'";
        } elseif (
            $currency_code == 'CNY' ||
            $language_code == 'zh'
        ) {
            $font_family = "'sun-exta','gb'";
        } elseif (
            $currency_code == 'MMK' ||
            $language_code == 'mm'
        ) {
            $font_family = 'tharlon';
        } elseif (
            $currency_code == 'THB' ||
            $language_code == 'th'
        ) {
            $font_family = "'zawgyi-one','sans-serif'";
        } elseif (
            $currency_code == 'USD' ||
            $currency_code == 'TRY' ||
            $language_code == 'tr'
        ) {
            $font_family = "'Roboto','sans-serif'";
        } else {
            $font_family = 'freeserif';
        }

        return $font_family;
    }

    /**
     * Get invoice direction
     */
    public function getInvoiceDirection(): string
    {
        $direction = null;
        $language_code = session()->get('lang') ?? Setting::pull('default_lang');
        $languages = json_decode(Setting::pull('languages'), true);
        if ($languages[$language_code]['is_ltr'] == 'yes') {
            $direction = 'ltr';
        } else {
            $direction = 'rtl';
        }

        return $direction;
    }

    /**
     * Bulk update orders status.
     */
    public function bulkUpdateStatus(string $ids, string $status): void
    {
        $idArray = explode(',', $ids);
        $this->model->whereIn('id', $idArray)->update(['status' => $status]);
    }

    /**
     * Delete order
     */
    public function destroy(Order $order): void
    {
        $order->delete();
    }

    /**
     * Bulk delete orders.
     */
    public function bulkDelete(string $ids): void
    {
        $idArray = explode(',', $ids);
        $this->model->destroy($idArray);
    }
}
