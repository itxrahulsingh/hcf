<?php

namespace App\Http\Requests\Admin\Causes;

use App\Models\Setting;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'banner_image' => ['required', 'max:2048'],
            'gallery_images' => ['nullable', 'array'],
            'gallery_images.*' => ['max:2048'],
            'status' => ['required'],
        ];

        // Append language-specific validation rules
        $languages = json_decode(Setting::pull('languages'));
        foreach ($languages as $language) {
            $langCode = $language->code;
            $rules[$langCode . '_title'] = 'required|max:255';
            $rules[$langCode . '_content'] = 'nullable';
            $rules[$langCode . '_projects'] = 'nullable';
            $rules[$langCode . '_faq'] = 'nullable';
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
