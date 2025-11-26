<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $guarded = [];

    /**
     * Polymorphic relation to Product, Gift, or Cause
     */
    public function item()
    {
        return $this->morphTo();
    }

    /**
     * Belongs to order
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
