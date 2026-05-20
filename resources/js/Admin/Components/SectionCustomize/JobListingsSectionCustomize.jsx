import React, { useEffect, useState } from "react"
import AdvanceCustomize from "@/Admin/Components/SectionCustomize/AdvanceCustomize"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { updatePageSection, updatePageAdvancedSettings } from "@/Redux/features/pages/Page/page"
import { produce } from "immer"
import { Icon } from "@iconify/react"

export default function JobListingsSectionCustomize({ index }) {
    const { currentLang, pageData } = useSelector((state) => state.pages)
    const [tab, setTab] = useState("general")
    const dispatch = useDispatch()
    const [sectionData, setSectionData] = useState({})
    const [advancedData, setAdvancedData] = useState({})
    const [data, setData] = useState({})
    const [layout, setLayout] = useState(false)

    const advancedCallback = (data) => {
        if (index) {
            setAdvancedData(data)
            dispatch(updatePageAdvancedSettings({ data, index }))
        }
    }

    // List Item Accordion
    const [openIndex, setOpenIndex] = useState(0)
    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
    }

    // Remove Job
    const removeJob = (removeIndex) => {
        setData(
            produce((draft) => {
                draft.job_list = draft.job_list.filter((_, index) => index !== removeIndex)
            })
        )
    }

    // Clone Job
    const cloneJob = (cloneIndex) => {
        setData(
            produce((draft) => {
                const newList = [...draft.job_list]
                const clonedItem = { ...newList[cloneIndex] }
                newList.splice(cloneIndex + 1, 0, clonedItem)
                draft.job_list = newList
                setOpenIndex(cloneIndex + 1)
            })
        )
    }

    // Add New Job
    const addNewJob = () => {
        setData(
            produce((draft) => {
                draft.job_list.push({
                    job_title: "",
                    job_summary: "",
                    workplace: "",
                    organization_type: "",
                    reporting_to: "",
                    employment_type: "",
                    salary: "",
                    job_description: "",
                    contact_email: ""
                })
                setOpenIndex(draft.job_list.length - 1)
            })
        )
    }

    // conditional render
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
                    <input
                        className="form-control"
                        value={data.section_subtitle}
                        onChange={(e) =>
                            setData({
                                ...data,
                                section_subtitle: e.target.value
                            })
                        }
                    />
                </div>
                <div className="cs_loop_list">
                    <label>Job List</label>
                    <div className="cs_loop_list_in">
                        {data.job_list?.map((item, index) => (
                            <div className="cs_loop_item" key={index}>
                                <div className="cs_loop_item_head">
                                    <span onClick={() => handleToggle(index)}>
                                        <span>{item.job_title ? item.job_title : "List Item"}</span>
                                    </span>
                                    <div className="cs_loop_item_control_btns">
                                        <button type="button" className="cs_clone_loop_item" onClick={() => cloneJob(index)}>
                                            <Icon icon="lucide:copy" width="18" height="18" />
                                        </button>
                                        {data.job_list.length === 1 ? (
                                            ""
                                        ) : (
                                            <button type="button" className="cs_remove_loop_item" onClick={() => removeJob(index)}>
                                                <Icon icon="lucide:x" width="18" height="18" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                {openIndex === index && (
                                    <div className="cs_loop_item_body">
                                        <div className="form-group">
                                            <label>Job Title</label>
                                            <input
                                                type="text"
                                                value={item.job_title}
                                                onChange={(e) => {
                                                    setData(
                                                        produce((draft) => {
                                                            draft.job_list[index].job_title = e.target.value
                                                        })
                                                    )
                                                }}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Short Summary</label>
                                            <textarea
                                                cols="30"
                                                rows="3"
                                                value={item.job_summary || ""}
                                                onChange={(e) => {
                                                    setData(
                                                        produce((draft) => {
                                                            draft.job_list[index].job_summary = e.target.value
                                                        })
                                                    )
                                                }}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="row row_space_10">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Work Place</label>
                                                    <input
                                                        type="text"
                                                        value={item.workplace || ""}
                                                        onChange={(e) => {
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.job_list[index].workplace = e.target.value
                                                                })
                                                            )
                                                        }}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Organization Type</label>
                                                    <input
                                                        type="text"
                                                        value={item.organization_type || ""}
                                                        onChange={(e) => {
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.job_list[index].organization_type = e.target.value
                                                                })
                                                            )
                                                        }}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row_space_10">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Reporting To</label>
                                                    <input
                                                        type="text"
                                                        value={item.reporting_to || ""}
                                                        onChange={(e) => {
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.job_list[index].reporting_to = e.target.value
                                                                })
                                                            )
                                                        }}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Employment Type</label>
                                                    <input
                                                        type="text"
                                                        value={item.employment_type || ""}
                                                        onChange={(e) => {
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.job_list[index].employment_type = e.target.value
                                                                })
                                                            )
                                                        }}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row_space_10">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Salary</label>
                                                    <input
                                                        type="text"
                                                        value={item.salary || ""}
                                                        onChange={(e) => {
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.job_list[index].salary = e.target.value
                                                                })
                                                            )
                                                        }}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Contact Email</label>
                                                    <input
                                                        type="email"
                                                        value={item.contact_email || ""}
                                                        onChange={(e) => {
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.job_list[index].contact_email = e.target.value
                                                                })
                                                            )
                                                        }}
                                                        className="form-control"
                                                        placeholder="careers@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Role Description</label>
                                            <textarea
                                                cols="30"
                                                rows="8"
                                                value={item.job_description}
                                                onChange={(e) => {
                                                    setData(
                                                        produce((draft) => {
                                                            draft.job_list[index].job_description = e.target.value
                                                        })
                                                    )
                                                }}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group d-none">
                                            <label>Legacy Duration</label>
                                            <input
                                                type="text"
                                                value={item.job_duration}
                                                onChange={(e) => {
                                                    setData(
                                                        produce((draft) => {
                                                            draft.job_list[index].job_duration = e.target.value
                                                        })
                                                    )
                                                }}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group d-none">
                                            <label>Legacy Status</label>
                                            <input
                                                type="text"
                                                value={item.job_status}
                                                onChange={(e) => {
                                                    setData(
                                                        produce((draft) => {
                                                            draft.job_list[index].job_status = e.target.value
                                                        })
                                                    )
                                                }}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group d-none">
                                            <label>Legacy Action Text</label>
                                            <input
                                                type="text"
                                                value={item.job_action_text || ""}
                                                onChange={(e) => {
                                                    setData(
                                                        produce((draft) => {
                                                            draft.job_list[index].job_action_text = e.target.value
                                                        })
                                                    )
                                                }}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group d-none">
                                            <label>Legacy Action URL</label>
                                            <input
                                                type="text"
                                                value={item.job_action_url || ""}
                                                onChange={(e) => {
                                                    setData(
                                                        produce((draft) => {
                                                            draft.job_list[index].job_action_url = e.target.value
                                                        })
                                                    )
                                                }}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="cs_loop_list_btn">
                            <button type="button" className="btn btn-sm btn-primary" onClick={addNewJob}>
                                Add new
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    useEffect(() => {
        if (index) {
            setData({
                layout: sectionData?.data?.layout ?? "1",
                section_title: sectionData?.data?.section_title ?? "",
                section_subtitle: sectionData?.data?.section_subtitle ?? "",
                job_list: sectionData?.data?.job_list ?? [
                    {
                        job_title: "Front Office Executive",
                        job_summary: "Support outreach and beneficiary engagement through strong communication and coordination.",
                        workplace: "Janakpuri, Delhi",
                        organization_type: "Non-Governmental Organization (NGO)",
                        reporting_to: "Chief Operating Officer (COO)",
                        employment_type: "Full-Time (In-Office)",
                        salary: "Commensurate with Experience",
                        job_description:
                            "We are seeking a Customer Care Executive with excellent communication skills to support our outreach and beneficiary engagement. This role is ideal for individuals passionate about social impact, eager to learn, and motivated to contribute to meaningful change. Homeless Care Foundation is a community-driven nonprofit dedicated to improving the lives of urban homeless populations through sustainable, SDG-aligned initiatives.",
                        contact_email: "careers@homelesscarefoundation.org",
                        job_duration: "",
                        job_status: "",
                        job_action_text: "",
                        job_action_url: ""
                    }
                ]
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
                                Job Listings Style {data.layout}
                                <Icon icon="lucide:chevron-down" width="17" height="17" />
                            </div>
                        </div>
                        {layout && (
                            <div className="cs_section_images">
                                {["1"].map((value) => (
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
                                            <img src={`/static/sections/job_listings/style_${value}.jpg`} alt="Thumb" loading="lazy" decoding="async"/>
                                            <label htmlFor={`layout-${value}`}>Job Listings Style {value}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {customizer}
                </>
            ) : (
                <AdvanceCustomize advancedCallback={advancedCallback} currentSection={advancedData} />
            )}
        </>
    )
}
