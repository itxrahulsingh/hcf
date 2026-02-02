import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import TextInput from "@/Admin/Components/Inputs/TextInput.jsx"
import { useForm, Head } from "@inertiajs/react"
import SuccessButton from "@/Admin/Components/Button/SuccessButton"
import { useState, useEffect } from "react"
import translate from "@/utils/translate"
import SingleMediaUploader from "@/Admin/Components/Media/SingleMediaUploader"
import FormValidationError from "@/Admin/Components/Validation/FromValidationError"
import { produce } from "immer"
import { Icon } from "@iconify/react"

export default function Create({ default_lang, languages }) {
    const [selectedLang, setSelectedLang] = useState(default_lang)
    const [tempLang, setTempLang] = useState(selectedLang)

    const { data, setData, errors, post, processing } = useForm({
        gift_image: "",
        amount: "",
        min_qty: "",
        have_variations: 0,
        variations: [],
        ...Object.keys(languages).reduce((acc, code) => {
            acc[code + "_title"] = ""
            acc[code + "_description"] = ""
            return acc
        }, {})
    })

    const addVariation = () => {
        setData(
            produce((draft) => {
                draft.variations.push({ title: "", amount: "" })
            })
        )
    }

    const removeVariation = (index) => {
        setData(
            produce((draft) => {
                draft.variations.splice(index, 1)
            })
        )
    }

    const updateVariation = (index, field, value) => {
        setData(
            produce((draft) => {
                draft.variations[index][field] = value
            })
        )
    }

    const handlePublish = (e) => {
        e.preventDefault()
        post(route("admin.gifts.store"))
    }

    useEffect(() => {
        setSelectedLang(tempLang)
    }, [tempLang])

    useEffect(() => {
        if (errors) {
            const [firstKey] = Object.keys(errors)
            const [errorLang] = firstKey?.split("_") || []
            if (errorLang && errorLang !== default_lang && languages.hasOwnProperty(errorLang)) {
                setSelectedLang(errorLang)
            }
        }
    }, [errors, default_lang, languages])

    return (
        <AdminLayouts>
            <Head title="Create Gift" />
            <div className="yoo-height-b30 yoo-height-lg-b30" />
            <div className="container-fluid">
                <div className="yoo-uikits-heading">
                    <h2 className="yoo-uikits-title">{translate("Create Gift")}</h2>
                </div>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                <form className="row" onSubmit={handlePublish}>
                    <div className="col-lg-8">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left">
                                    <h2 className="yoo-card-title">{translate("Gift Details")}</h2>
                                </div>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
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

                                    {/* Image Upload */}
                                    <div className="form-group">
                                        <label>{translate("Upload gift image")} *</label>
                                        <SingleMediaUploader
                                            onSelected={(e) => {
                                                setData(produce((draft) => { draft.gift_image = e }))
                                            }}
                                            handleRemoved={() =>
                                                setData(produce((draft) => { draft.gift_image = "" }))
                                            }
                                            defaultValue={data.gift_image}
                                        />
                                        <FormValidationError message={errors?.gift_image} />
                                    </div>

                                    {/* Title */}
                                    <div className="form-group">
                                        <label htmlFor="title">
                                            {translate("Title")} ({languages[selectedLang].name}) *
                                        </label>
                                        <TextInput
                                            title={`${translate("Enter gift title")} *`}
                                            type="text"
                                            id="title"
                                            error={errors[`${selectedLang}_title`]}
                                            value={data[`${selectedLang}_title`]}
                                            onChange={(e) => setData(`${selectedLang}_title`, e.target.value)}
                                        />
                                    </div>

                                    {/* Default Amount */}
                                    <div className="form-group">
                                        <label htmlFor="amount">{translate("Default Amount")} *</label>
                                        <TextInput
                                            title={`${translate("Amount")}`}
                                            type="number"
                                            id="amount"
                                            error={errors?.amount}
                                            value={data.amount}
                                            onChange={(e) => setData("amount", e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group d-flex align-items-center justify-content-between mb-3 border p-3 rounded bg-light">
                                        <label className="mb-0 fw-bold">{translate("Have Price Variations?")}</label>
                                        <div
                                            className={`yoo-switch ${data.have_variations === 1 ? "active" : ""}`}
                                            onClick={() => setData("have_variations", data.have_variations === 1 ? 0 : 1)}
                                            style={{cursor: 'pointer'}}
                                        >
                                            <div className="yoo-switch-in"></div>
                                        </div>
                                    </div>

                                    {data.have_variations === 1 && (
                                        <div className="form-group border rounded p-3 mb-3 bg-white animate__animated animate__fadeIn">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <label className="mb-0 fw-bold text-primary">{translate("Variations List")}</label>
                                                <button
                                                    type="button"
                                                    onClick={addVariation}
                                                    className="btn btn-sm btn-primary d-flex align-items-center gap-1"
                                                >
                                                    <Icon icon="heroicons:plus" /> {translate("Add")}
                                                </button>
                                            </div>

                                            {data.variations.map((variation, index) => (
                                                <div key={index} className="row g-2 align-items-center mb-2 p-2 border-bottom">
                                                    <div className="col-md-6">
                                                        <label className="small text-muted">{translate("Title")}</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder={translate("e.g. Small, Large")}
                                                            value={variation.title}
                                                            onChange={(e) => updateVariation(index, "title", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="small text-muted">{translate("Amount")}</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="0.00"
                                                            value={variation.amount}
                                                            onChange={(e) => updateVariation(index, "amount", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col-md-2 d-flex align-items-end pb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger btn-sm w-100"
                                                            onClick={() => removeVariation(index)}
                                                            title="Remove"
                                                        >
                                                            <Icon icon="heroicons:trash" width="18" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}

                                            {data.variations.length === 0 && (
                                                <div className="text-center p-3 text-muted border border-dashed rounded bg-light">
                                                    {translate("No variations added yet. Click 'Add' to create one.")}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="form-group">
                                        <label htmlFor="min_qty">{translate("Minimum Quantity")} *</label>
                                        <TextInput
                                            title={`${translate("Minimum Quantity")}`}
                                            type="number"
                                            id="min_qty"
                                            error={errors?.min_qty}
                                            value={data.min_qty}
                                            onChange={(e) => setData("min_qty", e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">
                                            {translate("Description")} ({languages[selectedLang].name}) *
                                        </label>
                                        <TextInput
                                            title={`${translate("Enter gift description")} *`}
                                            type="text"
                                            id="description"
                                            error={errors[`${selectedLang}_description`]}
                                            value={data[`${selectedLang}_description`]}
                                            onChange={(e) => setData(`${selectedLang}_description`, e.target.value)}
                                        />
                                    </div>
                                    <SuccessButton isLoading={processing && data.status === "1"}>{translate("Add New Gift")}</SuccessButton>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                </div>
                            </div>
                        </div>
                        <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                    </div>
                </form>
            </div>
        </AdminLayouts>
    )
}
