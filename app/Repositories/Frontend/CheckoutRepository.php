<?php

namespace App\Repositories\Frontend;

use App\Http\Requests\CheckoutRequest;
use App\Models\Cause;
use App\Models\Coupon;
use App\Models\Gift;
use App\Models\ManualPaymentGateway;
use App\Models\Order;
use App\Models\Product;
use App\Models\Setting;
use App\Services\PaymentGateway\FlutterWave;
use App\Services\PaymentGateway\Paypal;
use App\Services\PaymentGateway\Razorpay;
use App\Services\PaymentGateway\SSLCommerz;
use App\Services\PaymentGateway\Stripe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class CheckoutRepository
{
    public function checkout(CheckoutRequest $request)
    {
        $currency_code = Setting::pull('currency_code') ?? 'INR';
        $checkoutType = $this->determineCheckoutType($request);
        [$order_items, $subtotal, $cause, $orderType] = $this->resolveOrderItems($request, $checkoutType);

        $discount = $this->resolveDiscount($request, $subtotal);
        $total = max($subtotal - $discount, 0);

        if ($cause && $total < (float) ($cause->min_amount ?? 1)) {
            throw ValidationException::withMessages([
                'items' => __('Donation total must be at least :amount.', ['amount' => $cause->min_amount]),
            ]);
        }

        // Handle receipt file upload
        $receiptFilePath = null;
        if ($request->hasFile('receiptFile')) {
            $receiptFilePath = upload_file($request->file('receiptFile'), 'receipts');
        }
        // Handle receipt file upload
        $specialFilePath = null;
        if ($request->hasFile('special_image')) {
            $specialFilePath = upload_file($request->file('special_image'), 'special_image');
        }

        // Create Order
        $order = Order::create([
            'user_id' => Auth::check() ? Auth::user()->id : null,
            'customer_name' => $request->name,
            'customer_email' => $request->email,
            'customer_phone' => $request->phone,
            'shipping_address' => $request->address,
            'state' => $request->state,
            'coupon_code' => $request->coupon['code'] ?? null,
            'order_number' => date('Ymd') . mt_rand(1000, 9999),
            'total_price' => $total,
            'payment_method' => $request->paymentMethod,
            'discount' => $discount,
            'status' => 'pending',
            'payment_status' => 1,
            'order_notes' => $request->orderNotes,
            'transaction_id' => $request->transactionId ?? null,
            'receipt_file' => $receiptFilePath,
            'special_name' => $request->special_name ?? null,
            'special_message' => $request->special_message ?? null,
            'special_image' => $specialFilePath,
            'special_video' => $request->special_video ?? null,
            'special_date' => $request->special_date ?? null,
            'is_80g' => $request->boolean('is_80g'),
            'pancard' => $request->pancard,
            'type' => $orderType,
            'cause_id' => $cause?->id,
        ]);

        $order->orderitems()->createMany($order_items);

        $manualPayment = ManualPaymentGateway::whereHas('content', function ($query) use ($request) {
            $query->where('gateway_name', $request->paymentMethod);
        })->first();

        if ($manualPayment || $request->paymentMethod === 'cod') {
            return redirect()->route('order.success.page', $order);
        }

        // Online payment gateways
        switch ($request->paymentMethod) {
            case 'paypal':
                $paypal = new Paypal;
                $body = [
                    'intent' => 'CAPTURE',
                    'purchase_units' => [[
                        'reference_id' => rand(100000, 999999),
                        'amount' => [
                            'value' => number_format($total, 2, '.', ''),
                            'currency_code' => $currency_code,
                        ],
                    ]],
                    'application_context' => [
                        'cancel_url' => route('payment.cancel', ['method' => 'paypal', 'identifier' => $order->id, 'type' => $checkoutType]),
                        'return_url' => route('payment.success', ['method' => 'paypal', 'identifier' => $order->id, 'type' => $checkoutType]),
                    ],
                ];
                $response = $paypal->initializePayment($body);
                return Inertia::location($response->links[1]->href);

            case 'stripe':
                $stripe = new Stripe;
                $body = [
                    'line_items' => [[
                        'price_data' => [
                            'currency' => $currency_code,
                            'product_data' => [
                                'name' => implode(', ', array_map(fn($item) => $item['item_name'], $order_items))
                            ],
                            'unit_amount' => $total * 100, // cents
                        ],
                        'quantity' => 1,
                    ]],
                    'mode' => 'payment',
                    'success_url' => route('payment.success', ['method' => 'stripe', 'identifier' => $order->id, 'type' => $checkoutType]) . '?session_id={CHECKOUT_SESSION_ID}',
                    'cancel_url' => route('payment.cancel', ['method' => 'stripe', 'identifier' => $order->id, 'type' => $checkoutType]),
                ];
                $response = $stripe->initializePayment($body);
                Session::put('paymentId', $response->id);
                $order->update([
                    'payment_data' => [
                        'stripe_session_id' => $response->id,
                    ],
                ]);
                return Inertia::location($response->url);

            case 'sslcommerz':
                $sslcmz = new SSLCommerz($order->id, $checkoutType);
                $body = [
                    'total_amount' => $total,
                    'currency' => $currency_code,
                    'tran_id' => $order->order_number,
                    'cus_name' => $request->name,
                    'cus_email' => $request->email,
                    'cus_phone' => $request->phone,
                    'shipping_method' => 'NO',
                    'product_name' => array_map(fn($i) => $i['item_name'], $order_items),
                    'product_category' => array_map(fn($i) => $i['item_name'], $order_items),
                    'product_profile' => 'general',
                ];
                $response = $sslcmz->initilizePatment($body);
                $result = json_decode($response);
                return Inertia::location($result->data);

            case 'flutterwave':
                $flutterwave = new FlutterWave;
                $data = [
                    'amount' => $total,
                    'currency' => $currency_code,
                    'customer' => [
                        'name' => $request->name,
                        'email' => $request->email,
                        'phonenumber' => $request->phone,
                    ],
                    'tx_ref' => $order->order_number,
                    'redirect_url' => route('payment.success', ['method' => 'flutterwave', 'identifier' => $order->id, 'type' => $checkoutType]),
                ];
                $response = $flutterwave->initializePayment($data);
                return Inertia::location($response['data']['link']);

            case 'razorpay':
                $razorpay = new Razorpay;
                $data = [
                    'receipt' => $order->order_number,
                    'amount' => (int) $total * 100,
                    'currency' => $currency_code,
                ];
                $order_id = $razorpay->initilizePatment($data);
                $order->update(['rzp_order_id' => $order_id]);
                $url = route('payment.razorpay.pay', ['order_id' => $order_id, 'payment_id' => $order->id, 'type' => $checkoutType]);
                return Inertia::location($url);
        }
    }

    private function determineCheckoutType(CheckoutRequest $request): string
    {
        return $request->filled('cause_id') ? 'donation' : 'product';
    }

    private function resolveDiscount(CheckoutRequest $request, float $subtotal): float
    {
        $couponCode = data_get($request->coupon, 'code');
        if (! $couponCode) {
            return 0;
        }

        $coupon = Coupon::where('code', $couponCode)->first();
        if (! $coupon) {
            throw ValidationException::withMessages([
                'coupon' => __('Invalid coupon code.'),
            ]);
        }

        $discountType = $coupon->discount_type ?? $coupon->type;
        $discount = $discountType === 'fixed'
            ? (float) $coupon->discount_value
            : ($subtotal * (float) $coupon->discount_value) / 100;

        return min($discount, $subtotal);
    }

    private function resolveOrderItems(CheckoutRequest $request, string $checkoutType): array
    {
        $items = [];
        $subtotal = 0;
        $cause = $request->filled('cause_id') ? Cause::with('content')->findOrFail($request->cause_id) : null;
        $allowedGiftIds = $this->decodeIds($cause?->gift_ids);
        $allowedProductIds = $this->decodeIds($cause?->product_ids);
        $orderType = $cause?->type ?? 'normal';

        foreach ($request->items as $item) {
            $quantity = max((int) ($item['quantity'] ?? 1), 1);

            switch ($item['type']) {
                case 'product':
                    $product = Product::with('content')->find($item['id']);
                    if (! $product) {
                        throw ValidationException::withMessages(['items' => __('Selected product is no longer available.')]);
                    }
                    if ($checkoutType === 'donation' && ! in_array((int) $product->id, $allowedProductIds, true)) {
                        throw ValidationException::withMessages(['items' => __('Selected product does not belong to this donation campaign.')]);
                    }
                    $price = (float) ($product->discount_price ?? $product->price ?? 0);
                    $items[] = [
                        'item_id' => $product->id,
                        'item_type' => Product::class,
                        'item_name' => $product->content?->title ?? 'Product',
                        'item_price' => $price,
                        'quantity' => $quantity,
                        'total_price' => $price * $quantity,
                        'sku' => $product->sku ?? null,
                        'item_image' => $product->thumbnail_image ?? null,
                    ];
                    $subtotal += $price * $quantity;
                    break;

                case 'gift':
                    [$giftId, $variationIndex] = $this->parseGiftIdentifier($item['id']);
                    $gift = Gift::with('content')->find($giftId);
                    if (! $gift) {
                        throw ValidationException::withMessages(['items' => __('Selected gift is no longer available.')]);
                    }
                    if ($checkoutType === 'donation' && ! in_array((int) $gift->id, $allowedGiftIds, true)) {
                        throw ValidationException::withMessages(['items' => __('Selected gift does not belong to this donation campaign.')]);
                    }

                    $price = (float) $gift->amount;
                    $itemId = $gift->id;
                    $name = $gift->content?->title ?? 'Gift';
                    if ($variationIndex !== null) {
                        $variation = data_get($gift->variations, $variationIndex);
                        if (! $variation) {
                            throw ValidationException::withMessages(['items' => __('Selected gift variation is no longer available.')]);
                        }
                        $price = (float) data_get($variation, 'amount', 0);
                        $name = trim($name . ' - ' . data_get($variation, 'title', 'Variation'));
                        $itemId = $gift->id;
                    }

                    $items[] = [
                        'item_id' => $itemId,
                        'item_type' => Gift::class,
                        'item_name' => $name,
                        'item_price' => $price,
                        'quantity' => $quantity,
                        'total_price' => $price * $quantity,
                        'sku' => null,
                        'item_image' => $gift->gift_image ?? null,
                    ];
                    $subtotal += $price * $quantity;
                    break;

                case 'cause':
                    if (! $cause || (int) $item['id'] !== (int) $cause->id) {
                        throw ValidationException::withMessages(['items' => __('Donation amount is not linked to the selected campaign.')]);
                    }
                    $price = round((float) ($item['price'] ?? 0), 2);
                    if ($price <= 0) {
                        throw ValidationException::withMessages(['items' => __('Donation amount must be greater than zero.')]);
                    }
                    $items[] = [
                        'item_id' => $cause->id,
                        'item_type' => Cause::class,
                        'item_name' => $cause->content?->title ?? 'Donation',
                        'item_price' => $price,
                        'quantity' => 1,
                        'total_price' => $price,
                        'sku' => null,
                        'item_image' => $cause->thumbnail_image ?? null,
                    ];
                    $subtotal += $price;
                    break;
            }
        }

        if (empty($items)) {
            throw ValidationException::withMessages([
                'items' => __('Your cart is empty.'),
            ]);
        }

        return [$items, $subtotal, $cause, $orderType];
    }

    private function decodeIds($value): array
    {
        if (is_array($value)) {
            return array_map('intval', $value);
        }

        if (is_string($value) && $value !== '') {
            $decoded = json_decode($value, true);
            if (is_array($decoded)) {
                return array_map('intval', $decoded);
            }
        }

        return [];
    }

    private function parseGiftIdentifier($giftIdentifier): array
    {
        if (is_string($giftIdentifier) && preg_match('/^(\d+)-var-(\d+)$/', $giftIdentifier, $matches)) {
            return [(int) $matches[1], (int) $matches[2]];
        }

        return [(int) $giftIdentifier, null];
    }

    // Old checkout method retained for reference
    // public function checkout(CheckoutRequest $request)
    // {
    //     $currency_code = Setting::pull('currency_code') ?? 'USD';
    //     $subtotal = array_reduce($request->items, fn($carry, $item) => ($carry) + ($item['price'] * $item['quantity']), 0);
    //     $discount = 0;
    //     if ($request->coupon) {
    //         $coupon = Coupon::where('code', $request->coupon['code'])->first();
    //         $discount = $coupon->type == 'fixed' ? $coupon->discount_value : ($subtotal * $coupon->discount_value) / 100;
    //     }
    //     $total = $subtotal - $discount;

    //     // Handle receipt file upload if exists
    //     $receiptFilePath = null;
    //     if ($request->hasFile('receiptFile')) {
    //         $file = $request->file('receiptFile');
    //         $filename = time() . '_' . $file->getClientOriginalName();
    //         $receiptFilePath = $file->storeAs('receipts', $filename, 'public');
    //     }

    //     $order = Order::create([
    //         'user_id' => Auth::check() ? Auth::user()->id : null,
    //         'customer_name' => $request->name,
    //         'coupon_code' => $request->coupon['code'] ?? null,
    //         'customer_email' => $request->email,
    //         'customer_phone' => $request->phone,
    //         'shipping_address' => $request->address,
    //         'order_number' => date('Ymd') . mt_rand(1000, 9999),
    //         'total_price' => $total,
    //         'payment_method' => $request->paymentMethod,
    //         'discount' => $discount,
    //         'status' => 'pending',
    //         'payment_status' => '1',
    //         'order_notes' => $request->orderNotes,
    //         'transaction_id' => $request->transactionId ?? null,
    //         'receipt_file' => $receiptFilePath,
    //     ]);

    //     $order_items = array_map(function ($item) {
    //         return [
    //             'product_id' => $item['id'],
    //             'quantity' => $item['quantity'],
    //             'total_price' => $item['price'] * $item['quantity'],
    //             'product_image' => $item['thumbnail_image'],
    //             'product_name' => $item['title'],
    //             'product_price' => $item['price'],
    //         ];
    //     }, $request->items);

    //     $order->orderItems()->createMany($order_items);

    //     $manualPayment = ManualPaymentGateway::whereHas('content', function ($query) use ($request) {
    //         $query->where('gateway_name', $request->paymentMethod);
    //     })->first();

    //     if ($manualPayment) {
    //         return redirect()->route('order.success.page', $order);
    //     }

    //     if ($request->paymentMethod === 'cod') {
    //         return redirect()->route('order.success.page', $order);
    //     }

    //     switch ($request->paymentMethod) {
    //         case 'paypal':
    //             $paypal = new Paypal;
    //             $body = [
    //                 'intent' => 'CAPTURE',
    //                 'purchase_units' => [[
    //                     'reference_id' => rand(000000, 999999),
    //                     'amount' => [
    //                         'value' => number_format($total, 2, '.', ''),
    //                         'currency_code' => $currency_code,
    //                     ],
    //                 ]],
    //                 'application_context' => [
    //                     'cancel_url' => route('payment.cancel', ['method' => 'paypal', 'identifier' => $order->id, 'type' => 'product']),
    //                     'return_url' => route('payment.success', ['method' => 'paypal', 'identifier' => $order->id, 'type' => 'product']),
    //                 ],
    //             ];

    //             $response = $paypal->initializePayment($body);

    //             return Inertia::location($response->links[1]->href);
    //         case 'stripe':
    //             $stripe = new Stripe;
    //             $body = [
    //                 'line_items' => [[
    //                     'price_data' => [
    //                         'currency' => $currency_code,
    //                         'product_data' => ['name' => implode(', ', array_map(fn($item) => $item['title'], $request->items))],
    //                         'unit_amount' => 100 * $total, // Amount in cents, adjust accordingly
    //                     ],
    //                     'quantity' => 1,
    //                 ]],
    //                 'mode' => 'payment',
    //                 'success_url' => route('payment.success', ['method' => 'stripe', 'identifier' => $order->id, 'type' => 'product']),
    //                 'cancel_url' => route('payment.cancel', ['method' => 'stripe', 'identifier' => $order->id, 'type' => 'product']),
    //             ];

    //             try {
    //                 $response = $stripe->initializePayment($body);
    //                 Session::put('paymentId', $response->id);

    //                 return Inertia::location($response->url);
    //             } catch (\Exception $exception) {
    //                 throw new \Exception($exception->getMessage());
    //             }

    //         case 'sslcommerz':
    //             $sslcmz = new SSLCommerz($order->id);
    //             $body = [
    //                 'total_amount' => $total,
    //                 'currency' => $currency_code,
    //                 'tran_id' => $order->order_number,

    //                 'cus_name' => $request->name,
    //                 'cus_email' => $request->email,
    //                 'cus_add1' => '',
    //                 'cus_add2' => '',
    //                 'cus_city' => '',
    //                 'cus_postcode' => '',
    //                 'cus_country' => 'Bangladesh',
    //                 'cus_phone' => $request->mobile,

    //                 'ship_name' => '',
    //                 'ship_add1' => '',
    //                 'ship_add2' => '',
    //                 'ship_city' => '',
    //                 'ship_state' => '',
    //                 'ship_postcode' => '',
    //                 'ship_phone' => $request->mobile,
    //                 'ship_country' => 'Bangladesh',

    //                 'shipping_method' => 'NO',
    //                 'product_name' => array_map(fn($item) => $item['title'], $request->items),
    //                 'product_category' => array_map(fn($item) => $item['title'], $request->items),
    //                 'product_profile' => 'general',
    //             ];
    //             try {
    //                 $response = $sslcmz->initilizePatment($body);
    //                 $result = json_decode($response);

    //                 return Inertia::location($result->data);
    //             } catch (\Exception $exception) {
    //                 dd($exception->getMessage());
    //                 throw new Exception($exception->getMessage());
    //             }
    //         case 'flutterwave':
    //             try {
    //                 $flutterwave = new FlutterWave;
    //                 $data = [
    //                     'amount' => $total,
    //                     'currency' => $currency_code,
    //                     'customer' => [
    //                         'name' => $request->name,
    //                         'email' => $request->email,
    //                         'phonenumber' => $request->mobile,
    //                     ],
    //                     'tx_ref' => $order->order_number,
    //                     'redirect_url' => route('payment.success', ['method' => 'flutterwave', 'identifier' => $order->id, 'type' => 'product']),
    //                 ];
    //                 $response = $flutterwave->initializePayment($data);

    //                 return Inertia::location($response['data']['link']);
    //             } catch (\Exception $exception) {
    //             }

    //         case 'razorpay':
    //             $razorpay = new Razorpay;
    //             $data = ['receipt' => 'R-' . rand(000000, 999999), 'amount' => (int) $total * 100, 'currency' => $currency_code];
    //             $order_id = $razorpay->initilizePatment($data);
    //             $url = route('payment.razorpay.pay', ['order_id' => $order_id, 'payment_id' => $order->id, 'type' => 'product']);

    //             return Inertia::location($url);
    //     }
    // }
}
