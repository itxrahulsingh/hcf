<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $guarded = [];

    protected $appends = ['type_name'];

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

    public function getTypeNameAttribute()
    {
        switch ($this->item_type) {
            case 'App\Models\Product':
                return 'Product';
            case 'App\Models\Gift':
                return 'Gift';
            case 'App\Models\Cause':
                return 'Cause';
            default:
                return 'Unknown';
        }
    }
}
