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
use Illuminate\Support\Facades\DB;

class DashboardRepository
{
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
        return Order::where('payment_status', 2)->sum('total_price');
    }

    public function getThisMonthRaised()
    {
        return Order::where('payment_status', 2)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->sum('total_price');
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
        return Order::with(['cause.content'])
            ->where('payment_status', '!=', 0)
            ->latest()
            ->limit(8)
            ->get();
    }

    /**
     * Get Top 5 Causes by Number of Donations
     */
    public function getTopCauses()
    {
        return Cause::with('content')
            ->withCount(['orders' => function ($query) {
                $query->where('payment_status', 2);
            }])
            ->orderBy('orders_count', 'desc')
            ->limit(5)
            ->get();
    }
}
