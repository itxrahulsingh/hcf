<?php

namespace App\Listeners;

use App\Events\DonationFailed;
use App\Notifications\DonationFailedNotification;
use App\Channels\WhatsAppChannel;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

class SendDonationFailedNotifications implements ShouldQueue
{
    use InteractsWithQueue;

    public $tries = 3;

    public function handle(DonationFailed $event)
    {
        $order = $event->order;
        $order->load('cause.content');

        Notification::route('mail', $order->customer_email)
            ->route(WhatsAppChannel::class, $order->customer_phone)
            ->notify(new DonationFailedNotification($order));
    }
}
