<?php

namespace App\Notifications;

use App\Channels\WhatsAppChannel;
use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class DonationFailedNotification extends Notification
{
    use Queueable;

    public $order;

    public function __construct(Order $order)
    {
        $this->order = $order->load('cause');
    }

    public function via($notifiable)
    {
        return ['mail', WhatsAppChannel::class];
    }

    public function toMail($notifiable)
    {
        $donorName = $this->order->customer_name;
        $causeName = $this->order->cause->content->title ?? 'our cause';
        $amount    = $this->order->total_price;

        $retryUrl = url("/donate/retry/{$this->order->id}");

        return (new MailMessage)
            ->subject("Donation Alert: Payment Failed")
            ->greeting("Hello {$donorName},")
            ->line("We noticed an attempt to donate {$amount} for '{$causeName}' was not successful.")
            ->line("This often happens due to bank timeouts or network issues. No amount has been deducted.")
            ->action('Try Donation Again', $retryUrl)
            ->line('We appreciate your intent to support us. Please try again or contact support if the issue persists.');
    }

    public function toWhatsApp($notifiable)
    {
        $donorName = $this->order->customer_name;
        $causeName = $this->order->cause->content->title ?? 'Cause';
        $retryUrl  = url("/donate/retry/{$this->order->id}");

        return [
            'phone' => $notifiable,
            'template' => [
                'name' => 'donation_failed_v1',
                'language' => ['code' => 'en'],
                'components' => [
                    [
                        'type' => 'body',
                        'parameters' => [
                            ['type' => 'text', 'text' => $donorName],
                            ['type' => 'text', 'text' => $causeName],
                            ['type' => 'text', 'text' => $retryUrl],
                        ]
                    ]
                ]
            ]
        ];
    }
}
