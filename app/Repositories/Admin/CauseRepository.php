<?php

namespace App\Repositories\Admin;

use App\Models\Cause;
use App\Models\CauseContent;
use App\Models\Setting;
use App\Repositories\Traits\ModelRepositoryTraits;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CauseRepository
{
    use ModelRepositoryTraits;

    protected Cause $model;
    private ?string $statusColumnType = null;

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

        $query->orderBy($sort['column'] ?? 'id', $sort['order'] ?? 'desc');

        return $query->paginate(30)->appends(array_filter(['search' => $search, 'sort' => $sort, 'lang' => app()->getLocale()]));
    }

    public function create(Request $request): void
    {
        DB::transaction(function () use ($request) {
            $languages = json_decode(Setting::pull('languages'), true);
            $defaultLang = Setting::pull('default_lang');
            $requestedSlug = trim((string) $request->input('slug', ''));
            $generatedSlug = Str::slug($requestedSlug !== '' ? $requestedSlug : $request->input($defaultLang . '_title'));
            if ($generatedSlug === '') {
                $generatedSlug = 'cause';
            }

            if (Cause::where('slug', $generatedSlug)->exists()) {
                $generatedSlug = $generatedSlug . '-' . Carbon::now()->timestamp;
            }

            $cause = $this->model->create([
                'slug' => $generatedSlug,
                'category_id' => $request->input('category'),
                'user_id' => auth()->id(),
                'thumbnail_image' => $request->input('thumbnail_image'),
                'banner_image' => $request->input('banner_image'),
                'mobile_banner_image' => $request->input('mobile_banner_image'),
                'gallery_images' => json_encode($request->input('gallery_images') ?? []),
                'have_gift' => (int) $request->input('have_gift', 0),
                'gift_design' => $request->input('gift_design'),
                'have_product' => (int) $request->input('have_product', 0),
                'is_special' => (int) $request->input('is_special', 0),
                'gift_ids' => json_encode($this->extractIds($request->input('gift_ids'))),
                'product_ids' => json_encode($this->extractIds($request->input('product_ids'))),
                'product_design' => $request->input('product_design'),
                'custom_donation_amounts' => $request->input('custom_donation_amounts'),
                'video_url' => $request->input('video_url'),
                'min_amount' => $request->filled('min_amount') ? (float) $request->input('min_amount') : 0,
                'goal_amount' => $request->filled('goal_amount') ? (float) $request->input('goal_amount') : 0,
                'type' => $request->input('type') ?? 'normal',
                'deadline' => $request->input('deadline'),
                'custom_style' => $request->input('custom_style'),
                'status' => $this->normalizeStatusForColumn($request->input('status', 1)),
                'meta_image' => $request->input('meta_image'),
                'meta_title' => $request->input('meta_title'),
                'meta_tags' => $request->input('meta_tags'),
                'meta_description' => $request->input('meta_description'),
            ]);

            $this->saveContent($cause, $request, $languages);
        });

        Cache::forget('max_cause_price');
    }

    public function update(Request $request, Cause $cause): void
    {
        DB::transaction(function () use ($request, $cause) {
            $requestedSlug = trim((string) $request->input('slug', ''));
            $nextSlug = Str::slug($requestedSlug !== '' ? $requestedSlug : $cause->slug);
            if ($nextSlug === '') {
                $nextSlug = $cause->slug;
            }

            $cause->update([
                'slug' => $nextSlug,
                'category_id' => $request->category,
                'thumbnail_image' => $request->thumbnail_image,
                'banner_image' => $request->banner_image,
                'mobile_banner_image' => $request->mobile_banner_image,
                'gallery_images' => json_encode($request->input('gallery_images') ?? []),
                'have_gift' => (int) $request->input('have_gift', 0),
                'have_product' => (int) $request->input('have_product', 0),
                'is_special' => (int) $request->input('is_special', 0),
                'gift_ids' => json_encode($this->extractIds($request->input('gift_ids'))),
                'gift_design' => $request->gift_design,
                'product_ids' => json_encode($this->extractIds($request->input('product_ids'))),
                'product_design' => $request->product_design,
                'custom_donation_amounts' => $request->custom_donation_amounts,
                'video_url' => $request->video_url,
                'min_amount' => $request->filled('min_amount') ? (float) $request->input('min_amount') : 0,
                'goal_amount' => $request->filled('goal_amount') ? (float) $request->input('goal_amount') : 0,
                'type' => $request->type ?? 'normal',
                'deadline' => $request->deadline,
                'custom_style' => $request->custom_style,
                'status' => $this->normalizeStatusForColumn($request->input('status', 1)),
                'meta_image' => $request->meta_image,
                'meta_title' => $request->meta_title,
                'meta_tags' => $request->meta_tags,
                'meta_description' => $request->meta_description,
            ]);

            $languages = json_decode(Setting::pull('languages'), true);
            $this->saveContent($cause, $request, $languages);
        });

        Cache::forget('max_cause_price');
    }

    private function extractIds($items)
    {
        if (!is_array($items)) return [];
        return array_map(function ($item) {
            return is_array($item) && isset($item['value']) ? $item['value'] : $item;
        }, $items);
    }

    private function normalizeStatusForColumn($statusInput)
    {
        $isActive = (int) $statusInput === 1;
        $columnType = $this->getCauseStatusColumnType();
        if (!$columnType) {
            return $isActive ? 1 : 0;
        }

        $type = strtolower($columnType);
        if (str_contains($type, "enum(")) {
            $enumValues = $this->parseEnumValues($type);
            if (in_array('active', $enumValues, true) && in_array('inactive', $enumValues, true)) {
                return $isActive ? 'active' : 'inactive';
            }
            if (in_array('published', $enumValues, true) && in_array('unpublished', $enumValues, true)) {
                return $isActive ? 'published' : 'unpublished';
            }
            if (in_array('1', $enumValues, true) && in_array('0', $enumValues, true)) {
                return $isActive ? '1' : '0';
            }
        }

        return $isActive ? 1 : 0;
    }

    private function getCauseStatusColumnType(): ?string
    {
        if ($this->statusColumnType !== null) {
            return $this->statusColumnType;
        }

        try {
            $column = DB::selectOne("SHOW COLUMNS FROM causes WHERE Field = 'status'");
            $this->statusColumnType = $column->Type ?? '';
        } catch (\Throwable $e) {
            $this->statusColumnType = '';
        }

        return $this->statusColumnType;
    }

    private function parseEnumValues(string $type): array
    {
        if (!preg_match('/^enum\((.*)\)$/i', trim($type), $matches)) {
            return [];
        }
        $csv = $matches[1];
        $parts = str_getcsv($csv, ',', "'");
        return array_values(array_filter(array_map('trim', $parts), static fn($v) => $v !== ''));
    }

    private function saveContent(Cause $cause, Request $request, $languages)
    {
        foreach ($languages as $language) {
            $code = $language['code'];

            $faqKey = "{$code}_faq";
            $hasFaqInput = $request->exists($faqKey);
            $faqInput = $request->input($faqKey);

            $faqData = [];
            if ($hasFaqInput) {
                if (is_string($faqInput)) {
                    $faqData = $this->decodeFaqString($faqInput);
                } elseif (is_array($faqInput)) {
                    $faqData = $faqInput;
                }
            }

            // Normalize associative object-like arrays into indexed list.
            if (is_array($faqData) && !array_is_list($faqData)) {
                $faqData = array_values($faqData);
            }

            $normalizedFaq = collect(is_array($faqData) ? $faqData : [])
                ->map(function ($item) {
                    if (!is_array($item)) {
                        return null;
                    }

                    $title = trim((string) ($item['title'] ?? $item['question'] ?? $item['faq_question'] ?? ''));
                    $content = trim((string) ($item['content'] ?? $item['answer'] ?? $item['faq_answer'] ?? ''));

                    if ($title === '' && $content === '') {
                        return null;
                    }

                    return [
                        'title' => $title,
                        'content' => $content,
                    ];
                })
                ->filter()
                ->values()
                ->all();

            $contentModel = $cause->contents()->firstOrNew(['language_code' => $code]);

            $contentModel->title = $request->input("{$code}_title");
            $contentModel->cause_title = $request->input("{$code}_cause_title");
            $contentModel->content = $request->input("{$code}_content");
            $contentModel->projects = $request->input("{$code}_projects");
            $contentModel->updates = $request->input("{$code}_updates");

            // Only overwrite FAQ when key is present in request.
            // Prevents accidental wipe for untouched language payloads.
            if ($hasFaqInput) {
                $contentModel->faq = $normalizedFaq;
            } elseif (!$contentModel->exists) {
                $contentModel->faq = [];
            }

            $contentModel->save();
        }
    }

    public function getEditedData(Cause $cause): array
    {
        $cause->load('contents');
        $languages = json_decode(Setting::pull('languages'), true);

        $gallery = $cause->gallery_images;
        if (is_string($gallery)) $gallery = json_decode($gallery, true);

        $giftIds = $cause->gift_ids;
        if (is_string($giftIds)) $giftIds = json_decode($giftIds, true);

        $productIds = $cause->product_ids;
        if (is_string($productIds)) $productIds = json_decode($productIds, true);

        $data = [
            'id' => $cause->id,
            'slug' => $cause->slug,
            'category' => $cause->category_id,
            'thumbnail_image' => $cause->thumbnail_image,
            'banner_image' => $cause->banner_image,
            'mobile_banner_image' => $cause->mobile_banner_image,
            'gallery_images' => $gallery ?? [],
            'have_gift' => $cause->have_gift,
            'have_product' => $cause->have_product,
            'is_special' => $cause->is_special,
            'gift_ids' => $giftIds ?? [],
            'product_ids' => $productIds ?? [],
            'custom_donation_amounts' => $cause->custom_donation_amounts,
            'video_url' => $cause->video_url,
            'min_amount' => $cause->min_amount,
            'goal_amount' => $cause->goal_amount,
            'type' => $cause->type,
            'deadline' => $cause->deadline,
            'status' => $cause->status,
            'meta_image' => $cause->meta_image,
            'meta_title' => $cause->meta_title,
            'meta_tags' => $cause->meta_tags,
            'meta_description' => $cause->meta_description,
            'custom_style' => $cause->custom_style,
            'gift_design' => $cause->gift_design,
            'product_design' => $cause->product_design
        ];

        foreach ($languages as $language) {
            $code = $language['code'];
            $data["{$code}_title"] = '';
            $data["{$code}_cause_title"] = '';
            $data["{$code}_content"] = '';
            $data["{$code}_projects"] = '';
            $data["{$code}_faq"] = '';
            $data["{$code}_updates"] = '';
        }

        foreach ($cause->contents as $content) {
            $code = $content->language_code;
            $faq = $content->faq;
            if (!is_array($faq)) {
                $faq = [];
            }
            $faq = collect($faq)
                ->map(function ($item) {
                    if (!is_array($item)) {
                        return null;
                    }

                    $title = trim((string) ($item['title'] ?? $item['question'] ?? $item['faq_question'] ?? ''));
                    $body = trim((string) ($item['content'] ?? $item['answer'] ?? $item['faq_answer'] ?? ''));

                    if ($title === '' && $body === '') {
                        return null;
                    }

                    return [
                        'title' => $title,
                        'content' => $body,
                    ];
                })
                ->filter()
                ->values()
                ->all();

            $data["{$code}_title"] = $content->title;
            $data["{$code}_cause_title"] = $content->cause_title;
            $data["{$code}_content"] = $content->content;
            $data["{$code}_projects"] = $content->projects;
            $data["{$code}_faq"] = $faq;
            $data["{$code}_updates"] = $content->updates;
        }

        return $data;
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

    private function decodeFaqString(string $value): array
    {
        $decoded = json_decode($value, true);
        if (is_array($decoded)) {
            return $decoded;
        }

        if (is_string($decoded)) {
            $decodedAgain = json_decode($decoded, true);
            if (is_array($decodedAgain)) {
                return $decodedAgain;
            }
        }

        return [];
    }
}
