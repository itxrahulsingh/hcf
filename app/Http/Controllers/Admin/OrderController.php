<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Cause;
use App\Models\Gift;
use App\Models\Product;
use App\Models\Setting;
use App\Repositories\Admin\OrderRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PDF;

class OrderController extends Controller
{

    public function __construct()
    {
        // for demo mood
        $this->middleware('demo', ['only' => ['updateStatus', 'destroy', 'bulkDelete']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, OrderRepository $repository)
    {
        if (Setting::pull("is_enabled_ecommerce") === "0") {
            abort(404);
        }

        $data['search'] = $request->search ?: '';
        $data['sort']['column'] = $request->sort['column'] ?? 'id';
        $data['sort']['order'] = $request->sort['order'] ?? 'desc';
        $data['filter']['status'] = $request->filter['status'] ?? 'All Order';
        $data['filter']['cause_id'] = $request->filter['cause_id'] ?? null;
        $data['filter']['type'] = $request->filter['type'] ?? 'All';
        $data['filter']['payment_status'] = $request->filter['payment_status'] ?? 'All Payment';

        $data['orders'] = $repository->paginateSearchResult($data['search'], $data['sort'], $data['filter']);
        $data['causes'] = Cause::with('content:cause_id,title')->select('id')->get();

        return Inertia::render('Orders/Index', $data);
    }

    public function create()
    {
        $data['causes'] = Cause::with('content:cause_id,title')
            ->where('status', 1)
            ->select('id', 'min_amount', 'custom_donation_amounts')
            ->get()
            ->map(fn($item) => [
                'id' => $item->id,
                'title' => $item->content->title ?? 'Untitled Cause',
                'min_amount' => $item->min_amount,
                'suggested_amounts' => $item->custom_donation_amounts ? explode(',', $item->custom_donation_amounts) : []
            ]);

        $data['products'] = Product::with('content:product_id,title')
            ->where('status', 1)
            ->select('id', 'price', 'min_quantity')
            ->get()
            ->map(fn($item) => [
                'id' => $item->id,
                'title' => $item->content->title ?? 'Untitled Product',
                'price' => $item->price,
                'min_qty' => $item->min_quantity ?? 1
            ]);

        $data['gifts'] = Gift::with('content:gift_id,title')
            ->where('status', 1)
            ->select('id', 'amount', 'min_qty')
            ->get()
            ->map(fn($item) => [
                'id' => $item->id,
                'title' => $item->content->title ?? 'Untitled Gift',
                'price' => $item->amount,
                'min_qty' => $item->min_qty ?? 1
            ]);

        return Inertia::render('Orders/Create', $data);
    }

    public function store(Request $request, OrderRepository $repository)
    {
        $request->validate([
            'customer_name'   => 'required|string|max:255',
            'customer_email'  => 'nullable|email',
            'cause_id'        => 'required|integer',
            'cause_amount'    => 'required|numeric|min:1',
            'items'           => 'nullable|array',
            'items.*.type'    => 'required|in:product,gift',
            'items.*.id'      => 'required',
            'items.*.amount'  => 'required|numeric|min:1',
            'items.*.quantity' => 'required|integer|min:1',
            'special_name'    => 'nullable|string|max:255',
            'special_image'   => 'nullable|image|max:5120',
        ]);

        $repository->store($request);

        return redirect()->route('admin.orders.index')->with('success', 'Order created successfully!');
    }

    /**
     * Show the form for showing the specified resource.
     */
    public function show(Order $order)
    {
        if (Setting::pull("is_enabled_ecommerce") === "0") {
            abort(404);
        }

        $data['order'] = $order->load('orderitems', 'invoice');
        return Inertia::render('Orders/Show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        return Inertia::render('Orders/Edit', [
            'order' => $order
        ]);
    }

    /**
     * Update the specified resource details in storage.
     */
    public function updateDetails(Request $request, Order $order, OrderRepository $repository)
    {
        $request->validate([
            'customer_name'  => 'required|string|max:255',
            'customer_email' => 'nullable|email',
            'special_name'   => 'nullable|string|max:255',
            'special_image'  => 'nullable|image|max:5120',
        ]);

        $repository->updateDetails($request, $order);

        return redirect()->route('admin.orders.index')->with('success', 'Order details updated successfully!');
    }

    /**
     * Update the specified resource in storage.
     *
     * @return RedirectResponse
     */
    public function updateStatus(Request $request, Order $order, OrderRepository $repository)
    {
        $repository->updateStatus($request, $order);

        return redirect()->route('admin.orders.index')->with('success', 'Order status successfully updated!');
    }

    /**
     * Show invoice.
     */
    public function showInvoice(Order $order, OrderRepository $repository)
    {
        if (Setting::pull("is_enabled_ecommerce") === "0") {
            abort(404);
        }

        $data['invoice_logo'] = Setting::pull('invoice_logo');
        $data['footer_contact'] = Setting::pull('footer_contact');
        $data['footer_address'] = Setting::pull('footer_address');
        $data['currency_symbol'] = Setting::pull('currency_symbol');
        $data['font_family'] = $repository->getInvoiceFrontName();
        $data['direction'] = $repository->getInvoiceDirection();
        $data['text_align'] = $data['direction'] == 'ltr' ? 'left' : 'right';
        $data['order'] = $order->load('orderitems', 'invoice');
        $pdf = PDF::loadView('invoice', $data);

        return $pdf->stream("invoice-{$order->order_number}.pdf");
    }

    /**
     * Download invoice
     */
    public function downloadInvoice(Order $order, OrderRepository $repository)
    {
        if (Setting::pull("is_enabled_ecommerce") === "0") {
            abort(404);
        }

        $data['invoice_logo'] = Setting::pull('invoice_logo');
        $data['footer_contact'] = Setting::pull('footer_contact');
        $data['footer_address'] = Setting::pull('footer_address');
        $data['currency_symble'] = Setting::pull('currency_symble');
        $data['font_family'] = $repository->getInvoiceFrontName();
        $data['direction'] = $repository->getInvoiceDirection();
        $data['text_align'] = $data['direction'] == 'ltr' ? 'left' : 'right';
        $data['order'] = $order->load('orderitems', 'invoice');
        $pdf = PDF::loadView('invoice', $data);

        return $pdf->download("invoice-{$order->order_number}.pdf");
    }

    /**
     * Update invoice/order remarks inline
     */
    public function updateRemarks(Request $request, Order $order): RedirectResponse
    {
        $request->validate([
            'remarks' => 'nullable|string|max:1000',
        ]);

        if ($order) {
            $order->update([
                'order_notes' => $request->remarks
            ]);
        }

        return back()->with('success', 'Remarks updated successfully!');
    }

    /**
     * Bulk Order Status Update
     */
    public function bulkUpdateStatus(Request $request, OrderRepository $repository)
    {
        $repository->bulkUpdateStatus($request->ids, $request->status);

        return back()->with('success', 'Orders status updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order, OrderRepository $repository)
    {
        $repository->destroy($order);

        return back()->with('success', 'Orders successfully deleted!');
    }

    /**
     * Bulk delete
     */
    public function bulkDelete(Request $request, OrderRepository $repository)
    {
        $repository->bulkDelete($request->ids);

        return back()->with('success', 'Orders successfully deleted!');
    }
}
