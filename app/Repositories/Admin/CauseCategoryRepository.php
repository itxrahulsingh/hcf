<?php

namespace App\Repositories\Admin;

use App\Http\Requests\Admin\CauseCategoryStoreRequest;
use App\Http\Requests\Admin\CauseCategoryUpdateRequest;
use App\Models\Cause;
use App\Models\CauseCategory;
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
        $testimonial = $this->model->create($request->all());

        $languages = json_decode(Setting::pull('languages'), true);
        $content = array_map(function ($language) use ($request) {
            $langCode = $language['code'];

            return [
                'language_code' => $langCode,
                'title' => $request[$langCode . '_title'],
            ];
        }, $languages);

        $testimonial->contents()->createMany($content);
    }

    /**
     * Get edited data
     */
    public function getEditData(CauseCategory $caseStudyCategory): array
    {
        $languages = json_decode(Setting::pull('languages'), true);
        $data = [
            'id' => $caseStudyCategory->id,
            'created_at' => $caseStudyCategory->created_at,
        ];

        foreach ($languages as $language) {
            $langCode = $language['code'];
            $data[$langCode . '_title'] = '';
        }

        foreach ($caseStudyCategory->contents as $content) {
            $langCode = $content->language_code;
            $data[$langCode . '_title'] = $content->title;
        }

        return $data;
    }

    /**
     * Update category
     */
    public function update(CauseCategory $caseStudyCategory, CauseCategoryUpdateRequest $request): void
    {
        $languages = json_decode(Setting::pull('languages'), true);
        foreach ($languages as $language) {
            $langCode = $language['code'];

            $caseStudyCategory->contents()->updateOrCreate(
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
    public function destroy(CauseCategory $caseStudyCategory): void
    {
        $caseStudyCategory->delete();
    }

    /**
     * Bulk delete
     */
    public function bulkDelete($ids): void
    {
        $idArray = explode(',', $ids);
        $this->model->destroy($idArray);
    }
}
