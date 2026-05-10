<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\PaymentHistory;
use App\Models\Setting;
use App\Repositories\PaymentRepository;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\TwitterCard;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function successCallback(Request $request, $method, PaymentRepository $repository)
    {
        try {
            return $repository->paymentSuccess($method, $request);
        } catch (\Exception $exception) {
            abort(402, 'Payment failed. Please check your payment details and try again.');
        }
    }

    public function cancelCallback(Request $request, $method, PaymentRepository $repository)
    {
        return $repository->paymentCancel($method, $request);
    }

    public function razorpayPay(Request $request)
    {
        $razorpayKeyId = Setting::pull('razorpay_key_id');
        if (in_array($request->type, ['donation', 'product'], true)) {
            $paymentHistory = Order::find($request->payment_id);
        } else {
            $paymentHistory = PaymentHistory::find($request->payment_id);
        }
        $order_id = $request->order_id;
        $type = $request->type;

        return view('payment.razorpay', compact('paymentHistory', 'order_id', 'razorpayKeyId', 'type'));
    }

    public function paymentSuccess(Order $order)
    {
        $data['order'] = $order;
        $current_page_url = request()->url();
        $meta_tags = 'payment success';
        $site_name = Setting::pull('site_name');
        $tagline = __('Payment Success');

        SEOMeta::setTitle($tagline);
        SEOMeta::setCanonical($current_page_url);
        SEOMeta::addMeta('robots', 'index, follow');
        SEOMeta::addKeyword(explode(',', $meta_tags));

        OpenGraph::setUrl($current_page_url);
        OpenGraph::setSiteName($site_name);
        OpenGraph::addProperty('type', 'website');

        TwitterCard::setSite(config('app.twiiter_username'));
        TwitterCard::setType('summary_large_image');
        SEOMeta::addMeta('viewport', 'width=device-width, initial-scale=1');
        $data['meta_tags'] = $meta_tags;
        $data['tagline'] = $tagline;
        $data['site_name'] = $site_name;

        return Inertia::render('Checkout/PaymentSuccess', $data);
    }

    public function orderSuccess(Order $order, Request $request)
    {
        $data['order'] = $order;

        // SEO basic setup
        $current_page_url = request()->url();
        $meta_tags = 'order success';
        $site_name = Setting::pull('site_name');
        $tagline = __('Order Success');

        SEOMeta::setTitle($tagline);
        SEOMeta::setCanonical($current_page_url);
        SEOMeta::addMeta('robots', 'index, follow');
        SEOMeta::addKeyword(explode(',', $meta_tags));

        OpenGraph::setUrl($current_page_url);
        OpenGraph::setSiteName($site_name);
        OpenGraph::addProperty('type', 'website');

        TwitterCard::setSite(config('app.twiiter_username'));
        TwitterCard::setType('summary_large_image');
        SEOMeta::addMeta('viewport', 'width=device-width, initial-scale=1');

        $data['meta_tags'] = $meta_tags;
        $data['tagline'] = $tagline;
        $data['site_name'] = $site_name;

        return Inertia::render('Checkout/OrderSuccess', $data);
    }

    public function donationSuccess(Request $request)
    {
        $order = Order::with(['invoice', 'cause.content'])->where('order_number', $request->order_id)->firstOrFail();
        abort_unless((string) $order->payment_status === '2', 404);
        $data['order'] = $order;

        // SEO basic setup
        $current_page_url = request()->url();
        $meta_tags = 'donation success';
        $site_name = Setting::pull('site_name');
        $tagline = __('Donation Success');

        $data['invoice'] = $order->invoice;

        SEOMeta::setTitle($tagline);
        SEOMeta::setCanonical($current_page_url);
        SEOMeta::addMeta('robots', 'index, follow');
        SEOMeta::addKeyword(explode(',', $meta_tags));

        OpenGraph::setUrl($current_page_url);
        OpenGraph::setSiteName($site_name);
        OpenGraph::addProperty('type', 'website');

        TwitterCard::setSite(config('app.twiiter_username'));
        TwitterCard::setType('summary_large_image');
        SEOMeta::addMeta('viewport', 'width=device-width, initial-scale=1');

        $data['meta_tags'] = $meta_tags;
        $data['tagline'] = $tagline;
        $data['site_name'] = $site_name;

        return Inertia::render('Checkout/DonationSuccess', $data);
    }

    public function donationCancel(Request $request)
    {
        $current_page_url = request()->url();
        $meta_tags = 'donation cancel';
        $site_name = Setting::pull('site_name');
        $tagline = __('Donation Failed');

        $order = Order::with('cause.content')->where('order_number', $request->order_id)->first();
        $data['order'] = $order;

        SEOMeta::setTitle($tagline);
        SEOMeta::setCanonical($current_page_url);
        SEOMeta::addMeta('robots', 'index, follow');
        SEOMeta::addKeyword(explode(',', $meta_tags));

        OpenGraph::setUrl($current_page_url);
        OpenGraph::setSiteName($site_name);
        OpenGraph::addProperty('type', 'website');

        TwitterCard::setSite(config('app.twiiter_username'));
        TwitterCard::setType('summary_large_image');
        SEOMeta::addMeta('viewport', 'width=device-width, initial-scale=1');
        $data['meta_tags'] = $meta_tags;
        $data['tagline'] = $tagline;
        $data['site_name'] = $site_name;

        return Inertia::render('Checkout/DonationCancel', $data);
    }

    public function paymentCancel()
    {
        $current_page_url = request()->url();
        $meta_tags = 'payment cancel';
        $site_name = Setting::pull('site_name');
        $tagline = __('Payment Cancel');

        SEOMeta::setTitle($tagline);
        SEOMeta::setCanonical($current_page_url);
        SEOMeta::addMeta('robots', 'index, follow');
        SEOMeta::addKeyword(explode(',', $meta_tags));

        OpenGraph::setUrl($current_page_url);
        OpenGraph::setSiteName($site_name);
        OpenGraph::addProperty('type', 'website');

        TwitterCard::setSite(config('app.twiiter_username'));
        TwitterCard::setType('summary_large_image');
        SEOMeta::addMeta('viewport', 'width=device-width, initial-scale=1');
        $data['meta_tags'] = $meta_tags;
        $data['tagline'] = $tagline;
        $data['site_name'] = $site_name;

        return Inertia::render('Checkout/PaymentCancel', $data);
    }
}
