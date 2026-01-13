<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Razorpay\Api\Api;
use App\Models\Order;
use App\Models\Setting;
use App\Models\Invoice;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use App\Events\DonationSuccess;

class CheckPendingDonation extends Command
{
    protected $signature = 'donations:check-pending';
    protected $description = 'Check pending Orders with Razorpay, verify status, and update records';

    public function handle()
    {
        Log::info("Payment cron running at: " . date('d-m-Y h:i'));

        try {
            $keyId = Setting::pull('razorpay_key_id');
            $keySecret = Setting::pull('razorpay_key_secret');

            if (!$keyId || !$keySecret) {
                $this->error("Razorpay keys not found in settings.");
                return 1;
            }

            $api = new Api($keyId, $keySecret);

            $startDate = Carbon::yesterday()->startOfDay();
            $endDate = Carbon::now()->endOfDay();

            $pendingOrders = Order::whereIn('payment_status', ['0', '1'])
                ->whereNotNull('rzp_order_id')
                ->whereBetween('created_at', [$startDate, $endDate])
                ->get();

            if ($pendingOrders->isEmpty()) {
                $this->info('No pending orders found for the checked period.');
                return 0;
            }

            $this->info("Processing {$pendingOrders->count()} pending orders.");

            foreach ($pendingOrders as $order) {
                $razorpayOrderId = $order->rzp_order_id;

                try {
                    $this->processOrder($api, $order, $razorpayOrderId);
                } catch (\Exception $e) {
                    $this->handleException($e, $api, $order, $razorpayOrderId);
                }
                // Rate limiting protection
                sleep(1);
            }

            return 0;
        } catch (\Exception $e) {
            $this->error("Critical Error: {$e->getMessage()}");
            Log::error("Payment Cron Error: " . $e->getMessage());
            return 1;
        }
    }

    private function processOrder(Api $api, Order $order, string $razorpayOrderId)
    {
        $razorpayOrder = $api->order->fetch($razorpayOrderId);
        $payments = $razorpayOrder->payments();

        if (empty($payments->items)) {
            $this->info("Order {$order->order_number}: No payment attempts found.");
            return;
        }

        $payment = $api->payment->fetch($payments->items[0]->id);

        $this->info("Checking Order {$order->order_number} - Payment Status: {$payment->status}");

        switch ($payment->status) {
            case 'captured':
                $this->markAsSuccess($order, $payment->id);
                break;

            case 'authorized':
                try {
                    $capture = $payment->capture(['amount' => $payment->amount, 'currency' => 'INR']);
                    if ($capture->status === 'captured') {
                        $this->markAsSuccess($order, $payment->id);
                    }
                } catch (\Exception $e) {
                    $this->error("Order {$order->order_number}: Capture failed.");
                }
                break;

            case 'failed':
                $this->markAsFailed($order);
                break;
        }
    }

    private function markAsSuccess(Order $order, $transactionId)
    {
        $updateData = [
            'payment_status' => '2',
            'transaction_id' => $transactionId,
            'payment_data'   => ['cron_verified' => true, 'rzp_status' => 'captured']
        ];

        if ($order->type === 'normal') {
            $updateData['status'] = 'completed';
        }

        $order->update($updateData);

        if (function_exists('generate_invoice_number')) {

            // Check if invoice already exists to avoid duplicates
            $invoiceExists = Invoice::where('order_id', $order->id)->exists();

            if (!$invoiceExists) {
                $invData = generate_invoice_number();

                Invoice::create([
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

                $this->info("Invoice generated for Order {$order->order_number}");
            } else {
                $this->info("Invoice already exists for Order {$order->order_number}, skipping generation.");
            }
        }

        // Fire Event
        event(new DonationSuccess($order, $transactionId));

        $this->info("Order {$order->order_number}: Marked as Success.");
    }

    private function markAsFailed(Order $order)
    {
        $order->update([
            'payment_status' => '3', // Failed
        ]);
        $this->warn("Order {$order->order_number}: Marked as Failed.");
    }

    private function handleException($e, $api, $order, $orderId)
    {
        if (strpos($e->getMessage(), '429') !== false) {
            sleep(10);
            try {
                $this->processOrder($api, $order, $orderId);
            } catch (\Exception $retryE) {
                $this->error("Retry failed for {$order->order_number}");
            }
        } else {
            $this->error("Error processing {$order->order_number}: {$e->getMessage()}");
        }
    }
}
