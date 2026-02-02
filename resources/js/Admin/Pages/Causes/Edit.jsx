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
export default function Edit({ languages, cause_categories, default_lang, gifts, products, cause, cause_types }) {
    const { props } = usePage()
    const [selectedLang, setSelectedLang] = useState(default_lang)
    const [tempLang, setTempLang] = useState(default_lang)

    // --- 1. PARSE FAQs SAFELY ---
    const [faqs, setFaqs] = useState(() => {
        const result = {}
        Object.keys(languages).forEach((code) => {
            try {
                let raw = cause?.[`${code}_faq`]
                const parsed = typeof raw === "string" ? JSON.parse(raw) : raw
                result[code] = Array.isArray(parsed) && parsed.length > 0 ? parsed : [{ title: "", content: "" }]
            } catch {
                result[code] = [{ title: "", content: "" }]
            }
        })
        return result
    })

    // --- 2. HELPERS FOR IDs ---
    const getInitialIds = (field) => {
        if (!cause[field]) return []
        let ids = cause[field]
        if (typeof ids === "string") {
            try {
                ids = JSON.parse(ids)
            } catch (e) {
                ids = []
            }
        }
        return Array.isArray(ids) ? ids : []
    }

    const typeOptions = cause_types
        ? Object.entries(cause_types).map(([key, label]) => ({
              value: key,
              label: label
          }))
        : []

    const { data, setData, errors, put, processing } = useForm({
        _method: "put",
        ...cause,
        gift_ids: getInitialIds("gift_ids"),
        product_ids: getInitialIds("product_ids"), // Initialized product_ids
        gallery_images: Array.isArray(cause.gallery_images) ? cause.gallery_images : [],
        status: Number(cause.status || 0),
        is_special: Number(cause.is_special || 0),
        have_gift: Number(cause.have_gift || 0),
        have_product: Number(cause.have_product || 0)
    })

    // --- 3. FAQ HANDLERS ---
    const addFaq = () => {
        setFaqs((prev) => ({
            ...prev,
            [selectedLang]: [...(prev[selectedLang] || []), { title: "", content: "" }]
        }))
    }

    const removeFaq = (index) => {
        setFaqs((prev) => ({
            ...prev,
            [selectedLang]: (prev[selectedLang] || []).filter((_, i) => i !== index)
        }))
    }

    const updateFaq = (index, field, value) => {
        setFaqs((prev) => {
            const list = [...(prev[selectedLang] || [])]
            list[index] = { ...list[index], [field]: value }
            return { ...prev, [selectedLang]: list }
        })
    }

    // --- 4. HANDLE UPDATE ---
    const handleUpdate = (e) => {
        e.preventDefault()

        put(route("admin.causes.update", cause.id), {
            preserveScroll: true,
            transform: (currentFormData) => {
                const payload = { ...currentFormData }

                Object.keys(languages).forEach((lang) => {
                    const currentLangFaqs = faqs[lang] || []
                    const cleaned = currentLangFaqs.map((f) => ({
                        title: (f.title || "").toString(),
                        content: (f.content || "").toString()
                    }))
                    payload[`${lang}_faq`] = JSON.stringify(cleaned)
                })

                return payload
            }
        })
    }

    useEffect(() => {
        setSelectedLang(tempLang)
    }, [tempLang])

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const firstErrorField = Object.keys(errors)[0]
            const lang = firstErrorField.split("_")[0]
            if (languages[lang]) setSelectedLang(lang)
        }
    }, [errors])

    return (
        <AdminLayouts>
            <Head title="Edit Cause" />
            <div className="container-fluid">
                <div className="yoo-uikits-heading">
                    <h2 className="yoo-uikits-title">{translate("Edit Cause")}</h2>
                </div>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>

                <form className="row" onSubmit={handleUpdate}>
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
                                            <label>{translate("Custom Donation Amounts")}</label>
                                            <TextInput
                                                type="text"
                                                value={data.custom_donation_amounts}
                                                onChange={(e) => setData("custom_donation_amounts", e.target.value)}
                                            />
                                            <small>comma seperated like (100,500,1000)</small>
                                        </div>
                                    </div>

                                    {/* Category */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Category")} *</label>
                                            <div className="yoo-select">
                                                <select
                                                    className="form-control"
                                                    onChange={(e) => setData("category", e.target.value)}
                                                    value={data.category}
                                                >
                                                    <option value="">{translate("Select Category")}</option>
                                                    {cause_categories?.map((cat) => (
                                                        <option key={cat.id} value={cat.id}>
                                                            {cat?.content?.title}
                                                        </option>
                                                    ))}
                                                </select>
                                                <FormValidationError message={errors.category} />
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
                                    {/* Content & Projects */}
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>{translate("Content")}</label>
                                            <Editor onChange={(v) => setData(`${selectedLang}_content`, v)} value={data[`${selectedLang}_content`]} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>{translate("Projects")}</label>
                                            <Editor
                                                onChange={(v) => setData(`${selectedLang}_projects`, v)}
                                                value={data[`${selectedLang}_projects`]}
                                            />
                                        </div>
                                    </div>

                                    {/* FAQ SECTION */}
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>{translate("FAQ")}</label>
                                            {(faqs[selectedLang] || []).map((item, index) => (
                                                <div key={index} className="p-3 mb-3 border rounded">
                                                    <div className="mb-2">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Question"
                                                            value={item.title || ""}
                                                            onChange={(e) => updateFaq(index, "title", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-2">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Answer"
                                                            value={item.content || ""}
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

                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>{translate("Updates")}</label>
                                            <Editor onChange={(v) => setData(`${selectedLang}_updates`, v)} value={data[`${selectedLang}_updates`]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SEO */}
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
                                        <div className="form-group mt-2">
                                            <label>{translate("Occasion Type")} *</label>
                                            <CustomSelect options={typeOptions} value={data.type} onSelect={(v) => setData("type", v)} />
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

                        {/* NEW: Products Selection (Update View) */}
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
                                    <label>{translate("Thumbnail")}</label>
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

                                    <label className="mt-3">{translate("Banner")}</label>
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

                                    <label className="mt-3">{translate("Gallery")}</label>
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
                                            {translate("Update")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayouts>
    )
}
