<?php

namespace App\Repositories\Admin;

use App\Models\Cause;
use App\Models\CauseCategoryContent;
use App\Models\CauseContent;
use App\Models\Setting;
use App\Repositories\Traits\ModelRepositoryTraits;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class CauseRepository
{
    use ModelRepositoryTraits;

    /**
     * Object model will be used to modify cause table
     */
    protected Cause $model;

    /**
     * Constructor for cause repository
     */
    public function __construct(Cause $cause)
    {
        $this->model = $cause;
    }

    /**
     * Get search result with pagination
     */
    public function paginateSearchResult($search, array $sort = []): LengthAwarePaginator
    {
        $query = $this->model->with([
            'content',
            'category.content',
        ])->newQuery();

        // Apply search filters if necessary
        if ($search) {
            $query->whereHas('contents', function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%");
            })->orWhereHas('category.contents', function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%");
            });
        }

        if (isset($sort['column']) && isset($sort['order'])) {
            $column = $sort['column'];
            $order = $sort['order'];

            if ($column === 'title') {
                $query->orderBy(CauseContent::select($sort['column'])
                    ->whereColumn('causes.id', 'cause_contents.cause_id')
                    ->where('language_code', app()->getLocale()), $sort['order']);
            } elseif ($column === 'category' || $column === 'category_title') {
                $query->orderBy(
                    CauseCategoryContent::select('title')
                        ->whereColumn('cause_category_contents.category_id', 'causes.category_id')
                        ->where('language_code', app()->getLocale()),
                    $order
                );
            } else {
                $query->orderBy($column, $order);
            }
        }

        // Paginate the results
        return $query->paginate(30)
            ->appends(array_filter([
                'search' => $search,
                'sort' => $sort,
                'lang' => app()->getLocale(),
            ]));
    }

    /**
     * Create a new cause
     */
    public function create(Request $request): void
    {
        // Get languages from settings
        $languages = json_decode(Setting::pull('languages'), true);
        $defaultLang = Setting::pull('default_lang');
        $defaultTitle = '';
        $generatedSlug = Str::slug($request->input($defaultLang . '_title'));

        if (Cause::where('slug', $generatedSlug)->exists()) {
            $generatedSlug = $generatedSlug . '-' . Carbon::now()->timestamp;
        }

        // Create a new cause instance
        $cause = $this->model->create([
            'slug' => $generatedSlug,
            'category_id' => $request->input('category'),
            'user_id' => auth()->id(),
            'thumbnail_image' => $request->input('thumbnail_image'),
            'banner_image' => $request->input('banner_image'),
            'gallery_images' => json_encode($request->input('gallery_images')),
            'have_gift' => $request->input('have_gift'),
            'have_product' => $request->input('have_product'),
            'is_special' => $request->input('is_special'),
            'custom_donation_amounts' => $request->input('custom_donation_amounts'),
            'video_url' => $request->input('video_url'),
            'raised_amount' => $request->input('raised_amount'),
            'goal_amount' => $request->input('goal_amount'),
            'deadline' => $request->input('deadline'),
            'status' => $request->input('status'),
            'meta_image' => $request->input('meta_image'),
            'meta_title' => $request->input('meta_title'),
            'meta_tags' => $request->input('meta_tags'),
            'meta_description' => $request->input('meta_description'),
        ]);

        // Prepare content data
        $content = array_map(function ($language) use ($request, $defaultLang, &$defaultTitle) {
            $langCode = $language['code'];
            $title = $request[$langCode . '_title'];

            // Store the default language title for slug generation
            if ($langCode === $defaultLang) {
                $defaultTitle = $title;
            }

            return [
                'language_code' => $langCode,
                'title' => $title,
                'content' => $request[$langCode . '_content'],
                'projects' => $request[$langCode . '_projects'],
                'faq' => $request[$langCode . '_faq'],
                'updates' => $request[$langCode . '_updates'],
            ];
        }, $languages);

        // Create cause contents
        $cause->contents()->createMany($content);

        Cache::forget('max_cause_price');
    }

    /**
     * Get featured room
     */
    public function getEditedData(Cause $cause): array
    {
        $causeData = $cause->load('contents');
        $languages = json_decode(Setting::pull('languages'), true);

        $data = [
            'id' => $cause->id,
            'slug' => $cause->slug,
            'category' => $cause->category_id,
            'banner_image' => $cause->banner_image,
            'gallery_images' => is_string($cause->gallery_images) ? json_decode($cause->gallery_images) : $cause->gallery_images,
            'have_gift' => $cause->have_gift,
            'have_product' => $cause->have_product,
            'custom_donation_amounts' => $cause->custom_donation_amounts,
            'video_url' => $cause->video_url,
            'raised_amount' => $cause->raised_amount,
            'goal_amount' => $cause->goal_amount,
            'deadline' => $cause->deadline,
            'status' => $cause->status,
            'meta_image' => $cause->meta_image,
        ];

        foreach ($languages as $language) {
            $langCode = $language['code'];
            $data[$langCode . '_name'] = '';
            $data[$langCode . 'content'] = '';
            $data[$langCode . 'projects'] = '';
            $data[$langCode . 'faq'] = '';
            $data[$langCode . 'updates'] = '';
            $data[$langCode . 'meta_title'] = '';
            $data[$langCode . 'meta_tags'] = '';
            $data[$langCode . 'meta_description'] = '';
        }

        foreach ($cause->contents as $content) {
            $langCode = $content->language_code;
            $data[$langCode . '_name'] = $content->title;
            $data[$langCode . 'content'] = $content->content;
            $data[$langCode . 'projects'] = $content->projects;
            $data[$langCode . 'faq'] = $content->faq;
            $data[$langCode . 'updates'] = $content->updates;
            $data[$langCode . 'meta_title'] = $content->meta_title;
            $data[$langCode . 'meta_tags'] = $content->meta_tags;
            $data[$langCode . 'meta_description'] = $content->meta_description;
        }

        return $data;
    }

    /**
     * Update cause
     */
    public function update(Request $request, Cause $cause)
    {
        // Update the cause
        $cause->update([
            'category_id' => $request->category,
            'banner_image' => $request->banner_image,
            'gallery_images' => json_encode($request->input('gallery_images')),
            'have_gift' => $request->input('have_gift'),
            'have_product' => $request->input('have_product'),
            'custom_donation_amounts' => $request->custom_donation_amounts,
            'raised_amount' => $request->input('raised_amount'),
            'goal_amount' => $request->input('goal_amount'),
            'deadline' => $request->input('deadline'),
            'status' => $request->status,
            'meta_image' => $request->meta_image,
        ]);

        // First update the content
        $languages = json_decode(Setting::pull('languages'), true);
        foreach ($languages as $language) {
            $langCode = $language['code'];
            $cause->contents()->updateOrCreate(
                ['language_code' => $langCode],
                [
                    'title' => $request[$langCode . '_name'],
                    'content' => $request[$langCode . '_content'],
                    'projects' => $request[$langCode . '_projects'],
                    'faq' => $request[$langCode . '_faq'],
                    'updates' => $request[$langCode . '_updates'],
                    'meta_title' => $request[$langCode . '_meta_title'],
                    'meta_tags' => $request[$langCode . '_meta_tags'],
                    'meta_description' => $request[$langCode . '_meta_description'],
                ],
            );
        }
        Cache::forget('max_cause_price');
    }

    /**
     * delete cause
     */
    public function destroy(Cause $cause)
    {
        $cause->contents()->delete();
        $cause->delete();
    }

    /**
     * bulk delete cause
     */
    public function bulkDelete(string $ids)
    {
        $ids = explode(',', $ids);
        CauseContent::whereIn('cause_id', $ids)->delete();
        $this->model->whereIn('id', $ids)->delete();
    }
}
