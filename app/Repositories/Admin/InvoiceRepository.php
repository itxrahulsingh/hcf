<?php

namespace App\Repositories\Admin;

use App\Models\CategoryContent;
use App\Models\Invoice;
use App\Models\Setting;
use App\Models\User;
use App\Repositories\Traits\ModelRepositoryTraits;
use Illuminate\Pagination\LengthAwarePaginator;

class InvoiceRepository
{
    use ModelRepositoryTraits;

    /**
     * Object model will be used to modify posts table
     */
    protected Invoice $model;

    /**
     * Constructor for Post repository
     */
    public function __construct(Invoice $invoice)
    {
        $this->model = $invoice;
    }

    /**
     * Get search result with paginate
     */
    public function paginateSearchResult($search, array $sort = [], array $filter = []): LengthAwarePaginator
    {
        $query = $this->model->with(['category.content', 'user'])->newQuery();

        // search invoice
        if ($search) {
            $query->whereHas('contents', function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('title', 'like', "%{$search}%");
            })->orWhereHas('category.contents', function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%");
            });
        }

        // Filter post by category title
        // if (isset($filter['category']) && $filter['category'] !== 'All Categories') {
        //     $query->whereHas('category.content', function ($categoryQuery) use ($filter) {
        //         $categoryQuery->where('title', $filter['category']);
        //     });
        // }

        // Filter post by status
        if (isset($filter['status']) && $filter['status'] !== 'All Status') {
            $statusNo = $filter['status'] == 'Published' ? '1' : '0';
            $query->where('status', $statusNo);
        }

        // sort invoice
        if (isset($sort['column']) && isset($sort['order'])) {
            $column = $sort['column'];
            $order = $sort['order'];

            if ($column === 'title') {
                $query->orderBy(PostContent::select($sort['column'])
                    ->whereColumn('posts.id', 'post_contents.post_id')
                    ->where('language_code', app()->getLocale()), $sort['order']);
            } elseif ($column === 'published_by') {
                $query->orderBy(
                    User::select('name')
                        ->whereColumn('users.id', 'posts.user_id'),
                    $order
                );
            } elseif ($column === 'category' || $column === 'category_title') {
                $query->orderBy(
                    CategoryContent::select('title')
                        ->whereColumn('category_contents.category_id', 'posts.category_id')
                        ->where('language_code', app()->getLocale()),
                    $order
                );
            } else {
                $query->orderBy($column, $order);
            }
        }

        return $query->paginate(30)
            ->appends(array_filter([
                'search' => $search,
                'sort' => $sort,
                'lang' => app()->getLocale(),
            ]));
    }

    /**
     * Delete post
     */
    public function destroy(Invoice $invoice): void
    {
        $invoice->delete();
    }

    /**
     * Bulk delete posts
     */
    public function bulkDelete($ids): void
    {
        $idArray = explode(',', $ids);
        $this->model->destroy($idArray);
    }
}
