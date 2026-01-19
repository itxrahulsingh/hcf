<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [
        'invoice_number', 'customer_name', 'customer_email', 'customer_phone',
        'shipping_address', 'pancard', 'financial_year', 'total_price',
        'remarks', 'payment_method', 'payment_date', 'status', 'order_id'
    ];

    protected $appends = ['realized_amount'];

    public function getRealizedAmountAttribute()
    {
        return $this->total_price;
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
