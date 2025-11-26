// Full updated Create component with multi-language JSON FAQ support
// (React + Inertia version)

import { useForm, Head, usePage } from "@inertiajs/react"
import TextInput from "@/Admin/Components/Inputs/TextInput"
import FormValidationError from "@/Admin/Components/Validation/FromValidationError"
import { useState, useEffect } from "react"
import Editor from "@/Admin/Components/Inputs/Editor"
import SingleMediaUploader from "@/Admin/Components/Media/SingleMediaUploader"
import MultipleMediaUploader from "@/Admin/Components/Media/MultipleMediaUploader"
import CustomMultiSelect from "@/Admin/Components/Inputs/CustomMultiSelect"
import { produce } from "immer"
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import translate from "@/utils/translate"
import { gift } from "ionicons/icons"

export default function Create({ languages, cause_categories, default_lang, gifts }) {
    const [selectedLang, setSelectedLang] = useState(default_lang)
    const [tempLang, setTempLang] = useState(selectedLang)
    const languageArr = Object.entries(languages)
    const { props } = usePage()

    // Multi-language FAQ state: simple text entries (no rich editor)
    const [faqs, setFaqs] = useState(
        Object.keys(languages).reduce((acc, code) => {
            acc[code] = [{ title: "", content: "" }]
            return acc
        }, {})
    )

    const { data, setData, errors, post } = useForm({
        category: "",
        slug: "",
        banner_image: "",
        gallery_images: [],
        have_gift: "0",
        gift_ids: [],
        have_product: "0",
        custom_donation_amounts: "2100,5100,11000",
        video_url: "",
        raised_amount: "",
        goal_amount: "",
        deadline: "",
        status: "1",
        meta_image: "",
        meta_title: "",
        meta_tags: "",
        meta_description: "",

        ...Object.keys(languages).reduce((acc, code) => {
            acc[code + "_title"] = ""
            acc[code + "_content"] = ""
            acc[code + "_projects"] = ""
            acc[code + "_faq"] = ""
            acc[code + "_updates"] = ""
            return acc
        }, {})
    })

    const handlePublish = (e) => {
        e.preventDefault()

        // Convert FAQ arrays → JSON strings per language (simple text)
        Object.keys(languages).forEach((lang) => {
            // ensure we don't send editor values accidentally
            const cleaned = faqs[lang].map((f) => ({
                title: (f.title || "").toString(),
                content: (f.content || "").toString()
            }))
            setData(`${lang}_faq`, JSON.stringify(cleaned))
        })

        post(route("admin.causes.store"))
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

                <form className="row" onSubmit={handlePublish}>
                    {/* LEFT COLUMN */}
                    <div className="col-lg-8">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <ul className="nav nav-tabs" id="myTab">
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
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="name_translation">{translate("Cause Name")} *</label>
                                            <TextInput
                                                title="Enter Cause Name"
                                                type="text"
                                                id="name_translation"
                                                error={errors[`${selectedLang}_title`]}
                                                value={data[`${selectedLang}_title`]}
                                                onChange={(e) => setData(`${selectedLang}_title`, e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="raised_amount">
                                                {translate("Raised Amount")} ({props.currency?.currency_code || "INR"}) *
                                            </label>
                                            <TextInput
                                                title="Enter Raised Amount"
                                                type="number"
                                                step="0.01"
                                                id="raised_amount"
                                                error={errors?.raised_amount}
                                                value={data.raised_amount}
                                                onChange={(e) => setData("raised_amount", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="goal_amount">
                                                {translate("Goal Amount")} ({props.currency?.currency_code || "INR"}) *
                                            </label>
                                            <TextInput
                                                title="Enter Goal Amount"
                                                type="number"
                                                step="0.01"
                                                id="goal_amount"
                                                error={errors?.goal_amount}
                                                value={data.goal_amount}
                                                onChange={(e) => setData("goal_amount", e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="custom_donation_amounts">
                                                {translate("Custom Donation Amounts")} ({props.currency?.currency_code || "INR"}) *
                                            </label>
                                            <TextInput
                                                title="Enter Raised Amount"
                                                type="text"
                                                step="0.01"
                                                id="custom_donation_amounts"
                                                error={errors?.custom_donation_amounts}
                                                value={data.custom_donation_amounts}
                                                onChange={(e) => setData("custom_donation_amounts", e.target.value)}
                                            />
                                            <small>comma seperated amounts like (100,500,1000)</small>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="category">{translate("Category")} *</label>
                                            <div className="form-group form-group-md">
                                                <div className="yoo-select">
                                                    <select
                                                        className="form-control"
                                                        id="category"
                                                        error={errors?.category}
                                                        onChange={(e) => setData("category", e.target.value)}
                                                        value={data.category}
                                                    >
                                                        <option value="">{translate("Select Category")}</option>
                                                        {cause_categories &&
                                                            cause_categories.map((category) => (
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
                                            <label htmlFor="content">{translate("Content")}</label>
                                            <Editor
                                                onChange={(value) => setData(`${tempLang}_content`, value)}
                                                value={data[`${selectedLang}_content`]}
                                            />
                                        </div>
                                    </div>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />

                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="projects">{translate("Projects")}</label>
                                            <Editor
                                                onChange={(value) => setData(`${tempLang}_projects`, value)}
                                                value={data[`${selectedLang}_projects`]}
                                            />
                                        </div>
                                    </div>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />

                                    {/* MULTI FAQ - plain text inputs (no Editor) */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="faq">{translate("FAQ")}</label>

                                            {faqs[selectedLang].map((item, index) => (
                                                <div key={index} className="p-3 mb-3 border rounded">
                                                    <div className="form-group mb-2">
                                                        <label>{translate("Question Title")}</label>
                                                        <input type="text" className="form-control" value={item.title}
                                                            onChange={(e) => {
                                                                const updated = [...faqs[selectedLang]]
                                                                updated[index].title = e.target.value
                                                                setFaqs((prev) => ({ ...prev, [selectedLang]: updated }))
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="form-group mb-2">
                                                        <label>{translate("Answer (Text Only)")}</label>
                                                        <input type="text" className="form-control" value={item.content}
                                                            onChange={(e) => {
                                                                const updated = [...faqs[selectedLang]]
                                                                updated[index].content = e.target.value
                                                                setFaqs((prev) => ({ ...prev, [selectedLang]: updated }))
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="d-flex justify-content-end">
                                                        {faqs[selectedLang].length > 1 && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() => {
                                                                    const updated = faqs[selectedLang].filter((_, i) => i !== index)
                                                                    setFaqs((prev) => ({ ...prev, [selectedLang]: updated }))
                                                                }}
                                                            >
                                                                {translate("Remove FAQ")}
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="mt-2">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() =>
                                                        setFaqs((prev) => ({
                                                            ...prev,
                                                            [selectedLang]: [...prev[selectedLang], { title: "", content: "" }]
                                                        }))
                                                    }
                                                >
                                                    + {translate("Add FAQ")}
                                                </button>
                                            </div>

                                            <FormValidationError message={errors[`${selectedLang}_faq`]} />
                                        </div>
                                    </div>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />

                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="updates">{translate("Updates")}</label>
                                            <Editor
                                                onChange={(value) => setData(`${tempLang}_updates`, value)}
                                                value={data[`${selectedLang}_updates`]}
                                            />
                                        </div>
                                    </div>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
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
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>{translate("SEO Title")}</label>
                                            <TextInput
                                                title="Enter SEO Title"
                                                type="text"
                                                id="meta_title"
                                                error={errors.meta_title}
                                                value={data.meta_title}
                                                onChange={(e) => setData("meta_title", e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label>{translate("SEO Description")}</label>
                                            <TextInput
                                                title="Enter SEO Description"
                                                type="text"
                                                id="meta_description"
                                                error={errors.meta_description}
                                                value={data.meta_description}
                                                onChange={(e) => setData("meta_description", e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-12 mt-2">
                                            <label>{translate("SEO Tags")}</label>
                                            <TextInput
                                                title="Enter SEO Tags"
                                                type="text"
                                                id="meta_tags"
                                                error={errors.meta_tags}
                                                value={data.meta_tags}
                                                onChange={(e) => setData("meta_tags", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="yoo-height-b10 yoo-height-lg-b10" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-md-4">
                        {/* STATUS CARD */}
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left">
                                    <h2 className="yoo-card-title">{translate("Cause Status")}</h2>
                                </div>
                            </div>

                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />

                                    <div className="form-group form-group-md d-flex align-items-center justify-content-between">
                                        <label className="mb-0">{translate("Is Active")}:</label>
                                        <div
                                            className={`yoo-switch ${data.status === "1" ? "active" : ""}`}
                                            onClick={() => setData("status", data.status === "1" ? "0" : "1")}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group form-group-md d-flex align-items-center justify-content-between">
                                        <label className="mb-0">{translate("Have Gift")}:</label>
                                        <div
                                            className={`yoo-switch ${data.have_gift === "1" ? "active" : ""}`}
                                             onClick={() => setData("have_gift", data.have_gift === "1" ? "0" : "1")}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    <div className="form-group form-group-md d-flex align-items-center justify-content-between">
                                        <label className="mb-0">{translate("Have Product")}:</label>
                                        <div
                                            className={`yoo-switch ${data.have_product === "1" ? "active" : ""}`}
                                            onClick={() => setData("have_product", data.have_product === "1" ? "0" : "1")}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    {/* Deadline date field added inside Product Status card */}
                                    <div className="form-group mt-3">
                                        <label htmlFor="deadline">{translate("Deadline")}</label>
                                        <input
                                            type="date"
                                            id="deadline"
                                            className="form-control"
                                            value={data.deadline}
                                            onChange={(e) => setData("deadline", e.target.value)}
                                        />
                                        <FormValidationError message={errors.deadline} />
                                    </div>

                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                </div>
                            </div>
                        </div>

                        {data.have_gift === "1" && (
                            <div className="yoo-card yoo-style1 mt-4">
                                <div className="yoo-card-heading">
                                    <h2 className="yoo-card-title">{translate("Gifts")}</h2>
                                </div>

                                <div className="yoo-card-body">
                                    <div className="yoo-padd-lr-20">
                                        <div className="yoo-height-b20 yoo-height-lg-b20" />
                                        <CustomMultiSelect
                                            options={gifts.map(g => ({
                                                value: g.id,
                                                label: g?.content?.title || "Untitled Gift"
                                            }))}
                                            value={data.gift_ids}
                                            placeholder="Select Gifts"
                                            onChange={(selected) => setData("gift_ids", selected)}
                                        />
                                        <FormValidationError message={errors.gift_ids} />
                                        <div className="yoo-height-b20 yoo-height-lg-b20" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* IMAGES */}
                        <div className="yoo-card yoo-style1 mt-4">
                            <div className="yoo-card-heading">
                                <h2 className="yoo-card-title mr-5">{translate("Cause Images")}</h2>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                    <div className="form-group">
                                        <label>{translate("Upload Banner image")} *</label>
                                        <SingleMediaUploader
                                            onSelected={(e) => {
                                                setData(
                                                    produce((draft) => {
                                                        draft.banner_image = e
                                                    })
                                                )
                                            }}
                                            handleRemoved={() =>
                                                setData(
                                                    produce((draft) => {
                                                        draft.banner_image = ""
                                                    })
                                                )
                                            }
                                            defaultValue={data.banner_image}
                                        />
                                    </div>
                                    <FormValidationError message={errors?.banner_image} />
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                    <div className="form-group">
                                        <label>{translate("Upload Gallery images")} *</label>
                                        <MultipleMediaUploader
                                            onSelected={(e) => {
                                                setData(
                                                    produce((draft) => {
                                                        draft.gallery_images = e
                                                    })
                                                )
                                            }}
                                            handleRemoved={(d) =>
                                                setData(
                                                    produce((draft) => {
                                                        draft.gallery_images = d
                                                    })
                                                )
                                            }
                                            defaultValue={data.gallery_images}
                                        />
                                    </div>
                                    <FormValidationError message={errors?.gallery_images} />
                                    <div className="mb-2">
                                        <button type="submit" className="btn btn-success">
                                            {translate("Publish")}
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
