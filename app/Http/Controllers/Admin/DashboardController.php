<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\Admin\DashboardRepository;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard(DashboardRepository $repository)
    {
        $data = [
            'post_count'       => $repository->getPostCount(),
            'user_count'       => $repository->getUserCount(),
            'subscriber_count' => $repository->getSubscribeCount(),
            'service_count'    => $repository->getServiceCount(),
            'portfolio_count'  => $repository->getPortfolioCount(),
            'case_study_count' => $repository->getCaseStudyCount(),

            'cause_count'      => $repository->getCauseCount(),
            'total_raised'     => $repository->getTotalRaisedAmount(),
            'month_raised'     => $repository->getThisMonthRaised(),

            'recent_donations' => $repository->getRecentDonations(),
            'top_causes'       => $repository->getTopCauses(),
            'recent_inquiries' => $repository->getRecentInquiries(),
        ];

        return Inertia::render('Dashboard', $data);
    }
}
