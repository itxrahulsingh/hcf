import { useForm, Head, usePage } from "@inertiajs/react"
import TextInput from "@/Admin/Components/Inputs/TextInput"
import FormValidationError from "@/Admin/Components/Validation/FromValidationError"
import { useState, useEffect } from "react"
import Editor from "@/Admin/Components/Inputs/Editor"
import SingleMediaUploader from "@/Admin/Components/Media/SingleMediaUploader"
import MultipleMediaUploader from "@/Admin/Components/Media/MultipleMediaUploader"
import CustomMultiSelect from "@/Admin/Components/Inputs/CustomMultiSelect"
import CustomSelect from "@/Admin/Components/Inputs/CustomSelect"
import { produce } from "immer"
import { Icon } from "@iconify/react"
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import translate from "@/utils/translate"

// Added products to props
export default function Create({ languages, cause_categories, default_lang, gifts, products, cause_types }) {
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0]
    const normalizedLanguages = Array.isArray(languages)
        ? languages.reduce((acc, language) => {
              if (language?.code) {
                  acc[language.code] = language
              }
              return acc
          }, {})
        : languages || {}
    const languageCodes = Object.keys(normalizedLanguages)
    const initialLanguage = default_lang && normalizedLanguages[default_lang] ? default_lang : languageCodes[0] || "en"
    const [selectedLang, setSelectedLang] = useState(initialLanguage)
    const [tempLang, setTempLang] = useState(initialLanguage)
    const languageArr = Object.entries(normalizedLanguages)
    const { props } = usePage()
    const defaultTitleKey = `${default_lang || initialLanguage}_title`
    const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false)

    const slugify = (value) =>
        (value || "")
            .toString()
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "")

    // Prepare options for "Special Occasion Type" dropdown
    const typeOptions = cause_types
        ? Object.entries(cause_types).map(([key, label]) => ({
              value: key,
              label: label
          }))
        : []
    const giftOptions = gifts.map((g) => ({
        value: g.id,
        label: g?.content?.title || "Untitled Gift",
        image: g?.gift_image
    }))

    // --- 2. FORM INITIALIZATION ---
    const { data, setData, errors, post, processing } = useForm({
        category: "",
        slug: "",
        thumbnail_image: "",
        banner_image: "",
        mobile_banner_image: "",
        gallery_images: [],
        have_gift: 0,
        is_special: 0,
        gift_ids: [],
        have_product: 0,
        product_ids: [],
        product_design: "portrait",
        gift_design: "portrait",
        custom_donation_amounts: "2100,5100,11000",
        video_url: "",
        min_amount: "",
        goal_amount: "",
        type: "normal",
        deadline: "",
        status: 1,
        meta_image: "",
        meta_title: "",
        meta_tags: "",
        meta_description: "",
        custom_style: "",
        // Initialize multi-language fields
        ...languageCodes.reduce((acc, code) => {
            acc[code + "_title"] = ""
            acc[code + "_cause_title"] = ""
            acc[code + "_content"] = ""
            acc[code + "_projects"] = ""
            acc[code + "_faq"] = [{ title: "", content: "" }]
            acc[code + "_updates"] = ""
            return acc
        }, {})
    })

    const getFaqList = (langCode) => {
        const key = `${langCode}_faq`
        const list = data[key]
        return Array.isArray(list) ? list : [{ title: "", content: "" }]
    }

    const addFaq = () => {
        const key = `${selectedLang}_faq`
        setData(key, [...getFaqList(selectedLang), { title: "", content: "" }])
    }

    const removeFaq = (index) => {
        const key = `${selectedLang}_faq`
        const next = getFaqList(selectedLang).filter((_, i) => i !== index)
        setData(key, next.length > 0 ? next : [{ title: "", content: "" }])
    }

    const updateFaq = (index, field, value) => {
        const key = `${selectedLang}_faq`
        const list = [...getFaqList(selectedLang)]
        list[index] = { ...list[index], [field]: value }
        setData(key, list)
    }

    const moveGift = (fromIndex, toIndex) => {
        if (toIndex < 0 || toIndex >= data.gift_ids.length) return
        const ordered = [...data.gift_ids]
        const [moved] = ordered.splice(fromIndex, 1)
        ordered.splice(toIndex, 0, moved)
        setData("gift_ids", ordered)
    }
    const [dragGiftIndex, setDragGiftIndex] = useState(null)

    const onGiftDragStart = (index) => setDragGiftIndex(index)
    const onGiftDragOver = (e) => e.preventDefault()
    const onGiftDrop = (dropIndex) => {
        if (dragGiftIndex === null || dragGiftIndex === dropIndex) return
        moveGift(dragGiftIndex, dropIndex)
        setDragGiftIndex(null)
    }
    const handlePublish = (e) => {
        e.preventDefault()
        post(route("admin.causes.store"))
    }

    useEffect(() => setSelectedLang(tempLang), [tempLang])

    useEffect(() => {
        if (isSlugManuallyEdited) return
        setData("slug", slugify(data[defaultTitleKey]))
    }, [data[defaultTitleKey], defaultTitleKey, isSlugManuallyEdited])

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const firstErrorField = Object.keys(errors)[0]
            const errorFirstLang = firstErrorField.split("_")[0] ?? null
            const isErrorLangValid = languageArr.find((i) => i[0] === errorFirstLang)
            if (isErrorLangValid) setSelectedLang(errorFirstLang)
        }
    }, [errors])

    return (
        <AdminLayouts>
            <Head title="Create Cause" />
            <div className="container-fluid">
                <style>{`
                    .cause-form-compact .row { margin-bottom: 6px; }
                    .cause-form-compact .yoo-height-b20 { height: 10px !important; }
                    .cause-form-compact .form-group { margin-bottom: 8px; }
                    .cause-form-compact label { margin-bottom: 4px; font-size: 13px; }
                    .cause-form-compact .form-control { margin-bottom: 0; }
                    .cause-form-compact .form-control,
                    .cause-form-compact input.form-control,
                    .cause-form-compact textarea.form-control,
                    .cause-form-compact select.form-control { min-height: 36px; padding-top: 6px; padding-bottom: 6px; }
                    .cause-form-compact .upload-area { min-height: 110px; padding: 10px; }
                    .cause-form-compact .upload-area.upload-area-sm { min-height: 90px; }
                    .cause-form-compact .preview-image { max-height: 95px; object-fit: contain; }
                    .cause-form-compact .multi-image-preview { width: 84px; height: 84px; }
                    .cause-form-compact .multi-preview-image { width: 100%; height: 100%; object-fit: cover; }
                `}</style>
                <div className="yoo-uikits-heading">
                    <h2 className="yoo-uikits-title">{translate("Create Cause")}</h2>
                </div>
                <div className="yoo-height-b20" />

                <form className="row cause-form-compact" onSubmit={handlePublish}>
                    {/* LEFT COLUMN */}
                    <div className="col-lg-8">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <ul className="nav nav-tabs">
                                    {Object.entries(normalizedLanguages).map(([code, language]) => (
                                        <li className="nav-item" key={code}>
                                            <button
                                                type="button"
                                                onClick={() => setTempLang(code)}
                                                className={`nav-link ${selectedLang === code && "active"}`}
                                            >
                                                {language.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20" />

                                    {/* Name */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Cause Name")} *</label>
                                            <TextInput
                                                type="text"
                                                error={errors[`${selectedLang}_title`]}
                                                value={data[`${selectedLang}_title`]}
                                                onChange={(e) => setData(`${selectedLang}_title`, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Cause Title")} ({translate("For Page Builder")})</label>
                                            <TextInput
                                                type="text"
                                                error={errors[`${selectedLang}_cause_title`]}
                                                value={data[`${selectedLang}_cause_title`]}
                                                onChange={(e) => setData(`${selectedLang}_cause_title`, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Slug")}</label>
                                            <TextInput
                                                type="text"
                                                error={errors.slug}
                                                value={data.slug}
                                                onChange={(e) => {
                                                    setIsSlugManuallyEdited(true)
                                                    setData("slug", e.target.value)
                                                }}
                                                placeholder="help-vrindavans-sadhus-stay-warm-this-winter"
                                            />
                                        </div>
                                    </div>

                                    {/* Amounts */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>
                                                {translate("Minimum Amount")} ({props.currency?.currency_code || "INR"}) *
                                            </label>
                                            <TextInput
                                                type="number"
                                                step="0.01"
                                                value={data.min_amount}
                                                onChange={(e) => setData("min_amount", e.target.value)}
                                                error={errors.min_amount}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>
                                                {translate("Goal Amount")} ({props.currency?.currency_code || "INR"})
                                            </label>
                                            <TextInput
                                                type="number"
                                                step="0.01"
                                                value={data.goal_amount}
                                                onChange={(e) => setData("goal_amount", e.target.value)}
                                                error={errors.goal_amount}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>
                                                {translate("Custom Donation Amounts")} ({props.currency?.currency_code || "INR"}) *
                                            </label>
                                            <TextInput
                                                type="text"
                                                value={data.custom_donation_amounts}
                                                onChange={(e) => setData("custom_donation_amounts", e.target.value)}
                                            />
                                            <small>comma seperated amounts like (100,500,1000)</small>
                                        </div>
                                    </div>

                                    {/* Category */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Category")} *</label>
                                            <div className="form-group form-group-md">
                                                <div className="yoo-select">
                                                    <select
                                                        className="form-control"
                                                        onChange={(e) => setData("category", e.target.value)}
                                                        value={data.category}
                                                    >
                                                        <option value="">{translate("Select Category")}</option>
                                                        {cause_categories?.map((category) => (
                                                            <option key={`category_${category.id}`} value={category.id}>
                                                                {category?.content?.title}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <FormValidationError message={errors.category} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Video URL")} (YouTube/Vimeo)</label>
                                            <TextInput
                                                type="text"
                                                placeholder="https://www.youtube.com/watch?v=..."
                                                value={data.video_url}
                                                onChange={(e) => setData("video_url", e.target.value)}
                                                error={errors.video_url}
                                            />
                                        </div>
                                    </div>

                                    {/* Editors */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Content")}</label>
                                            <Editor
                                                onChange={(value) => setData(`${selectedLang}_content`, value)}
                                                value={data[`${selectedLang}_content`]}
                                            />
                                        </div>
                                    </div>
                                    <div className="yoo-height-b20" />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Projects")}</label>
                                            <Editor
                                                onChange={(value) => setData(`${selectedLang}_projects`, value)}
                                                value={data[`${selectedLang}_projects`]}
                                            />
                                        </div>
                                    </div>
                                    <div className="yoo-height-b20" />

                                    {/* --- FAQ SECTION --- */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <label className="mb-0">{translate("FAQ")}</label>
                                                <button type="button" className="btn btn-sm btn-primary" onClick={addFaq}>
                                                    + {translate("Add FAQ")}
                                                </button>
                                            </div>
                                            {getFaqList(selectedLang).map((item, index) => (
                                                <div key={index} className="p-2 mb-2 border rounded position-relative bg-white">
                                                    {getFaqList(selectedLang).length > 1 && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-link text-danger p-0 position-absolute"
                                                            style={{ top: "8px", right: "8px", lineHeight: 1 }}
                                                            onClick={() => removeFaq(index)}
                                                            title={translate("Remove")}
                                                        >
                                                            <Icon icon="lucide:x" width="16" height="16" />
                                                        </button>
                                                    )}
                                                    <div className="mb-2 pr-4">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm"
                                                            placeholder="Question"
                                                            value={item.title}
                                                            onChange={(e) => updateFaq(index, "title", e.target.value)}
                                                            style={{ backgroundColor: "#fff" }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm"
                                                            placeholder="Answer"
                                                            value={item.content}
                                                            onChange={(e) => updateFaq(index, "content", e.target.value)}
                                                            style={{ backgroundColor: "#fff" }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="yoo-height-b20" />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Updates")}</label>
                                            <Editor
                                                onChange={(value) => setData(`${selectedLang}_updates`, value)}
                                                value={data[`${selectedLang}_updates`]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SEO CARD */}
                        <div className="yoo-card yoo-style1 mt-4">
                            <div className="yoo-card-heading">
                                <h2 className="yoo-card-title">{translate("SEO Details")}</h2>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>{translate("SEO Title")}</label>
                                            <TextInput type="text" value={data.meta_title} onChange={(e) => setData("meta_title", e.target.value)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>{translate("SEO Description")}</label>
                                            <TextInput
                                                type="text"
                                                value={data.meta_description}
                                                onChange={(e) => setData("meta_description", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <label>{translate("SEO Tags")}</label>
                                            <TextInput type="text" value={data.meta_tags} onChange={(e) => setData("meta_tags", e.target.value)} />
                                        </div>

                                        {/* --- ADD CUSTOM CSS SECTION HERE --- */}
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>{translate("Custom CSS Style")}</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="6"
                                                    placeholder=".my-custom-class { color: red; }"
                                                    value={data.custom_style}
                                                    onChange={(e) => setData("custom_style", e.target.value)}
                                                    style={{ fontFamily: "monospace", fontSize: "13px" }}
                                                ></textarea>
                                                <small className="text-muted">
                                                    {translate(
                                                        "Enter CSS code without <style> tags. This will be applied to the cause details page."
                                                    )}
                                                </small>
                                                <FormValidationError message={errors.custom_style} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="yoo-height-b20" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-md-4">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <h2 className="yoo-card-title">{translate("Cause Status")}</h2>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20" />

                                    <div className="form-group d-flex justify-content-between align-items-center mb-2">
                                        <label className="mb-0">{translate("Is Active")}:</label>
                                        <div
                                            className={`yoo-switch ${Number(data.status) === 1 ? "active" : ""}`}
                                            onClick={() => setData("status", Number(data.status) === 1 ? 0 : 1)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex justify-content-between align-items-center mb-2">
                                        <label className="mb-0">{translate("Is Special")}:</label>
                                        <div
                                            className={`yoo-switch ${Number(data.is_special) === 1 ? "active" : ""}`}
                                            onClick={() => setData("is_special", Number(data.is_special) === 1 ? 0 : 1)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    {Number(data.is_special) === 1 && (
                                        <div className="form-group mt-3">
                                            <label>{translate("Special Occasion Type")} *</label>
                                            <CustomSelect options={typeOptions} value={data.type} onSelect={(value) => setData("type", value)} />
                                            <FormValidationError message={errors.type} />
                                        </div>
                                    )}

                                    <div className="form-group d-flex justify-content-between align-items-center mb-2">
                                        <label className="mb-0">{translate("Have Gift")}:</label>
                                        <div
                                            className={`yoo-switch ${Number(data.have_gift) === 1 ? "active" : ""}`}
                                            onClick={() => setData("have_gift", Number(data.have_gift) === 1 ? 0 : 1)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex justify-content-between align-items-center mb-2">
                                        <label className="mb-0">{translate("Have Product")}:</label>
                                        <div
                                            className={`yoo-switch ${Number(data.have_product) === 1 ? "active" : ""}`}
                                            onClick={() => setData("have_product", Number(data.have_product) === 1 ? 0 : 1)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>{translate("Deadline")}</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            min={tomorrow}
                                            value={data.deadline}
                                            onChange={(e) => setData("deadline", e.target.value)}
                                        />
                                        <FormValidationError message={errors.deadline} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {Number(data.have_gift) === 1 && (
                            <div className="yoo-card yoo-style1 mt-4">
                                <div className="yoo-card-heading">
                                    <h2 className="yoo-card-title">{translate("Gifts")}</h2>
                                </div>
                                <div className="yoo-card-body">
                                    <div className="yoo-padd-lr-20">
                                        <div className="yoo-height-b20" />

                                        {/* Gift Design Option */}
                                        <div className="form-group mb-3">
                                            <label>{translate("Gift Card Design")}</label>
                                            <select
                                                className="form-control"
                                                value={data.gift_design}
                                                onChange={(e) => setData("gift_design", e.target.value)}
                                            >
                                                <option value="portrait">{translate("Portrait Design")}</option>
                                                <option value="landscape">{translate("Landscape Design")}</option>
                                            </select>
                                        </div>

                                        <CustomMultiSelect
                                            options={giftOptions}
                                            value={data.gift_ids}
                                            placeholder="Select Gifts"
                                            onChange={(selected) => setData("gift_ids", selected)}
                                            hideSelectedTags={true}
                                        />
                                        <FormValidationError message={errors.gift_ids} />
                                        {data.gift_ids.length > 0 && (
                                            <div className="">
                                                <label>{translate("Selected Gift Order")}</label>
                                                {data.gift_ids.map((giftId, idx) => {
                                                    const gift = giftOptions.find((g) => g.value === giftId)
                                                    if (!gift) return null
                                                    return (
                                                        <div
                                                            key={`gift_order_${giftId}_${idx}`}
                                                            className="d-flex align-items-center justify-content-between border rounded px-2 py-2 mb-2"
                                                            draggable
                                                            onDragStart={() => onGiftDragStart(idx)}
                                                            onDragOver={onGiftDragOver}
                                                            onDrop={() => onGiftDrop(idx)}
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="text-muted mr-2" style={{ cursor: "grab" }}>
                                                                    ::
                                                                </span>
                                                                {gift.image && (
                                                                    <img
                                                                        src={gift.image}
                                                                        alt=""
                                                                        style={{ width: "30px", height: "30px", objectFit: "cover", borderRadius: "4px" }}
                                                                    />
                                                                )}
                                                                <span className="ml-2">{gift.label}</span>
                                                            </div>
                                                            <small className="text-muted">{translate("Drag to reorder")}</small>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}
                                        <div className="yoo-height-b20" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {Number(data.have_product) === 1 && (
                            <div className="yoo-card yoo-style1 mt-4">
                                <div className="yoo-card-heading">
                                    <h2 className="yoo-card-title">{translate("Products")}</h2>
                                </div>
                                <div className="yoo-card-body">
                                    <div className="yoo-padd-lr-20">
                                        <div className="yoo-height-b20" />

                                        {/* Product Design Option */}
                                        <div className="form-group mb-3">
                                            <label>{translate("Product Card Design")}</label>
                                            <select
                                                className="form-control"
                                                value={data.product_design}
                                                onChange={(e) => setData("product_design", e.target.value)}
                                            >
                                                <option value="portrait">{translate("Portrait Design")}</option>
                                                <option value="landscape">{translate("Landscape Design")}</option>
                                            </select>
                                        </div>

                                        <CustomMultiSelect
                                            options={products.map((p) => ({
                                                value: p.id,
                                                label: p?.content?.title || "Untitled Product",
                                                image: p?.thumbnail_image
                                            }))}
                                            value={data.product_ids}
                                            placeholder="Select Products"
                                            onChange={(selected) => setData("product_ids", selected)}
                                        />
                                        <FormValidationError message={errors.product_ids} />
                                        <div className="yoo-height-b20" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="yoo-card yoo-style1 mt-4">
                            <div className="yoo-card-heading">
                                <h2 className="yoo-card-title">{translate("Images")}</h2>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20" />

                                    <label>{translate("Thumbnail")} *</label>
                                    <SingleMediaUploader
                                        size_sm={true}
                                        onSelected={(e) =>
                                            setData(
                                                produce((d) => {
                                                    d.thumbnail_image = e
                                                })
                                            )
                                        }
                                        defaultValue={data.thumbnail_image}
                                        handleRemoved={() =>
                                            setData(
                                                produce((d) => {
                                                    d.thumbnail_image = ""
                                                })
                                            )
                                        }
                                    />
                                    <FormValidationError message={errors?.thumbnail_image} />

                                    <label className="mt-3">{translate("Banner")} *</label>
                                    <SingleMediaUploader
                                        size_sm={true}
                                        onSelected={(e) =>
                                            setData(
                                                produce((d) => {
                                                    d.banner_image = e
                                                })
                                            )
                                        }
                                        defaultValue={data.banner_image}
                                        handleRemoved={() =>
                                            setData(
                                                produce((d) => {
                                                    d.banner_image = ""
                                                })
                                            )
                                        }
                                    />
                                    <FormValidationError message={errors?.banner_image} />

                                    <label className="mt-3">{translate("Mobile Banner")}</label>
                                    <SingleMediaUploader
                                        size_sm={true}
                                        onSelected={(e) =>
                                            setData(
                                                produce((d) => {
                                                    d.mobile_banner_image = e
                                                })
                                            )
                                        }
                                        defaultValue={data.mobile_banner_image}
                                        handleRemoved={() =>
                                            setData(
                                                produce((d) => {
                                                    d.mobile_banner_image = ""
                                                })
                                            )
                                        }
                                    />
                                    <FormValidationError message={errors?.mobile_banner_image} />

                                    <label className="mt-3">{translate("Gallery")} *</label>
                                    <MultipleMediaUploader
                                        onSelected={(e) =>
                                            setData(
                                                produce((d) => {
                                                    d.gallery_images = e
                                                })
                                            )
                                        }
                                        handleRemoved={(d) =>
                                            setData(
                                                produce((draft) => {
                                                    draft.gallery_images = d
                                                })
                                            )
                                        }
                                        defaultValue={data.gallery_images}
                                    />
                                    <FormValidationError message={errors?.gallery_images} />

                                    <div className="mt-4">
                                        <button type="submit" disabled={processing} className="btn btn-success">
                                            {translate("Publish")}
                                        </button>
                                    </div>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayouts>
    )
}
