import React, { useEffect, useRef } from "react"
import { useForm, usePage } from "@inertiajs/react"
import ReCAPTCHA from "react-google-recaptcha"
import { useState } from "react"
import translate from "@/utils/translate"

export default function ContactWithFormBuilder4({ sections_data }) {
    const captchaSiteKey = localStorage.getItem("google_captcha_site_key") ? JSON.parse(localStorage.getItem("google_captcha_site_key")) : []
    const is_active_google_captcha = localStorage.getItem("is_active_google_captcha")
        ? JSON.parse(localStorage.getItem("is_active_google_captcha"))
        : []

    const [captchaVerified, setCaptchaVerified] = useState(false)
    const [captchaError, setCaptchaError] = useState(null)
    const { flash } = usePage().props
    const formRef = useRef(null)
    const { data, setData, errors, post, wasSuccessful, reset, processing } = useForm({
        response_from: sections_data?.response_form,
        form_name: sections_data?.form_name
    })

    const handleSetData = (e, label, placeholder, fieldType = "text") => {
        let fieldName

        if (label) {
            fieldName = label.toLowerCase().replace(/\s+/g, "_")
        } else if (placeholder) {
            fieldName = placeholder.toLowerCase().replace(/\s+/g, "_")
        } else {
            fieldName = `field_${Object.keys(data).length + 1}`
        }

        // Logic for File Upload
        if (fieldType === "file") {
            setData(fieldName, e.target.files[0])
        }
        // Logic for Checkbox (if needed)
        else if (fieldType === "checkbox") {
            const checkboxValue = e.target.value
            const isChecked = e.target.checked
            const currentValues = Array.isArray(data[fieldName]) ? data[fieldName] : []

            if (isChecked) {
                setData(fieldName, [...currentValues, checkboxValue])
            } else {
                setData(
                    fieldName,
                    currentValues.filter((val) => val !== checkboxValue)
                )
            }
        } else {
            setData(fieldName, e.target.value)
        }
    }

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

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!captchaVerified && is_active_google_captcha === "1") {
            setCaptchaError(translate("Please complete the captcha verification"))
            return
        }

        post(route("form.submit"), {
            forceFormData: true, // Forces file binary transmission
            preserveScroll: true,
            onSuccess: () => {
                reset()
                if (formRef.current) formRef.current.reset()
                setCaptchaVerified(false)
            }
        })
    }

    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            response_from: sections_data?.response_form,
            form_name: sections_data?.form_name
        }))
    }, [sections_data])

    return (
        <>
            <div className="container">
                <div className="row align-items-center cs_reverse_lg cs_gap_y_40">
                    <div className="col-lg-6">
                        {(sections_data.section_subtitle || sections_data.section_title) && (
                            <>
                                <div className="cs_section_heading cs_style_1">
                                    <p
                                        className="cs_section_subtitle cs_fs_18 cs_medium"
                                        dangerouslySetInnerHTML={{
                                            __html: sections_data.section_subtitle
                                        }}
                                    />
                                    <h2
                                        className="cs_section_title cs_fs_53 cs_normal mb-0"
                                        dangerouslySetInnerHTML={{
                                            __html: sections_data.section_title
                                        }}
                                    />
                                </div>
                                <div className="cs_height_85 cs_height_lg_50"></div>
                            </>
                        )}
                        <form ref={formRef} className="row cs_insurance_form cs_gap_y_35" onSubmit={handleSubmit}>
                            {sections_data?.forms?.map((form, index) => (
                                <React.Fragment key={index}>
                                    {form.fieldType === "multilineText" ? (
                                        <div className={`col-sm-${form.column ?? "6"}`}>
                                            {form.label && (
                                                <label>
                                                    {form.label} {form.isRequired && "*"}
                                                </label>
                                            )}
                                            <textarea
                                                cols="30"
                                                rows="7"
                                                className="cs_insurance_input"
                                                defaultValue={form.default_value}
                                                required={form.isRequired}
                                                onChange={(e) => handleSetData(e, form.label, form.placeholder)}
                                                placeholder={`${form.placeholder ? form.placeholder : ""}${
                                                    form.label ? "" : form.isRequired ? " *" : ""
                                                }`}
                                            />
                                        </div>
                                    ) : form.fieldType === "file" ? (
                                        <div className={`col-sm-${form.column ?? "6"}`}>
                                            {form.label && (
                                                <label>
                                                    {form.label} {form.isRequired && "*"}
                                                </label>
                                            )}
                                            <input
                                                type="file"
                                                className="cs_insurance_input"
                                                style={{ paddingTop: "10px" }}
                                                required={form.isRequired}
                                                accept={form.file_extensions?.map((ext) => `.${ext}`).join(",")}
                                                onChange={(e) => handleSetData(e, form.label, form.placeholder, "file")}
                                            />
                                            {form.file_extensions && (
                                                <small className="text-muted d-block mt-1">
                                                    {translate("Allowed")}: {form.file_extensions.join(", ")}
                                                </small>
                                            )}
                                        </div>
                                    ) : form.fieldType === "radio" ? (
                                        <div className={`col-lg-${form.column ?? "6"}`}>
                                            {form.label && (
                                                <label>
                                                    {form.label} {form.isRequired && "*"}
                                                </label>
                                            )}
                                            <div className="cs_radio_group">
                                                {form?.radio_options?.map((option, optionIndex) => (
                                                    <div className="cs_radio_wrapper" key={`radio-${index}-${optionIndex}`}>
                                                        <input
                                                            type="radio"
                                                            id={`radio-${index}-${optionIndex}`}
                                                            name={form.label?.toLowerCase().replace(/\s+/g, "_") || `radio_group_${index}`}
                                                            value={option}
                                                            required={form.isRequired}
                                                            defaultChecked={form.default_value === option}
                                                            onChange={(e) => handleSetData(e, form.label, form.placeholder)}
                                                        />
                                                        <label style={{ marginLeft: "8px" }} htmlFor={`radio-${index}-${optionIndex}`}>
                                                            {option}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : form.fieldType === "checkbox" ? (
                                        <div className={`col-lg-${form.column ?? "6"}`}>
                                            {form.label && (
                                                <label>
                                                    {form.label} {form.isRequired && "*"}
                                                </label>
                                            )}
                                            <div className="cs_checkbox_group">
                                                {form?.checkbox_options?.map((option, optionIndex) => (
                                                    <div className="cs_checkbox_wrapper" key={`checkbox-${index}-${optionIndex}`}>
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox-${index}-${optionIndex}`}
                                                            name={form.label?.toLowerCase().replace(/\s+/g, "_") || `checkbox_group_${index}`}
                                                            value={option}
                                                            required={form.isRequired && optionIndex === 0}
                                                            onChange={(e) => handleSetData(e, form.label, form.placeholder, "checkbox")}
                                                        />
                                                        <label style={{ marginLeft: "8px" }} htmlFor={`checkbox-${index}-${optionIndex}`}>
                                                            {option}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : form.fieldType === "select" ? (
                                        <div className={`col-sm-${form.column ?? "6"}`}>
                                            {form.label && (
                                                <label htmlFor="">
                                                    {form.label} {form.isRequired && "*"}
                                                </label>
                                            )}
                                            <select
                                                className="cs_insurance_input"
                                                required={form.isRequired}
                                                onChange={(e) => handleSetData(e, form.label, form.placeholder)}
                                            >
                                                <option value="">{translate("Select an option")}</option>
                                                {form?.select_options?.map((option, optIndex) => (
                                                    <option value={option} key={`options-${index}-${optIndex}`}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        <div className={`col-sm-${form.column ?? "6"}`}>
                                            {form.fieldType !== "hidden" && form.label && (
                                                <label>
                                                    {form.label} {form.isRequired && "*"}
                                                </label>
                                            )}
                                            <input
                                                type={form.fieldType}
                                                defaultValue={form.default_value}
                                                className="cs_insurance_input"
                                                required={form.isRequired}
                                                onChange={(e) => handleSetData(e, form.label, form.placeholder)}
                                                placeholder={`${form.placeholder ? form.placeholder : ""}${
                                                    form.label ? "" : form.isRequired ? " *" : ""
                                                }`}
                                            />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}

                            {is_active_google_captcha === "1" && (
                                <div className="cs_mb_15">
                                    <ReCAPTCHA sitekey={captchaSiteKey} onChange={handleCaptchaChange} />
                                    {captchaError && <div className="text-danger mb-3">{captchaError}</div>}
                                </div>
                            )}

                            {sections_data?.submit_btn_text && (
                                <div className="col-lg-12">
                                    <div className="cs_height_5 cs_height_lg_5"></div>
                                    <button
                                        type="submit"
                                        disabled={(!captchaVerified && is_active_google_captcha === "1") || processing}
                                        className="cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm"
                                    >
                                        {sections_data?.submit_btn_text}
                                        <span>
                                            <i>
                                                <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1 10L10 1M10 1L1 1M10 1L10 10"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </i>
                                            <i>
                                                <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1 10L10 1M10 1L1 1M10 1L10 10"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </i>
                                        </span>
                                    </button>
                                </div>
                            )}
                            {wasSuccessful && flash.success && <span className="text-success mt-2">{flash.success}</span>}
                        </form>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        {sections_data.image_url && (
                            <img src={sections_data.image_url} alt="Thumbnail" className="cs_radius_100_0_0_0" loading="lazy" decoding="async" />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
