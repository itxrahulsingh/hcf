<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    protected $guarded = [];
    protected $appends = ['receipt_file_url'];

    /**
     * Get order items
     */
    public function orderitems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    protected static function booted()
    {
        static::deleting(function ($order) {
            $order->orderitems()->delete();
        });
    }

    /**
     * Accessor: Return full URL of receipt
     */
    public function getReceiptFileUrlAttribute(): string
    {
        return $this->receipt_file ? asset($this->receipt_file) : '';
    }
}
