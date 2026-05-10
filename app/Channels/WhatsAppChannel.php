<?php

namespace App\Channels;

use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WhatsAppChannel
{
    /**
     * Send the given notification.
     *
     * @param  mixed  $notifiable
     * @param  \Illuminate\Notifications\Notification  $notification
     * @return void
     */
    public function send($notifiable, Notification $notification)
    {
        if (!method_exists($notification, 'toWhatsApp')) {
            return;
        }

        $config = $notification->toWhatsApp($notifiable);
        if (empty($config)) {
            return;
        }

        $url     = $config['url'] ?? null;
        $headers = $config['headers'] ?? [];
        $body    = $config['body'] ?? [];
        $method  = strtoupper($config['method'] ?? 'POST');
        $isJson  = $config['json'] ?? false;

        if (!$url) {
            Log::error('WhatsApp Channel Error: No URL provided in notification.');
            return;
        }

        try {
            $client = Http::withHeaders($headers);

            if ($method === 'POST') {
                $response = $isJson
                    ? $client->post($url, $body)
                    : $client->asForm()->post($url, $body);
            } elseif ($method === 'GET') {
                $response = $client->get($url, $body);
            }
            if ($response->failed()) {
                Log::error("WhatsApp API Failed ({$url}): " . $response->body());
            }
        } catch (\Exception $e) {
            Log::error('WhatsApp Channel Exception: ' . $e->getMessage());
        }
    }
}
