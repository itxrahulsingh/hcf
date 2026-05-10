<?php

namespace App\Repositories\Admin;

use App\Http\Requests\Admin\Causes\Categories\CauseCategoryStoreRequest;
use App\Http\Requests\Admin\Causes\Categories\CauseCategoryUpdateRequest;
use App\Models\Cause;
use App\Models\CauseCategory;
use App\Models\CauseCategoryContent;
use App\Models\Setting;
use App\Repositories\Traits\ModelRepositoryTraits;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class CauseCategoryRepository
{
    use ModelRepositoryTraits;

    /**
     * Object model will be used to modify categories table
     */
    protected CauseCategory $model;

    /**
     *  Constructor for Category repository
     */
    public function __construct(CauseCategory $category)
    {
        $this->model = $category;
    }

    /**
     * Get search result with paginate
     */
    public function paginateSearchResult($search, array $sort = []): LengthAwarePaginator
    {
        $query = $this->model->with('content')->newQuery();

        // search category
        if (isset($search)) {
            $query->whereHas('contents', function ($q) use ($search) {
                $q->where('language_code', app()->getLocale())
                    ->where('title', 'like', '%' . $search . '%');
            });
        }

        // sort category
        if (isset($sort['column'])) {
            $query->orderBy($sort['column'], $sort['order']);
        }

        return $query->paginate(30)
            ->appends(array_filter([
                'search' => $search,
                'sort' => $sort,
                'lang' => app()->getLocale(),
            ]));
    }

    /**
     * Store category
     */
    public function store(CauseCategoryStoreRequest $request): void
    {
        $category = $this->model->create($request->all());

        $languages = json_decode(Setting::pull('languages'), true);
        $content = array_map(function ($language) use ($request) {
            $langCode = $language['code'];

            return [
                'language_code' => $langCode,
                'title' => $request[$langCode . '_title'],
                'description' => $request[$langCode . '_description'],
            ];
        }, $languages);

        $category->contents()->createMany($content);
    }

    /**
     * Get edited data
     */
    public function getEditData(CauseCategory $causeCategory): array
    {
        $languages = json_decode(Setting::pull('languages'), true);

        $causeCategory->load('contents');

        $data = [
            'id' => $causeCategory->id,
            'thumbnail_image' => $causeCategory->thumbnail_image,
            'meta_title' => $causeCategory->meta_title,
            'meta_description' => $causeCategory->meta_description,
            'meta_tags' => $causeCategory->meta_tags,
            'created_at' => $causeCategory->created_at,
        ];

        foreach ($languages as $language) {
            $lang = $language['code'];
            $data[$lang . '_title'] = '';
            $data[$lang . '_description'] = '';
        }

        foreach ($causeCategory->contents as $content) {
            $lang = $content->language_code;
            $data[$lang . '_title'] = $content->title;
            $data[$lang . '_description'] = $content->description;
        }

        return $data;
    }


    /**
     * Update category
     */
    public function update(CauseCategory $causeCategory, CauseCategoryUpdateRequest $request): void
    {
        $causeCategory->update([
            'thumbnail_image' => $request->thumbnail_image,
            'meta_title' => $request->meta_title,
            'meta_description' => $request->meta_description,
            'meta_tags' => $request->meta_tags,
        ]);

        $languages = json_decode(Setting::pull('languages'), true);
        foreach ($languages as $language) {
            $langCode = $language['code'];

            $causeCategory->contents()->updateOrCreate(
                ['language_code' => $langCode],
                [
                    'title' => $request[$langCode . '_title'],
                ],
            );
        }
    }

    /**
     * Delete category
     *
     * @throws \Exception
     */
    public function destroy(CauseCategory $causeCategory): void
    {
        $causeCategory->contents()->delete();
        $causeCategory->delete();
    }

    /**
     * Bulk delete
     */
    public function bulkDelete($ids): void
    {
        $idArray = explode(',', $ids);
        CauseCategoryContent::whereIn('cause_category_id', $idArray)->delete();
        $this->model->destroy($idArray);
    }
}
