import { Link, useForm } from "@inertiajs/react"
import moment from "moment"
import CauseLayout from "@/Frontend/Layouts/CauseLayout"
import { addCart, decreaseCart, increaseCart, removeCart, clearCart } from "@/Redux/features/Cart/cart"
import limitString from "@/utils/limitString.js"
import removeHTMLTags from "@/utils/removeHTMLTags.js"
import SeoMeta from "@/utils/SeoMeta"
import { useDispatch, useSelector } from "react-redux"
import ProcessContent from "@/utils/ProcessContent"
import translate from "@/utils/translate"
import FrontendLayout from "@/Frontend/Layouts/FrontendLayout"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
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
        special_name: "",    // Entry Field 1 (Name / Sponsored By)
        special_date: "",    // Entry Field 2 (Date)
        special_image: null, // Entry Field 3 (Photo)
        special_message: "", // Entry Field 4 (Message)

        type: cause?.type || "",
        cause_id: cause?.id || null,
    })

    // --- DYNAMIC CONFIGURATION LOGIC ---
    const getSpecialConfig = () => {
        const type = cause?.type;

        // Default / Fallback Config
        let config = {
            title: "Special Dedication Details",
            showName: true, nameLabel: "Name",
            showDate: true, dateLabel: "Date",
            showImage: true, imageLabel: "Upload Photo",
            showMessage: true, messageLabel: "Message"
        };

        switch (type) {
            // 1. Celebration Types (All 4 Fields)
            case 'valentine_day':
                config = {
                    title: "Valentine Day Details",
                    showName: true, nameLabel: "Valentine's Name / Person Name",
                    showDate: true, dateLabel: "Date of Celebration",
                    showImage: true, imageLabel: "Upload Photo",
                    showMessage: true, messageLabel: "Special Message from Children"
                };
                break;
            case 'birthday':
                config = {
                    title: "Birthday Details",
                    showName: true, nameLabel: "Birthday Boy/Girl Name",
                    showDate: true, dateLabel: "Date of Celebration",
                    showImage: true, imageLabel: "Upload Photo",
                    showMessage: true, messageLabel: "Special Message"
                };
                break;
            case 'anniversary':
                config = {
                    title: "Anniversary Details",
                    showName: true, nameLabel: "Couple Name",
                    showDate: true, dateLabel: "Date of Celebration",
                    showImage: true, imageLabel: "Upload Photo",
                    showMessage: true, messageLabel: "Special Message"
                };
                break;

            // 2. Seva / Remembrance Types (Date + Name Only)
            case 'in_memory': // Death Anniversary
            case 'sadhu_seva':
            case 'tiffin_seva':
            case 'gau_seva':
            case 'pitru_paksha':
            case 'homeless_needy':
                config = {
                    title: "Seva / Distribution Details",
                    showName: true, nameLabel: "Sponsored By Name", // Entry Field 2 in your table
                    showDate: true, dateLabel: "Date of Distribution", // Entry Field 1 in your table
                    showImage: false, imageLabel: "",
                    showMessage: false, messageLabel: ""
                };
                break;

            case 'normal':
            default:
                break;
        }
        return config;
    };

    const specialConfig = getSpecialConfig();
    // -----------------------------------

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

    // Helper: Safe Parse JSON
    const galleryImages = (() => {
        try {
            if (Array.isArray(cause?.gallery_images)) return cause.gallery_images
            return JSON.parse(cause?.gallery_images || "[]")
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
                    <div className="col-md-8">
                        {/* Title Section */}
                        <div className="cs_cause_details_wrap">
                            <h1 className="cs_cause_details_title">{cause?.content?.title}</h1>
                        </div>

                        {/* Gallery Section */}
                        {galleryImages.length > 0 && (
                            <div className="cs_cause_details_wrap">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    pagination={{ clickable: true }}
                                    speed={700}
                                    loop={true}
                                    modules={[Pagination]}
                                    breakpoints={{
                                        575: { slidesPerView: 2 },
                                        991: { slidesPerView: 3 },
                                        1400: { slidesPerView: 4 }
                                    }}
                                >
                                    {galleryImages.map((img, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="p-2">
                                                <img
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    className="w-full h-[220px] object-cover rounded-xl shadow-md"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}

                        {/* Gifts Section */}
                        {cause?.have_gift == 1 && cause?.gifts?.length > 0 && (
                            <div className="cs_cause_details_wrap mt-4">
                                <h3>Gifts</h3>
                                <div className="row g-3">
                                    {cause.gifts.map((gift, idx) => {
                                        const cartItem = carts.find((i) => i.id === gift.id && i.type === "gift")

                                        return (
                                            <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                <div className="card h-100 shadow-sm">
                                                    {gift.gift_image && (
                                                        <img
                                                            src={gift.gift_image}
                                                            alt={gift.content?.title}
                                                            className="card-img-top"
                                                            style={{ height: "140px", objectFit: "cover" }}
                                                        />
                                                    )}

                                                    <div className="card-body p-2">
                                                        <h6 className="text-truncate">{gift.content?.title}</h6>

                                                        <span className="fw-bold text-primary">
                                                            <Amount amount={Number(gift.amount || 0).toFixed(2)} />
                                                        </span>

                                                        {!cartItem ? (
                                                            <button
                                                                className="btn btn-primary btn-sm rounded-pill mt-2 w-100"
                                                                onClick={() => dispatch(addCart({ id: gift.id, type: "gift", content: gift }))}
                                                            >
                                                                Add
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="btn btn-danger btn-sm rounded-pill mt-2 w-100"
                                                                onClick={() => dispatch(removeCart({ id: gift.id, type: "gift" }))}
                                                            >
                                                                Remove
                                                            </button>
                                                        )}
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
                                <h3>Products</h3>
                                <div className="row g-3">
                                    {products.map((product, idx) => {
                                        const cartItem = carts.find((i) => i.id === product.id && i.type === "product")
                                        const quantity = cartItem ? cartItem.quantity : 1
                                        const finalPrice = Number(product.discount_price || product.price || 0)

                                        return (
                                            <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                <div className="card h-100">
                                                    {product.thumbnail_image && (
                                                        <img
                                                            src={product.thumbnail_image}
                                                            alt={product.content?.title}
                                                            className="card-img-top"
                                                            style={{ height: "150px", objectFit: "cover" }}
                                                        />
                                                    )}

                                                    <div className="card-body p-2 d-flex flex-column">
                                                        <h6 className="text-truncate">{product.content?.title}</h6>

                                                        <p className="fw-bold text-primary">
                                                            <Amount amount={finalPrice.toFixed(2)} /> Amount
                                                        </p>

                                                        <div className="d-flex align-items-center mb-2">
                                                            <button
                                                                className="btn btn-outline-secondary btn-sm"
                                                                disabled={!cartItem || quantity === 1}
                                                                onClick={() => dispatch(decreaseCart({ id: product.id, type: "product" }))}
                                                            >
                                                                –
                                                            </button>
                                                            <span className="mx-2">{quantity}</span>
                                                            <button
                                                                className="btn btn-outline-secondary btn-sm"
                                                                onClick={() =>
                                                                    cartItem
                                                                        ? dispatch(increaseCart({ id: product.id, type: "product" }))
                                                                        : dispatch(addCart({ id: product.id, type: "product", content: product }))
                                                                }
                                                            >
                                                                +
                                                            </button>
                                                        </div>

                                                        {!cartItem ? (
                                                            <button
                                                                className="btn btn-primary btn-sm rounded-pill mt-auto"
                                                                onClick={() =>
                                                                    dispatch(addCart({ id: product.id, type: "product", content: product }))
                                                                }
                                                            >
                                                                Add
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="btn btn-danger btn-sm rounded-pill mt-auto"
                                                                onClick={() => dispatch(removeCart({ id: product.id, type: "product" }))}
                                                            >
                                                                Remove
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Content & Projects */}
                        <div className="cs_cause_details_wrap">
                            <h3>Content</h3>
                            <div className="cs_cause_details" dangerouslySetInnerHTML={{ __html: ProcessContent(cause?.content?.content || "") }} />

                            <h3>Project</h3>
                            <div className="cs_cause_details" dangerouslySetInnerHTML={{ __html: ProcessContent(cause?.content?.projects || "") }} />
                        </div>

                        {/* FAQ Section */}
                        {faqItems.length > 0 && (
                            <div className="cs_cause_details_wrap">
                                <h3 className="mb-4">FAQ's</h3>
                                <div className="accordion" id="faqAccordion">
                                    {faqItems.map((item, idx) => {
                                        const headingId = `faq-heading-${idx}`
                                        const collapseId = `faq-collapse-${idx}`
                                        const isOpen = openFaqIndex === idx

                                        return (
                                            <div className="accordion-item mb-3 shadow-sm border rounded-3" key={idx}>
                                                <h2 className="accordion-header" id={headingId}>
                                                    <button
                                                        className={`accordion-button fw-semibold ${isOpen ? "" : "collapsed"}`}
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
                                                    <div className="accordion-body fs-6 text-secondary">
                                                        <div
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

                        {/* Updates Section */}
                        <div className="cs_cause_details_wrap">
                            <h3>Updates</h3>
                            <div className="cs_cause_details" dangerouslySetInnerHTML={{ __html: ProcessContent(cause?.content?.updates || "") }} />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-xl-4">
                        {/* Custom Donation Amounts */}
                        {cause?.custom_donation_amounts && (
                            <div className="cs_shop-card mt-4">
                                <h3>Custom Donation</h3>
                                <div className="d-flex flex-wrap gap-2">
                                    {(Array.isArray(cause.custom_donation_amounts)
                                        ? cause.custom_donation_amounts
                                        : cause.custom_donation_amounts.split(",")
                                    ).map((val, idx) => {
                                        const amount = Number(val)
                                        const cartItem = carts.find((i) => i.id === cause.id && i.type === "cause")
                                        const isSelected = cartItem?.price === amount

                                        return (
                                            <button
                                                key={idx}
                                                className={`btn btn-sm rounded-pill px-3 ${isSelected ? "btn-danger" : "btn-primary"}`}
                                                onClick={() => {
                                                    dispatch(removeCart({ id: cause.id, type: "cause" }))
                                                    if (!isSelected)
                                                        dispatch(addCart({ id: cause.id, type: "cause", content: { ...cause, price: amount } }))
                                                }}
                                            >
                                                <Amount amount={amount.toFixed(2)} />
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Cart Totals */}
                        <div className="cs_shop-card mt-2">
                            <h2>{translate("Totals")}</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{translate("Subtotal")}</td>
                                        <td className="text-end">
                                            <Amount amount={subtotal.toFixed(2)} />
                                        </td>
                                    </tr>

                                    {discount > 0 && (
                                        <tr>
                                            <td>{translate("Discount")}</td>
                                            <td className="text-end">
                                                - <Amount amount={discount.toFixed(2)} />
                                            </td>
                                        </tr>
                                    )}

                                    <tr>
                                        <td className="fw-bold">{translate("Total")}</td>
                                        <td className="text-end fw-bold">
                                            <Amount amount={total.toFixed(2)} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <a
                                className={`cs_product_btn w-100 ${carts.length === 0 ? "cs_disable" : ""}`}
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowDonateModal(true)}
                            >
                                {translate("Donate Now")}
                            </a>
                        </div>

                        {/* Sidebar Video */}
                        {cause?.video_url && (
                            <div className="cs_shop-card mt-2">
                                <h2>{translate("Video")}</h2>
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src={convertYouTube(cause.video_url)}
                                        title="Cause Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-100 rounded"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* --- DONATION MODAL --- */}
                {showDonateModal && <div className="modal-backdrop fade show"></div>}
                <div className={`modal fade ${showDonateModal ? "show d-block" : ""}`} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Donate Now</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowDonateModal(false)}></button>
                            </div>

                            <div className="modal-body">
                                <div className="row">
                                    {/* Standard Fields */}
                                    <div className="col-lg-12 mb-2">
                                        <label className="cs_shop-label">{translate("Name")} *</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setData("name", e.target.value)}
                                            value={data.name}
                                            className="form-control form-control-sm"
                                        />
                                        {errors.name && <span className="text-danger small">{errors.name}</span>}
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <label className="cs_shop-label">{translate("Email")} *</label>
                                        <input
                                            type="email"
                                            onChange={(e) => setData("email", e.target.value)}
                                            value={data.email}
                                            className="form-control form-control-sm"
                                        />
                                        {errors.email && <span className="text-danger small">{errors.email}</span>}
                                    </div>

                                    <div className="col-lg-12 mb-2">
                                        <label className="cs_shop-label">{translate("Phone")} *</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setData("phone", e.target.value)}
                                            value={data.phone}
                                            className="form-control form-control-sm"
                                        />
                                        {errors.phone && <span className="text-danger small">{errors.phone}</span>}
                                    </div>

                                    <div className="col-lg-12">
                                        <label className="cs_shop-label">{translate("Full Address")} *</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setData("address", e.target.value)}
                                            value={data.address}
                                            className="form-control form-control-sm"
                                        />
                                        {errors.address && <span className="text-danger small">{errors.address}</span>}
                                    </div>

                                    <div className="col-lg-12 mt-3 mb-2">
                                        <label className="cs_shop-label">{translate("State")} *</label>
                                        <select
                                            className="form-select form-select-sm"
                                            value={data.state}
                                            onChange={(e) => setData("state", e.target.value)}
                                            required
                                        >
                                            <option value="">{translate("Select State")}</option>
                                            {states.map((state) => (
                                                <option key={state} value={state}>
                                                    {state}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.state && <span className="text-danger small">{errors.state}</span>}
                                    </div>

                                    {/* --- DYNAMIC SPECIAL FIELDS SECTION --- */}
                                    {!!cause?.is_special && (
                                        <div className="p-2 border rounded bg-light mt-2">
                                            <h5 className="text-primary mb-3">{translate(specialConfig.title)}</h5>

                                            {specialConfig.showName && (
                                                <div className="mb-3">
                                                    <label className="cs_shop-label">{translate(specialConfig.nameLabel)}</label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        value={data.special_name}
                                                        onChange={(e) => setData("special_name", e.target.value)}
                                                    />
                                                </div>
                                            )}

                                            {/* Entry Field 2: Date */}
                                            {specialConfig.showDate && (
                                                <div className="mb-3">
                                                    <label className="cs_shop-label">{translate(specialConfig.dateLabel)}</label>
                                                    <input
                                                        type="date"
                                                        className="form-control form-control-sm"
                                                        value={data.special_date}
                                                        onChange={(e) => setData("special_date", e.target.value)}
                                                    />
                                                </div>
                                            )}

                                            {/* Entry Field 3: Image */}
                                            {specialConfig.showImage && (
                                                <div className="mb-3">
                                                    <label className="cs_shop-label">
                                                        {translate(specialConfig.imageLabel)} <span className="text-muted small">(Max 5MB)</span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="form-control form-control-sm"
                                                        onChange={handleSFileChange}
                                                    />
                                                    {special_image && (
                                                        <div className="mt-2 d-flex align-items-center gap-2 flex-wrap">
                                                            <span className="badge bg-success">{special_image.name}</span>
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-outline-danger"
                                                                onClick={() => {
                                                                    setSpecialImage(null)
                                                                    setData("special_image", null)
                                                                    const input = document.querySelector('input[type="file"][accept*="image"]')
                                                                    if (input) input.value = ""
                                                                }}
                                                            >
                                                                {translate("Remove")}
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* Entry Field 4: Message */}
                                            {specialConfig.showMessage && (
                                                <div className="mb-3">
                                                    <label className="cs_shop-label">{translate(specialConfig.messageLabel)}</label>
                                                    <textarea
                                                        className="form-control form-control-sm"
                                                        rows="3"
                                                        value={data.special_message}
                                                        onChange={(e) => setData("special_message", e.target.value)}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* 80G Certificate */}
                                    <div className="form-check ms-3 mt-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="is_80g"
                                            checked={!!data.is_80g}
                                            onChange={(e) => {
                                                const checked = e.target.checked
                                                setData({
                                                    ...data,
                                                    is_80g: checked,
                                                    pancard: checked ? data.pancard : ""
                                                })
                                            }}
                                        />
                                        <label className="form-check-label cs_semi_bold" htmlFor="is_80g">
                                            {translate("80G Certificate Needed?")}
                                        </label>
                                    </div>

                                    {data.is_80g && (
                                        <div className="col-lg-12">
                                            <label className="cs_shop-label">
                                                {translate("Pancard")} <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                value={data.pancard || ""}
                                                onChange={(e) => setData("pancard", e.target.value.toUpperCase())}
                                                placeholder="ABCDE1234D"
                                                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                                                title="Enter valid PAN: 5 letters, 4 numbers, 1 letter (e.g., ABCDE1234F)"
                                                maxLength="10"
                                                required
                                            />
                                            {errors.pancard && <div className="text-danger small mt-1">{errors.pancard}</div>}
                                        </div>
                                    )}
                                </div>

                                {/* Payment Form */}
                                <form onSubmit={handlePlaceOrder}>
                                    <table className="mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {payment_gateway.is_cod_active && (
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="paymentMethod"
                                                                value="cod"
                                                                id="cod"
                                                                onChange={(e) => setData("paymentMethod", e.target.value)}
                                                            />
                                                            <label className="form-check-label m-0 cs_semi_bold" htmlFor="cod">
                                                                {translate("Cash On Delivery")}
                                                            </label>
                                                        </div>
                                                    )}
                                                    {payment_gateway.is_paypal_active && (
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="paymentMethod"
                                                                value="paypal"
                                                                id="paypal"
                                                                onChange={(e) => setData("paymentMethod", e.target.value)}
                                                            />
                                                            <label className="form-check-label m-0 cs_semi_bold" htmlFor="paypal">
                                                                {translate("Paypal")}
                                                            </label>
                                                        </div>
                                                    )}
                                                    {payment_gateway.is_stripe_active && (
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="paymentMethod"
                                                                value="stripe"
                                                                id="stripe"
                                                                onChange={(e) => setData("paymentMethod", e.target.value)}
                                                            />
                                                            <label className="form-check-label m-0 cs_semi_bold" htmlFor="stripe">
                                                                {translate("Stripe")}
                                                            </label>
                                                        </div>
                                                    )}
                                                    {payment_gateway.is_flutterwave_active && (
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="paymentMethod"
                                                                value="flutterwave"
                                                                id="flutterwave"
                                                                onChange={(e) => setData("paymentMethod", e.target.value)}
                                                            />
                                                            <label className="form-check-label m-0 cs_semi_bold" htmlFor="flutterwave">
                                                                {translate("Flutterwave")}
                                                            </label>
                                                        </div>
                                                    )}
                                                    {payment_gateway.is_razorpay_active && (
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="paymentMethod"
                                                                value="razorpay"
                                                                id="razorpay"
                                                                onChange={(e) => setData("paymentMethod", e.target.value)}
                                                            />
                                                            <label className="form-check-label m-0 cs_semi_bold" htmlFor="razorpay">
                                                                {translate("Razorpay")}
                                                            </label>
                                                        </div>
                                                    )}
                                                    {payment_gateway.is_sslcz_active && (
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="paymentMethod"
                                                                value="sslcommerz"
                                                                id="sslcommerz"
                                                                onChange={(e) => setData("paymentMethod", e.target.value)}
                                                            />
                                                            <label className="form-check-label m-0 cs_semi_bold" htmlFor="sslcommerz">
                                                                {translate("Sslcommerz")}
                                                            </label>
                                                        </div>
                                                    )}
                                                    {manual_payment_gateways.length > 0 && (
                                                        <>
                                                            {manual_payment_gateways?.map((gateway, index) => (
                                                                <div key={index}>
                                                                    <div className="form-check">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="paymentMethod"
                                                                            value={gateway?.content?.gateway_name}
                                                                            id={gateway?.content?.gateway_name}
                                                                            onChange={(e) => setData("paymentMethod", e.target.value)}
                                                                        />
                                                                        <label
                                                                            className="form-check-label m-0 cs_semi_bold"
                                                                            htmlFor={gateway?.content?.gateway_name}
                                                                        >
                                                                            {gateway?.content?.gateway_name}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </>
                                                    )}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {selectedGateway && (
                                        <div className="manual-payment-details mt-2">
                                            <h3>{translate("Payment Instructions")}</h3>
                                            <div className="cs_height_15 cs_height_lg_15" />
                                            <div
                                                className="payment-instructions mb-1"
                                                dangerouslySetInnerHTML={{ __html: selectedGateway?.content?.instructions }}
                                            />
                                            {selectedGateway?.payment_type === "bank_payment" && (
                                                <div className="bank-info mb-1">
                                                    <h4>{translate("Bank Information")}</h4>
                                                    <div className="cs_height_10 cs_height_lg_10" />
                                                    {JSON.parse(selectedGateway.bank_information).map((bank, idx) => (
                                                        <div key={idx} className="bank-detail p-3 mb-2 border rounded">
                                                            <p>
                                                                <strong>{translate("Bank Name")}:</strong> {bank.bank_name}
                                                            </p>
                                                            <p>
                                                                <strong>{translate("Account Name")}:</strong> {bank.account_name}
                                                            </p>
                                                            <p>
                                                                <strong>{translate("Account Number")}:</strong> {bank.account_number}
                                                            </p>
                                                            <p>
                                                                <strong>{translate("Routing Number")}:</strong> {bank.routing_number}
                                                            </p>
                                                            <p>
                                                                <strong>{translate("Branch")}:</strong> {bank.branch_name}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            <div className="mb-1">
                                                <label className="cs_shop-label">{translate("Transaction ID")} *</label>
                                                <input
                                                    type="text"
                                                    className="cs_shop-input"
                                                    value={data.transactionId}
                                                    onChange={(e) => setData("transactionId", e.target.value)}
                                                    placeholder={translate("Enter your transaction ID")}
                                                    required
                                                />
                                                {errors.transactionId && <span style={{ color: "red" }}>{errors.transactionId}</span>}
                                            </div>
                                            <div className="mb-3">
                                                <label className="cs_shop-label">{translate("Photo")}</label>
                                                <input type="file" className="form-control" onChange={handleFileChange} accept="image/*,.pdf" />
                                                {receiptFile && (
                                                    <div className="mt-2">
                                                        <span className="badge bg-success">{receiptFile.name}</span>
                                                    </div>
                                                )}
                                                {errors.receiptFile && <span style={{ color: "red" }}>{errors.receiptFile}</span>}
                                            </div>
                                        </div>
                                    )}
                                    {errors.paymentMethod && <span style={{ color: "red" }}>{errors.paymentMethod}</span>}
                                    {is_active_google_captcha === "1" && (
                                        <>
                                            <ReCAPTCHA sitekey={captchaSiteKey} onChange={handleCaptchaChange} />
                                            {captchaError && <div className="text-danger mb-3">{captchaError}</div>}
                                        </>
                                    )}
                                    <div className="form-check">
                                        <input
                                            className="form-check-input custom-cursor-default-hover"
                                            type="checkbox"
                                            id="agreed"
                                            checked={data.agreed}
                                            onChange={(e) => setData("agreed", e.target.checked)}
                                        />
                                        <label className="form-check-label m-0 cs_semi_bold custom-cursor-default-hover" htmlFor="agreed">
                                            <Link href={terms_condition_url}>{translate("Accept Terms And Conditions")}</Link>
                                        </label>
                                    </div>
                                    {errors.agreed && <span style={{ color: "red" }}>{errors.agreed}</span>}
                                    <div className="cs_height_20 cs_height_lg_20" />
                                    <button className="cs_product_btn cs_semi_bold w-100" disabled={!captchaError && processing}>
                                        {translate("Complete Donation")}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </CauseLayout>
        </FrontendLayout>
    )
}
