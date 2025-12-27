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

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $appends = ['banner_image_url', 'gifts', 'total_orders', 'total_order_amount'];

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

    /**
     * Get Cause contents
     */
    public function contents(): HasMany
    {
        return $this->hasMany(CauseContent::class);
    }

    /**
     * Get Cause content
     */
    public function content(): mixed
    {
        return $this->hasOne(CauseContent::class)->where('language_code', app()->getLocale());
    }

    /**
     * Get Cause category
     */
    public function category(): HasOne
    {
        return $this->hasOne(CauseCategory::class, 'id', 'category_id');
    }

    public function getGiftsAttribute()
    {
        return $this->gift_ids ? Gift::with('content')->whereIn('id', $this->gift_ids)->where('status', 1)->get() : collect();
    }

    /**
     * Get user
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get meta image url
     */
    public function getBannerImageUrlAttribute(): string
    {
        return asset($this->banner_image);
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class, 'cause_id', 'id');
    }

    /**
     * Get the total number of successful orders for this cause.
     */
    public function getTotalOrdersAttribute(): int
    {
        return $this->orders->where('payment_status', 2)->count();
    }

    /**
     * Get the total amount of successful orders for this cause.
     */
    public function getTotalOrderAmountAttribute(): float
    {
        return (float) $this->orders->where('payment_status', 2)->sum('total_price');
    }

    protected $casts = [
        'gift_ids' => 'array',
        'have_gift' => 'integer',
        'have_product' => 'integer',
        'is_special' => 'integer',
        'status' => 'integer',
        'gallery_images' => 'array',
    ];
}
