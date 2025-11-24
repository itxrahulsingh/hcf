<?php

namespace App\Repositories\Admin;

use App\Models\Gift;
use App\Models\GiftContent;
use App\Models\Setting;
use App\Repositories\Traits\ModelRepositoryTraits;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class GiftRepository
{
    use ModelRepositoryTraits;

    /**
     * Object model will be used to modify gifts table
     */
    protected Gift $model;

    /**
     *  Constructor for gift repository
     */
    public function __construct(Gift $gift)
    {
        $this->model = $gift;
    }

    /**
     * Get search result with paginate
     */
    public function paginateSearchResult($search, array $sort = []): LengthAwarePaginator
    {
        $query = $this->model->with('content')->newQuery();

        // search gift
        if (isset($search)) {
            $query->whereHas('contents', function ($q) use ($search) {
                $q->where('language_code', app()->getLocale())
                    ->where('title', 'like', '%' . $search . '%');
            });
        }

        // Sort data
        if (isset($sort['column'])) {
            if ($sort['column'] == 'title') {
                $query->orderBy(GiftContent::select($sort['column'])
                    ->whereColumn('gifts.id', 'gift_contents.gift_id')
                    ->where('language_code', app()->getLocale()), $sort['order']);
            } else {
                $query->orderBy($sort['column'], $sort['order']);
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
     * Create gift
     */
    public function create(Request $request): void
    {
        $gift = $this->model->create([
            'gift_image' => $request->input('gift_image'),
            'amount'=> $request->input('amount'),
            'min_qty'=> $request->input('min_qty'),
        ]);

        $languages = json_decode(Setting::pull('languages'), true);
        $content = array_map(function ($language) use ($request) {
            $languageCode = $language['code'];

            return [
                'language_code' => $languageCode,
                'title' => $request->input($languageCode . '_title'),
                'description' => $request->input($languageCode . '_description', ''),
            ];
        }, $languages);
        $gift->contents()->createMany($content);
    }

    /**
     * Get edited data
     */
    public function getEditData(Gift $gift): array
    {
        $data = [
            'id' => $gift->id,
            'gift_image' => $gift->gift_image,
            'amount' => $gift->amount,
            'min_qty' => $gift->min_qty,
        ];
        $contents = $gift->contents;
        $languages = json_decode(Setting::pull('languages'), true);

        foreach ($languages as $language) {
            $langCode = $language['code'];
            $data[$langCode . '_title'] = '';
            $data[$langCode . '_description'] = '';
        }

        foreach ($contents as $content) {
            $langCode = $content->language_code;
            if (array_key_exists($langCode . '_title', $data)) {
                $data[$langCode . '_title'] = $content->title;
                $data[$langCode . '_description'] = $content->description;
            }
        }

        return $data;
    }

    /**
     * gift update
     *
     * @throws \Exception
     */
    public function update(Request $request, Gift $gift): void
    {
        $gift->update([
            'gift_image' => $request->input('gift_image'),
            'amount'=> $request->input('amount'),
            'min_qty'=> $request->input('min_qty'),
        ]);

        $languages = json_decode(Setting::pull('languages'), true);

        foreach ($languages as $language) {
            $languageCode = $language['code'];
            $title = $request->input($languageCode . '_title', '');
            $description = $request->input($languageCode . '_description', '');

            $gift->contents()->updateOrCreate(
                ['language_code' => $languageCode],
                ['title' => $title],
                ['description' => $description]
            );
        }
    }

    /**
     * Delete gift
     *
     * @throws \Exception
     */
    public function destroy(Gift $gift): void
    {
        $gift->contents()->delete();
        $gift->delete();
    }

    /**
     * Bulk gift delete
     */
    public function bulkDelete($ids): void
    {
        $idArray = explode(',', $ids);
        GiftContent::whereIn('gift_id', $idArray)->delete();
        $this->model->destroy($idArray);
    }
}
