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

export default function Edit({ languages, cause_categories, default_lang, gifts, cause, cause_types }) {
    const { props } = usePage()

    /* ---------------- LANGUAGE ---------------- */
    const [selectedLang, setSelectedLang] = useState(default_lang)
    const [tempLang, setTempLang] = useState(default_lang)

    /* ---------------- FAQ STATE ---------------- */
    const [faqs, setFaqs] = useState(() => {
        const result = {}
        Object.keys(languages).forEach((code) => {
            try {
                let raw = cause?.[`${code}_faq`]
                const parsed = typeof raw === "string" ? JSON.parse(raw) : raw
                result[code] = Array.isArray(parsed) && parsed.length ? parsed : [{ title: "", content: "" }]
            } catch {
                result[code] = [{ title: "", content: "" }]
            }
        })
        return result
    })

    /* ---------------- PREPARE DATA ---------------- */

    // FIX: Map Gift IDs [1, 2] -> Objects [{value: 1, label: 'Name'}] so they show in UI
    const initialGifts = () => {
        if (!cause.gift_ids || !Array.isArray(cause.gift_ids)) return []
        return gifts
            .filter(g => cause.gift_ids.includes(g.id))
            .map(g => ({
                value: g.id,
                label: g?.content?.title || "Untitled Gift"
            }))
    }

    // FIX: Convert cause_types object/array from backend to Options format
    const typeOptions = cause_types ? Object.entries(cause_types).map(([key, label]) => ({
        value: key,
        label: label
    })) : []

    /* ---------------- FORM ---------------- */
    const { data, setData, errors, put } = useForm({
        _method: "put",
        ...cause,
        gift_ids: initialGifts(), // Initialize with objects
        // FIX: Ensure Gallery Images is always an array to prevent .map() crash
        gallery_images: Array.isArray(cause.gallery_images) ? cause.gallery_images : [],
        is_special: Number(cause.is_special || 0),
        have_gift: Number(cause.have_gift || 0),
        have_product: Number(cause.have_product || 0),
        status: Number(cause.status || 0),
        deadline: cause.deadline || ""
    })

    const handlePublish = (e) => {
        e.preventDefault()

        put(route("admin.causes.update", cause.id), {
            preserveScroll: true,
            transform: (data) => {
                const transformedData = { ...data }

                // 1. Transform Gift Objects back to IDs for Database
                if (Array.isArray(data.gift_ids)) {
                    transformedData.gift_ids = data.gift_ids.map(item => item.value || item)
                }

                // 2. Stringify FAQs
                Object.keys(languages).forEach((lang) => {
                    const currentFaqs = faqs[lang] || []
                    const cleaned = currentFaqs.map((f) => ({
                        title: (f.title || "").toString(),
                        content: (f.content || "").toString()
                    }))
                    transformedData[`${lang}_faq`] = JSON.stringify(cleaned)
                })

                return transformedData
            }
        })
    }

    useEffect(() => setSelectedLang(tempLang), [tempLang])

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
                                        <div className="col-md-6">
                                            <label>{translate("Raised Amount")} ({props.currency?.currency_code || "INR"}) *</label>
                                            <TextInput
                                                type="number"
                                                step="0.01"
                                                value={data.raised_amount}
                                                onChange={(e) => setData("raised_amount", e.target.value)}
                                                error={errors.raised_amount}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>{translate("Goal Amount")} ({props.currency?.currency_code || "INR"}) *</label>
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
                                                        <option key={cat.id} value={cat.id}>{cat?.content?.title}</option>
                                                    ))}
                                                </select>
                                                <FormValidationError message={errors.category} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>{translate("Content")}</label>
                                            <Editor onChange={(v) => setData(`${selectedLang}_content`, v)} value={data[`${selectedLang}_content`]} />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>{translate("Projects")}</label>
                                            <Editor onChange={(v) => setData(`${selectedLang}_projects`, v)} value={data[`${selectedLang}_projects`]} />
                                        </div>
                                    </div>

                                    {/* FAQ SECTION */}
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>{translate("FAQ")}</label>
                                            {faqs[selectedLang].map((item, index) => (
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
                                                                setFaqs((prev) => ({ ...prev, [selectedLang]: updated }))
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <label>{translate("Answer")}</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={item.content}
                                                            onChange={(e) => {
                                                                const updated = [...faqs[selectedLang]]
                                                                updated[index].content = e.target.value
                                                                setFaqs((prev) => ({ ...prev, [selectedLang]: updated }))
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="text-right">
                                                        {faqs[selectedLang].length > 1 && (
                                                            <button type="button" className="btn btn-danger btn-sm" onClick={() => {
                                                                const updated = faqs[selectedLang].filter((_, i) => i !== index)
                                                                setFaqs(prev => ({ ...prev, [selectedLang]: updated }))
                                                            }}>
                                                                {translate("Remove")}
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                            <button type="button" className="btn btn-primary btn-sm mt-2" onClick={() => {
                                                setFaqs(prev => ({ ...prev, [selectedLang]: [...prev[selectedLang], { title: "", content: "" }] }))
                                            }}>
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

                                    <div className="yoo-height-b20" />
                                </div>
                            </div>
                        </div>

                        {/* SEO CARD */}
                        <div className="yoo-card yoo-style1 mt-4">
                             <div className="yoo-card-heading"><h2 className="yoo-card-title">{translate("SEO Details")}</h2></div>
                             <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20" />
                                    <div className="row">
                                        <div className="col-md-6"><label>{translate("SEO Title")}</label><TextInput type="text" value={data.meta_title} onChange={e => setData("meta_title", e.target.value)} /></div>
                                        <div className="col-md-6"><label>{translate("SEO Description")}</label><TextInput type="text" value={data.meta_description} onChange={e => setData("meta_description", e.target.value)} /></div>
                                        <div className="col-md-12 mt-2"><label>{translate("SEO Tags")}</label><TextInput type="text" value={data.meta_tags} onChange={e => setData("meta_tags", e.target.value)} /></div>
                                    </div>
                                    <div className="yoo-height-b20" />
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-md-4">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading"><h2 className="yoo-card-title">{translate("Cause Status")}</h2></div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20" />

                                    {/* STATUS SWITCHES */}
                                    <div className="form-group d-flex justify-content-between align-items-center mb-3">
                                        <label className="mb-0">{translate("Is Active")}:</label>
                                        <div className={`yoo-switch ${data.status === 1 ? 'active' : ''}`} onClick={() => setData('status', data.status === 1 ? 0 : 1)} style={{cursor: 'pointer'}}>
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex justify-content-between align-items-center mb-3">
                                        <label className="mb-0">{translate("Is Special")}:</label>
                                        <div className={`yoo-switch ${data.is_special === 1 ? 'active' : ''}`} onClick={() => setData(prev => ({...prev, is_special: prev.is_special === 1 ? 0 : 1, type: prev.is_special === 1 ? "" : prev.type}))} style={{cursor: 'pointer'}}>
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    {/* DYNAMIC TYPES from MODEL */}
                                    {data.is_special === 1 && (
                                        <div className="form-group mt-2">
                                            <label>{translate("Occasion Type")} *</label>
                                            <CustomSelect
                                                options={typeOptions}
                                                value={data.type}
                                                onSelect={(v) => setData("type", v)}
                                            />
                                            <FormValidationError message={errors.type} />
                                        </div>
                                    )}

                                    <div className="form-group d-flex justify-content-between align-items-center mb-3">
                                        <label className="mb-0">{translate("Have Gift")}:</label>
                                        <div className={`yoo-switch ${data.have_gift === 1 ? 'active' : ''}`} onClick={() => setData('have_gift', data.have_gift === 1 ? 0 : 1)} style={{cursor: 'pointer'}}>
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex justify-content-between align-items-center mb-3">
                                        <label className="mb-0">{translate("Have Product")}:</label>
                                        <div className={`yoo-switch ${data.have_product === 1 ? 'active' : ''}`} onClick={() => setData('have_product', data.have_product === 1 ? 0 : 1)} style={{cursor: 'pointer'}}>
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>{translate("Deadline")}</label>
                                        <input type="date" className="form-control" value={data.deadline} onChange={(e) => setData("deadline", e.target.value)} />
                                    </div>
                                    <div className="yoo-height-b20" />
                                </div>
                            </div>
                        </div>

                        {/* GIFTS MULTISELECT */}
                        {data.have_gift === 1 && (
                            <div className="yoo-card yoo-style1 mt-4">
                                <div className="yoo-card-heading"><h2 className="yoo-card-title">{translate("Gifts")}</h2></div>
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

                        {/* IMAGES */}
                        <div className="yoo-card yoo-style1 mt-4">
                            <div className="yoo-card-heading"><h2 className="yoo-card-title">{translate("Images")}</h2></div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20" />
                                    <label>{translate("Thumbnail")}</label>
                                    <SingleMediaUploader onSelected={(e) => setData(produce(d => {d.thumbnail_image = e}))} defaultValue={data.thumbnail_image} />

                                    <label className="mt-3">{translate("Banner")}</label>
                                    <SingleMediaUploader onSelected={(e) => setData(produce(d => {d.banner_image = e}))} defaultValue={data.banner_image} />

                                    <label className="mt-3">{translate("Gallery")}</label>
                                    <MultipleMediaUploader onSelected={(e) => setData(produce(d => {d.gallery_images = e}))} defaultValue={data.gallery_images} />

                                    <div className="mt-4"><button type="submit" className="btn btn-success">{translate("Update")}</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayouts>
    )
}
