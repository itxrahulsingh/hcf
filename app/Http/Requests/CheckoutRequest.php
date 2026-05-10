<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Models\ManualPaymentGateway;
use App\Models\Setting;

class CheckoutRequest extends FormRequest
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
    public function rules(): array
    {
        $manualGatewayNames = ManualPaymentGateway::where('status', '1')
            ->with('content')
            ->get()
            ->pluck('content.gateway_name')
            ->filter()
            ->values()
            ->all();

        $paymentMethods = array_merge(
            array_filter([
                Setting::pull('paypal_is_active') === '1' ? 'paypal' : null,
                Setting::pull('stripe_is_active') === '1' ? 'stripe' : null,
                Setting::pull('sslcz_is_active') === '1' ? 'sslcommerz' : null,
                Setting::pull('flutterwave_is_active') === '1' ? 'flutterwave' : null,
                Setting::pull('razorpay_is_active') === '1' ? 'razorpay' : null,
                Setting::pull('cod_is_active') === '1' ? 'cod' : null,
            ]),
            $manualGatewayNames
        );

        $requiresCaptcha = Setting::pull('is_active_google_captcha') === '1';

        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'orderNotes' => 'nullable|string|max:500',
            'address' => 'required|string',
            'state' => 'nullable|string|max:255',
            'items' => 'required|array|min:1',
            'items.*.id' => 'required',
            'items.*.type' => ['required', Rule::in(['product', 'gift', 'cause'])],
            'items.*.quantity' => 'nullable|integer|min:1|max:100',
            'items.*.price' => 'nullable|numeric|min:0.01',
            'agreed' => 'required|accepted',
            'paymentMethod' => ['required', 'string', Rule::in(array_values(array_unique($paymentMethods)))],
            'transactionId' => [Rule::requiredIf(fn() => in_array($this->input('paymentMethod'), $manualGatewayNames, true)), 'nullable', 'string', 'max:255'],
            'receiptFile' => 'nullable|file|mimes:jpg,jpeg,png,webp,pdf|max:5120',
            'special_name' => 'nullable|string|max:255',
            'special_message' => 'nullable|string|max:1000',
            'special_date' => 'nullable|date',
            'special_image' => 'nullable|file|image|max:5120',
            'is_80g' => 'nullable|boolean',
            'pancard' => ['nullable', 'string', 'regex:/^[A-Z]{5}[0-9]{4}[A-Z]$/'],
            'cause_id' => 'nullable|integer|exists:causes,id',
            'captchaToken' => $requiresCaptcha ? 'required|string' : 'nullable|string',
        ];
    }
}
