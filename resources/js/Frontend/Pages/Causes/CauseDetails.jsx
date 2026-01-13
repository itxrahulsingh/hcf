import { Link, useForm } from "@inertiajs/react"
import moment from "moment"
import CauseLayout from "@/Frontend/Layouts/CauseLayout"
import { addCart, decreaseCart, increaseCart, removeCart, clearCart } from "@/Redux/features/Cart/cart"
import limitString from "@/utils/limitString.js"
import removeHTMLTags from "@/utils/removeHTMLTags.js"
import { Icon } from "@iconify/react"
import SeoMeta from "@/utils/SeoMeta"
import { useDispatch, useSelector } from "react-redux"
import ProcessContent from "@/utils/ProcessContent"
import translate from "@/utils/translate"
import FrontendLayout from "@/Frontend/Layouts/FrontendLayout"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import React, { useState, useEffect } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Amount from "@/Components/Amount"
import useStatesByCountry from "@/hooks/useStatesByCountry"
import SocialWidget from "@/Frontend/Components/Widget/SocialWidget"

export default function CauseDetails({
    cause,
    categories,
    recent_post,
    products,
    slug,
    page,
    payment_gateway,
    terms_condition_url,
    manual_payment_gateways,
    meta_title,
    meta_description,
    meta_image,
    site_name,
    tagline
}) {
    const dispatch = useDispatch()
    const { carts, coupon } = useSelector((state) => state.carts)

    // --- 1. Totals Calculation ---
    const subtotal = carts.reduce((total, item) => total + Number(item.price || 0) * (item.quantity || 1), 0)
    let discount = 0
    if (coupon) {
        const value = Number(coupon.discount_value || 0)
        discount = coupon.discount_type === "fixed" ? value : (subtotal * value) / 100
    }
    const total = subtotal - discount

    // --- 2. Configurations & Settings ---
    const page_settings = JSON.parse(localStorage.getItem("page_settings")) || {}
    const { is_show_cause_details_sidebar } = page_settings
    const captchaSiteKey = localStorage.getItem("google_captcha_site_key") ? JSON.parse(localStorage.getItem("google_captcha_site_key")) : []
    const is_active_google_captcha = localStorage.getItem("is_active_google_captcha")
        ? JSON.parse(localStorage.getItem("is_active_google_captcha"))
        : []

    // --- 3. State Management ---
    const [captchaVerified, setCaptchaVerified] = useState(false)
    const [captchaError, setCaptchaError] = useState(null)
    const [isCheckouting, setIsCheckouting] = useState(false)
    const [selectedGateway, setSelectedGateway] = useState(null)
    const [receiptFile, setReceiptFile] = useState(null)
    const [special_image, setSpecialImage] = useState(null)
    const { states } = useStatesByCountry("IN")
    const [showDonateModal, setShowDonateModal] = useState(false)
    const [openFaqIndex, setOpenFaqIndex] = useState(null)
    const [localAmount, setLocalAmount] = useState("")

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    // --- 4. Main Form Hook ---
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        state: "",
        pancard: "",
        orderNotes: "",
        coupon: coupon,
        items: carts, // Initial state
        agreed: false,
        is_80g: false,
        paymentMethod: "",
        transactionId: "",
        receiptFile: null,
        special_name: "",
        special_date: "",
        special_image: null,
        special_message: "",
        type: cause?.type || "",
        cause_id: cause?.id || null
    })

    useEffect(() => {
        setData("items", carts)
    }, [carts])
    // ==================================================================

    // --- 5. Special Dedication Config ---
    const getSpecialConfig = () => {
        const type = cause?.type
        let config = {
            title: "Special Dedication Details",
            showName: true,
            nameLabel: "Name",
            showDate: true,
            dateLabel: "Date",
            showImage: true,
            imageLabel: "Upload Photo",
            showMessage: true,
            messageLabel: "Message"
        }
        switch (type) {
            case "valentine_day":
                config = { ...config, title: "Valentine Day", nameLabel: "Valentine's Name", messageLabel: "Message from Children" }
                break
            case "birthday":
                config = { ...config, title: "Birthday Details", nameLabel: "Birthday Boy/Girl Name" }
                break
            case "anniversary":
                config = { ...config, title: "Anniversary Details", nameLabel: "Couple Name" }
                break
            case "in_memory":
            case "sadhu_seva":
            case "tiffin_seva":
            case "gau_seva":
            case "pitru_paksha":
            case "homeless_needy":
                config = {
                    ...config,
                    title: "Seva / Distribution",
                    nameLabel: "Sponsored By",
                    dateLabel: "Date of Distribution",
                    showImage: false,
                    showMessage: false
                }
                break
            default:
                break
        }
        return config
    }
    const specialConfig = getSpecialConfig()

    useEffect(() => {
        const hasForeignItems = carts.some((item) => item.cause_id && item.cause_id !== cause.id)
        if (hasForeignItems) {
            dispatch(clearCart())
            setLocalAmount("")
        } else {
            const currentCauseItem = carts.find((item) => item.type === "cause" && item.id === cause.id)
            if (currentCauseItem) {
                setLocalAmount(currentCauseItem.price)
            } else {
                setLocalAmount("")
            }
        }
    }, [cause.id])

    // Update selected gateway info
    useEffect(() => {
        if (data.paymentMethod) {
            const gateway = manual_payment_gateways.find((gateway) => gateway?.content?.gateway_name === data.paymentMethod)
            setSelectedGateway(gateway)
            if (!gateway) {
                setData("transactionId", "")
                setData("receiptFile", null)
                setReceiptFile(null)
            }
        }
    }, [data.paymentMethod])

    // Handle Donation Input Changes (Input + Preset Buttons)
    const handleDonationChange = (value) => {
        setLocalAmount(value)
        const numericVal = parseFloat(value)

        // Remove existing donation first to prevent stacking/loops
        dispatch(removeCart({ id: cause.id, type: "cause" }))

        // Add new valid donation
        if (value && !isNaN(numericVal) && numericVal > 0) {
            dispatch(
                addCart({
                    id: cause.id,
                    type: "cause",
                    content: { ...cause, price: numericVal },
                    quantity: 1,
                    cause_id: cause.id
                })
            )
        }
    }

    const handleCaptchaChange = (value) => {
        if (is_active_google_captcha === "1") {
            if (value) {
                setData("captchaToken", value)
                setCaptchaVerified(true)
                setCaptchaError(null)
            } else {
                setCaptchaVerified(false)
            }
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setReceiptFile(file)
        setData("receiptFile", file)
    }
    const handleSFileChange = (e) => {
        const file = e.target.files[0]
        setSpecialImage(file)
        setData("special_image", file)
    }

    const handlePlaceOrder = (e) => {
        setIsCheckouting(true)
        e.preventDefault()
        if (!captchaVerified && is_active_google_captcha === "1") {
            setCaptchaError(translate("Please complete the captcha verification"))
            return
        }
        post(route("checkout.store"), { onSuccess: () => {} })
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 120
            window.scrollTo({ top: y, behavior: "smooth" })
        }
    }

    const galleryItems = (() => {
        try {
            let items = []
            if (Array.isArray(cause?.gallery_images)) items = [...cause.gallery_images]
            else if (cause?.gallery_images) items = [...JSON.parse(cause.gallery_images)]
            return items.map((url) => {
                if (url.includes("youtube.com") || url.includes("youtu.be")) {
                    const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/)([^&?]+))/)?.[1]
                    return { type: "youtube", url: `https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0` }
                } else if (url.match(/\.(mp4|webm|ogg)$/i)) {
                    return { type: "video", url: url }
                } else {
                    return { type: "image", url: url }
                }
            })
        } catch {
            return []
        }
    })()

    const faqItems = (() => {
        try {
            if (Array.isArray(cause?.content?.faq)) return cause.content.faq
            return JSON.parse(cause?.content?.faq || "[]")
        } catch {
            return []
        }
    })()

    function convertYouTube(url) {
        if (!url) return ""
        const normal = url.match(/v=([^&]+)/)
        if (normal) return `https://www.youtube.com/embed/${normal[1]}?mute=1`
        const short = url.match(/youtu\.be\/([^?]+)/)
        if (short) return `https://www.youtube.com/embed/${short[1]}?mute=1`
        return url
    }

    // SEO
    SeoMeta(
        cause?.content?.title ?? cause?.meta_title,
        meta_title ?? cause?.meta_title,
        cause?.meta_tags,
        meta_description ?? limitString(removeHTMLTags(cause?.meta_description), 150),
        meta_image ?? cause?.thumbnail_image,
        site_name
    )

    const pageHeaderData = {
        title: cause.content?.title,
        breadcrumb: [
            { label: translate("Home"), url: "/" },
            { label: translate("Cause"), url: route("pages.show", slug) },
            { label: cause?.content?.title, url: null }
        ]
    }

    return (
        <FrontendLayout>
            <CauseLayout
                pageHeaderData={pageHeaderData}
                causeDetails={true}
                causeDetailsTitle={cause?.content?.title}
                causeDetailsBannerImageUrl={cause?.banner_image}
                causeDetailsCategory={cause?.category?.content?.title}
                causeDetailsDate={moment(cause?.created_at).format("ll")}
                causeDetailsUser={cause?.user?.name}
                is_show_cause_details_sidebar={is_show_cause_details_sidebar}
            >
                {/* ... (Sticky Nav code remains same) ... */}
                <div className="cause-sticky-nav">
                    <div className="container">
                        <ul className="cause-nav-list">
                            <li className="cause-nav-item" onClick={() => scrollToSection("donate-section")}>
                                <Icon icon="mdi:gift-outline" className="me-2 fs-5" />
                                {translate("Overview & Donate")}
                            </li>
                            <li className="cause-nav-item" onClick={() => scrollToSection("content-section")}>
                                <Icon icon="mdi:format-align-left" className="me-2 fs-5" />
                                {translate("Content")}
                            </li>
                            {cause?.content?.projects && (
                                <li className="cause-nav-item" onClick={() => scrollToSection("project-section")}>
                                    <Icon icon="mdi:clipboard-list-outline" className="me-2 fs-5" />
                                    {translate("Project")}
                                </li>
                            )}
                            {faqItems.length > 0 && (
                                <li className="cause-nav-item" onClick={() => scrollToSection("faq-section")}>
                                    <Icon icon="mdi:chat-question-outline" className="me-2 fs-5" />
                                    {translate("FAQ")}
                                </li>
                            )}
                            {cause?.content?.updates && (
                                <li className="cause-nav-item" onClick={() => scrollToSection("updates-section")}>
                                    <Icon icon="mdi:bell-ring-outline" className="me-2 fs-5" />
                                    {translate("Updates")}
                                </li>
                            )}
                        </ul>
                        <div className="nav-social-wrapper">
                            <SocialWidget />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className={`${cause.type === "birthday" ? "col-md-12" : "col-md-8"}`}>

                        {/* Mobile Donation Card (Hidden on Desktop) */}
                        <div className="mobile-donation-card d-lg-none" id="donate-section">
                            {/* ... (Existing logic for Mobile Donation Card) ... */}
                             <h5 className="fw-bold mb-3">{translate("Make a Donation")}</h5>
                            {cause?.custom_donation_amounts && (
                                <div className="amount-grid mb-3">
                                    {(Array.isArray(cause.custom_donation_amounts)
                                        ? cause.custom_donation_amounts
                                        : cause.custom_donation_amounts.split(",")
                                    ).map((val, idx) => {
                                        const btnAmount = Number(val)
                                        const isSelected = Number(localAmount) === btnAmount
                                        return (
                                            <button
                                                key={idx}
                                                type="button"
                                                className={`amount-btn ${isSelected ? "active" : ""}`}
                                                onClick={() => handleDonationChange(btnAmount)}
                                            >
                                                <Amount amount={btnAmount.toFixed(0)} />
                                            </button>
                                        )
                                    })}
                                </div>
                            )}
                            <div className="input-group input-group-lg border rounded-3 overflow-hidden bg-white">
                                <span className="input-group-text bg-white border-0 fw-bold text-muted">
                                    <Amount amount={0} showSymbolOnly={true} />
                                </span>
                                <input
                                    type="number"
                                    className="form-control border-0 fw-bold fs-5 text-dark"
                                    placeholder="Custom Amount"
                                    value={localAmount}
                                    onChange={(e) => handleDonationChange(e.target.value)}
                                />
                            </div>
                            {(() => {
                                const minAmount = Number(cause?.min_amount || 1)
                                if (total > 0 && total < minAmount)
                                    return (
                                        <div className="text-danger small mt-2 d-flex align-items-center">
                                            <Icon icon="mdi:alert-circle-outline" className="me-1" /> Min total: <Amount amount={minAmount} />
                                        </div>
                                    )
                            })()}
                        </div>

                        {/* Gifts Section (Remains Same) */}
                        {cause?.have_gift == 1 && cause?.gifts?.length > 0 && (
                            <div className="cs_cause_details_wrap">
                                <h3 className="mb-4">Select a Gift</h3>
                                <div className="row g-4">
                                    {cause.gifts.map((gift, idx) => {
                                        const cartItem = carts.find((i) => i.id === gift.id && i.type === "gift")
                                        const quantity = cartItem ? cartItem.quantity : 0
                                        return (
                                            <div key={idx} className="col-6 col-sm-4 col-md-3">
                                                <div className="cause-card h-100 d-flex flex-column shadow-sm">
                                                    <div className="cause-card-img-wrapper">
                                                        {gift.gift_image ? (
                                                            <img src={gift.gift_image} alt={gift.content?.title} />
                                                        ) : (
                                                            <div className="d-flex align-items-center justify-content-center h-100 bg-light text-muted">No Image</div>
                                                        )}
                                                    </div>
                                                    <div className="card-body p-3 d-flex flex-column">
                                                        <div className="cause-card-title">{gift.content?.title}</div>
                                                        <div className="d-flex justify-content-between mb-3">
                                                            <span className="cause-card-price">
                                                                <Amount amount={Number(gift.amount || 0).toFixed(2)} />
                                                            </span>
                                                        </div>
                                                        <div className="mt-auto">
                                                            <div className="qty-control d-flex justify-content-between align-items-center w-100">
                                                                <button
                                                                    className="qty-btn"
                                                                    disabled={!cartItem || quantity === 0}
                                                                    onClick={() => dispatch(decreaseCart({ id: gift.id, type: "gift" }))}
                                                                >
                                                                    <Icon icon="ic:round-minus" />
                                                                </button>
                                                                <span className="fw-bold mx-2">{quantity}</span>
                                                                <button
                                                                    className="qty-btn"
                                                                    onClick={() =>
                                                                        cartItem
                                                                            ? dispatch(increaseCart({ id: gift.id, type: "gift" }))
                                                                            : dispatch(
                                                                                  addCart({
                                                                                      id: gift.id,
                                                                                      type: "gift",
                                                                                      content: gift,
                                                                                      quantity: gift.min_qty || 1,
                                                                                      cause_id: cause.id
                                                                                  })
                                                                              )
                                                                    }
                                                                >
                                                                    <Icon icon="ic:round-plus" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Products Section - FIX 2 Applied Here */}
                        {cause?.have_product == 1 && products?.length > 0 && (
                            <div className="mt-5">
                                <h3 className="mb-4">Products</h3>
                                <div className="row g-4">
                                    {products.map((product, idx) => {
                                        const cartItem = carts.find((i) => i.id === product.id && i.type === "product")
                                        const quantity = cartItem ? cartItem.quantity : 1
                                        const finalPrice = Number(product.discount_price || product.price || 0)
                                        return (
                                            <div key={idx} className="col-12 col-sm-6 col-md-4">
                                                <div className="cause-card h-100 d-flex flex-column shadow-sm">
                                                    {/* ... Image ... */}
                                                    <div className="cause-card-img-wrapper">
                                                        {product.thumbnail_image ? (
                                                            <img src={product.thumbnail_image} alt={product.content?.title} />
                                                        ) : (
                                                            <div className="d-flex align-items-center justify-content-center bg-light text-muted h-100">
                                                                No Image
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="card-body p-3 d-flex flex-column">
                                                        <div className="cause-card-title">{product.content?.title}</div>
                                                        <div className="cause-card-desc">
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: removeHTMLTags(product?.content?.short_description || "")
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="mt-auto pt-2 border-top">
                                                            <div className="d-flex justify-content-between mb-3">
                                                                <span className="cause-card-price">
                                                                    <Amount amount={finalPrice.toFixed(2)} /> <span className="text-muted fs-6 fw-normal">/ Unit</span>
                                                                </span>
                                                            </div>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="qty-control d-flex align-items-center px-1" style={{ width: "100px" }}>
                                                                    <button
                                                                        className="qty-btn"
                                                                        style={{ width: "24px", height: "24px" }}
                                                                        disabled={!cartItem || quantity === 1}
                                                                        onClick={() => dispatch(decreaseCart({ id: product.id, type: "product" }))}
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <span className="mx-auto fw-bold small">{quantity}</span>
                                                                    <button
                                                                        className="qty-btn"
                                                                        style={{ width: "24px", height: "24px" }}
                                                                        onClick={() =>
                                                                            cartItem
                                                                                ? dispatch(increaseCart({ id: product.id, type: "product" }))
                                                                                : dispatch(
                                                                                      addCart({
                                                                                          id: product.id,
                                                                                          type: "product",
                                                                                          content: product,
                                                                                          quantity: product.min_quantity || 1,
                                                                                          cause_id: cause.id
                                                                                      })
                                                                                  )
                                                                        }
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>
                                                                {!cartItem ? (
                                                                    <button
                                                                        className="btn btn-primary btn-sm flex-grow-1 rounded-pill"
                                                                        onClick={() =>
                                                                            dispatch(
                                                                                addCart({
                                                                                    id: product.id,
                                                                                    type: "product",
                                                                                    content: product,
                                                                                    quantity: product.min_quantity || 1,
                                                                                    cause_id: cause.id
                                                                                })
                                                                            )
                                                                        }
                                                                    >
                                                                        Add
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        className="btn btn-outline-danger btn-sm flex-grow-1 rounded-pill"
                                                                        onClick={() => dispatch(removeCart({ id: product.id, type: "product" }))}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                )}
                                                            </div>
                                                            {["birthday"].includes(cause.type) && (
                                                                <button
                                                                    className={`btn-donate-lg mt-2`}
                                                                    onClick={() => {
                                                                        // ========== FIX 2: Check if item exists before adding ==========
                                                                        if (!cartItem) {
                                                                            dispatch(
                                                                                addCart({
                                                                                    id: product.id,
                                                                                    type: "product",
                                                                                    content: product,
                                                                                    quantity: product.min_quantity || 1,
                                                                                    cause_id: cause.id
                                                                                })
                                                                            )
                                                                        }
                                                                        // ===============================================================
                                                                        setShowDonateModal(true)
                                                                    }}
                                                                >
                                                                    {translate("Donate Now")}
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* ... Rest of Content (Projects, FAQ, Gallery, etc.) ... */}
                        <div id="content-section" className="cs_cause_details_wrap mt-5">
                            <div className="d-flex align-items-center mb-4">
                                <h3 className="mb-0 fw-bold">Content</h3>
                            </div>
                            <div
                                className="rich-content bg-white"
                                dangerouslySetInnerHTML={{ __html: ProcessContent(cause?.content?.content || "") }}
                            />
                        </div>

                        {cause?.content?.projects && (
                            <div id="project-section" className="cs_cause_details_wrap mt-5 pt-4 border-top">
                                <div className="d-flex align-items-center mb-4">
                                    <h3 className="mb-0 fw-bold">Project</h3>
                                </div>
                                <div
                                    className="rich-content bg-white"
                                    dangerouslySetInnerHTML={{ __html: ProcessContent(cause?.content?.projects || "") }}
                                />
                            </div>
                        )}

                        {/* ... FAQ, Updates, Gallery ... */}
                        {faqItems.length > 0 && (
                            <div id="faq-section" className="cs_cause_details_wrap mt-5 pt-4 border-top">
                                <div className="d-flex align-items-center mb-4">
                                    <h3 className="mb-0 fw-bold">FAQ</h3>
                                </div>
                                <div className="accordion custom-accordion">
                                    {faqItems.map((item, idx) => (
                                        <div className="accordion-item" key={idx}>
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`accordion-button ${openFaqIndex === idx ? "" : "collapsed"}`}
                                                    type="button"
                                                    onClick={() => toggleFaq(idx)}
                                                >
                                                    {item.title}
                                                </button>
                                            </h2>
                                            <div className={`accordion-collapse collapse ${openFaqIndex === idx ? "show" : ""}`}>
                                                <div
                                                    className="accordion-body rich-content"
                                                    dangerouslySetInnerHTML={{ __html: ProcessContent(item.content || "") }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {cause?.content?.updates && (
                            <div id="updates-section" className="cs_cause_details_wrap mt-5 pt-4 border-top">
                                <div className="d-flex align-items-center mb-4">
                                    <h3 className="mb-0 fw-bold">Latest Updates</h3>
                                </div>
                                <div className="p-4 rounded-4 bg-light border border-light-subtle">
                                    <div
                                        className="rich-content"
                                        dangerouslySetInnerHTML={{ __html: ProcessContent(cause?.content?.updates || "") }}
                                    />
                                </div>
                            </div>
                        )}

                        {galleryItems.length > 0 && (
                            <div className="transparency-gallery-section mt-5 p-4 rounded-4">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold mb-2 section-title">We Ensure 100% Transparency With Your Donation</h3>
                                    <div className="separator mx-auto"></div>
                                </div>
                                <Swiper
                                    modules={[Pagination, Navigation, Autoplay]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    navigation={false}
                                    pagination={{ clickable: true, dynamicBullets: true }}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: true,
                                        pauseOnMouseEnter: true
                                    }}
                                    loop={true}
                                    speed={800}
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        576: { slidesPerView: 2 },
                                        992: { slidesPerView: 3 },
                                        1200: { slidesPerView: 4 }
                                    }}
                                    className="pb-5 px-2"
                                >
                                    {galleryItems.map((item, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="gallery-card bg-white rounded-3 shadow-sm h-100">
                                                <div className="img-wrapper rounded-2 overflow-hidden position-relative" style={{ height: "220px" }}>
                                                    {item.type === "youtube" ? (
                                                        <div className="ratio ratio-1x1 h-100 w-100">
                                                            <iframe
                                                                src={`${item.url}?autoplay=1&mute=1&playsinline=1`}
                                                                title={`Gallery Video ${idx}`}
                                                                allow="autoplay; encrypted-media; picture-in-picture"
                                                                allowFullScreen
                                                                style={{ borderRadius: "8px" }}
                                                            />
                                                        </div>
                                                    ) : item.type === "video" ? (
                                                        <video
                                                            src={item.url}
                                                            controls
                                                            className="w-100 h-100 object-fit-cover rounded-2"
                                                            style={{ backgroundColor: "#000" }}
                                                            autoPlay
                                                            muted
                                                            playsInline
                                                        />
                                                    ) : (
                                                        <>
                                                            <img src={item.url} className="w-100 h-100 object-fit-cover" />
                                                            <div className="hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center pointer-events-none">
                                                                <Icon icon="mdi:eye" className="text-white fs-2 opacity-0" />
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}
                    </div>

                    {/* Right Sidebar (Desktop Only) - Remains Same */}
                    {!["birthday", "anniversary"].includes(cause?.type) && (
                        <div className={`col-xl-4`}>
                            <div className="sidebar-sticky-wrapper">
                                <div className="donation-card">
                                    <div className="donation-card-header">
                                        <h3>{translate("Make a Donation")}</h3>
                                        <p className="text-muted small mb-0">Your support changes lives.</p>
                                    </div>
                                    <div className="donation-logic-wrapper">
                                        {cause?.custom_donation_amounts && (
                                            <div className="amount-grid">
                                                {(Array.isArray(cause.custom_donation_amounts)
                                                    ? cause.custom_donation_amounts
                                                    : cause.custom_donation_amounts.split(",")
                                                ).map((val, idx) => (
                                                    <button
                                                        key={idx}
                                                        type="button"
                                                        className={`amount-btn ${Number(localAmount) === Number(val) ? "active" : ""}`}
                                                        onClick={() => handleDonationChange(Number(val))}
                                                    >
                                                        <Amount amount={Number(val).toFixed(0)} />
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                        <div className="mb-3">
                                            <label className="form-label fw-bold small text-muted mb-1">{translate("Or Enter Custom Amount")}</label>
                                            <div className="input-group input-group-lg border rounded-3 overflow-hidden">
                                                <span className="input-group-text bg-light border-0 fw-bold text-muted">
                                                    <Amount amount={0} showSymbolOnly={true} />
                                                </span>
                                                <input
                                                    type="number"
                                                    className="form-control border-0 fw-bold fs-5 text-dark"
                                                    placeholder="0"
                                                    value={localAmount}
                                                    onChange={(e) => handleDonationChange(e.target.value)}
                                                />
                                            </div>
                                            {(() => {
                                                const minAmount = Number(cause?.min_amount || 1)
                                                if (total > 0 && total < minAmount)
                                                    return (
                                                        <div className="text-danger small mt-1 d-flex align-items-center animate__animated animate__fadeIn">
                                                            <Icon icon="mdi:alert-circle-outline" className="me-1" /> Min total:{" "}
                                                            <Amount amount={minAmount} />
                                                        </div>
                                                    )
                                            })()}
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3 pt-3 border-top">
                                            <span className="fw-bold text-secondary">{translate("Total Payable")}</span>
                                            <span className="fw-bolder fs-4 text-primary">
                                                <Amount amount={total.toFixed(2)} />
                                            </span>
                                        </div>
                                        <button
                                            className={`btn-donate-lg ${
                                                carts.length === 0 || total < Number(cause?.min_amount || 1) ? "disabled" : ""
                                            }`}
                                            disabled={carts.length === 0 || total < Number(cause?.min_amount || 1)}
                                            onClick={() => setShowDonateModal(true)}
                                        >
                                            {translate("Donate Now")}
                                        </button>
                                        <div className="trust-badges">
                                            <div className="trust-item">
                                                <Icon icon="mdi:shield-check" className="text-success fs-5" />
                                                <span>Secure Payment</span>
                                            </div>
                                            <div className="trust-item">
                                                <Icon icon="mdi:tax" className="text-primary fs-5" />
                                                <span>Tax Benefits</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {cause?.video_url && (
                                    <div className="sidebar-video-card">
                                        <div className="ratio ratio-16x9">
                                            <iframe
                                                src={convertYouTube(cause.video_url)}
                                                title="Cause Video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Sticky Footer & Modal Code (Remains Same) */}
                <div className="mobile-sticky-footer d-lg-none animate__animated animate__slideInUp">
                    <div className="d-flex flex-column">
                        <span className="small text-muted lh-1">{translate("Total")}</span>
                        <span className="fw-bolder fs-4 text-primary lh-1 mt-1">
                            <Amount amount={total.toFixed(2)} />
                        </span>
                    </div>
                    <button
                        className="btn btn-primary rounded-pill fw-bold px-4 py-2 shadow-sm"
                        style={{ background: "linear-gradient(45deg, #ff8c00, #ffaa33)", border: "none", minWidth: "150px" }}
                        disabled={carts.length === 0 || total < Number(cause?.min_amount || 1)}
                        onClick={() => setShowDonateModal(true)}
                    >
                        {translate("Donate Now")}
                    </button>
                </div>

                {/* Donation Modal (Keep existing logic) */}
                {showDonateModal && <div className="modal-backdrop fade show"></div>}
                <div className={`modal fade ${showDonateModal ? "show d-block" : ""}`} tabIndex="-1" role="dialog" style={{ overflowY: "auto" }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            {/* ... Modal Header & Body ... */}
                            <div className="modal-header d-flex align-items-center justify-content-between">
                                <div>
                                    <h5 className="modal-title fs-6 fw-bold">{translate("Complete Donation")}</h5>
                                    <p className="mb-0 text-muted small">
                                        Donating{" "}
                                        <span className="fw-bold text-primary">
                                            <Amount amount={total.toFixed(2)} />
                                        </span>{" "}
                                        to <span className="fw-bold">{cause?.content?.title}</span>
                                    </p>
                                </div>
                                <button type="button" className="btn-close shadow-none small" onClick={() => setShowDonateModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handlePlaceOrder}>
                                    <span className="section-label">{translate("Personal Details")}</span>
                                    <div className="row g-2 mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                                    id="donorName"
                                                    placeholder="Name"
                                                    value={data.name}
                                                    onChange={(e) => setData("name", e.target.value)}
                                                />
                                                <label htmlFor="donorName">{translate("Full Name")} *</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="tel"
                                                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                                    id="donorPhone"
                                                    placeholder="Phone"
                                                    value={data.phone}
                                                    onChange={(e) => setData("phone", e.target.value)}
                                                />
                                                <label htmlFor="donorPhone">{translate("Phone Number")} *</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                                    id="donorEmail"
                                                    placeholder="Email"
                                                    value={data.email}
                                                    onChange={(e) => setData("email", e.target.value)}
                                                />
                                                <label htmlFor="donorEmail">{translate("Email Address")} *</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.address ? "is-invalid" : ""}`}
                                                    id="donorAddress"
                                                    placeholder="Address"
                                                    value={data.address}
                                                    onChange={(e) => setData("address", e.target.value)}
                                                />
                                                <label htmlFor="donorAddress">{translate("Address")} *</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-floating">
                                                <select
                                                    className="form-select"
                                                    id="donorState"
                                                    value={data.state}
                                                    onChange={(e) => setData("state", e.target.value)}
                                                    style={{ paddingTop: "0.25rem" }}
                                                >
                                                    <option value="">State</option>
                                                    {states.map((s) => (
                                                        <option key={s} value={s}>
                                                            {s}
                                                        </option>
                                                    ))}
                                                </select>
                                                <label htmlFor="donorState">{translate("State")} *</label>
                                            </div>
                                        </div>
                                    </div>

                                    {!!cause?.is_special && (
                                        <div className="bg-light p-3 rounded-2 mb-3 border border-dashed">
                                            <div className="d-flex align-items-center mb-2">
                                                <Icon icon="mdi:gift-outline" className="text-primary fs-6 me-2" />
                                                <h6 className="fw-bold mb-0 text-dark small">{translate(specialConfig.title)}</h6>
                                            </div>
                                            <div className="row g-2">
                                                {specialConfig.showName && (
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="specialName"
                                                                placeholder="Name"
                                                                value={data.special_name}
                                                                onChange={(e) => setData("special_name", e.target.value)}
                                                            />
                                                            <label htmlFor="specialName">{translate(specialConfig.nameLabel)}</label>
                                                        </div>
                                                    </div>
                                                )}
                                                {specialConfig.showDate && (
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                id="specialDate"
                                                                value={data.special_date}
                                                                onChange={(e) => setData("special_date", e.target.value)}
                                                            />
                                                            <label htmlFor="specialDate">{translate(specialConfig.dateLabel)}</label>
                                                        </div>
                                                    </div>
                                                )}
                                                {specialConfig.showImage && (
                                                    <div className="col-md-12">
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            className="form-control form-control-sm"
                                                            onChange={handleSFileChange}
                                                        />
                                                        {special_image && (
                                                            <div className="small text-success mt-1 ms-1">Selected: {special_image.name}</div>
                                                        )}
                                                    </div>
                                                )}
                                                {specialConfig.showMessage && (
                                                    <div className="col-md-12">
                                                        <div className="form-floating">
                                                            <textarea
                                                                className="form-control"
                                                                placeholder="Message"
                                                                id="specialMsg"
                                                                value={data.special_message}
                                                                onChange={(e) => setData("special_message", e.target.value)}
                                                            ></textarea>
                                                            <label htmlFor="specialMsg">{translate(specialConfig.messageLabel)}</label>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    <div className="mb-3">
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="is_80g"
                                                checked={!!data.is_80g}
                                                onChange={(e) =>
                                                    setData({ ...data, is_80g: e.target.checked, pancard: e.target.checked ? data.pancard : "" })
                                                }
                                            />
                                            <label className="form-check-label fw-semibold small ms-1" htmlFor="is_80g">
                                                {translate("I need 80G Tax Exemption Certificate")}
                                            </label>
                                        </div>
                                    </div>
                                    {data.is_80g && (
                                        <div className="mb-3 animate__animated animate__fadeIn">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="pancard"
                                                    placeholder="Pancard"
                                                    maxLength="10"
                                                    value={data.pancard || ""}
                                                    onChange={(e) => setData("pancard", e.target.value.toUpperCase())}
                                                />
                                                <label htmlFor="pancard">{translate("PAN Card Number")} *</label>
                                            </div>
                                        </div>
                                    )}

                                    <span className="section-label">{translate("Payment Method")}</span>
                                    <div className="payment-grid">
                                        {payment_gateway.is_cod_active && (
                                            <div
                                                className={`payment-option-card ${data.paymentMethod === "cod" ? "selected" : ""}`}
                                                onClick={() => setData("paymentMethod", "cod")}
                                            >
                                                {data.paymentMethod === "cod" && (
                                                    <div className="payment-check-badge">
                                                        <Icon icon="mdi:check" />
                                                    </div>
                                                )}
                                                <Icon icon="mdi:cash-multiple" className="fs-4 text-secondary mb-1" />
                                                <span className="payment-name">{translate("Cash")}</span>
                                            </div>
                                        )}
                                        {payment_gateway.is_stripe_active && (
                                            <div
                                                className={`payment-option-card ${data.paymentMethod === "stripe" ? "selected" : ""}`}
                                                onClick={() => setData("paymentMethod", "stripe")}
                                            >
                                                {data.paymentMethod === "stripe" && (
                                                    <div className="payment-check-badge">
                                                        <Icon icon="mdi:check" />
                                                    </div>
                                                )}
                                                <Icon icon="logos:stripe" className="fs-4 mb-1" />
                                                <span className="payment-name">{translate("Stripe")}</span>
                                            </div>
                                        )}
                                        {payment_gateway.is_razorpay_active && (
                                            <div
                                                className={`payment-option-card ${data.paymentMethod === "razorpay" ? "selected" : ""}`}
                                                onClick={() => setData("paymentMethod", "razorpay")}
                                            >
                                                {data.paymentMethod === "razorpay" && (
                                                    <div className="payment-check-badge">
                                                        <Icon icon="mdi:check" />
                                                    </div>
                                                )}
                                                <Icon icon="simple-icons:razorpay" className="fs-4 text-primary mb-1" />
                                                <span className="payment-name">{translate("Razorpay")}</span>
                                            </div>
                                        )}
                                        {manual_payment_gateways.map((g, i) => (
                                            <div
                                                key={i}
                                                className={`payment-option-card ${data.paymentMethod === g?.content?.gateway_name ? "selected" : ""}`}
                                                onClick={() => setData("paymentMethod", g?.content?.gateway_name)}
                                            >
                                                {data.paymentMethod === g?.content?.gateway_name && (
                                                    <div className="payment-check-badge">
                                                        <Icon icon="mdi:check" />
                                                    </div>
                                                )}
                                                <Icon icon="mdi:bank" className="fs-4 text-success mb-1" />
                                                <span className="payment-name text-truncate w-100">{g?.content?.gateway_name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {selectedGateway && (
                                        <div className="bg-light p-3 rounded-2 mb-3 border">
                                            <h6 className="fw-bold mb-2 small">{translate("Payment Instructions")}</h6>
                                            <div
                                                className="small text-muted mb-2"
                                                style={{ fontSize: "0.8rem" }}
                                                dangerouslySetInnerHTML={{ __html: selectedGateway?.content?.instructions }}
                                            />
                                            <div className="row g-2">
                                                <div className="col-7">
                                                    <div className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="txnId"
                                                            placeholder="Txn ID"
                                                            value={data.transactionId}
                                                            onChange={(e) => setData("transactionId", e.target.value)}
                                                            required
                                                        />
                                                        <label htmlFor="txnId">{translate("Transaction ID")} *</label>
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                    <input
                                                        type="file"
                                                        className="form-control form-control-sm"
                                                        style={{ height: "45px", paddingTop: "10px" }}
                                                        onChange={handleFileChange}
                                                        accept="image/*,.pdf"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-3 pt-3 border-top">
                                        {is_active_google_captcha === "1" && (
                                            <div className="mb-3 d-flex justify-content-center scale-75 origin-center">
                                                <ReCAPTCHA sitekey={captchaSiteKey} onChange={handleCaptchaChange} />
                                            </div>
                                        )}
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="agreed"
                                                checked={data.agreed}
                                                onChange={(e) => setData("agreed", e.target.checked)}
                                            />
                                            <label className="form-check-label small text-muted" htmlFor="agreed" style={{ fontSize: "0.8rem" }}>
                                                {translate("I agree to the")}{" "}
                                                <Link href={terms_condition_url} className="text-decoration-underline">
                                                    {translate("Terms & Conditions")}
                                                </Link>
                                            </label>
                                        </div>
                                        <button
                                            className="btn btn-primary rounded-pill w-100 fw-bold"
                                            style={{ background: "linear-gradient(45deg, #ff8c00, #ffaa33)", border: "none", padding: "10px" }}
                                            disabled={processing || (!captchaVerified && is_active_google_captcha === "1")}
                                        >
                                            {translate("Complete Donation")} <Amount amount={total.toFixed(2)} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </CauseLayout>
        </FrontendLayout>
    )
}
