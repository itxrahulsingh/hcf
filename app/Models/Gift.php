<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Gift extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get contents
     */
    public function contents(): HasMany
    {
        return $this->hasMany(GiftContent::class);
    }

    /**
     * Get Gift Content
     */
    public function content(): HasOne
    {
        return $this->hasOne(GiftContent::class)->where('language_code', app()->getLocale());
    }
}
