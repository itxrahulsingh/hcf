<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MonthlyGivingSubscription;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Razorpay\Api\Api;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MonthlyGivingController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:monthly_giving.index')->only(['index', 'export']);
        $this->middleware('can:monthly_giving.show')->only(['show']);
        $this->middleware('can:monthly_giving.edit')->only(['cancel']);
        $this->middleware('can:monthly_giving.delete')->only(['destroy']);
    }

    public function index(Request $request)
    {
        $search = $request->search ?? '';
        $status = $request->filter['status'] ?? 'all';

        $query = MonthlyGivingSubscription::query()->with('cause.content:cause_id,title');
        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('mobile', 'like', "%{$search}%")
                    ->orWhere('razorpay_subscription_id', 'like', "%{$search}%");
            });
        }
        if ($status !== 'all') {
            $query->where('status', $status);
        }

        $subscriptions = $query->latest()->paginate(20)->withQueryString();
        $totalActive = MonthlyGivingSubscription::where('status', 'active')->count();
        $totalCancelled = MonthlyGivingSubscription::where('status', 'cancelled')->count();
        $monthlyVolume = (float) MonthlyGivingSubscription::where('status', 'active')->sum('amount');

        return Inertia::render('MonthlyGiving/Index', [
            'subscriptions' => $subscriptions,
            'search' => $search,
            'filter' => ['status' => $status],
            'can' => [
                'show' => auth()->user()?->can('monthly_giving.show') ?? false,
                'edit' => auth()->user()?->can('monthly_giving.edit') ?? false,
                'delete' => auth()->user()?->can('monthly_giving.delete') ?? false,
                'export' => auth()->user()?->can('monthly_giving.index') ?? false,
            ],
            'stats' => [
                'active_subscriptions' => $totalActive,
                'cancelled_subscriptions' => $totalCancelled,
                'monthly_volume' => $monthlyVolume,
            ],
        ]);
    }

    public function show(MonthlyGivingSubscription $subscription)
    {
        $subscription->load(['cause.content:cause_id,title', 'transactions']);
        return Inertia::render('MonthlyGiving/Show', [
            'subscription' => $subscription,
            'can' => [
                'edit' => auth()->user()?->can('monthly_giving.edit') ?? false,
                'delete' => auth()->user()?->can('monthly_giving.delete') ?? false,
            ],
        ]);
    }

    public function cancel(Request $request, MonthlyGivingSubscription $subscription)
    {
        if (!$subscription->razorpay_subscription_id || $subscription->status === 'cancelled') {
            return back()->with('error', 'Subscription is not active on Razorpay.');
        }

        $api = new Api(Setting::pull('razorpay_key_id'), Setting::pull('razorpay_key_secret'));
        $api->subscription->fetch($subscription->razorpay_subscription_id)->cancel(['cancel_at_cycle_end' => 0]);

        $subscription->update([
            'status' => 'cancelled',
            'cancelled_at' => now(),
            'cancelled_by_admin_id' => auth()->id(),
            'cancellation_reason' => $request->reason ?: 'Cancelled by admin',
        ]);

        return back()->with('success', 'Subscription cancelled successfully.');
    }

    public function destroy(MonthlyGivingSubscription $subscription)
    {
        $subscription->delete();
        return back()->with('success', 'Subscription deleted successfully.');
    }

    public function export(Request $request): StreamedResponse
    {
        $search = $request->search ?? '';
        $status = $request->filter['status'] ?? 'all';

        $query = MonthlyGivingSubscription::query()->with('cause.content:cause_id,title');
        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('mobile', 'like', "%{$search}%")
                    ->orWhere('razorpay_subscription_id', 'like', "%{$search}%");
            });
        }
        if ($status !== 'all') {
            $query->where('status', $status);
        }

        $rows = $query->latest()->get();
        $fileName = 'monthly-giving-report-' . now()->format('Y-m-d-His') . '.csv';

        return response()->streamDownload(function () use ($rows) {
            $handle = fopen('php://output', 'w');
            fputcsv($handle, ['Name', 'Email', 'Mobile', 'Cause', 'Amount', 'Status', 'Razorpay Subscription ID', 'Created At']);
            foreach ($rows as $row) {
                fputcsv($handle, [
                    $row->name,
                    $row->email,
                    $row->mobile,
                    $row->cause?->content?->title ?? '-',
                    $row->amount,
                    $row->status,
                    $row->razorpay_subscription_id,
                    optional($row->created_at)->format('Y-m-d H:i:s'),
                ]);
            }
            fclose($handle);
        }, $fileName, ['Content-Type' => 'text/csv; charset=UTF-8']);
    }
}
