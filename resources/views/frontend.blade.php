<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {!! SEO::generate() !!}
    @php
    $menuRepository = app(\App\Repositories\Admin\MenuRepository::class);
    $main_menu = $menuRepository->getMenus('main_menu');
    $services_menu = $menuRepository->getMenus('services_menu');
    $footer_menu = $menuRepository->getMenus('footer_menu');
    $resources_menu = $menuRepository->getMenus('resources_menu');
    $useful_links = $menuRepository->getMenus('useful_links');
    $page_settings = app(\App\Repositories\SettingRepository::class)->getPageSettingInfo();
    $settings = app(\App\Repositories\SettingRepository::class);
    $customize_settings = $settings->getSiteSettings();
    $customize_settings['social_links']['social_list'] = json_decode($customize_settings['social_links']['social_list']);
    $fav_icon = \App\Models\Setting::pull('site_favicon');
    $primary_font = \App\Models\Setting::pull('primary_font');
    $secondary_font = \App\Models\Setting::pull('secondary_font');
    $google_captcha_site_key = \App\Models\Setting::pull('google_captcha_site_key');
    $is_active_google_captcha = \App\Models\Setting::pull('is_active_google_captcha');
    $is_show_cookie_alert = \App\Models\Setting::pull('is_show_cookie_alert');
    $is_enabled_ecommerce = \App\Models\Setting::pull('is_enabled_ecommerce');
    $meta_title = \App\Models\Setting::pull('meta_title');
    $meta_description = \App\Models\Setting::pull('meta_description');
    $meta_image = asset(\App\Models\Setting::pull('meta_image'));
    $blogs = app(\App\Repositories\Frontend\BlogRepository::class)->getPublishedBlogs();
    $causes = app(\App\Repositories\Frontend\CauseRepository::class)->getPublishedCauses();
    $popular_products = app(\App\Repositories\Frontend\ProductRepository::class)->getPopularProducts();
    $trending_products = app(\App\Repositories\Frontend\ProductRepository::class)->getTrendingProducts();

    $recent_post = \App\Models\Post::where('status', '1')->with('content')->latest()->take(4)->get();
    $categories = \App\Models\Category::with('content')->withCount('posts')->get();
    $tags = \App\Models\Tag::whereHas('posts')->pluck('name');

    $meta_tags = \App\Models\Setting::pull('meta_tags');
    $current_lang = app()->getLocale();
    $languageSettings = json_decode(\App\Models\Setting::pull('languages'), true);
    $direction = $languageSettings[$current_lang]['is_ltr'] === 'no' ? 'rtl' : '';
    $langJson = Illuminate\Support\Facades\File::get(base_path("lang/${current_lang}.json"));
    $jsonLang = json_decode($langJson, true);
    @endphp

    <meta name="robots" content="index, follow">
    <meta name="keywords" content="{{ $meta_tags }}">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family={{ $primary_font }}:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family={{ $secondary_font }}:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet" />
    <link rel="stylesheet" href="{{ mix('css/frontend/globals.css') }}">
    <script src="{{ mix('js/frontend/app.js') }}" defer></script>
    <link rel="stylesheet" href="{{ route('custom.css') }}" />

    <link rel="icon" type="image/x-icon" href="{{ $fav_icon }}">

    <script>
        localStorage.setItem('translation', JSON.stringify(@json($jsonLang)));
        localStorage.setItem('main_menu', JSON.stringify(@json($main_menu)));
        localStorage.setItem('services_menu', JSON.stringify(@json($services_menu)));
        localStorage.setItem('footer_menu', JSON.stringify(@json($footer_menu)));
        localStorage.setItem('resources_menu', JSON.stringify(@json($resources_menu)));
        localStorage.setItem('google_captcha_site_key', JSON.stringify(@json($google_captcha_site_key)));
        localStorage.setItem('is_active_google_captcha', JSON.stringify(@json($is_active_google_captcha)));
        localStorage.setItem('is_show_cookie_alert', JSON.stringify(@json($is_show_cookie_alert)));
        localStorage.setItem('is_enabled_ecommerce', JSON.stringify(@json($is_enabled_ecommerce)));
        localStorage.setItem('useful_links', JSON.stringify(@json($useful_links)));
        localStorage.setItem('blogs', JSON.stringify(@json($blogs)));
        localStorage.setItem('causes', JSON.stringify(@json($causes)));

        localStorage.setItem('recent_post', JSON.stringify(@json($recent_post)));
        localStorage.setItem('categories', JSON.stringify(@json($categories)));
        localStorage.setItem('tags', JSON.stringify(@json($tags)));

        localStorage.setItem('popular_products', JSON.stringify(@json($popular_products)));
        localStorage.setItem('trending_products', JSON.stringify(@json($trending_products)));

        localStorage.setItem('customize_settings', JSON.stringify(@json($customize_settings)));
        localStorage.setItem('page_settings', JSON.stringify(@json($page_settings)));

        window.seo = {
            meta_title: "{{ e($meta_title) }}",
            meta_description: "{{ e($meta_description) }}",
            meta_image: "{{ $meta_image }}",
            meta_tags: "{{ e($meta_tags) }}",
            og_url: "{{ url('/') }}"
        };
    </script>

    @inertiaHead
    @routes
    <style>
        .whatsapp-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #25d366;
            border-radius: 50px;
            text-align: center;
            font-size: 25px;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
            z-index: 1000;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        .whatsapp-float:hover {
            transform: scale(1.1);
            color: #FFF;
        }
        @media screen and (max-width: 767px) {
            .whatsapp-float {
                bottom: 85px;
                width: 50px;
                height: 50px;
                font-size: 25px;
            }
        }
    </style>
</head>

<body class="font-sans antialiased {{ $direction }}">
    @inertia

    <a href="https://wa.me/919625556997"
        class="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
    </a>
    {!! \App\Models\Setting::pull('html_embed_code') !!}
</body>

</html>
