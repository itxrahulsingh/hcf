<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Cause;
use App\Models\MonthlyGivingSubscription;
use App\Models\MonthlyGivingTransaction;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Razorpay\Api\Api;

class MonthlyGivingController extends Controller
{
    public function causes()
    {
        $causes = Cause::query()
            ->where(function ($query) {
                $query->where('status', 1)->orWhere('status', '1');
            })
            ->with('content:cause_id,title')
            ->select('id', 'min_amount')
            ->latest('id')
            ->get()
            ->map(fn ($cause) => [
                'id' => $cause->id,
                'title' => $this->normalizeText($cause->content?->title, 'Cause'),
                'min_amount' => (float) ($cause->min_amount ?? 1),
            ]);

        return response()->json([
            'causes' => $causes,
            'razorpay_key_id' => Setting::pull('razorpay_key_id'),
        ]);
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'cause_id' => ['required', 'exists:causes,id'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'mobile' => ['required', 'regex:/^(?:\\+91|91)?[6-9][0-9]{9}$/'],
            'amount' => ['required', 'numeric', 'min:1'],
            'is_80g' => ['nullable', 'boolean'],
            'pancard' => ['nullable', 'required_if:is_80g,1', 'regex:/^[A-Z]{5}[0-9]{4}[A-Z]$/'],
        ]);

        $razorpayActiveSetting = Setting::pull('razorpay_is_active');
        $isRazorpayActive = in_array((string) $razorpayActiveSetting, ['1', 'true', 'on', 'yes'], true);
        abort_if(!$isRazorpayActive, 422, 'Razorpay is disabled. Please enable it in admin settings.');

        $cause = Cause::findOrFail($validated['cause_id']);
        $amount = round((float) $validated['amount'], 2);
        if ($amount < (float) ($cause->min_amount ?? 1)) {
            return response()->json(['message' => 'Amount is below minimum donation limit.'], 422);
        }

        $mobile = preg_replace('/\D+/', '', $validated['mobile']);
        $mobile = strlen($mobile) > 10 ? substr($mobile, -10) : $mobile;

        $subscription = MonthlyGivingSubscription::create([
            'uuid' => (string) Str::uuid(),
            'user_id' => Auth::id(),
            'cause_id' => $cause->id,
            'name' => $validated['name'],
            'email' => $validated['email'],
            'mobile' => $mobile,
            'is_80g' => (bool) ($validated['is_80g'] ?? false),
            'pancard' => strtoupper(trim((string) ($validated['pancard'] ?? ''))) ?: null,
            'amount' => $amount,
            'currency' => 'INR',
            'status' => 'created',
        ]);

        try {
            $causeTitle = $this->normalizeText($cause->content?->title, 'Cause');
            [$keyId, $keySecret] = $this->getRazorpayCredentials();

            $plan = $this->razorpayPost($keyId, $keySecret, 'plans', [
                'period' => 'monthly',
                'interval' => 1,
                'item' => [
                    'name' => 'Monthly Giving - ' . $causeTitle,
                    'amount' => (int) round($amount * 100),
                    'currency' => 'INR',
                    'description' => 'Monthly donation subscription',
                ],
                'notes' => ['local_uuid' => $subscription->uuid],
            ]);

            $rzpSubscription = $this->razorpayPost($keyId, $keySecret, 'subscriptions', [
                'plan_id' => $plan['id'],
                'customer_notify' => 1,
                'quantity' => 1,
                'total_count' => 1200,
                'notes' => ['local_uuid' => $subscription->uuid],
            ]);

            $subscription->update([
                'razorpay_plan_id' => $plan['id'],
                'razorpay_subscription_id' => $rzpSubscription['id'],
                'total_count' => (int) ($rzpSubscription['total_count'] ?? 1200),
                'status' => $rzpSubscription['status'] ?? 'created',
                'notes' => [
                    'plan_id' => (string) ($plan['id'] ?? ''),
                    'subscription_id' => (string) ($rzpSubscription['id'] ?? ''),
                    'subscription_status' => (string) ($rzpSubscription['status'] ?? 'created'),
                    'total_count' => (int) ($rzpSubscription['total_count'] ?? 1200),
                ],
            ]);
        } catch (\Throwable $e) {
            Log::error('MonthlyGiving create failed', [
                'subscription_id' => $subscription->id,
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
                'trace' => $e->getTraceAsString(),
            ]);
            $subscription->update([
                'status' => 'failed',
                'notes' => ['error' => $e->getMessage()],
            ]);
            return response()->json([
                'message' => 'Unable to initialize subscription right now.',
                'error' => $e->getMessage(),
            ], 422);
        }

        return response()->json([
            'subscription_uuid' => $subscription->uuid,
            'razorpay_key' => Setting::pull('razorpay_key_id'),
            'razorpay_subscription_id' => $subscription->razorpay_subscription_id,
            'amount' => (int) round($subscription->amount * 100),
            'name' => $subscription->name,
            'email' => $subscription->email,
            'mobile' => $subscription->mobile,
        ]);
    }

    public function verifySubscription(Request $request)
    {
        $validated = $request->validate([
            'subscription_uuid' => ['required', 'exists:monthly_giving_subscriptions,uuid'],
            'razorpay_payment_id' => ['required', 'string'],
            'razorpay_subscription_id' => ['required', 'string'],
            'razorpay_signature' => ['required', 'string'],
        ]);

        $subscription = MonthlyGivingSubscription::where('uuid', $validated['subscription_uuid'])->firstOrFail();
        abort_unless($subscription->razorpay_subscription_id === $validated['razorpay_subscription_id'], 422, 'Invalid subscription.');

        $api = new Api(Setting::pull('razorpay_key_id'), Setting::pull('razorpay_key_secret'));
        $api->utility->verifyPaymentSignature([
            'razorpay_payment_id' => $validated['razorpay_payment_id'],
            'razorpay_subscription_id' => $validated['razorpay_subscription_id'],
            'razorpay_signature' => $validated['razorpay_signature'],
        ]);

        $payment = $api->payment->fetch($validated['razorpay_payment_id']);
        DB::transaction(function () use ($subscription, $payment) {
            $locked = MonthlyGivingSubscription::whereKey($subscription->id)->lockForUpdate()->firstOrFail();
            $isNewPayment = $this->storeTransactionFromPayment($locked, $payment->toArray(), 'subscription.verified');

            $updates = [
                'status' => 'active',
                'started_at' => $locked->started_at ?? now(),
                'last_charge_at' => now(),
            ];
            if ($isNewPayment) {
                $updates['paid_count'] = (int) $locked->paid_count + 1;
            }
            $locked->update($updates);
        });

        return response()->json(['message' => 'Monthly subscription activated successfully.']);
    }

    public function webhook(Request $request)
    {
        $secret = (string) Setting::pull('razorpay_webhook_secret');
        abort_if($secret === '', 422, 'Razorpay webhook secret is not configured.');

        $payload = $request->getContent();
        $signature = (string) $request->header('X-Razorpay-Signature');
        abort_if($signature === '', 422, 'Missing Razorpay signature.');

        $expected = hash_hmac('sha256', $payload, $secret);
        abort_unless(hash_equals($expected, $signature), 400, 'Invalid webhook signature.');

        $body = json_decode($payload, true);
        if (!is_array($body)) {
            return response()->json(['ok' => true]);
        }

        $event = (string) ($body['event'] ?? '');
        $entity = $body['payload']['subscription']['entity'] ?? null;
        if (!is_array($entity)) {
            return response()->json(['ok' => true]);
        }

        $rzpSubscriptionId = (string) ($entity['id'] ?? '');
        $subscription = MonthlyGivingSubscription::where('razorpay_subscription_id', $rzpSubscriptionId)->first();
        if (!$subscription) {
            Log::warning('MonthlyGiving webhook: subscription not found', ['id' => $rzpSubscriptionId, 'event' => $event]);
            return response()->json(['ok' => true]);
        }

        $mappedStatus = $this->mapRazorpaySubscriptionStatus((string) ($entity['status'] ?? $subscription->status));
        $existingNotes = is_array($subscription->notes) ? $subscription->notes : [];
        $updates = [
            'status' => $mappedStatus,
            'notes' => array_merge($existingNotes, ['last_webhook_event' => $event]),
        ];

        if (in_array($event, ['subscription.cancelled', 'subscription.completed'], true)) {
            $updates['cancelled_at'] = now();
        }

        if (in_array($event, ['subscription.charged', 'subscription.activated', 'subscription.authenticated'], true)) {
            $updates['started_at'] = $subscription->started_at ?? now();
            $updates['last_charge_at'] = now();
        }

        if (!empty($entity['charge_at'])) {
            $updates['next_charge_at'] = now()->setTimestamp((int) $entity['charge_at']);
        }

        $paymentEntity = $body['payload']['payment']['entity'] ?? null;
        DB::transaction(function () use ($subscription, $updates, $paymentEntity, $event) {
            $locked = MonthlyGivingSubscription::whereKey($subscription->id)->lockForUpdate()->firstOrFail();
            $isNewPayment = false;
            if (is_array($paymentEntity) && !empty($paymentEntity['id'])) {
                $isNewPayment = $this->storeTransactionFromPayment($locked, $paymentEntity, $event);
            }
            if ($event === 'subscription.charged' && $isNewPayment) {
                $updates['paid_count'] = (int) $locked->paid_count + 1;
            }
            $locked->update($updates);
        });

        return response()->json(['ok' => true]);
    }

    private function storeTransactionFromPayment(MonthlyGivingSubscription $subscription, array $payment, string $event): bool
    {
        $paymentId = (string) ($payment['id'] ?? '');
        if ($paymentId === '') {
            return false;
        }

        $transaction = MonthlyGivingTransaction::where('razorpay_payment_id', $paymentId)->first();
        $isNew = $transaction === null;
        MonthlyGivingTransaction::updateOrCreate(
            ['razorpay_payment_id' => $paymentId],
            [
                'monthly_giving_subscription_id' => $subscription->id,
                'razorpay_invoice_id' => $payment['invoice_id'] ?? null,
                'razorpay_event_id' => $event,
                'amount' => ((float) ($payment['amount'] ?? 0)) / 100,
                'currency' => $payment['currency'] ?? 'INR',
                'status' => $payment['status'] ?? 'captured',
                'payment_method' => $payment['method'] ?? null,
                'paid_at' => !empty($payment['created_at']) ? now()->setTimestamp((int) $payment['created_at']) : now(),
                'raw_payload' => $payment,
            ]
        );
        return $isNew;
    }

    private function mapRazorpaySubscriptionStatus(string $status): string
    {
        return match ($status) {
            'authenticated', 'active' => 'active',
            'created' => 'created',
            'cancelled', 'completed' => 'cancelled',
            'halted', 'pending' => 'pending',
            default => $status ?: 'created',
        };
    }

    private function getRazorpayCredentials(): array
    {
        $keyId = trim((string) Setting::pull('razorpay_key_id'));
        $keySecret = trim((string) Setting::pull('razorpay_key_secret'));

        if ($keyId === '' || $keySecret === '') {
            abort(422, 'Razorpay credentials are missing. Please configure key and secret in admin settings.');
        }

        return [$keyId, $keySecret];
    }

    private function razorpayPost(string $keyId, string $keySecret, string $endpoint, array $payload): array
    {
        $response = Http::withBasicAuth($keyId, $keySecret)
            ->acceptJson()
            ->post("https://api.razorpay.com/v1/{$endpoint}", $payload);

        $json = $response->json();
        if (!$response->successful()) {
            $errorMessage = data_get($json, 'error.description')
                ?: data_get($json, 'error.reason')
                ?: data_get($json, 'error.code')
                ?: "Razorpay API request failed for {$endpoint}.";

            $statusCode = $response->status();
            $rawBody = $response->body();
            $safeBody = mb_substr((string) $rawBody, 0, 800);

            Log::error('Razorpay API call failed', [
                'endpoint' => $endpoint,
                'status' => $statusCode,
                'error' => $errorMessage,
                'response' => $safeBody,
            ]);

            throw new \RuntimeException("{$errorMessage} [HTTP {$statusCode}]");
        }

        if (!is_array($json)) {
            throw new \RuntimeException("Unexpected Razorpay response for {$endpoint}.");
        }

        return $json;
    }

    private function normalizeText($value, string $fallback = ''): string
    {
        if (is_string($value)) {
            return trim($value) !== '' ? $value : $fallback;
        }

        if (is_array($value)) {
            foreach (['en', 'default', 'title'] as $preferredKey) {
                if (!empty($value[$preferredKey]) && is_string($value[$preferredKey])) {
                    return $value[$preferredKey];
                }
            }

            foreach ($value as $candidate) {
                if (is_string($candidate) && trim($candidate) !== '') {
                    return $candidate;
                }
            }
        }

        if (is_numeric($value)) {
            return (string) $value;
        }

        return $fallback;
    }
}
