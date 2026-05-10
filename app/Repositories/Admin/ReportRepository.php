<?php

namespace App\Repositories\Admin;

use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ReportRepository
{
    // --- CORE QUERY SCOPE ---
    private function getSuccessfulOrdersQuery($startDate, $endDate)
    {
        return Order::query()
            ->whereBetween('orders.created_at', [
                $startDate->format('Y-m-d H:i:s'),
                $endDate->format('Y-m-d H:i:s')
            ])
            ->where(function($q) {
                $q->where('orders.payment_status', '2')
                  ->orWhere('orders.payment_status', 2)
                  ->orWhere('orders.status', 'completed')
                  ->orWhere('orders.status', 'confirmed');
            });
    }

    // 1. KPI Cards
    public function getSummaryStats($startDate, $endDate)
    {
        $duration = $startDate->diffInDays($endDate);
        $prevStart = $startDate->copy()->subDays($duration);
        $prevEnd = $startDate->copy()->subSecond();

        $curr = $this->getSuccessfulOrdersQuery($startDate, $endDate)
            ->selectRaw('COUNT(*) as count, SUM(total_price) as revenue, AVG(total_price) as avg, COUNT(DISTINCT customer_email) as donors')
            ->first();

        $prev = $this->getSuccessfulOrdersQuery($prevStart, $prevEnd)
            ->selectRaw('COUNT(*) as count, SUM(total_price) as revenue, AVG(total_price) as avg, COUNT(DISTINCT customer_email) as donors')
            ->first();

        return [
            'revenue' => ['value' => $curr->revenue ?? 0, 'prev' => $prev->revenue ?? 0],
            'donations' => ['value' => $curr->count ?? 0, 'prev' => $prev->count ?? 0],
            'avg_gift' => ['value' => $curr->avg ?? 0, 'prev' => $prev->avg ?? 0],
            'unique_donors' => ['value' => $curr->donors ?? 0, 'prev' => $prev->donors ?? 0]
        ];
    }

    // 2. Revenue Trend (Area Chart)
    public function getRevenueTrend($startDate, $endDate)
    {
        return $this->getSuccessfulOrdersQuery($startDate, $endDate)
            ->selectRaw('DATE(orders.created_at) as date, SUM(orders.total_price) as total')
            ->groupBy('date')
            ->orderBy('date', 'ASC')
            ->get()
            ->map(fn($item) => ['date' => Carbon::parse($item->date)->format('M d'), 'total' => (float)$item->total]);
    }

    // 3. Payment vs Cause (Cross-Tab)
    public function getCrossTabStats($startDate, $endDate)
    {
        $data = $this->getSuccessfulOrdersQuery($startDate, $endDate)
            ->selectRaw('type as cause, payment_method, SUM(total_price) as total')
            ->whereNotNull('type')
            ->groupBy('type', 'payment_method')
            ->get();

        $causes = $data->pluck('cause')->unique()->values()->map(fn($c) => ucwords(str_replace('_',' ',$c)));
        $methods = $data->pluck('payment_method')->unique()->values();

        $datasets = $methods->map(function($method) use ($data, $causes) {
            $values = $causes->map(function($causeName) use ($data, $method) {
                return $data->filter(fn($row) => ucwords(str_replace('_',' ',$row->cause)) === $causeName && $row->payment_method === $method)->sum('total');
            });
            return ['label' => ucfirst($method), 'data' => $values->values()];
        });

        return ['labels' => $causes, 'datasets' => $datasets->values()];
    }

    // 4. DEEP DIVE: Specific Cause Details + Sparkline Trend
    public function getCauseDetailsWithTrend($startDate, $endDate)
    {
        // A. Get Totals per Cause Title
        $stats = $this->getSuccessfulOrdersQuery($startDate, $endDate)
            ->join('causes', 'orders.cause_id', '=', 'causes.id')
            ->join('cause_contents', function($join) {
                $join->on('causes.id', '=', 'cause_contents.cause_id')
                     ->where('cause_contents.language_code', 'en');
            })
            ->selectRaw('
                cause_contents.title,
                orders.cause_id,
                SUM(orders.total_price) as raised,
                COUNT(orders.id) as count,
                AVG(orders.total_price) as avg_gift
            ')
            ->groupBy('cause_contents.title', 'orders.cause_id')
            ->orderByDesc('raised')
            ->limit(10)
            ->get();

        // B. Get Daily Trend per Cause ID (for Sparklines)
        $trends = $this->getSuccessfulOrdersQuery($startDate, $endDate)
            ->selectRaw('cause_id, DATE(created_at) as date, SUM(total_price) as daily_total')
            ->groupBy('cause_id', 'date')
            ->get();

        // C. Merge Trend into Stats
        return $stats->map(function($cause) use ($trends) {
            $causeTrend = $trends->where('cause_id', $cause->cause_id)->sortBy('date')->pluck('daily_total')->values();
            return [
                'title' => $cause->title,
                'raised' => $cause->raised,
                'count' => $cause->count,
                'avg' => $cause->avg_gift,
                'trend' => $causeTrend->toArray() // Array of daily values for sparkline
            ];
        });
    }

    // 5. Geo Stats
    public function getGeoStats($startDate, $endDate)
    {
        return $this->getSuccessfulOrdersQuery($startDate, $endDate)
            ->selectRaw('LOWER(state) as state_key, state as name, SUM(total_price) as total, COUNT(*) as count')
            ->whereNotNull('state')->where('state', '!=', '')
            ->groupBy('state')
            ->orderByDesc('total')
            ->limit(20)
            ->get();
    }

    // 6. Payment Methods Pie
    public function getPaymentMethods($startDate, $endDate)
    {
        return $this->getSuccessfulOrdersQuery($startDate, $endDate)
            ->select('orders.payment_method', DB::raw('SUM(orders.total_price) as total'))
            ->groupBy('orders.payment_method')
            ->get();
    }

    // 7. Transaction Table
    public function getRevenueBreakdown($startDate, $endDate)
    {
        return $this->getSuccessfulOrdersQuery($startDate, $endDate)
            ->selectRaw('DATE(orders.created_at) as date, COUNT(*) as count, SUM(orders.total_price) as total')
            ->groupBy('date')
            ->orderBy('date', 'DESC')
            ->get();
    }
}
