<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cause extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    // Added 'products' to appends
    protected $appends = ['banner_image_url', 'gifts', 'products', 'total_orders', 'total_order_amount'];

    protected $casts = [
        'have_gift' => 'integer',
        'have_product' => 'integer',
        'is_special' => 'integer',
        'status' => 'boolean',
    ];

    public static $causeTypes = [
        'normal' => 'Normal',
        'valentine_day' => 'Valentine Day',
        'birthday' => 'Birthday',
        'anniversary' => 'Anniversary',
        'in_memory' => 'Death Anniversary / Remebrance Day',
        'sadhu_seva' => 'Vrindavan Sadhu Seva',
        'tiffin_seva' => 'Tiffin Seva',
        'gau_seva' => 'Cow Seva / Gau Seva on Sharadh',
        'pitru_paksha' => 'Pitru Paksha',
        'homeless_needy' => 'Homeless Needy'
    ];

    public function contents(): HasMany
    {
        return $this->hasMany(CauseContent::class);
    }

    public function content(): mixed
    {
        return $this->hasOne(CauseContent::class)->where('language_code', app()->getLocale());
    }

    public function category(): HasOne
    {
        return $this->hasOne(CauseCategory::class, 'id', 'category_id');
    }

    public function getGiftsAttribute()
    {
        $ids = $this->gift_ids;

        if (is_string($ids)) {
            $ids = json_decode($ids, true);
        }

        if (empty($ids) || !is_array($ids)) {
            return collect();
        }

        return Gift::with('content')->whereIn('id', $ids)->where('status', 1)->get();
    }

    public function getProductsAttribute()
    {
        if (!isset($this->attributes['product_ids'])) {
            return collect();
        }

        $ids = $this->attributes['product_ids'];

        if (is_string($ids)) {
            $ids = json_decode($ids, true);
        }

        if (empty($ids) || !is_array($ids)) {
            return collect();
        }

        return Product::with('content')->whereIn('id', $ids)->where('status', 1)->get();
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getBannerImageUrlAttribute(): string
    {
        return $this->banner_image ? asset($this->banner_image) : '';
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class, 'cause_id', 'id');
    }

    public function getTotalOrdersAttribute(): int
    {
        return $this->orders->where('payment_status', 2)->count();
    }

    public function getTotalOrderAmountAttribute(): float
    {
        return (float) $this->orders->where('payment_status', 2)->sum('total_price');
    }
}
