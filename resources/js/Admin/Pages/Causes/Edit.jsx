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

export default function Edit({ languages, cause_categories, default_lang, gifts, cause }) {
    const [selectedLang, setSelectedLang] = useState(default_lang)
    const [tempLang, setTempLang] = useState(default_lang)
    const languageArr = Object.entries(languages)
    const { props } = usePage()

    // FAQ State — initialize from existing JSON or empty
    const initialFaqs = Object.keys(languages).reduce((acc, code) => {
        try {
            const saved = cause[`${code}_faq`]
            acc[code] = saved ? JSON.parse(saved) : [{ title: "", content: "" }]
        } catch {
            acc[code] = [{ title: "", content: "" }]
        }
        return acc
    }, {})

    const [faqs, setFaqs] = useState(initialFaqs)

    // Special Type Options
    const specialTypeOptions = [
        { value: "birthday", label: translate("Birthday") },
        { value: "anniversary", label: translate("Anniversary") },
        { value: "special_day", label: translate("Special Day") }
    ]

    const { data, setData, errors, put, processing } = useForm({
        ...cause,
        gift_ids: cause.gifts?.map(g => g.id) || [],
        gallery_images: cause.gallery_images || [],
        type: cause.type || "",
    })

    const handleUpdate = (e) => {
        e.preventDefault()

        // Convert FAQ arrays → JSON strings before sending
        Object.keys(languages).forEach((lang) => {
            const cleaned = (faqs[lang] || []).map(f => ({
                title: (f.title || "").toString(),
                content: (f.content || "").toString()
            }))
            setData(`${lang}_faq`, JSON.stringify(cleaned))
        })

        put(route("admin.causes.update", cause.id))
    }

    useEffect(() => setSelectedLang(tempLang), [tempLang])

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const firstError = Object.keys(errors)[0]
            const lang = firstError.split("_")[0]
            if (languages[lang]) setSelectedLang(lang)
        }
    }, [errors])

    return (
        <AdminLayouts>
            <Head title={translate("Edit Cause")} />

            <div className="container-fluid">
                <div className="yoo-uikits-heading">
                    <h2 className="yoo-uikits-title">{translate("Edit Cause")}</h2>
                </div>

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
                                                style={{ outline: "none" }}
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

                                    {/* Cause Name */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Cause Name")} *</label>
                                            <TextInput
                                                value={data[`${selectedLang}_title`] || ""}
                                                onChange={(e) => setData(`${selectedLang}_title`, e.target.value)}
                                                error={errors[`${selectedLang}_title`]}
                                            />
                                        </div>
                                    </div>

                                    {/* Amounts */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>{translate("Raised Amount")} ({props.currency?.currency_code}) *</label>
                                            <TextInput type="number" step="0.01" value={data.raised_amount} onChange={(e) => setData("raised_amount", e.target.value)} error={errors.raised_amount} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>{translate("Goal Amount")} ({props.currency?.currency_code}) *</label>
                                            <TextInput type="number" step="0.01" value={data.goal_amount} onChange={(e) => setData("goal_amount", e.target.value)} error={errors.goal_amount} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Custom Donation Amounts")}</label>
                                            <TextInput value={data.custom_donation_amounts} onChange={(e) => setData("custom_donation_amounts", e.target.value)} error={errors.custom_donation_amounts} />
                                            <small>comma separated (2100,5100,11000)</small>
                                        </div>
                                    </div>

                                    {/* Category */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Category")} *</label>
                                            <select className="form-control" value={data.category} onChange={(e) => setData("category", e.target.value)}>
                                                <option value="">{translate("Select Category")}</option>
                                                {cause_categories.map(cat => (
                                                    <option key={cat.id} value={cat.id}>{cat.content?.title}</option>
                                                ))}
                                            </select>
                                            <FormValidationError message={errors.category} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>{translate("Content")}</label>
                                            <Editor
                                                value={data[`${selectedLang}_content`] || ""}
                                                onChange={(val) => setData(`${selectedLang}_content`, val)}
                                            />
                                        </div>
                                    </div>

                                    {/* Projects */}
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <label>{translate("Projects")}</label>
                                            <Editor
                                                value={data[`${selectedLang}_projects`] || ""}
                                                onChange={(val) => setData(`${selectedLang}_projects`, val)}
                                            />
                                        </div>
                                    </div>

                                    {/* FAQ */}
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <label>{translate("FAQ")}</label>
                                            {faqs[selectedLang]?.map((item, index) => (
                                                <div key={index} className="p-3 mb-3 border rounded">
                                                    <div className="form-group mb-2">
                                                        <label>{translate("Question Title")}</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={item.title}
                                                            onChange={(e) => {
                                                                const updated = [...faqs[selectedLang]]
                                                                updated[index].title = e.target.value
                                                                setFaqs(prev => ({ ...prev, [selectedLang]: updated }))
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <label>{translate("Answer (Text Only)")}</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={item.content}
                                                            onChange={(e) => {
                                                                const updated = [...faqs[selectedLang]]
                                                                updated[index].content = e.target.value
                                                                setFaqs(prev => ({ ...prev, [selectedLang]: updated }))
                                                            }}
                                                        />
                                                    </div>
                                                    {faqs[selectedLang].length > 1 && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => {
                                                                const updated = faqs[selectedLang].filter((_, i) => i !== index)
                                                                setFaqs(prev => ({ ...prev, [selectedLang]: updated }))
                                                            }}
                                                        >
                                                            {translate("Remove FAQ")}
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm"
                                                onClick={() => setFaqs(prev => ({
                                                    ...prev,
                                                    [selectedLang]: [...prev[selectedLang], { title: "", content: "" }]
                                                }))}
                                            >
                                                + {translate("Add FAQ")}
                                            </button>
                                            <FormValidationError message={errors[`${selectedLang}_faq`]} />
                                        </div>
                                    </div>

                                    {/* Updates */}
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <label>{translate("Updates")}</label>
                                            <Editor
                                                value={data[`${selectedLang}_updates`] || ""}
                                                onChange={(val) => setData(`${selectedLang}_updates`, val)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SEO Card */}
                        <div className="yoo-card yoo-style1 mt-4">
                            <div className="yoo-card-heading">
                                <h2 className="yoo-card-title">{translate("SEO Details")}</h2>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>{translate("SEO Title")}</label>
                                            <TextInput value={data.meta_title} onChange={(e) => setData("meta_title", e.target.value)} error={errors.meta_title} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>{translate("SEO Description")}</label>
                                            <TextInput value={data.meta_description} onChange={(e) => setData("meta_description", e.target.value)} error={errors.meta_description} />
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <label>{translate("SEO Tags")}</label>
                                            <TextInput value={data.meta_tags} onChange={(e) => setData("meta_tags", e.target.value)} error={errors.meta_tags} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-md-4">
                        {/* Status Card */}
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <h2 className="yoo-card-title">{translate("Cause Status")}</h2>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="form-group d-flex align-items-center justify-content-between">
                                        <label className="mb-0">{translate("Is Active")}:</label>
                                        <div className={`yoo-switch ${data.status === 1 ? "active" : ""}`} onClick={() => setData("status", data.status === 1 ? 0 : 1)} style={{ cursor: "pointer" }}>
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex align-items-center justify-content-between">
                                        <label className="mb-0">{translate("Is Special")}:</label>
                                        <div className={`yoo-switch ${data.is_special === 1 ? "active" : ""}`} onClick={() => {
                                            const newVal = data.is_special === 1 ? 0 : 1
                                            setData({ is_special: newVal, ...(newVal === 0 && { type: "" }) })
                                        }} style={{ cursor: "pointer" }}>
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    {data.is_special === 1 && (
                                        <div className="form-group mt-4">
                                            <label>{translate("Special Occasion Type")} *</label>
                                            <CustomSelect
                                                options={specialTypeOptions}
                                                value={data.type}
                                                placeholder={translate("Select type...")}
                                                onSelect={(val) => setData("type", val)}
                                            />
                                            <FormValidationError message={errors.type} />
                                        </div>
                                    )}

                                    <div className="form-group d-flex align-items-center justify-content-between mt-3">
                                        <label className="mb-0">{translate("Have Gift")}:</label>
                                        <div className={`yoo-switch ${data.have_gift === 1 ? "active" : ""}`} onClick={() => setData("have_gift", data.have_gift === 1 ? 0 : 1)} style={{ cursor: "pointer" }}>
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    {data.have_gift === 1 && (
                                        <div className="mt-4">
                                            <CustomMultiSelect
                                                options={gifts.map(g => ({ value: g.id, label: g.content?.title }))}
                                                value={data.gift_ids}
                                                placeholder={translate("Select Gifts")}
                                                onChange={(selected) => setData("gift_ids", selected)}
                                            />
                                            <FormValidationError message={errors.gift_ids} />
                                        </div>
                                    )}

                                    <div className="form-group mt-3">
                                        <label>{translate("Deadline")}</label>
                                        <input type="date" className="form-control" value={data.deadline || ""} onChange={(e) => setData("deadline", e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Images Card */}
                        <div className="yoo-card yoo-style1 mt-4">
                            <div className="yoo-card-heading">
                                <h2 className="yoo-card-title">{translate("Cause Images")}</h2>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <SingleMediaUploader label={translate("Thumbnail Image")} defaultValue={data.thumbnail_image} onSelected={(e) => setData(produce(d => { d.thumbnail_image = e }))} handleRemoved={() => setData(produce(d => { d.thumbnail_image = "" }))} />
                                    <FormValidationError message={errors.thumbnail_image} />

                                    <SingleMediaUploader label={translate("Banner Image")} defaultValue={data.banner_image} onSelected={(e) => setData(produce(d => { d.banner_image = e }))} handleRemoved={() => setData(produce(d => { d.banner_image = "" }))} />
                                    <FormValidationError message={errors.banner_image} />

                                    <MultipleMediaUploader label={translate("Gallery Images")} defaultValue={data.gallery_images} onSelected={(e) => setData(produce(d => { d.gallery_images = e }))} handleRemoved={(d) => setData(produce(draft => { draft.gallery_images = d }))} />

                                    <button type="submit" className="btn btn-success mt-4" disabled={processing}>
                                        {translate("Update Cause")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayouts>
    )
}
