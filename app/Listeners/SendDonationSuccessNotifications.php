<?php

namespace App\Listeners;

use App\Events\DonationSuccess;
use App\Notifications\DonationReceivedNotification;
use App\Channels\WhatsAppChannel;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

class SendDonationSuccessNotifications implements ShouldQueue
{
    use InteractsWithQueue;

    public function handle(DonationSuccess $event)
    {
        $invoice = $event->invoice;

        Notification::route('mail', $invoice->customer_email)
            ->route(WhatsAppChannel::class, $invoice->customer_phone)
            ->notify(new DonationReceivedNotification($invoice));
    }
}
