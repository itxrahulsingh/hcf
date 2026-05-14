import React, { useEffect, useState } from "react"
import AdvanceCustomize from "@/Admin/Components/SectionCustomize/AdvanceCustomize"
import { useDispatch, useSelector } from "react-redux"
import { updatePageSection, updatePageAdvancedSettings } from "@/Redux/features/pages/Page/page"
import { Icon } from "@iconify/react"

export default function CauseCustomize({ index }) {
    const { currentLang, pageData } = useSelector((state) => state.pages)
    const [tab, setTab] = useState("general")
    const dispatch = useDispatch()
    const [sectionData, setSectionData] = useState({})
    const [advancedData, setAdvancedData] = useState({})
    const [data, setData] = useState({})
    const [layout, setLayout] = useState(false)
    const [dragIndex, setDragIndex] = useState(null)
    const causeOptions = (() => {
        try {
            const causes = localStorage.getItem("causes") ? JSON.parse(localStorage.getItem("causes")) : []
            return (Array.isArray(causes) ? causes : []).map((cause) => ({
                value: String(cause?.id),
                label: cause?.content?.title || `Cause #${cause?.id}`
            }))
        } catch {
            return []
        }
    })()

    const advancedCallback = (data) => {
        if (index) {
            setAdvancedData(data)
            dispatch(updatePageAdvancedSettings({ data, index }))
        }
    }
    // conditional rendering
    let customizer = ""
    if (data.layout === "1") {
        customizer = (
            <>
                <div className="form-group">
                    <label>Section Title</label>
                    <input
                        type="text"
                        value={data.section_title}
                        onChange={(e) => setData({ ...data, section_title: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Section Subtitle</label>
                    <textarea
                        cols="30"
                        rows="3"
                        className="form-control"
                        value={data.section_subtitle}
                        onChange={(e) =>
                            setData({
                                ...data,
                                section_subtitle: e.target.value
                            })
                        }
                    ></textarea>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Number of Records to Show</label>
                            <input
                                type="number"
                                min="1"
                                max="50"
                                value={data.record_limit || ""}
                                onChange={(e) => setData({ ...data, record_limit: e.target.value })}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Display Order</label>
                            <select
                                className="form-control"
                                value={data.order_by || "latest"}
                                onChange={(e) => setData({ ...data, order_by: e.target.value })}
                            >
                                <option value="latest">Latest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="alphabetical">Alphabetical (A-Z)</option>
                                <option value="random">Random</option>
                                <option value="manual_selection">Manual Selection</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Cursor Pagination Style</label>
                    <select
                        className="form-control"
                        value={data.pagination_style}
                        onChange={(e) =>
                            setData({
                                ...data,
                                pagination_style: e.target.value
                            })
                        }
                    >
                        <option value="pagination_0">No Pagination</option>
                        <option value="pagination_1">Cursor Pagination Style 1</option>
                        <option value="pagination_2">Cursor Pagination Style 2</option>
                        <option value="pagination_3">Cursor Pagination Style 3</option>
                    </select>
                </div>
            </>
        )
    } else if (data.layout === "2") {
        customizer = (
            <>
                <div className="form-group">
                    <label>Section Title</label>
                    <input
                        type="text"
                        value={data.section_title}
                        onChange={(e) => setData({ ...data, section_title: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Section Subtitle</label>
                    <textarea
                        cols="30"
                        rows="3"
                        className="form-control"
                        value={data.section_subtitle}
                        onChange={(e) =>
                            setData({
                                ...data,
                                section_subtitle: e.target.value
                            })
                        }
                    ></textarea>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Number of Records to Show</label>
                            <input
                                type="number"
                                min="1"
                                max="50"
                                value={data.record_limit || ""}
                                onChange={(e) => setData({ ...data, record_limit: e.target.value })}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Display Order</label>
                            <select
                                className="form-control"
                                value={data.order_by || "latest"}
                                onChange={(e) => setData({ ...data, order_by: e.target.value })}
                            >
                                <option value="latest">Latest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="alphabetical">Alphabetical (A-Z)</option>
                                <option value="random">Random</option>
                                <option value="manual_selection">Manual Selection</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Action Button Text</label>
                    <input
                        type="text"
                        value={data.action_text}
                        onChange={(e) => setData({ ...data, action_text: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Cursor Pagination Style</label>
                    <select
                        className="form-control"
                        value={data.pagination_style}
                        onChange={(e) =>
                            setData({
                                ...data,
                                pagination_style: e.target.value
                            })
                        }
                    >
                        <option value="pagination_0">No Pagination</option>
                        <option value="pagination_1">Pagination Style 1</option>
                        <option value="pagination_2">Pagination Style 2</option>
                        <option value="pagination_3">Pagination Style 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Cursor Navigation Style</label>
                    <select
                        className="form-control"
                        value={data.navigation_style}
                        onChange={(e) =>
                            setData({
                                ...data,
                                navigation_style: e.target.value
                            })
                        }
                    >
                        <option value="navigation_0">No Navigation</option>
                        <option value="navigation_1">Navigation Style 1</option>
                    </select>
                </div>
            </>
        )
    } else if (data.layout === "3") {
        customizer = (
            <>
                <div className="form-group">
                    <label>Section Title</label>
                    <input
                        type="text"
                        value={data.section_title}
                        onChange={(e) => setData({ ...data, section_title: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Section Subtitle</label>
                    <textarea
                        cols="30"
                        rows="3"
                        className="form-control"
                        value={data.section_subtitle}
                        onChange={(e) =>
                            setData({
                                ...data,
                                section_subtitle: e.target.value
                            })
                        }
                    ></textarea>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Number of Records to Show</label>
                            <input
                                type="number"
                                min="1"
                                max="50"
                                value={data.record_limit || ""}
                                onChange={(e) => setData({ ...data, record_limit: e.target.value })}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Display Order</label>
                            <select
                                className="form-control"
                                value={data.order_by || "latest"}
                                onChange={(e) => setData({ ...data, order_by: e.target.value })}
                            >
                                <option value="latest">Latest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="alphabetical">Alphabetical (A-Z)</option>
                                <option value="random">Random</option>
                                <option value="manual_selection">Manual Selection</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label>Cursor Pagination Style</label>
                    <select
                        className="form-control"
                        value={data.pagination_style}
                        onChange={(e) =>
                            setData({
                                ...data,
                                pagination_style: e.target.value
                            })
                        }
                    >
                        <option value="pagination_0">No Pagination</option>
                        <option value="pagination_1">Pagination Style 1</option>
                        <option value="pagination_2">Pagination Style 2</option>
                        <option value="pagination_3">Pagination Style 3</option>
                    </select>
                </div>
            </>
        )
    } else if (data.layout === "4") {
        customizer = (
            <>
                <div className="form-group">
                    <label>Section Title</label>
                    <input
                        type="text"
                        value={data.section_title}
                        onChange={(e) => setData({ ...data, section_title: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Section Subtitle</label>
                    <textarea
                        cols="30"
                        rows="3"
                        className="form-control"
                        value={data.section_subtitle}
                        onChange={(e) =>
                            setData({
                                ...data,
                                section_subtitle: e.target.value
                            })
                        }
                    ></textarea>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Number of Records to Show</label>
                            <input
                                type="number"
                                min="1"
                                max="50"
                                value={data.record_limit || ""}
                                onChange={(e) => setData({ ...data, record_limit: e.target.value })}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Display Order</label>
                            <select
                                className="form-control"
                                value={data.order_by || "latest"}
                                onChange={(e) => setData({ ...data, order_by: e.target.value })}
                            >
                                <option value="latest">Latest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="alphabetical">Alphabetical (A-Z)</option>
                                <option value="random">Random</option>
                                <option value="manual_selection">Manual Selection</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Action Button Text</label>
                    <input
                        type="text"
                        value={data.action_text}
                        onChange={(e) => setData({ ...data, action_text: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Cursor Pagination Style</label>
                    <select
                        className="form-control"
                        value={data.pagination_style}
                        onChange={(e) =>
                            setData({
                                ...data,
                                pagination_style: e.target.value
                            })
                        }
                    >
                        <option value="pagination_0">No Pagination</option>
                        <option value="pagination_1">Pagination Style 1</option>
                        <option value="pagination_2">Pagination Style 2</option>
                        <option value="pagination_3">Pagination Style 3</option>
                    </select>
                </div>
            </>
        )
    } else if (data.layout === "5") {
        customizer = (
            <>
                <div className="form-group">
                    <label>Section Title</label>
                    <input
                        type="text"
                        value={data.section_title}
                        onChange={(e) => setData({ ...data, section_title: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Section Subtitle</label>
                    <textarea
                        cols="30"
                        rows="3"
                        className="form-control"
                        value={data.section_subtitle}
                        onChange={(e) =>
                            setData({
                                ...data,
                                section_subtitle: e.target.value
                            })
                        }
                    ></textarea>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Number of Records to Show</label>
                            <input
                                type="number"
                                min="1"
                                max="50"
                                value={data.record_limit || ""}
                                onChange={(e) => setData({ ...data, record_limit: e.target.value })}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Display Order</label>
                            <select
                                className="form-control"
                                value={data.order_by || "latest"}
                                onChange={(e) => setData({ ...data, order_by: e.target.value })}
                            >
                                <option value="latest">Latest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="alphabetical">Alphabetical (A-Z)</option>
                                <option value="random">Random</option>
                                <option value="manual_selection">Manual Selection</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Action Button Text</label>
                    <input
                        type="text"
                        value={data.action_text}
                        onChange={(e) => setData({ ...data, action_text: e.target.value })}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Cursor Pagination Style</label>
                    <select
                        className="form-control"
                        value={data.pagination_style}
                        onChange={(e) =>
                            setData({
                                ...data,
                                pagination_style: e.target.value
                            })
                        }
                    >
                        <option value="pagination_0">No Pagination</option>
                        <option value="pagination_1">Pagination Style 1</option>
                        <option value="pagination_2">Pagination Style 2</option>
                        <option value="pagination_3">Pagination Style 3</option>
                    </select>
                </div>
            </>
        )
    }
    useEffect(() => {
        if (index) {
            setData({
                layout: sectionData?.data?.layout ?? "1",
                pagination_style: sectionData?.data?.pagination_style ?? "pagination_1",
                navigation_style: sectionData?.data?.navigation_style ?? "navigation_1",
                section_title: sectionData?.data?.section_title ?? "",
                section_subtitle: sectionData?.data?.section_subtitle ?? "",
                action_text: sectionData?.data?.action_text ?? "",
                is_show_sidebar: sectionData?.data?.is_show_sidebar ?? true,
                record_limit: sectionData?.data?.record_limit ?? "4",
                order_by: sectionData?.data?.order_by ?? "latest",
                selected_cause_ids: Array.isArray(sectionData?.data?.selected_cause_ids) ? sectionData?.data?.selected_cause_ids : []
            })
        }
    }, [currentLang, sectionData, index])

    useEffect(() => {
        if (index) {
            setSectionData(pageData[currentLang][index])
        }
    }, [index, currentLang])

    useEffect(() => {
        if (Object.keys(data).length !== 0 && index) {
            dispatch(updatePageSection({ data, index }))
        }
    }, [data, index])

    useEffect(() => {
        if (index) {
            setAdvancedData(pageData[currentLang][index].advanced)
        }
    }, [index, currentLang, pageData])

    return (
        <>
            <div className="cs_tab_wrap">
                <span className={`cs_tab_item${tab === "general" ? " active" : ""}`} onClick={() => setTab("general")}>
                    <Icon icon="lucide:pencil" width="18" height="18" /> General
                </span>
                <span className={`cs_tab_item${tab === "advance" ? " active" : ""}`} onClick={() => setTab("advance")}>
                    <Icon icon="lucide:settings" width="18" height="18" />
                    Advance
                </span>
            </div>
            {tab === "general" ? (
                <>
                    <div className="cs_design_layout_box">
                        <div className={`cs_design_layout_select ${layout ? "active" : ""}`}>
                            <label>Design Layout</label>
                            <div className="cs_design_layout_toggle_btn" onClick={() => setLayout(!layout)}>
                                Cause Style {data.layout}
                                <Icon icon="lucide:chevron-down" width="17" height="17" />
                            </div>
                        </div>
                        {layout && (
                            <div className="cs_section_images">
                                {["1", "2", "3", "4", "5"].map((value) => (
                                    <div key={value} className="cs_section_image" onClick={() => setLayout(!layout)}>
                                        <input
                                            type="radio"
                                            id={`layout-${value}`}
                                            name="layout"
                                            value={value}
                                            checked={data.layout === value}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    layout: e.target.value
                                                })
                                            }
                                            className="form-check-input"
                                        />
                                        <div className="cs_section_image_in">
                                            <img src={`/static/sections/blog/blog_style_${value}.jpg`} alt="Thumb" loading="lazy" decoding="async" />
                                            <label htmlFor={`layout-${value}`}>Cause Style {value}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {customizer}
                    {data.order_by === "manual_selection" && (
                        <div className="form-group mt-3">
                            <label className="mb-2">Selected Causes (in display order)</label>
                            {(data.selected_cause_ids || []).map((causeId, idx) => (
                                <div
                                    className="d-flex align-items-center mb-2"
                                    key={`selected-cause-${idx}`}
                                    draggable
                                    onDragStart={() => setDragIndex(idx)}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={() => {
                                        if (dragIndex === null || dragIndex === idx) return
                                        const next = [...(data.selected_cause_ids || [])]
                                        const [moved] = next.splice(dragIndex, 1)
                                        next.splice(idx, 0, moved)
                                        setData({ ...data, selected_cause_ids: next })
                                        setDragIndex(null)
                                    }}
                                    onDragEnd={() => setDragIndex(null)}
                                    style={{
                                        cursor: "move",
                                        opacity: dragIndex === idx ? 0.6 : 1
                                    }}
                                >
                                    <span className="me-2 text-muted" title="Drag to reorder" style={{ userSelect: "none" }}>
                                        ::
                                    </span>
                                    <select
                                        className="form-control me-2"
                                        value={String(causeId || "")}
                                        onChange={(e) => {
                                            const next = [...(data.selected_cause_ids || [])]
                                            next[idx] = e.target.value
                                            setData({ ...data, selected_cause_ids: next })
                                        }}
                                    >
                                        <option value="">Select Cause</option>
                                        {causeOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={() => {
                                            const next = (data.selected_cause_ids || []).filter((_, i) => i !== idx)
                                            setData({ ...data, selected_cause_ids: next })
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                className="btn btn-primary btn-sm mt-1"
                                onClick={() =>
                                    setData({
                                        ...data,
                                        selected_cause_ids: [...(data.selected_cause_ids || []), ""]
                                    })
                                }
                            >
                                Add Cause
                            </button>
                            <div className="small text-muted mt-2">Tip: Drag rows using :: to reorder selected causes.</div>
                        </div>
                    )}
                </>
            ) : (
                <AdvanceCustomize advancedCallback={advancedCallback} currentSection={advancedData} />
            )}
        </>
    )
}
