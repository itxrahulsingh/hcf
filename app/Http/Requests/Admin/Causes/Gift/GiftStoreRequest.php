<?php

namespace App\Http\Requests\Admin\Causes\Gift;

use App\Models\Setting;
use Illuminate\Foundation\Http\FormRequest;

class GiftStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        $rules = [
            'gift_image' => 'required|max:5000',
            'amount' => 'required|numeric|min:0',
            'min_qty' => 'nullable|integer|min:1',
        ];

        // Append language-specific validation rules
        $languages = json_decode(Setting::pull('languages'));
        foreach ($languages as $language) {
            $langCode = $language->code;
            $rules[$langCode . '_title'] = 'required|max:255';
            $reles[$langCode . '_description'] = 'nullable';
        }

        return $rules;
    }
}
