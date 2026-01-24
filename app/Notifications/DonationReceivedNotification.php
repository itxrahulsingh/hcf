<?php

namespace App\Notifications;

use App\Channels\WhatsAppChannel;
use App\Models\Invoice;
use App\Repositories\Admin\OrderRepository;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use PDF;

class DonationReceivedNotification extends Notification
{
    use Queueable;

    public $invoice;
    public $settings;


    public function __construct(Invoice $invoice, array $settings)
    {
        $this->invoice = $invoice;
        $this->settings = $settings;
    }

    public function via($notifiable)
    {
        return ['mail', WhatsAppChannel::class];
    }

    public function toMail($notifiable)
    {
        $receiptNo = $this->invoice->invoice_number;
        $donorName = $this->invoice->customer_name;
        $amount    = $this->invoice->total_price;

        $causeName = $this->invoice->order->cause->content->title ?? 'General Donation';
        $repository = app(OrderRepository::class);

        $pdfData = array_merge($this->settings, [
            'font_family'     => $repository->getInvoiceFrontName(),
            'direction'       => $repository->getInvoiceDirection(),
            'text_align'      => $repository->getInvoiceDirection() == 'ltr' ? 'left' : 'right',
            'order'           => $this->invoice->order
        ]);

        $pdf = PDF::loadView('invoice', $pdfData);

        return (new MailMessage)
            ->subject("Donation Receipt #{$receiptNo}")
            ->greeting("Hello {$donorName},")
            ->line("Thank you for your generous donation of {$amount} towards '{$causeName}'.")
            ->line("Please find your official donation receipt attached to this email.")
            ->line("Receipt No: {$receiptNo}")
            ->attachData($pdf->output(), "Receipt-{$receiptNo}.pdf", [
                'mime' => 'application/pdf',
            ])
            ->line('Your support makes a huge difference!');
    }

    public function toWhatsApp($notifiable)
    {
        return [
            'phone' => $notifiable,
            'template' => [
                'name' => 'donation_success_v1',
                'language' => ['code' => 'en'],
                'components' => [
                    [
                        'type' => 'body',
                        'parameters' => [
                            ['type' => 'text', 'text' => $this->invoice->customer_name],
                            ['type' => 'text', 'text' => (string) $this->invoice->total_price],
                            ['type' => 'text', 'text' => $this->invoice->invoice_number],
                        ]
                    ]
                ]
            ]
        ];
    }
}
