<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\PostCommentRequest;
use App\Models\Cause;
use App\Models\CauseCategory;
use App\Models\Page;
use App\Models\Post;
use App\Models\Setting;
use App\Models\Tag;
use App\Repositories\Frontend\CauseRepository;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\TwitterCard;
use Inertia\Inertia;

class CauseController extends Controller
{
    public function show($slug, CauseRepository $repository)
    {
        $data['categories'] = CauseCategory::with('content')->withCount('causes')->get();
        $data['recent_post'] = Cause::where('status', '1')->with(['content', 'user'])->latest()->take(4)->get();
        $cause = $repository->show($slug);
        $data['cause'] = $cause;
        $data['slug'] = Page::where('rendered_page', 'causes')->first()->slug;
        $data['page'] = Page::where('rendered_page', 'causes')->with('content')->first();

        $current_page_url = request()->url();
        $meta_title = $cause?->meta_title ?? $cause?->content->title;
        $meta_description = $cause?->content->meta_description;
        $meta_tags = $cause?->content->meta_tags;
        $site_name = Setting::pull('site_name');
        $tagline = $cause?->content->title;
        $meta_image = $cause->thumbnail_image_url;
        SEOMeta::setTitle($meta_title);
        SEOMeta::setDescription($meta_description);
        SEOMeta::setCanonical($current_page_url);
        SEOMeta::addMeta('robots', 'index, follow');
        SEOMeta::addKeyword(explode(',', $meta_tags));

        OpenGraph::setTitle($meta_title);
        OpenGraph::setDescription($meta_description);
        OpenGraph::setUrl($current_page_url);
        OpenGraph::setSiteName($site_name);
        OpenGraph::addProperty('type', 'website');
        OpenGraph::addImage($meta_image);

        TwitterCard::setTitle($meta_title);
        TwitterCard::setSite(config('app.twiiter_username'));
        TwitterCard::setDescription($meta_description);
        TwitterCard::setType('summary_large_image');
        TwitterCard::setImage($meta_image);
        SEOMeta::addMeta('viewport', 'width=device-width, initial-scale=1');

        $data['meta_title'] = $meta_title;
        $data['meta_description'] = $meta_description;
        $data['meta_image'] = $meta_image;
        $data['site_name'] = $site_name;

        return Inertia::render('Causes/CauseDetails', $data);
    }
}
