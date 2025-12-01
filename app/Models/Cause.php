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

    protected $appends = ['banner_image_url'];

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

    public function gifts()
    {
        return null;
        return $this->gift_ids ? Gift::whereIn('id', $this->gift_ids) : null;
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
}
