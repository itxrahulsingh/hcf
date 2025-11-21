import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import TextInput from "@/Admin/Components/Inputs/TextInput.jsx"
import { useForm, Head } from "@inertiajs/react"
import SuccessButton from "@/Admin/Components/Button/SuccessButton"
import { useState, useEffect } from "react"
import translate from "@/utils/translate"
import SingleMediaUploader from "@/Admin/Components/Media/SingleMediaUploader"
import FormValidationError from "@/Admin/Components/Validation/FromValidationError"
import { produce } from "immer"

export default function Edit({ category, default_lang, languages }) {
    const [selectedLang, setSelectedLang] = useState(default_lang)
    const [tempLang, setTempLang] = useState(selectedLang)

    // Initialize form with existing category data
    const { data, setData, errors, put, processing } = useForm({
        ...category
    })

    // Handle update submission
    const handleUpdate = (e) => {
        e.preventDefault()
        put(route("admin.cause.categories.update", category))
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
            <Head title="Edit Category" />
            <div className="yoo-height-b30 yoo-height-lg-b30" />
            <div className="container-fluid">
                <div className="yoo-uikits-heading">
                    <h2 className="yoo-uikits-title">{translate("Edit Category")}</h2>
                </div>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                <form className="row" onSubmit={handleUpdate}>
                    <div className="col-lg-7">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left">
                                    <h2 className="yoo-card-title">{translate("Category Details")}</h2>
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
                                    <div className="form-group">
                                        <label>{translate("Upload category image")} *</label>
                                        <SingleMediaUploader
                                            onSelected={(e) => {
                                                setData(
                                                    produce((draft) => {
                                                        draft.thumbnail_image = e
                                                    })
                                                )
                                            }}
                                            handleRemoved={() =>
                                                setData(
                                                    produce((draft) => {
                                                        draft.thumbnail_image = ""
                                                    })
                                                )
                                            }
                                            defaultValue={data.thumbnail_image}
                                        />
                                        <FormValidationError message={errors?.thumbnail_image} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title">
                                            {translate("Title")} ({languages[selectedLang].name}) *
                                        </label>
                                        <TextInput
                                            title={`${translate("Enter category title")} *`}
                                            type="text"
                                            id="title"
                                            error={errors[`${selectedLang}_title`]}
                                            value={data[`${selectedLang}_title`]}
                                            onChange={(e) => setData(`${selectedLang}_title`, e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">
                                            {translate("Description")} ({languages[selectedLang].name}) *
                                        </label>
                                        <TextInput
                                            title={`${translate("Enter category description")} *`}
                                            type="text"
                                            id="description"
                                            error={errors[`${selectedLang}_description`]}
                                            value={data[`${selectedLang}_description`]}
                                            onChange={(e) => setData(`${selectedLang}_description`, e.target.value)}
                                        />
                                    </div>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                </div>
                            </div>
                        </div>
                        <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                    </div>
                    <div className="col-lg-5">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left d-flex">
                                    <h2 className="yoo-card-title mr-5">{translate("SEO Details")}</h2>
                                </div>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="meta_title">{translate("SEO Title")}</label>
                                            <TextInput
                                                title="Enter SEO Title"
                                                type="text"
                                                id="meta_title"
                                                error={errors.meta_title}
                                                value={data.meta_title}
                                                onChange={(e) => setData("meta_title", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="meta_description">{translate("SEO Description")}</label>
                                            <TextInput
                                                title="Enter SEO Description"
                                                type="text"
                                                id="meta_description"
                                                error={errors.meta_description}
                                                value={data.meta_description}
                                                onChange={(e) => setData("meta_description", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="meta_tags">{translate("SEO Keywords")}</label>
                                            <TextInput
                                                title="Enter SEO Keywords"
                                                type="text"
                                                id="meta_tags"
                                                error={errors.meta_tags}
                                                value={data.meta_tags}
                                                onChange={(e) => setData("meta_tags", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                     <SuccessButton isLoading={processing}>{translate("Update Category")}</SuccessButton>
                                    <div className="yoo-height-b10 yoo-height-lg-b10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayouts>
    )
}
