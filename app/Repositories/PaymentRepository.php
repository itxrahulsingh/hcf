<?php

namespace App\Repositories;

use App\Events\DonationFailed;
use App\Events\DonationSuccess;
use App\Models\Invoice;
use App\Models\Order;
use App\Models\PaymentHistory;
use App\Services\PaymentGateway\FlutterWave;
use App\Services\PaymentGateway\Paypal;
use App\Services\PaymentGateway\Razorpay;
use App\Services\PaymentGateway\SSLCommerz;
use App\Services\PaymentGateway\Stripe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class PaymentRepository
{
    public function PaymentSuccess($method, Request $request)
    {
        $paymentType = $this->resolvePaymentType($request->input('type'), $request->identifier);
        switch ($method) {
            case 'paypal':
                $paypal = new Paypal;
                $response = $paypal->verifyPayment($request->token);
                if ($response->status === 'COMPLETED') {
                    return $this->updateSuccessPaymentData($paymentType, $request->identifier, $response->toArray());
                } else {
                    throw new \Exception('Payment Failed');
                }
            case 'stripe':
                $stripe = new Stripe;
                $paymentId = $request->session_id ?: $this->resolveStoredStripeSessionId($paymentType, $request->identifier);
                $response = $stripe->verifyPayment($paymentId);
                if ($response->payment_status === 'paid') {
                    return $this->updateSuccessPaymentData($paymentType, $request->identifier, $response->toArray());
                } else {
                    throw new \Exception('Payment Failed');
                }

            case 'sslcmz':
                $sslcmz = new SSLCommerz(null);
                $res = $sslcmz->verifyPayment($request->all());
                if ($res) {
                    return $this->updateSuccessPaymentData($paymentType, $request->identifier, $res->toArray());
                }

            case 'flutterwave':
                if ($request->status == 'cancelled') {
                    return redirect()->route('payment.cancel', ['method' => 'flutterwave', 'identifier' => $request->identifier, 'type' => $paymentType]);
                } else {
                    $flutterwave = new FlutterWave;
                    $response = $flutterwave->verifyPayment($request->transaction_id);
                    if ($response['status'] == 'success') {
                        return $this->updateSuccessPaymentData($paymentType, $request->identifier, $response);
                    }
                }

            case 'razorpay':
                $razorpay = new Razorpay;
                $data = [
                    'razorpay_order_id' => $request->razorpay_order_id,
                    'razorpay_payment_id' => $request->razorpay_payment_id,
                    'razorpay_signature' => $request->razorpay_signature,
                ];
                $razorpay->verifyPayment($data);

                return $this->updateSuccessPaymentData($paymentType ?? 'donation', $request->identifier, $data);
        }
    }

    public function PaymentCancel($method, Request $request)
    {
        $paymentType = $this->resolvePaymentType($request->input('type'), $request->identifier);
        switch ($method) {
            case 'stripe':
            case 'paypal':
            case 'sslcmz':
            case 'flutterwave':
            case 'razorpay':
                if ($paymentType === 'product') {
                    $order = Order::find($request->identifier);
                    if ($order) {
                        $order->payment_status = '3';
                        $order->save();
                    }

                    return redirect()->route('payment.cancel.page');
                }

                if ($paymentType === 'donation') {
                    $order = Order::find($request->identifier);
                    if ($order) {
                        $order->payment_status = '3';
                        $order->save();
                        DonationFailed::dispatch($order);
                    }

                    return redirect()->route('donation.cancel.page', ['order_id' => $order?->order_number]);
                }
                $paymentHistory = PaymentHistory::findOrFail($request->identifier);
                $paymentHistory->update([
                    'status' => 'failed',
                ]);

                return redirect()->route('pricing.plan', $paymentHistory->plan_id)->with('payment_status', 'failed');
        }
    }

    private function updateSuccessPaymentData($type, $identifier, $data = null)
    {
        if ($type == 'product') {
            $order = Order::find($identifier);
            $order->update([
                'payment_status' => '2',
                'transaction_id' => $this->resolveTransactionId($data),
                'rzp_order_id' => $data['razorpay_order_id'] ?? null,
                'payment_data' => $data,
            ]);

            return redirect()->route('payment.success.page', $order);
        } else if ($type == 'donation') {
            $order = Order::find($identifier);
            if (!$order) {
                return;
            }
            $updateData = [
                'payment_status' => '2',
                'transaction_id' => $this->resolveTransactionId($data),
                'rzp_order_id' => $data['razorpay_order_id'] ?? null,
                'payment_data' => $data,
            ];
            if ($order->type === 'normal') {
                $updateData['status'] = 'completed';
            }
            $order->update($updateData);
            $this->ensureDonationInvoice($order);

            return redirect()->route('donation.success.page', ['order_id' => $order->order_number]);
        } else {
            $paymentHistory = PaymentHistory::find($identifier);
            $paymentHistory->update([
                'status' => 'success',
            ]);

            return redirect()->route('pricing.plan', $paymentHistory->plan_id)->with('payment_status', 'success');
        }
    }

    private function resolveStoredStripeSessionId(?string $type, $identifier): ?string
    {
        if ($type === 'pricing_plan') {
            return PaymentHistory::find($identifier)?->payment_identifier ?: Session::get('paymentId');
        }

        $order = Order::find($identifier);
        return data_get($order?->payment_data, 'stripe_session_id') ?: Session::get('paymentId');
    }

    private function resolveTransactionId(array $data): ?string
    {
        return $data['razorpay_payment_id']
            ?? $data['id']
            ?? $data['transaction_id']
            ?? data_get($data, 'data.id');
    }

    private function resolvePaymentType(?string $type, $identifier): string
    {
        if ($type) {
            return $type;
        }

        $order = Order::find($identifier);
        if ($order) {
            return $order->cause_id ? 'donation' : 'product';
        }

        return 'pricing_plan';
    }

    private function ensureDonationInvoice(Order $order): Invoice
    {
        if ($order->relationLoaded('invoice') && $order->invoice) {
            return $order->invoice;
        }

        if ($order->invoice()->exists()) {
            return $order->invoice()->first();
        }

        $invoice = DB::transaction(function () use ($order) {
            $invData = generate_invoice_number();

            return Invoice::create([
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
        });

        DonationSuccess::dispatch($invoice);

        return $invoice;
    }
}
