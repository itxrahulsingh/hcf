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
    public $retryUrl;

    public function __construct(Order $order)
    {
        $this->order = $order;
        $this->retryUrl = route('cause.show', $this->order->cause->slug);
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

        return (new MailMessage)
            ->subject("Action Required: Donation Payment Failed")
            ->greeting("Hello {$donorName},")
            ->line("We noticed an attempt to donate {$amount} for '{$causeName}' was not successful.")
            ->line("This often happens due to bank timeouts or network issues. No amount has been deducted.")
            ->action('Try Donation Again', $this->retryUrl)
            ->line('We appreciate your intent to support us. Please try again or contact support if the issue persists.');
    }

    public function toWhatsApp($notifiable)
    {
        $rawPhone = $this->order->customer_phone;

        $numericPhone = preg_replace('/[^0-9]/', '', $rawPhone);
        if (strlen($numericPhone) < 10) {
            return null;
        }

        $cleanNumber = substr($numericPhone, -10);
        $finalPhone = '91' . $cleanNumber;

        $name   = $this->order->customer_name;
        $amount = (string) $this->order->total_price;

        return [
            'url'     => "https://api.gupshup.io/wa/api/v1/template/msg",
            'method'  => 'POST',
            'json'    => false,
            'headers' => [
                'apikey'       => 'd2lvcsfemrjtnso7dj7hggaytaayiplb',
                'Content-Type' => 'application/x-www-form-urlencoded'
            ],
            'body'    => [
                "channel"     => "whatsapp",
                "source"      => "919625886997",
                "destination" => $finalPhone,
                "src.name"    => "vNI9BU2rWoMqGqFOCvBdUEdS",
                "template"    => json_encode([
                    "id"     => "6b4f5e2a-a816-461c-a762-7b34afe1508a",
                    "params" => [$name, $amount, $this->retryUrl]
                ])
            ]
        ];
    }
}
