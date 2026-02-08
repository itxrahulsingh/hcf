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
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import translate from "@/utils/translate"

// Added products to props
export default function Create({ languages, cause_categories, default_lang, gifts, products, cause_types }) {
    const [selectedLang, setSelectedLang] = useState(default_lang)
    const [tempLang, setTempLang] = useState(selectedLang)
    const languageArr = Object.entries(languages)
    const { props } = usePage()

    // --- 1. FAQ STATE INITIALIZATION ---
    const [faqs, setFaqs] = useState(
        Object.keys(languages).reduce((acc, code) => {
            acc[code] = [{ title: "", content: "" }]
            return acc
        }, {})
    )

    // Prepare options for "Special Occasion Type" dropdown
    const typeOptions = cause_types
        ? Object.entries(cause_types).map(([key, label]) => ({
              value: key,
              label: label
          }))
        : []

    // --- 2. FORM INITIALIZATION ---
    const { data, setData, errors, post, processing } = useForm({
        category: "",
        slug: "",
        thumbnail_image: "",
        banner_image: "",
        gallery_images: [],
        have_gift: 0,
        is_special: 0,
        gift_ids: [],
        have_product: 0,
        product_ids: [], // Initialized product_ids
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
        ...Object.keys(languages).reduce((acc, code) => {
            acc[code + "_title"] = ""
            acc[code + "_content"] = ""
            acc[code + "_projects"] = ""
            acc[code + "_faq"] = ""
            acc[code + "_updates"] = ""
            return acc
        }, {})
    })

    // Add a new empty FAQ row
    const addFaq = () => {
        setFaqs((prev) => ({
            ...prev,
            [selectedLang]: [...(prev[selectedLang] || []), { title: "", content: "" }]
        }))
    }

    // Remove a FAQ row
    const removeFaq = (index) => {
        setFaqs((prev) => ({
            ...prev,
            [selectedLang]: (prev[selectedLang] || []).filter((_, i) => i !== index)
        }))
    }

    // Update specific FAQ field
    const updateFaq = (index, field, value) => {
        setFaqs((prev) => {
            const list = [...(prev[selectedLang] || [])]
            list[index] = { ...list[index], [field]: value }
            return {
                ...prev,
                [selectedLang]: list
            }
        })
    }
    const handlePublish = (e) => {
        e.preventDefault()

        post(route("admin.causes.store"), {
            transform: (currData) => {
                const transformed = { ...currData }

                Object.keys(languages).forEach((lang) => {
                    const currentLangFaqs = faqs[lang] || []
                    const cleaned = currentLangFaqs.map((f) => ({
                        title: (f.title || "").toString(),
                        content: (f.content || "").toString()
                    }))
                    transformed[`${lang}_faq`] = JSON.stringify(cleaned)
                })

                return transformed
            }
        })
    }

    useEffect(() => setSelectedLang(tempLang), [tempLang])

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
                <div className="yoo-uikits-heading">
                    <h2 className="yoo-uikits-title">{translate("Create Cause")}</h2>
                </div>
                <div className="yoo-height-b20" />

                <form className="row" onSubmit={handlePublish}>
                    {/* LEFT COLUMN */}
                    <div className="col-lg-8">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <ul className="nav nav-tabs">
                                    {Object.entries(languages).map(([code, language]) => (
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
                                                {translate("Goal Amount")} ({props.currency?.currency_code || "INR"}) *
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
                                            <label>{translate("FAQ")}</label>
                                            {(faqs[selectedLang] || []).map((item, index) => (
                                                <div key={index} className="p-3 mb-3 border rounded">
                                                    <div className="mb-2">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Question"
                                                            value={item.title}
                                                            onChange={(e) => updateFaq(index, "title", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-2">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Answer"
                                                            value={item.content}
                                                            onChange={(e) => updateFaq(index, "content", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="text-right">
                                                        {(faqs[selectedLang] || []).length > 1 && (
                                                            <button type="button" className="btn btn-danger btn-sm" onClick={() => removeFaq(index)}>
                                                                {translate("Remove")}
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                            <button type="button" className="btn btn-primary btn-sm mt-2" onClick={addFaq}>
                                                + {translate("Add FAQ")}
                                            </button>
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
                                        <div className="col-md-12 mt-3">
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

                                    <div className="form-group d-flex justify-content-between align-items-center mb-3">
                                        <label className="mb-0">{translate("Is Active")}:</label>
                                        <div
                                            className={`yoo-switch ${data.status === 1 ? "active" : ""}`}
                                            onClick={() => setData("status", data.status === 1 ? 0 : 1)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex justify-content-between align-items-center mb-3">
                                        <label className="mb-0">{translate("Is Special")}:</label>
                                        <div
                                            className={`yoo-switch ${data.is_special === 1 ? "active" : ""}`}
                                            onClick={() => setData((prev) => ({ ...prev, is_special: prev.is_special === 1 ? 0 : 1 }))}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    {data.is_special === 1 && (
                                        <div className="form-group mt-3">
                                            <label>{translate("Special Occasion Type")} *</label>
                                            <CustomSelect options={typeOptions} value={data.type} onSelect={(value) => setData("type", value)} />
                                            <FormValidationError message={errors.type} />
                                        </div>
                                    )}

                                    <div className="form-group d-flex justify-content-between align-items-center mb-3">
                                        <label className="mb-0">{translate("Have Gift")}:</label>
                                        <div
                                            className={`yoo-switch ${data.have_gift === 1 ? "active" : ""}`}
                                            onClick={() => setData("have_gift", data.have_gift === 1 ? 0 : 1)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex justify-content-between align-items-center mb-3">
                                        <label className="mb-0">{translate("Have Product")}:</label>
                                        <div
                                            className={`yoo-switch ${data.have_product === 1 ? "active" : ""}`}
                                            onClick={() => setData("have_product", data.have_product === 1 ? 0 : 1)}
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
                                            value={data.deadline}
                                            onChange={(e) => setData("deadline", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {data.have_gift === 1 && (
                            <div className="yoo-card yoo-style1 mt-4">
                                <div className="yoo-card-heading">
                                    <h2 className="yoo-card-title">{translate("Gifts")}</h2>
                                </div>
                                <div className="yoo-card-body">
                                    <div className="yoo-padd-lr-20">
                                        <div className="yoo-height-b20" />
                                        <CustomMultiSelect
                                            options={gifts.map((g) => ({ value: g.id, label: g?.content?.title || "Untitled Gift" }))}
                                            value={data.gift_ids}
                                            placeholder="Select Gifts"
                                            onChange={(selected) => setData("gift_ids", selected)}
                                        />
                                        <FormValidationError message={errors.gift_ids} />
                                        <div className="yoo-height-b20" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {data.have_product === 1 && (
                            <div className="yoo-card yoo-style1 mt-4">
                                <div className="yoo-card-heading">
                                    <h2 className="yoo-card-title">{translate("Products")}</h2>
                                </div>
                                <div className="yoo-card-body">
                                    <div className="yoo-padd-lr-20">
                                        <div className="yoo-height-b20" />
                                        <CustomMultiSelect
                                            options={products.map((p) => ({ value: p.id, label: p?.content?.title || "Untitled Product" }))}
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
