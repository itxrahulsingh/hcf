<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [
        'invoice_number',
        'invoice_count',
        'order_id',

        'customer_name',
        'customer_email',
        'customer_phone',
        'shipping_address',
        'state',

        'is_80g',
        'pancard',

        'financial_year',
        'financial_year_start',
        'financial_year_end',

        'total_price',
        'payment_method',
        'payment_date',

        'status',
    ];

    protected $casts = [
        'is_80g' => 'boolean',
        'payment_date' => 'datetime',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
