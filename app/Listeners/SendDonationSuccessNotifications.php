<?php

namespace App\Listeners;

use App\Events\DonationSuccess;
use App\Notifications\DonationReceivedNotification;
use App\Channels\WhatsAppChannel;
use App\Models\Setting;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Cache;

class SendDonationSuccessNotifications implements ShouldQueue
{
    use InteractsWithQueue;

    public $timeout = 120;

    public function handle(DonationSuccess $event)
    {
        $invoice = $event->invoice;
        $invoice->load(['order.cause.content', 'order.orderitems']);

        $settings = Cache::remember('invoice_pdf_settings', 3600, function () {
            return [
                'invoice_logo'    => Setting::pull('invoice_logo'),
                'footer_contact'  => Setting::pull('footer_contact'),
                'footer_address'  => Setting::pull('footer_address'),
                'currency_symbol' => Setting::pull('currency_symbol'),
            ];
        });

        Notification::route('mail', $invoice->customer_email)
            ->route(WhatsAppChannel::class, $invoice->customer_phone)
            ->notify(new DonationReceivedNotification($invoice, $settings));
    }
}
