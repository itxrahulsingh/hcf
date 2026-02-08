@php
$custom_css = \App\Models\Setting::pull('custom_css');
$accent_color = \App\Models\Setting::pull('accent_color');
$primary_color = \App\Models\Setting::pull('primary_color');
$secondary_color = \App\Models\Setting::pull('secondary_color');
$primary_font = \App\Models\Setting::pull('primary_font');
$secondary_font = \App\Models\Setting::pull('secondary_font');
@endphp

:root {
--accent: {{ $accent_color }} !important;
--primary: {{ $primary_color }} !important;
--secondary: {{ $secondary_color }} !important;
--primary-font: {{$primary_font}}, sans-serif;
--secondary-font: {{$secondary_font}}, sans-serif;
--hcf-primary: linear-gradient(45deg, rgb(255 51 51), rgb(237, 143, 3)); !important;
}

.hcf-gradient{
background: linear-gradient(45deg, rgb(255 51 51), rgb(237, 143, 3));
}
/* =========================================
1. RESPONSIVE HERO BANNER
========================================= */
.cause-banner-wrapper {
width: 100%;
position: relative;
overflow: hidden;
background-color: #f0f0f0;
margin-top: 0; /* Adjust if your header covers it */
}
/* Mobile Height */
.cause-banner-wrapper { height: 250px; }
/* Tablet Height */
@media (min-width: 768px) { .cause-banner-wrapper { height: 400px; } }
/* Desktop Height */
@media (min-width: 1200px) { .cause-banner-wrapper { height: 500px; } }

.cause-banner-image {
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
display: block;
}

/* =========================================
2. STICKY NAVIGATION BAR
========================================= */
.cause-sticky-nav {
<!-- position: -webkit-sticky; /* Safari support */ -->
<!-- position: sticky; -->
top: 100px;
z-index: 1020;
background-color: #fff;
box-shadow: 0 4px 15px rgba(0,0,0,0.05);
border-bottom: 1px solid #eee;
height: 60px;
display: flex;
align-items: center;
margin:20px 0;
}

.cause-sticky-nav .container {
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
width: 100%;
}

.cause-nav-list {
display: flex;
list-style: none;
margin: 0;
padding: 0;
gap: 20px;
overflow-x: auto;
white-space: nowrap;
scrollbar-width: none; /* Firefox */
-webkit-overflow-scrolling: touch;
height: 100%;
}
.cause-nav-list::-webkit-scrollbar { display: none; } /* Chrome/Safari */

.cause-nav-item {
font-weight: 600;
font-size: 0.9rem;
color: #555;
cursor: pointer;
display: flex;
align-items: center;
height: 100%;
border-bottom: 3px solid transparent;
transition: all 0.3s ease;
}

.cause-nav-item:hover, .cause-nav-item.active {
color: #ff8c00;
border-bottom-color: #ff8c00;
}

/* Social Widget Wrapper (Desktop Only) */
.nav-social-wrapper {
margin-left: 20px;
padding-left: 20px;
border-left: 1px solid #eee;
display: none;
}
@media (min-width: 992px) { .nav-social-wrapper { display: block; } }


/* =========================================
3. MOBILE DONATION ELEMENTS
========================================= */
/* Top Card (Input) - Visible Mobile Only */
.mobile-donation-card {
background: #fdfdfd;
border: 1px solid #eee;
border-radius: 12px;
padding: 20px;
margin-top: 20px;
box-shadow: 0 4px 10px rgba(0,0,0,0.03);
}

/* Sticky Bottom Footer - Visible Mobile Only */
.mobile-sticky-footer {
position: fixed;
bottom: 0;
left: 0;
width: 100%;
background: #fff;
padding: 12px 15px;
box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
z-index: 1030;
display: flex;
align-items: center;
justify-content: space-between;
gap: 15px;
border-top: 1px solid #f0f0f0;
}

/* Add padding to body on mobile so footer doesn't hide content */
@media (max-width: 991px) {
body { padding-bottom: 80px; }
}

/* Hide these on Desktop */
@media (min-width: 992px) {
.mobile-donation-card,
.mobile-sticky-footer {
display: none !important;
}
}


/* =========================================
4. DESKTOP SIDEBAR DONATION CARD
========================================= */
.sidebar-sticky-wrapper {
position: -webkit-sticky;
position: sticky;
top: 90px; /* Adjust based on header/nav height */
z-index: 10;
}

.donation-card {
background: #ffffff;
border: 1px solid #eee;
border-radius: 16px;
box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
padding: 24px;
overflow: hidden;
}

.donation-card-header { margin-bottom: 20px; text-align: center; }
.donation-card-header h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 5px; color: #222; }

/* Amount Buttons */
.amount-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
margin-bottom: 20px;
}

.amount-btn {
border: 1px solid #e0e0e0;
background: #fff;
color: #555;
padding: 10px 5px;
border-radius: 8px;
font-weight: 600;
font-size: 0.9rem;
transition: all 0.2s ease;
width: 100%;
}
.amount-btn:hover { border-color: #ff8c00; color: #ff8c00; background: #fffaf5; }
.amount-btn.active { background: #ff8c00; color: #fff; border-color: #ff8c00; box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3); }

/* Inputs */
.donation-card .input-group:focus-within,
.mobile-donation-card .input-group:focus-within {
border-color: #ff8c00 !important;
box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.15) !important;
}
.donation-card input[type=number]::-webkit-inner-spin-button,
.donation-card input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }

/* Donate Button Style */
.btn-donate-lg {
background: linear-gradient(45deg, rgb(255 51 51), rgb(237, 143, 3));
color: white;
border: none;
width: 100%;
padding: 14px;
font-size: 1.1rem;
font-weight: 700;
border-radius: 10px;
box-shadow: 0 4px 15px rgba(255, 140, 0, 0.4);
transition: transform 0.2s;
text-transform: uppercase;
letter-spacing: 0.5px;
}
.btn-donate-lg:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 140, 0, 0.5); color: white; }
.btn-donate-lg:disabled, .btn-donate-lg.disabled { background: #e0e0e0; color: #999; cursor: not-allowed; box-shadow: none; pointer-events: none; }

/* Trust Badges */
.trust-badges { margin-top: 15px; display: flex; justify-content: center; gap: 15px; font-size: 0.8rem; color: #888; }
.trust-item { display: flex; align-items: center; gap: 5px; }

.sidebar-video-card {
border-radius: 12px;
overflow: hidden;
margin-top: 20px;
box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

/* =========================================
5. CARDS (GIFTS & PRODUCTS)
========================================= */
.cause-card {
border: 1px solid #eee;
background: #fff;
transition: all 0.3s ease;
border-radius: 12px;
}
.cause-card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.08) !important; border-color: #ffdec2; }

.cause-card-img-wrapper {
background-color: #f9f9f9;
position: relative;
overflow: hidden;
}
.cause-card-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.cause-card:hover .cause-card-img-wrapper img { transform: scale(1.05); }

.cause-card-title {
font-size: 1rem;
font-weight: 600;
color: #222;
margin-bottom: 0.5rem;
}
.cause-card-price { color: #ff8c00; font-weight: 700; font-size: 1.1rem; }
.cause-card-desc { font-size: 0.85rem; color: #666; margin-bottom: 10px; }

/* Qty Controls */
.qty-control { background: #f8f9fa; border-radius: 50px; padding: 2px; border: 1px solid #e9ecef; }
.qty-btn { width: 30px; height: 30px; border-radius: 50%; border: none; background: #fff; font-weight: bold; color: #333; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.qty-btn:hover:not(:disabled) { background: #ff8c00; color: #fff; }


/* =========================================
6. TRANSPARENCY GALLERY (MIXED MEDIA)
========================================= */
.transparency-gallery-section {
/* Soft Orange Gradient */
background: linear-gradient(135deg, #fff8f3 0%, #ffecd9 100%);
border: 1px solid #ffdec2;
position: relative;
overflow: hidden;
}
.transparency-gallery-section .section-title { color: #333; font-size: 1.75rem; }
.transparency-gallery-section .separator { width: 60px; height: 3px; background-color: #ff8c00; border-radius: 2px; }

/* Video/Iframe Resets */
.transparency-gallery-section iframe,
.transparency-gallery-section video { width: 100%; height: 100%; border: none; object-fit: cover; }
.gallery-card:has(iframe):hover, .gallery-card:has(video):hover { transform: none !important; cursor: default; } /* No zoom on video */


/* =========================================
7. COMPACT MODAL STYLES
========================================= */
.modal-content { border: none; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.15); }
.modal-header { padding: 1rem 1.25rem; border-bottom: 1px solid #f0f0f0; background: #fff; border-radius: 12px 12px 0 0; }
.modal-body { padding: 1.25rem; }

/* Compact Inputs */
.form-floating > .form-control { height: 45px !important; min-height: 45px !important; font-size: 0.9rem; padding-top: 1.25rem !important; padding-bottom: 0.25rem !important; line-height: 1; }
.form-floating > textarea.form-control { height: 80px !important; padding-top: 1.5rem !important; }
.form-floating > label { padding: 0.5rem 0.75rem; font-size: 0.85rem; color: #888; }
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.1rem); opacity: 1; color: #ff8c00; }
.form-floating > .form-control:focus { border-color: #ff8c00; box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1); }

/* Payment Grid */
.payment-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 10px; margin-bottom: 15px; }
.payment-option-card { border: 1px solid #eee; border-radius: 6px; padding: 8px; text-align: center; cursor: pointer; transition: all 0.2s ease; background: #fff; position: relative; height: 100%; }
.payment-option-card:hover { border-color: #ffdec2; background: #fffaf5; }
.payment-option-card.selected { border-color: #ff8c00; background: #fff8f0; }
.payment-check-badge { position: absolute; top: -6px; right: -6px; background: #ff8c00; color: white; border-radius: 50%; width: 18px; height: 18px; font-size: 10px; display: flex; align-items: center; justify-content: center; }
.payment-name { font-weight: 600; font-size: 0.75rem; color: #444; margin-top: 4px; display: block; }
.section-label { font-size: 0.75rem; font-weight: 700; color: #6c757d; text-transform: uppercase; margin-bottom: 8px; display: block; }


/* =========================================
8. RICH CONTENT
========================================= */
.rich-content img { max-width: 100%; height: auto; border-radius: 12px; margin: 1.5rem 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.rich-content iframe, .rich-content video { width: 100%; aspect-ratio: 16 / 9; height: auto; border-radius: 12px; margin: 1.5rem 0; }
{{ $custom_css }}
