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

    // Calculate Totals
    const subtotal = carts.reduce((total, item) => total + Number(item.price || 0) * (item.quantity || 1), 0)
    let discount = 0
    if (coupon) {
        const value = Number(coupon.discount_value || 0)
        discount = coupon.discount_type === "fixed" ? value : (subtotal * value) / 100
    }
    const total = subtotal - discount

    const page_settings = JSON.parse(localStorage.getItem("page_settings")) || {}
    const { is_show_cause_details_sidebar } = page_settings

    // Captcha Settings
    const captchaSiteKey = localStorage.getItem("google_captcha_site_key") ? JSON.parse(localStorage.getItem("google_captcha_site_key")) : []
    const is_active_google_captcha = localStorage.getItem("is_active_google_captcha")
        ? JSON.parse(localStorage.getItem("is_active_google_captcha"))
        : []
    const [captchaVerified, setCaptchaVerified] = useState(false)
    const [captchaError, setCaptchaError] = useState(null)
    const [isCheckouting, setIsCheckouting] = useState(false)

    // Form States
    const [selectedGateway, setSelectedGateway] = useState(null)
    const [receiptFile, setReceiptFile] = useState(null)
    const [special_image, setSpecialImage] = useState(null)
    const { states } = useStatesByCountry("IN")
    const [showDonateModal, setShowDonateModal] = useState(false)

    // FAQ Accordion State
    const [openFaqIndex, setOpenFaqIndex] = useState(null)
    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    // Main Form Hook
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        state: "",
        pancard: "",
        orderNotes: "",
        coupon: coupon,
        items: carts,
        agreed: false,
        is_80g: false,
        paymentMethod: "",
        transactionId: "",
        receiptFile: null,

        // Special Dynamic Fields
        special_name: "",
        special_date: "",
        special_image: null,
        special_message: "",

        type: cause?.type || "",
        cause_id: cause?.id || null
    })

    // --- DYNAMIC CONFIGURATION LOGIC ---
    const getSpecialConfig = () => {
        const type = cause?.type

        // Default / Fallback Config
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
            // 1. Celebration Types (All 4 Fields)
            case "valentine_day":
                config = {
                    title: "Valentine Day Details",
                    showName: true,
                    nameLabel: "Valentine's Name / Person Name",
                    showDate: true,
                    dateLabel: "Date of Celebration",
                    showImage: true,
                    imageLabel: "Upload Photo",
                    showMessage: true,
                    messageLabel: "Special Message from Children"
                }
                break
            case "birthday":
                config = {
                    title: "Birthday Details",
                    showName: true,
                    nameLabel: "Birthday Boy/Girl Name",
                    showDate: true,
                    dateLabel: "Date of Celebration",
                    showImage: true,
                    imageLabel: "Upload Photo",
                    showMessage: true,
                    messageLabel: "Special Message"
                }
                break
            case "anniversary":
                config = {
                    title: "Anniversary Details",
                    showName: true,
                    nameLabel: "Couple Name",
                    showDate: true,
                    dateLabel: "Date of Celebration",
                    showImage: true,
                    imageLabel: "Upload Photo",
                    showMessage: true,
                    messageLabel: "Special Message"
                }
                break

            // 2. Seva / Remembrance Types (Date + Name Only)
            case "in_memory": // Death Anniversary
            case "sadhu_seva":
            case "tiffin_seva":
            case "gau_seva":
            case "pitru_paksha":
            case "homeless_needy":
                config = {
                    title: "Seva / Distribution Details",
                    showName: true,
                    nameLabel: "Sponsored By Name",
                    showDate: true,
                    dateLabel: "Date of Distribution",
                    showImage: false,
                    imageLabel: "",
                    showMessage: false,
                    messageLabel: ""
                }
                break

            case "normal":
            default:
                break
        }
        return config
    }

    const specialConfig = getSpecialConfig()

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
        if (!file) {
            setSpecialImage(null)
            setData("special_image", null)
            return
        }
        if (file.size > 5 * 1024 * 1024) {
            alert(translate("File size should be less than 5MB"))
            e.target.value = null
            setSpecialImage(null)
            setData("special_image", null)
            return
        }
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"]
        if (!allowedTypes.includes(file.type)) {
            alert(translate("Only images files are allowed"))
            e.target.value = null
            setSpecialImage(null)
            setData("special_image", null)
            return
        }
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

        post(route("checkout.store"), {
            onSuccess: () => {
                // Handle success (e.g. redirect or show message)
            }
        })
    }
    const galleryItems = (() => {
        try {
            let items = []
            if (Array.isArray(cause?.gallery_images)) {
                items = [...cause.gallery_images]
            } else if (cause?.gallery_images) {
                items = [...JSON.parse(cause.gallery_images)]
            }
            return items.map((url) => {
                if (url.includes("youtube.com") || url.includes("youtu.be")) {
                    const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/)([^&?]+))/)?.[1]
                    return {
                        type: "youtube",
                        url: `https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0`,
                        thumb: `https://img.youtube.com/vi/${id}/mqdefault.jpg`
                    }
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
            {
                label: cause?.category?.content?.title,
                url: route("pages.show", {
                    slug: slug,
                    filter: { category: cause?.category?.content?.title }
                })
            },
            { label: cause?.content?.title, url: null }
        ]
    }

    function convertYouTube(url) {
        if (!url) return ""
        const normal = url.match(/v=([^&]+)/)
        if (normal) return `https://www.youtube.com/embed/${normal[1]}`
        const short = url.match(/youtu\.be\/([^?]+)/)
        if (short) return `https://www.youtube.com/embed/${short[1]}`
        return url
    }

    const [localAmount, setLocalAmount] = useState("")
    useEffect(() => {
        const cartItem = carts.find((i) => i.id === cause.id && i.type === "cause")
        if (cartItem) {
            setLocalAmount(cartItem.price)
        }
    }, [])
    const handleDonationChange = (value) => {
        setLocalAmount(value)

        const numericVal = parseFloat(value)
        if (!value || isNaN(numericVal)) {
            dispatch(removeCart({ id: cause.id, type: "cause" }))
        } else {
            dispatch(removeCart({ id: cause.id, type: "cause" }))
            dispatch(
                addCart({
                    id: cause.id,
                    type: "cause",
                    content: { ...cause, price: numericVal },
                    quantity: 1
                })
            )
        }
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
                <div className="row">
                    <div className={`${cause.type === "birthday" ? "col-md-12" : "col-md-8"}`}>
                        {/* Title Section */}
                        {/* <div className="cs_cause_details_wrap">
                            <h1 className="cs_cause_details_title">{cause?.content?.title}</h1>
                        </div> */}

                        {/* Gifts Section */}
                        {cause?.have_gift == 1 && cause?.gifts?.length > 0 && (
                            <div className="cs_cause_details_wrap mt-5">
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
                                                            <div className="d-flex align-items-center justify-content-center h-100 bg-light text-muted">
                                                                No Image
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="card-body p-3 d-flex flex-column">
                                                        <div className="cause-card-title" title={gift.content?.title}>
                                                            {gift.content?.title}
                                                        </div>

                                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                                            <span className="cause-card-price">
                                                                <Amount amount={Number(gift.amount || 0).toFixed(2)} />
                                                            </span>
                                                        </div>

                                                        {/* Bottom Action Area - Pushed to bottom */}
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
                                                                                      quantity: gift.min_qty || 1
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

                        {/* Products Section */}
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
                                                    <div className="cause-card-img-wrapper">
                                                        {product.thumbnail_image ? (
                                                            <img src={product.thumbnail_image} alt={product.content?.title} />
                                                        ) : (
                                                            <div className="d-flex align-items-center justify-content-center h-100 bg-light text-muted">
                                                                No Image
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="card-body p-3 d-flex flex-column">
                                                        <div className="d-flex justify-content-between align-items-start">
                                                            <div className="cause-card-title w-100" title={product.content?.title}>
                                                                {product.content?.title}
                                                            </div>
                                                        </div>

                                                        <div className="cause-card-desc">
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: removeHTMLTags(product?.content?.short_description || "")
                                                                }}
                                                            />
                                                        </div>

                                                        {/* Price and Actions - Pushed to Bottom */}
                                                        <div className="mt-auto pt-2 border-top">
                                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                                <span className="cause-card-price">
                                                                    <Amount amount={finalPrice.toFixed(2)} />
                                                                    <span className="text-muted fs-6 fw-normal"> / Unit</span>
                                                                </span>
                                                            </div>

                                                            {/* Action Buttons Row */}
                                                            <div className="d-flex gap-2 align-items-center">
                                                                {/* Qty Control */}
                                                                <div
                                                                    className="qty-control d-flex align-items-center px-1"
                                                                    style={{ width: "100px" }}
                                                                >
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
                                                                                      addCart({ id: product.id, type: "product", content: product })
                                                                                  )
                                                                        }
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>

                                                                {/* Add / Remove Button */}
                                                                {!cartItem ? (
                                                                    <button
                                                                        className="btn btn-primary btn-sm flex-grow-1 rounded-pill"
                                                                        onClick={() =>
                                                                            dispatch(addCart({ id: product.id, type: "product", content: product }))
                                                                        }
                                                                    >
                                                                        Add to Cart
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

                                                            {/* Birthday Special Donate Button */}
                                                            {["birthday"].includes(cause.type) && (
                                                                <button
                                                                    className="btn btn-dark w-100 mt-2 rounded-pill btn-sm"
                                                                    disabled={carts.length === 0}
                                                                    onClick={() => setShowDonateModal(true)}
                                                                >
                                                                    <Icon icon="mdi:heart" className="me-1" />
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

                        {/* --- Content (Story) Section --- */}
                        <div className="cs_cause_details_wrap mt-5">
                            <div className="d-flex align-items-center mb-4">
                                <h3 className="mb-0 fw-bold">Content</h3>
                            </div>

                            <div
                                className="rich-content bg-white"
                                dangerouslySetInnerHTML={{ __html: ProcessContent(cause?.content?.content || "") }}
                            />
                        </div>

                        {/* --- Project Details Section --- */}
                        {cause?.content?.projects && (
                            <div className="cs_cause_details_wrap mt-5 pt-4 border-top">
                                <div className="d-flex align-items-center mb-4">
                                    <h3 className="mb-0 fw-bold">Project</h3>
                                </div>

                                <div
                                    className="rich-content bg-white"
                                    dangerouslySetInnerHTML={{ __html: ProcessContent(cause?.content?.projects || "") }}
                                />
                            </div>
                        )}

                        {/* --- FAQ Section --- */}
                        {faqItems.length > 0 && (
                            <div className="cs_cause_details_wrap mt-5 pt-4 border-top">
                                <div className="d-flex align-items-center mb-4">
                                    <h3 className="mb-0 fw-bold">Frequently Asked Questions</h3>
                                </div>

                                <div className="accordion custom-accordion" id="faqAccordion">
                                    {faqItems.map((item, idx) => {
                                        const headingId = `faq-heading-${idx}`
                                        const collapseId = `faq-collapse-${idx}`
                                        const isOpen = openFaqIndex === idx

                                        return (
                                            <div className="accordion-item" key={idx}>
                                                <h2 className="accordion-header" id={headingId}>
                                                    <button
                                                        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                                                        type="button"
                                                        onClick={() => toggleFaq(idx)}
                                                        aria-expanded={isOpen}
                                                        aria-controls={collapseId}
                                                    >
                                                        {item.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                                    aria-labelledby={headingId}
                                                >
                                                    <div className="accordion-body">
                                                        <div
                                                            className="rich-content"
                                                            style={{ fontSize: "0.95rem" }}
                                                            dangerouslySetInnerHTML={{
                                                                __html: ProcessContent(item.content || "")
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* --- Updates Section --- */}
                        {cause?.content?.updates && (
                            <div className="cs_cause_details_wrap mt-5 pt-4 border-top">
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

                        {/* Transparency Gallery Section (Mixed Content) */}
                        {galleryItems.length > 0 && (
                            <div className="transparency-gallery-section mt-5 p-4 p-lg-5 rounded-4">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold mb-2 section-title">We Ensure 100% Transparency With Your Donation</h3>
                                    <div className="separator mx-auto"></div>
                                </div>

                                <Swiper
                                    modules={[Pagination, Navigation, Autoplay]}
                                    spaceBetween={24}
                                    slidesPerView={1}
                                    navigation={true}
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
                                                    {item.type === "youtube" && (
                                                        <div className="ratio ratio-1x1 h-100 w-100">
                                                            <iframe
                                                                src={item.url}
                                                                title={`Gallery Video ${idx}`}
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                                style={{ borderRadius: "8px" }}
                                                            ></iframe>
                                                        </div>
                                                    )}
                                                    {item.type === "video" && (
                                                        <video
                                                            src={item.url}
                                                            controls
                                                            className="w-100 h-100 object-fit-cover rounded-2"
                                                            style={{ backgroundColor: "#000" }}
                                                            autoPlay={true}
                                                        />
                                                    )}
                                                    {item.type === "image" && (
                                                        <>
                                                            <img
                                                                src={item.url}
                                                                alt={`Transparency Proof ${idx + 1}`}
                                                                className="w-100 h-100 object-fit-cover"
                                                                style={{ transition: "transform 0.5s ease" }}
                                                            />
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

                    <div className={`col-xl-4 ${cause.type === "birthday" ? "d-none" : ""}`}>
                        <div className="sidebar-sticky-wrapper">
                            <div className="donation-card">
                                <div className="donation-card-header">
                                    <h3>{translate("Make a Donation")}</h3>
                                    <p className="text-muted small mb-0">Your support changes lives.</p>
                                </div>

                                <div className="donation-logic-wrapper">
                                    {/* 1. Preset Buttons */}
                                    {cause?.custom_donation_amounts && (
                                        <div className="amount-grid">
                                            {(Array.isArray(cause.custom_donation_amounts)
                                                ? cause.custom_donation_amounts
                                                : cause.custom_donation_amounts.split(",")
                                            ).map((val, idx) => {
                                                const btnAmount = Number(val)
                                                // Compare numbers to fix highlighting issue
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

                                    {/* 2. Custom Amount Input */}
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

                                        {/* Validation Message */}
                                        {(() => {
                                            const numericVal = Number(localAmount)
                                            const minAmount = Number(cause?.min_amount || 1)

                                            if (numericVal > 0 && numericVal < minAmount) {
                                                return (
                                                    <div className="text-danger small mt-1 d-flex align-items-center animate__animated animate__fadeIn">
                                                        <Icon icon="mdi:alert-circle-outline" className="me-1" />
                                                        Minimum donation amount is <Amount amount={minAmount} />
                                                    </div>
                                                )
                                            }
                                            return null
                                        })()}
                                    </div>

                                    {/* Total Row */}
                                    <div className="d-flex justify-content-between align-items-center mb-3 pt-3 border-top">
                                        <span className="fw-bold text-secondary">{translate("Total Payable")}</span>
                                        <span className="fw-bolder fs-4 text-primary">
                                            <Amount amount={total.toFixed(2)} />
                                        </span>
                                    </div>

                                    {/* Main Action Button */}
                                    <button
                                        className={`btn-donate-lg ${
                                            !localAmount || Number(localAmount) < Number(cause?.min_amount || 1) ? "disabled" : ""
                                        }`}
                                        disabled={!localAmount || Number(localAmount) < Number(cause?.min_amount || 1)}
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

                            {/* Video Section */}
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
                </div>

                {/* --- DONATION MODAL --- */}
                {showDonateModal && <div className="modal-backdrop fade show"></div>}

                <div className={`modal fade ${showDonateModal ? "show d-block" : ""}`} tabIndex="-1" role="dialog" style={{ overflowY: "auto" }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            {/* Header */}
                            <div className="modal-header d-flex align-items-center justify-content-between">
                                <div>
                                    <h5 className="modal-title fs-6 fw-bold">{translate("Complete Donation")}</h5>
                                    <p className="mb-0 text-muted" style={{ fontSize: "0.8rem" }}>
                                        Donating{" "}
                                        <span className="fw-bold text-primary">
                                            <Amount amount={total.toFixed(2)} />
                                        </span>{" "}
                                        to <span className="fw-bold">{cause?.content?.title}</span>
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="btn-close shadow-none small"
                                    onClick={() => setShowDonateModal(false)}
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={handlePlaceOrder}>
                                    {/* SECTION 1: Personal Details */}
                                    <span className="section-label">{translate("Personal Details")}</span>
                                    <div className="row g-2 mb-3">
                                        {" "}
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
                                            {errors.name && (
                                                <div className="text-danger small ms-1" style={{ fontSize: "0.75rem" }}>
                                                    {errors.name}
                                                </div>
                                            )}
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
                                            {errors.phone && (
                                                <div className="text-danger small ms-1" style={{ fontSize: "0.75rem" }}>
                                                    {errors.phone}
                                                </div>
                                            )}
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
                                            {errors.email && (
                                                <div className="text-danger small ms-1" style={{ fontSize: "0.75rem" }}>
                                                    {errors.email}
                                                </div>
                                            )}
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
                                            {errors.address && (
                                                <div className="text-danger small ms-1" style={{ fontSize: "0.75rem" }}>
                                                    {errors.address}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-floating">
                                                <select
                                                    className={`form-select ${errors.state ? "is-invalid" : ""}`}
                                                    id="donorState"
                                                    value={data.state}
                                                    onChange={(e) => setData("state", e.target.value)}
                                                    style={{ paddingTop: "0.25rem" }} // Small adjustment for select
                                                >
                                                    <option value="">State</option>
                                                    {states.map((state) => (
                                                        <option key={state} value={state}>
                                                            {state}
                                                        </option>
                                                    ))}
                                                </select>
                                                <label htmlFor="donorState">{translate("State")} *</label>
                                            </div>
                                            {errors.state && (
                                                <div className="text-danger small ms-1" style={{ fontSize: "0.75rem" }}>
                                                    {errors.state}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* SECTION 2: Special Dedication */}
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
                                                            <div className="small text-success mt-1 ms-1" style={{ fontSize: "0.7rem" }}>
                                                                Selected: {special_image.name}
                                                            </div>
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

                                    {/* SECTION 3: 80G Certificate */}
                                    <div className="mb-3">
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="is_80g"
                                                checked={!!data.is_80g}
                                                onChange={(e) => {
                                                    const checked = e.target.checked
                                                    setData({ ...data, is_80g: checked, pancard: checked ? data.pancard : "" })
                                                }}
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
                                                    className={`form-control ${errors.pancard ? "is-invalid" : ""}`}
                                                    id="pancard"
                                                    placeholder="Pancard"
                                                    maxLength="10"
                                                    value={data.pancard || ""}
                                                    onChange={(e) => setData("pancard", e.target.value.toUpperCase())}
                                                />
                                                <label htmlFor="pancard">{translate("PAN Card Number")} *</label>
                                            </div>
                                            {errors.pancard && (
                                                <div className="text-danger small ms-1" style={{ fontSize: "0.75rem" }}>
                                                    {errors.pancard}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* SECTION 4: Payment Methods */}
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

                                        {manual_payment_gateways.map((gateway, index) => (
                                            <div
                                                key={index}
                                                className={`payment-option-card ${
                                                    data.paymentMethod === gateway?.content?.gateway_name ? "selected" : ""
                                                }`}
                                                onClick={() => setData("paymentMethod", gateway?.content?.gateway_name)}
                                            >
                                                {data.paymentMethod === gateway?.content?.gateway_name && (
                                                    <div className="payment-check-badge">
                                                        <Icon icon="mdi:check" />
                                                    </div>
                                                )}
                                                <Icon icon="mdi:bank" className="fs-4 text-success mb-1" />
                                                <span className="payment-name text-truncate w-100">{gateway?.content?.gateway_name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Manual Payment Details */}
                                    {selectedGateway && (
                                        <div className="bg-light p-3 rounded-2 mb-3 border animate__animated animate__fadeIn">
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
                                                    {errors.transactionId && (
                                                        <div className="text-danger small" style={{ fontSize: "0.75rem" }}>
                                                            {errors.transactionId}
                                                        </div>
                                                    )}
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

                                    {/* Footer / Submit */}
                                    <div className="mt-3 pt-3 border-top">
                                        {is_active_google_captcha === "1" && (
                                            <div className="mb-3 d-flex justify-content-center scale-75 origin-center">
                                                {/* scale-75 to make captcha smaller */}
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
                                            {errors.agreed && (
                                                <div className="text-danger small" style={{ fontSize: "0.75rem" }}>
                                                    {errors.agreed}
                                                </div>
                                            )}
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
