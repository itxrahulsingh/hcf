<?php

namespace App\Repositories\Admin;

use App\Models\CaseStudy;
use App\Models\Cause;
use App\Models\FormResponse;
use App\Models\Order;
use App\Models\Portfolio;
use App\Models\Post;
use App\Models\Service;
use App\Models\Subscriber;
use App\Models\User;
use App\Support\OrderTypePermission;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardRepository
{
    private function getSuccessfulDonationsQuery()
    {
        $query = Order::query()->where('payment_status', 2);
        OrderTypePermission::applyScope($query, auth()->user());

        return $query;
    }

    /**
     * Basic Counts
     */
    public function getPostCount()
    {
        return Post::count();
    }
    public function getServiceCount()
    {
        return Service::count();
    }
    public function getPortfolioCount()
    {
        return Portfolio::count();
    }
    public function getCaseStudyCount()
    {
        return CaseStudy::count();
    }
    public function getUserCount()
    {
        return User::count();
    }
    public function getSubscribeCount()
    {
        return Subscriber::count();
    }

    /**
     * Cause & Donation Specific Data
     */
    public function getCauseCount()
    {
        return Cause::where('status', 1)->count();
    }

    public function getTotalRaisedAmount()
    {
        return $this->getSuccessfulDonationsQuery()->sum('total_price');
    }

    public function getThisMonthRaised()
    {
        return $this->getSuccessfulDonationsQuery()
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->sum('total_price');
    }

    public function getDonationCount()
    {
        return $this->getSuccessfulDonationsQuery()->count();
    }

    public function getPendingDonationCount()
    {
        $query = Order::query()
            ->where(function ($query) {
                $query->where('payment_status', 1)
                    ->orWhere(function ($inner) {
                        $inner->whereNull('payment_status')
                            ->where('status', 'pending');
                    });
            });

        OrderTypePermission::applyScope($query, auth()->user());

        return $query->count();
    }

    public function getUniqueDonorCount()
    {
        return $this->getSuccessfulDonationsQuery()
            ->whereNotNull('customer_email')
            ->where('customer_email', '!=', '')
            ->distinct('customer_email')
            ->count('customer_email');
    }

    public function getAverageDonationAmount()
    {
        return round((float) $this->getSuccessfulDonationsQuery()->avg('total_price'), 2);
    }

    public function getDonationTrend(int $days = 30)
    {
        $startDate = Carbon::today()->subDays($days - 1);

        $records = $this->getSuccessfulDonationsQuery()
            ->selectRaw('DATE(created_at) as date, COUNT(*) as donations, SUM(total_price) as total')
            ->whereDate('created_at', '>=', $startDate)
            ->groupBy('date')
            ->orderBy('date')
            ->get()
            ->keyBy('date');

        return collect(range(0, $days - 1))->map(function ($offset) use ($records, $startDate) {
            $date = $startDate->copy()->addDays($offset)->toDateString();
            $record = $records->get($date);

            return [
                'date' => Carbon::parse($date)->format('M d'),
                'full_date' => $date,
                'total' => (float) ($record->total ?? 0),
                'donations' => (int) ($record->donations ?? 0),
            ];
        })->values();
    }

    public function getPaymentMethodBreakdown()
    {
        return $this->getSuccessfulDonationsQuery()
            ->selectRaw('COALESCE(payment_method, "unknown") as payment_method, COUNT(*) as donations, SUM(total_price) as total')
            ->groupBy('payment_method')
            ->orderByDesc('total')
            ->get()
            ->map(fn ($item) => [
                'payment_method' => $item->payment_method,
                'donations' => (int) $item->donations,
                'total' => (float) $item->total,
            ]);
    }

    /**
     * Get 5 most recent form inquiries
     */
    public function getRecentInquiries()
    {
        return FormResponse::latest()->limit(5)->get();
    }

    /**
     * Get 8 most recent successful donations with Donor & Cause info
     */
    public function getRecentDonations()
    {
        $query = Order::with(['cause.content'])
            ->whereIn('payment_status', [1, 2])
            ->latest()
            ->limit(8);

        OrderTypePermission::applyScope($query, auth()->user());

        return $query->get();
    }

    /**
     * Get Top 5 Causes by Number of Donations
     */
    public function getTopCauses()
    {
        $donationTotals = Order::query()
            ->selectRaw('cause_id, COUNT(*) as donations_count, COALESCE(SUM(total_price), 0) as raised_total')
            ->where('payment_status', 2)
            ->whereNotNull('cause_id')
            ->groupBy('cause_id');
        OrderTypePermission::applyScope($donationTotals, auth()->user());

        return Cause::query()
            ->with('content')
            ->leftJoinSub($donationTotals, 'donation_totals', function ($join) {
                $join->on('causes.id', '=', 'donation_totals.cause_id');
            })
            ->select('causes.*')
            ->selectRaw('COALESCE(donation_totals.donations_count, 0) as donations_count')
            ->selectRaw('COALESCE(donation_totals.raised_total, 0) as raised_total')
            ->orderByDesc('raised_total')
            ->limit(5)
            ->get();
    }

    public function getDonationHealth()
    {
        $currentStart = now()->startOfMonth();
        $previousStart = now()->copy()->subMonth()->startOfMonth();
        $previousEnd = now()->copy()->subMonth()->endOfMonth();

        $current = $this->getSuccessfulDonationsQuery()
            ->whereBetween('created_at', [$currentStart, now()])
            ->selectRaw('COUNT(*) as donations, SUM(total_price) as total')
            ->first();

        $previous = $this->getSuccessfulDonationsQuery()
            ->whereBetween('created_at', [$previousStart, $previousEnd])
            ->selectRaw('COUNT(*) as donations, SUM(total_price) as total')
            ->first();

        return [
            'current_donations' => (int) ($current->donations ?? 0),
            'current_total' => (float) ($current->total ?? 0),
            'previous_donations' => (int) ($previous->donations ?? 0),
            'previous_total' => (float) ($previous->total ?? 0),
        ];
    }
}
