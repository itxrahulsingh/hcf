<?php

namespace App\Http\Requests\Admin\Causes;

use App\Models\Setting;
use Illuminate\Foundation\Http\FormRequest;

class CauseUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'category' => ['required'],
            'thumbnail_image' => ['required'],
            'banner_image' => ['required'],
            'gallery_images' => ['nullable', 'array'],
            'gallery_images.*' => ['string'],
            'have_gift' => ['required', 'integer'],
            'have_product' => ['required', 'integer'],
            'is_special' => ['required', 'integer'],
            'status' => ['required', 'integer'],
            'custom_donation_amounts' => ['nullable', 'string'],
            'raised_amount' => ['nullable', 'numeric'],
            'goal_amount' => ['nullable', 'numeric'],
            'deadline' => ['nullable', 'date'],
            'type' => ['nullable', 'string'],
            'video_url' => ['nullable', 'string'],
            'meta_image' => ['nullable', 'string'],
            'meta_title' => ['nullable', 'string'],
            'meta_tags' => ['nullable', 'string'],
            'meta_description' => ['nullable', 'string'],
        ];

        $languages = json_decode(Setting::pull('languages'));

        foreach ($languages as $language) {
            $code = $language->code;

            $rules["{$code}_title"] = ['required', 'string', 'max:255'];
            $rules["{$code}_content"] = ['nullable', 'string'];
            $rules["{$code}_projects"] = ['nullable', 'string'];
            $rules["{$code}_faq"] = ['nullable', 'string'];
            $rules["{$code}_updates"] = ['nullable', 'string'];
        }

        return $rules;
    }


    public function messages()
    {
        return [
            // 'discount_price.lt' => 'The discount price must be less than the regular price.',
        ];
    }
}
