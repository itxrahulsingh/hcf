<?php

namespace App\Events;

use App\Models\Order;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class DonationSuccess
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $order;
    public $transactionId;

    /**
     * Create a new event instance.
     *
     * @param Order $order
     * @param string|null $transactionId
     */
    public function __construct(Order $order, $transactionId = null)
    {
        $this->order = $order;
        $this->transactionId = $transactionId;
    }
}
