<?php

namespace App\Repositories\Frontend;

use App\Models\Cause;
use App\Models\Setting;

class CauseRepository
{
    protected Cause $model;

    public function __construct(Cause $cause)
    {
        $this->model = $cause;
    }

    public function paginateSearchResult($search, array $filter = [])
    {
        $query = $this->model->with(['content', 'category.content', 'user',])->newQuery();

        if (! empty($search)) {
            $query->whereHas('contents', function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('title', 'like', "%{$search}%");
            })->orWhereHas('category.contents', function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%");
            });
        }

        if (! empty($filter['category'])) {
            $query->whereHas('category.content', function ($q) use ($filter) {
                $q->where('title', $filter['category']);
            });
        }

        return $query->where('status', '1')->paginate(6);
    }

    /**
     * Show blog cause
     */
    public function show($slug): mixed
    {
        $cause = $this->model->with(['content', 'contents', 'category.content', 'user'])->where('slug', $slug)->first();
        if (! $cause) {
            abort(404);
        }

        // Permanent safety: if current language content is missing,
        // fallback to default language so FAQ/updates/content never disappear.
        if (!$cause->content) {
            $defaultLang = Setting::pull('default_lang') ?: 'en';
            $fallbackContent = $cause->contents->firstWhere('language_code', $defaultLang);
            if (!$fallbackContent) {
                $fallbackContent = $cause->contents->first();
            }
            if ($fallbackContent) {
                $cause->setRelation('content', $fallbackContent);
            }
        }

        return $cause;
    }

    /**
     * Get published blog
     *
     * @return mixed
     */
    public function getPublishedCauses()
    {
        return $this->model->where('status', '1')->with('content', 'user', 'category.content')->take(10)->latest()->get();
    }
}
