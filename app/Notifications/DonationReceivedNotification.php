<?php

namespace App\Notifications;

use App\Channels\WhatsAppChannel;
use App\Models\Invoice;
use App\Models\Setting;
use App\Repositories\Admin\OrderRepository;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use PDF;

class DonationReceivedNotification extends Notification
{
    use Queueable;

    public $invoice;

    public function __construct(Invoice $invoice)
    {
        $this->invoice = $invoice->load(['order.cause', 'order.orderitems', 'order.invoice']);
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

        $data = [
            'invoice_logo'    => Setting::pull('invoice_logo'),
            'footer_contact'  => Setting::pull('footer_contact'),
            'footer_address'  => Setting::pull('footer_address'),
            'currency_symbol' => Setting::pull('currency_symbol'),
            'font_family'     => $repository->getInvoiceFrontName(),
            'direction'       => $repository->getInvoiceDirection(),
            'order'           => $this->invoice->order
        ];

        $data['text_align'] = $data['direction'] == 'ltr' ? 'left' : 'right';
        $pdf = PDF::loadView('invoice', $data);

        return (new MailMessage)
            ->subject("Donation Receipt #{$receiptNo}")
            ->greeting("Hello {$donorName},")
            ->line("Thank you for your generous donation of {$amount} towards '{$causeName}'.")
            ->line("Please find your official donation receipt attached to this email.")
            ->line("Receipt No: {$receiptNo}")

            // Attach the PDF directly from memory
            ->attachData($pdf->output(), "Receipt-{$receiptNo}.pdf", [
                'mime' => 'application/pdf',
            ])

            ->line('Your support makes a huge difference!');
    }

    public function toWhatsApp($notifiable)
    {
        $receiptNo = $this->invoice->invoice_number;
        $donorName = $this->invoice->customer_name;
        $amount    = $this->invoice->total_price;

        return [
            'phone' => $notifiable,
            'template' => [
                'name' => 'donation_success_v1',
                'language' => ['code' => 'en'],
                'components' => [
                    [
                        'type' => 'body',
                        'parameters' => [
                            ['type' => 'text', 'text' => $donorName],
                            ['type' => 'text', 'text' => $amount],
                            ['type' => 'text', 'text' => $receiptNo],
                        ]
                    ]
                ]
            ]
        ];
    }
}
