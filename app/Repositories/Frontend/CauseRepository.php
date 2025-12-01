<?php

namespace App\Repositories\Frontend;

use App\Models\Cause;

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
        $cause = $this->model->with(['content', 'category.content', 'user'])->where('slug', $slug)->first();
        $cause->gifts = $cause->gifts();
        if (! $cause) {
            abort(404);
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
        return $this->model->where('status', '1')->with('content', 'user', 'category.content')->take(10)->inRandomOrder()->latest()->get();
    }
}
