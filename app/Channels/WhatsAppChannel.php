<?php

namespace App\Channels;

use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WhatsAppChannel
{
    public function send($notifiable, Notification $notification)
    {
        if (!method_exists($notification, 'toWhatsApp')) {
            return;
        }

        $data = $notification->toWhatsApp($notifiable);

        try {
            // Replace with your actual API endpoint and Token logic
            $response = Http::withToken(config('services.whatsapp.token'))
                ->post('YOUR_WHATSAPP_PROVIDER_URL/api/send/template', $data);

            if ($response->failed()) {
                Log::error('WhatsApp API Failed: ' . $response->body());
            }
        } catch (\Exception $e) {
            Log::error('WhatsApp Channel Exception: ' . $e->getMessage());
        }
    }
}
