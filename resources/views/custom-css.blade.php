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
--hcf-primary: linear-gradient(107deg, #FF4305 0%, #F58700 100%) !important;
}

/* --- Responsive Banner Styles --- */

.cause-banner-wrapper {
    margin-top: 100px;
width: 100%;
position: relative;
overflow: hidden;
background-color: #f0f0f0; /* Placeholder color while loading */
}

/* 1. Mobile Height */
.cause-banner-wrapper {
height: 250px;
}

/* 2. Tablet Height */
@media (min-width: 768px) {
.cause-banner-wrapper {
height: 400px;
}
}

/* 3. Desktop Height */
@media (min-width: 1200px) {
.cause-banner-wrapper {
height: 500px;
}
}

.cause-banner-image {
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
display: block;
}

/* --- Transparency Gallery Section Slider Cause Styles --- */

.transparency-gallery-section {
/* Soft Orange Gradient Background */
background: var(--hcf-primary);
border: 1px solid #ffdec2;
position: relative;
overflow: hidden;
color: #fff;
}

/* Title Styling */
.transparency-gallery-section .section-title {
color: #fff;
font-size: 1.75rem;
}

/* Little orange line under title */
.transparency-gallery-section .separator {
width: 60px;
height: 3px;
background-color: #fff;
border-radius: 2px;
}

/* Card Styling */
.gallery-card {
transition: transform 0.3s ease, box-shadow 0.3s ease;
border: 1px solid rgba(0,0,0,0.05);
}

.gallery-card:hover {
transform: translateY(-5px);
box-shadow: 0 10px 20px rgba(255, 140, 0, 0.15) !important; /* Orange glow shadow */
}

/* Image Zoom Effect */
.gallery-card:hover img {
transform: scale(1.1) !important;
}

/* Swiper Pagination Bullets (Custom Orange) */
.transparency-gallery-section .swiper-pagination-bullet {
background: #ffcc99;
opacity: 1;
}

.transparency-gallery-section .swiper-pagination-bullet-active {
background: #ff8c00;
width: 20px;
border-radius: 10px;
transition: width 0.3s ease;
}

/* Swiper Navigation Arrows (Small adjustments) */
.transparency-gallery-section .swiper-button-next,
.transparency-gallery-section .swiper-button-prev {
color: #ff8c00;
background: rgba(255, 255, 255, 0.8);
width: 35px;
height: 35px;
border-radius: 50%;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.transparency-gallery-section .swiper-button-next:after,
.transparency-gallery-section .swiper-button-prev:after {
font-size: 14px;
font-weight: bold;
}

/* Update .img-wrapper to handle iframes properly */
.transparency-gallery-section .img-wrapper iframe {
width: 100%;
height: 100%;
border: none;
}

/* Ensure video controls are visible and accessible */
.transparency-gallery-section video {
object-fit: cover;
width: 100%;
height: 100%;
}

/* Pause hover effect for Videos so they don't zoom while playing */
.gallery-card:has(iframe):hover img,
.gallery-card:has(video):hover video {
transform: none !important;
}
.gallery-card:has(iframe):hover,
.gallery-card:has(video):hover {
cursor: default;
/* Optional: Disable the lift effect for videos if it disturbs clicking */
/* transform: none; */
}

/* --- Cause Product & Gift Card Styles --- */

.cause-card {
border: 1px solid #eee;
background: #fff;
transition: all 0.3s ease;
border-radius: 12px; /* Softer corners */
overflow: hidden;
}

.cause-card:hover {
transform: translateY(-5px);
box-shadow: 0 12px 24px rgba(0,0,0,0.08) !important;
border-color: #ffdec2; /* Orange tint on hover */
}

/* Image Wrapper to ensure aspect ratio */
.cause-card-img-wrapper {
height: 180px;
width: 100%;
background-color: #f9f9f9;
position: relative;
overflow: hidden;
}

.cause-card-img-wrapper img {
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 0.5s ease;
}

.cause-card:hover .cause-card-img-wrapper img {
transform: scale(1.05);
}

/* Typography & Layout */
.cause-card-title {
font-size: 1rem;
font-weight: 600;
color: #222;
/* Limit title to 2 lines to maintain height */
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
height: 48px; /* Fixed height for title area */
margin-bottom: 0.5rem;
}

.cause-card-price {
color: #ff8c00; /* Primary Orange */
font-weight: 700;
font-size: 1.1rem;
}

/* Limit description text */
.cause-card-desc {
font-size: 0.85rem;
color: #666;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
margin-bottom: 10px;
}

/* Quantity Control Styling */
.qty-control {
background: #f8f9fa;
border-radius: 50px;
padding: 2px;
border: 1px solid #e9ecef;
}
.qty-btn {
width: 30px;
height: 30px;
border-radius: 50%;
border: none;
background: #fff;
font-weight: bold;
color: #333;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.qty-btn:hover:not(:disabled) {
background: #ff8c00;
color: #fff;
}

/* --- Rich Content Styling (for Description, Projects, Updates) --- */
.rich-content {
color: #444;
line-height: 1.8;
font-size: 1rem;
}

.rich-content h1,
.rich-content h2,
.rich-content h3,
.rich-content h4 {
color: #222;
font-weight: 700;
margin-top: 1.5rem;
margin-bottom: 1rem;
}

.rich-content p {
margin-bottom: 1.25rem;
}

/* Make images inside content responsive and pretty */
.rich-content img {
max-width: 100%;
height: auto;
border-radius: 12px;
margin: 1.5rem 0;
box-shadow: 0 4px 12px rgba(0,0,0,0.08);
display: block;
}

/* Make iframes (YouTube/Vimeo) responsive */
.rich-content iframe,
.rich-content video {
width: 100%;
aspect-ratio: 16 / 9; /* Modern CSS property for video ratio */
height: auto;
border-radius: 12px;
margin: 1.5rem 0;
border: none;
box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.rich-content ul,
.rich-content ol {
padding-left: 1.5rem;
margin-bottom: 1.5rem;
}

.rich-content li {
margin-bottom: 0.5rem;
}

.rich-content blockquote {
border-left: 4px solid #ff8c00;
background: #fff8f3;
padding: 1rem 1.5rem;
border-radius: 0 8px 8px 0;
font-style: italic;
color: #555;
margin: 1.5rem 0;
}

/* --- Modern FAQ Accordion Styles --- */
.custom-accordion .accordion-item {
border: 1px solid #f0f0f0;
border-radius: 12px !important;
margin-bottom: 16px;
overflow: hidden;
background: #fff;
box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.custom-accordion .accordion-button {
font-weight: 600;
color: #333;
background-color: #fff;
padding: 1.25rem;
box-shadow: none !important; /* Remove blue glow */
}

.custom-accordion .accordion-button:not(.collapsed) {
color: #ff8c00; /* Orange text when open */
background-color: #fffaf5; /* Very light orange bg */
}

/* Custom Icon rotation */
.custom-accordion .accordion-button::after {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23333'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
transition: transform 0.3s ease;
}

.custom-accordion .accordion-button:not(.collapsed)::after {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ff8c00'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
transform: rotate(-180deg);
}

.custom-accordion .accordion-body {
padding: 0 1.25rem 1.25rem 1.25rem;
color: #666;
line-height: 1.6;
}

/* --- Sidebar Donation Card Styles --- */

.sidebar-sticky-wrapper {
position: sticky;
top: 100px; /* Adjust based on your header height */
z-index: 10;
}

.donation-card {
background: #ffffff;
border: 1px solid #eee;
border-radius: 16px;
box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
padding: 24px;
overflow: hidden;
position: relative;
}

/* Header Section */
.donation-card-header {
margin-bottom: 20px;
text-align: center;
}
.donation-card-header h3 {
font-size: 1.25rem;
font-weight: 700;
margin-bottom: 5px;
color: #222;
}

/* Amount Buttons Grid */
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

.amount-btn:hover {
border-color: #ff8c00;
color: #ff8c00;
background: #fffaf5;
}

.amount-btn.active {
background: #ff8c00;
color: #fff;
border-color: #ff8c00;
box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3);
}

/* Summary Section */
.donation-summary {
background: #f9f9f9;
border-radius: 8px;
padding: 15px;
margin-bottom: 20px;
}

.summary-row {
display: flex;
justify-content: space-between;
margin-bottom: 8px;
font-size: 0.95rem;
color: #666;
}

.summary-row.total {
margin-top: 10px;
padding-top: 10px;
border-top: 1px dashed #ddd;
font-weight: 700;
color: #222;
font-size: 1.1rem;
margin-bottom: 0;
}

/* Donate Button */
.btn-donate-lg {
background: linear-gradient(45deg, #ff8c00, #ffaa33);
color: white;
border: none;
width: 100%;
padding: 14px;
font-size: 1.1rem;
font-weight: 700;
border-radius: 50px;
box-shadow: 0 4px 15px rgba(255, 140, 0, 0.4);
transition: transform 0.2s;
text-transform: uppercase;
letter-spacing: 0.5px;
}

.btn-donate-lg:hover:not(:disabled) {
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(255, 140, 0, 0.5);
color: white;
}

.btn-donate-lg:disabled {
background: #ccc;
cursor: not-allowed;
box-shadow: none;
}

/* Trust Badges */
.trust-badges {
margin-top: 15px;
display: flex;
justify-content: center;
gap: 15px;
font-size: 0.8rem;
color: #888;
}

.trust-item {
display: flex;
align-items: center;
gap: 5px;
}

/* Sidebar Video */
.sidebar-video-card {
border-radius: 12px;
overflow: hidden;
margin-top: 20px;
box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

/* --- Sidebar Input Styling --- */

/* Remove standard focus outline from input to style the container instead */
.donation-card .input-group:focus-within {
border-color: #ff8c00 !important;
box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.15) !important;
}

.donation-card .input-group-text {
background-color: #f8f9fa;
color: #666;
}

/* Hide arrow keys in number input */
.donation-card input[type=number]::-webkit-inner-spin-button,
.donation-card input[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

.donation-card input[type=number] {
-moz-appearance: textfield;
}

/* Amount Buttons Active State */
.amount-btn.active {
background: #ff8c00;
color: #fff;
border-color: #ff8c00;
}

/* Disabled button state */
.btn-donate-lg.disabled {
pointer-events: none;
background: #e0e0e0;
color: #999;
box-shadow: none;
}

/* --- Compact Donation Modal Styles --- */

.modal-content {
border: none;
border-radius: 12px;
box-shadow: 0 10px 40px rgba(0,0,0,0.15);
}

.modal-header {
padding: 1rem 1.25rem; /* Reduced padding */
border-bottom: 1px solid #f0f0f0;
background: #fff;
border-radius: 12px 12px 0 0;
}

.modal-body {
padding: 1.25rem; /* Reduced padding */
}

/* COMPACT FLOATING LABELS */
/* Force height to be smaller (45px instead of default ~58px) */
.form-floating > .form-control {
height: 45px !important;
min-height: 45px !important;
font-size: 0.9rem;
border-radius: 6px;
border: 1px solid #e0e0e0;
padding-top: 1.25rem !important; /* Space for label */
padding-bottom: 0.25rem !important;
line-height: 1;
}

.form-floating > textarea.form-control {
height: 80px !important; /* Specific height for textarea */
padding-top: 1.5rem !important;
}

/* Adjust label text size and position */
.form-floating > label {
padding: 0.5rem 0.75rem;
font-size: 0.85rem;
color: #888;
transform-origin: 0 0;
transition: all 0.2s ease-in-out;
}

/* When input is focused or has value, move label higher */
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label {
transform: scale(0.85) translateY(-0.5rem) translateX(0.1rem);
opacity: 1;
color: #ff8c00;
}

.form-floating > .form-control:focus {
border-color: #ff8c00;
box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
}

/* Payment Grid - Compact */
.payment-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); /* Smaller columns */
gap: 10px;
margin-bottom: 15px;
}

.payment-option-card {
border: 1px solid #eee;
border-radius: 6px;
padding: 8px; /* Less padding */
text-align: center;
cursor: pointer;
transition: all 0.2s ease;
background: #fff;
position: relative;
height: 100%;
}

.payment-option-card:hover {
border-color: #ffdec2;
background: #fffaf5;
}

.payment-option-card.selected {
border-color: #ff8c00;
background: #fff8f0;
}

.payment-name {
font-weight: 600;
font-size: 0.75rem; /* Smaller text */
color: #444;
margin-top: 4px;
display: block;
}

.payment-check-badge {
position: absolute;
top: -6px;
right: -6px;
background: #ff8c00;
color: white;
border-radius: 50%;
width: 18px;
height: 18px;
font-size: 10px;
display: flex;
align-items: center;
justify-content: center;
}

/* Section Headers */
.section-label {
font-size: 0.75rem;
font-weight: 700;
color: #6c757d;
text-transform: uppercase;
letter-spacing: 0.5px;
margin-bottom: 8px;
display: block;
}
{{ $custom_css }}
