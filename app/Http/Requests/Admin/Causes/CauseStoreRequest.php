<?php

namespace App\Http\Requests\Admin\Causes;

use App\Models\Setting;
use Illuminate\Foundation\Http\FormRequest;

class CauseStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'category' => ['required'],
            'slug' => ['nullable', 'string', 'max:255', 'regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/', 'unique:causes,slug'],
            'banner_image' => ['required', 'max:2048'],
            'mobile_banner_image' => ['nullable', 'max:2048'],
            'gallery_images' => ['nullable', 'array'],
            'gallery_images.*' => ['max:2048'],
            'custom_style' => ['nullable'],
            'status' => ['required', 'integer'],
            'min_amount' => ['required', 'numeric', 'min:0'],
            'goal_amount' => ['nullable', 'numeric', 'min:0'],
            'deadline' => ['nullable', 'date', 'after:today'],
        ];

        // Append language-specific validation rules
        $languages = json_decode(Setting::pull('languages'));
        foreach ($languages as $language) {
            $langCode = $language->code;
            $rules[$langCode . '_title'] = 'required|max:255';
            $rules[$langCode . '_cause_title'] = 'nullable|string|max:255';
            $rules[$langCode . '_content'] = 'nullable';
            $rules[$langCode . '_projects'] = 'nullable';
            $rules[$langCode . '_faq'] = 'nullable|array';
            $rules[$langCode . '_faq.*.title'] = 'nullable|string|max:255';
            $rules[$langCode . '_faq.*.content'] = 'nullable|string';
            $rules[$langCode . '_updates'] = 'nullable';
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
