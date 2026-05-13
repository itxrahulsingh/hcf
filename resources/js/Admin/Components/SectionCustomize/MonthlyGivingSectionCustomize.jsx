import React, { useEffect, useState } from "react"
import AdvanceCustomize from "@/Admin/Components/SectionCustomize/AdvanceCustomize"
import { useDispatch, useSelector } from "react-redux"
import { updatePageAdvancedSettings, updatePageSection } from "@/Redux/features/pages/Page/page"

const defaultAdvancedSettings = {
    backgroundImage: "",
    backgroundColor: "",
    is_section_dark: false,
    classes: "",
    padding: {
        top: { lg: 0, md: 0 },
        bottom: { lg: 0, md: 0 }
    }
}

const defaultSectionData = {
    section_title: "",
    section_subtitle: "",
    default_amount: "",
    accent_color: "#f08a24",
    fixed_amounts: "200,500,1000"
}

export default function MonthlyGivingSectionCustomize({ index }) {
    const { currentLang, pageData } = useSelector((state) => state.pages)
    const dispatch = useDispatch()
    const [tab, setTab] = useState("general")
    const [data, setData] = useState({})
    const [advancedData, setAdvancedData] = useState({})

    useEffect(() => {
        const section = pageData[currentLang]?.[index]
        const sectionAdvanced = section?.advanced || {}
        const normalizedAdvanced = {
            ...defaultAdvancedSettings,
            ...sectionAdvanced,
            classes: sectionAdvanced?.classes ?? "",
            padding: {
                top: {
                    lg: sectionAdvanced?.padding?.top?.lg ?? 0,
                    md: sectionAdvanced?.padding?.top?.md ?? sectionAdvanced?.padding?.top?.lg ?? 0
                },
                bottom: {
                    lg: sectionAdvanced?.padding?.bottom?.lg ?? 0,
                    md: sectionAdvanced?.padding?.bottom?.md ?? sectionAdvanced?.padding?.bottom?.lg ?? 0
                }
            }
        }
        setData({ ...defaultSectionData, ...(section?.data || {}) })
        setAdvancedData(normalizedAdvanced)
    }, [currentLang, index, pageData])

    useEffect(() => {
        if (index !== undefined) {
            dispatch(updatePageSection({ data, index }))
        }
    }, [data])

    const advancedCallback = (advanced) => {
        if (index !== undefined) {
            setAdvancedData(advanced)
            dispatch(updatePageAdvancedSettings({ data: advanced, index }))
        }
    }

    return (
        <div>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <button type="button" className={`nav-link ${tab === "general" ? "active" : ""}`} onClick={() => setTab("general")}>
                        General
                    </button>
                </li>
                <li className="nav-item">
                    <button type="button" className={`nav-link ${tab === "advanced" ? "active" : ""}`} onClick={() => setTab("advanced")}>
                        Advanced
                    </button>
                </li>
            </ul>
            {tab === "general" ? (
                <>
                    <div className="form-group">
                        <label>Section Title</label>
                        <input className="form-control" value={data.section_title || ""} onChange={(e) => setData({ ...data, section_title: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Section Subtitle</label>
                        <textarea
                            rows="3"
                            className="form-control"
                            value={data.section_subtitle || ""}
                            onChange={(e) => setData({ ...data, section_subtitle: e.target.value })}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>Default Monthly Amount (INR)</label>
                            <input
                                type="number"
                                min="1"
                                className="form-control"
                                value={data.default_amount || ""}
                                onChange={(e) => setData({ ...data, default_amount: e.target.value })}
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Accent Color</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="#f08a24"
                                value={data.accent_color || ""}
                                onChange={(e) => setData({ ...data, accent_color: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Fixed Amount Options (comma separated)</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="200,500,1000,5000"
                            value={data.fixed_amounts || "200,500,1000"}
                            onChange={(e) => setData({ ...data, fixed_amounts: e.target.value })}
                        />
                        <small className="text-muted">Users can select these instantly in frontend.</small>
                    </div>
                </>
            ) : (
                <AdvanceCustomize index={index} advancedCallback={advancedCallback} currentSection={advancedData} />
            )}
        </div>
    )
}
