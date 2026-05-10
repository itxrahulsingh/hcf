<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\Admin\ReportRepository;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class ReportController extends Controller
{
    protected $repo;

    public function __construct(ReportRepository $repo)
    {
        $this->repo = $repo;
    }

    public function index(Request $request)
    {
        if ($request->has('start_date') && $request->has('end_date')) {
            $start = Carbon::parse($request->start_date)->startOfDay();
            $end   = Carbon::parse($request->end_date)->endOfDay();
        } else {
            $latestOrder = Order::latest('created_at')->first();
            if ($latestOrder) {
                $end   = Carbon::parse($latestOrder->created_at)->endOfDay();
                $start = $end->copy()->startOfMonth()->startOfDay();
            } else {
                $start = Carbon::now()->startOfMonth();
                $end   = Carbon::now()->endOfMonth();
            }
        }

        return Inertia::render('Reports/Index', [
            'stats'             => $this->repo->getSummaryStats($start, $end),
            'revenue_trend'     => $this->repo->getRevenueTrend($start, $end),
            'payment_methods'   => $this->repo->getPaymentMethods($start, $end),
            'cross_tab'         => $this->repo->getCrossTabStats($start, $end),
            'cause_deep_dive'   => $this->repo->getCauseDetailsWithTrend($start, $end),
            'geo_data'          => $this->repo->getGeoStats($start, $end),
            'revenue_breakdown' => $this->repo->getRevenueBreakdown($start, $end),
            'filters'           => ['start' => $start->format('Y-m-d'), 'end' => $end->format('Y-m-d')]
        ]);
    }
}
