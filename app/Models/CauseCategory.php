<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CauseCategory extends Model
{

    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $appends = ['cause_count'];

    /**
     * Get caseStudies contents
     */
    public function contents(): HasMany
    {
        return $this->hasMany(CauseCategoryContent::class, 'cause_category_id', 'id');
    }

    /**
     * Get caseStudies content
     */
    public function content(): mixed
    {
        return $this->hasOne(CauseCategoryContent::class, 'cause_category_id', 'id')->where('language_code', app()->getLocale());
    }

    /**
     * Get All caseStudies
     */
    public function causes(): HasMany
    {
        return $this->hasMany(Cause::class, 'category_id', 'id');
    }

    /**
     * get caseStudies count
     */
    public function getCauseCountAttribute(): int
    {
        return $this->causes()->count();
    }
}
