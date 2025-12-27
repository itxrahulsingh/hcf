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

    protected Cause $model;

    public function __construct(Cause $cause)
    {
        $this->model = $cause;
    }

    public function paginateSearchResult($search, array $sort = [], ?string $type = null): LengthAwarePaginator
    {
        $query = $this->model->with(['content', 'category.content'])->newQuery();

        if ($search) {
            $query->whereHas('contents', function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%");
            })->orWhereHas('category.contents', function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%");
            });
        }

        if ($type && $type !== 'all') {
            $query->where('type', $type);
        }

        if (isset($sort['column']) && isset($sort['order'])) {
             $query->orderBy($sort['column'], $sort['order']);
        } else {
             $query->orderBy('id', 'desc');
        }

        return $query->paginate(30)->appends(array_filter(['search' => $search, 'sort' => $sort, 'lang' => app()->getLocale()]));
    }

    public function create(Request $request): void
    {
        $languages = json_decode(Setting::pull('languages'), true);
        $defaultLang = Setting::pull('default_lang');
        $generatedSlug = Str::slug($request->input($defaultLang . '_title'));

        if (Cause::where('slug', $generatedSlug)->exists()) {
            $generatedSlug = $generatedSlug . '-' . Carbon::now()->timestamp;
        }

        // FIX: Extract only IDs if the frontend sends Objects
        $cleanGiftIds = $this->sanitizeGiftIds($request->input('gift_ids', []));

        $cause = $this->model->create([
            'slug' => $generatedSlug,
            'category_id' => $request->input('category'),
            'user_id' => auth()->id(),
            'thumbnail_image' => $request->input('thumbnail_image'),
            'banner_image' => $request->input('banner_image'),
            'gallery_images' => $request->input('gallery_images', []),
            'have_gift' => (int) $request->input('have_gift', 0),
            'have_product' => (int) $request->input('have_product', 0),
            'is_special' => (int) $request->input('is_special', 0),
            'gift_ids' => $cleanGiftIds, // Use cleaned IDs
            'custom_donation_amounts' => $request->input('custom_donation_amounts'),
            'video_url' => $request->input('video_url'),
            'raised_amount' => $request->input('raised_amount'),
            'goal_amount' => $request->input('goal_amount'),
            'type' => $request->input('type') ?? 'general',
            'deadline' => $request->input('deadline'),
            'status' => $request->input('status'),
            'meta_image' => $request->input('meta_image'),
            'meta_title' => $request->input('meta_title'),
            'meta_tags' => $request->input('meta_tags'),
            'meta_description' => $request->input('meta_description'),
        ]);

        $content = array_map(function ($language) use ($request) {
            $langCode = $language['code'];
            return [
                'language_code' => $langCode,
                'title' => $request[$langCode . '_title'],
                'content' => $request[$langCode . '_content'],
                'projects' => $request[$langCode . '_projects'],
                'faq' => $this->parseFaq($request[$langCode . '_faq']),
                'updates' => $request[$langCode . '_updates'],
            ];
        }, $languages);

        $cause->contents()->createMany($content);
        Cache::forget('max_cause_price');
    }

    public function getEditedData(Cause $cause): array
    {
        $cause->load('contents');
        $languages = json_decode(Setting::pull('languages'), true);

        // Force decode gallery_images
        $gallery = $cause->gallery_images;
        if (is_string($gallery)) {
            $gallery = json_decode($gallery, true);
        }
        if (!is_array($gallery)) {
            $gallery = [];
        }

        $data = [
            'id' => $cause->id,
            'slug' => $cause->slug,
            'category' => $cause->category_id,
            'thumbnail_image' => $cause->thumbnail_image,
            'banner_image' => $cause->banner_image,
            'gallery_images' => $gallery,
            'have_gift' => $cause->have_gift,
            'have_product' => $cause->have_product,
            'is_special' => $cause->is_special,
            'gift_ids' => $cause->gift_ids ?? [],
            'custom_donation_amounts' => $cause->custom_donation_amounts,
            'video_url' => $cause->video_url,
            'raised_amount' => $cause->raised_amount,
            'goal_amount' => $cause->goal_amount,
            'type' => $cause->type,
            'deadline' => $cause->deadline,
            'status' => $cause->status,
            'meta_image' => $cause->meta_image,
            'meta_title' => $cause->meta_title,
            'meta_tags' => $cause->meta_tags,
            'meta_description' => $cause->meta_description,
        ];

        foreach ($languages as $language) {
            $code = $language['code'];
            $data["{$code}_title"] = '';
            $data["{$code}_content"] = '';
            $data["{$code}_projects"] = '';
            $data["{$code}_faq"] = [];
            $data["{$code}_updates"] = '';
        }

        foreach ($cause->contents as $content) {
            $code = $content->language_code;
            $data["{$code}_title"] = $content->title;
            $data["{$code}_content"] = $content->content;
            $data["{$code}_projects"] = $content->projects;
            $data["{$code}_faq"] = $content->faq;
            $data["{$code}_updates"] = $content->updates;
        }

        return $data;
    }

    public function update(Request $request, Cause $cause): void
    {
        // FIX: Extract only IDs if the frontend sends Objects
        $cleanGiftIds = $this->sanitizeGiftIds($request->input('gift_ids', []));

        $cause->update([
            'category_id' => $request->category,
            'thumbnail_image' => $request->thumbnail_image,
            'banner_image' => $request->banner_image,
            'gallery_images' => $request->gallery_images ?? [],
            'have_gift' => $request->have_gift,
            'have_product' => $request->have_product,
            'is_special' => $request->is_special,
            'gift_ids' => $cleanGiftIds, // Use cleaned IDs
            'custom_donation_amounts' => $request->custom_donation_amounts,
            'video_url' => $request->video_url,
            'raised_amount' => $request->raised_amount,
            'goal_amount' => $request->goal_amount,
            'type' => $request->type,
            'deadline' => $request->deadline,
            'status' => $request->status,
            'meta_image' => $request->meta_image,
            'meta_title' => $request->meta_title,
            'meta_tags' => $request->meta_tags,
            'meta_description' => $request->meta_description,
        ]);

        $languages = json_decode(Setting::pull('languages'), true);

        foreach ($languages as $language) {
            $code = $language['code'];

            $cause->contents()->updateOrCreate(
                ['language_code' => $code],
                [
                    'title' => $request["{$code}_title"],
                    'content' => $request["{$code}_content"],
                    'projects' => $request["{$code}_projects"],
                    'faq' => $this->parseFaq($request["{$code}_faq"]),
                    'updates' => $request["{$code}_updates"],
                ]
            );
        }

        Cache::forget('max_cause_price');
    }

    /**
     * Helper to extract IDs from gift objects
     */
    private function sanitizeGiftIds($gifts)
    {
        if (!is_array($gifts)) return [];

        return array_map(function($item) {
            if (is_array($item) && isset($item['value'])) {
                return $item['value'];
            }
            return $item;
        }, $gifts);
    }

    private function parseFaq($data)
    {
        if (is_string($data)) {
            $decoded = json_decode($data, true);
            return is_array($decoded) ? $decoded : [];
        }
        return is_array($data) ? $data : [];
    }

    public function destroy(Cause $cause)
    {
        $cause->contents()->delete();
        $cause->delete();
    }

    public function bulkDelete(string $ids)
    {
        $ids = explode(',', $ids);
        CauseContent::whereIn('cause_id', $ids)->delete();
        $this->model->whereIn('id', $ids)->delete();
    }
}
