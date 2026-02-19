import React, { useEffect, useState } from "react"
import { produce } from "immer"
import AdvanceCustomize from "@/Admin/Components/SectionCustomize/AdvanceCustomize"
import { useDispatch, useSelector } from "react-redux"
import { updatePageSection, updatePageAdvancedSettings } from "@/Redux/features/pages/Page/page"
import { Icon } from "@iconify/react"
import SingleMediaUploader from "../Media/SingleMediaUploader"
import { usePage } from "@inertiajs/react"
import { useRef } from "react"

export default function TeamSectionCustomize({ index }) {
    const { currentLang, pageData } = useSelector((state) => state.pages)
    const [tab, setTab] = useState("general")
    const dispatch = useDispatch()
    const [sectionData, setSectionData] = useState({})
    const [advancedData, setAdvancedData] = useState({})
    const [data, setData] = useState({})
    const [layout, setLayout] = useState(false)
    const [savedLinkToggle, setSavedLinkToggle] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const { teams } = usePage().props
    const dropdownRef = useRef(null)

    const advancedCallback = (data) => {
        if (index) {
            setAdvancedData(data)
            dispatch(updatePageAdvancedSettings({ data, index }))
        }
    }

    const [openIndex, setOpenIndex] = useState(0)
    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
    }

    const removeTeam = (removeIndex) => {
        setData(
            produce((draft) => {
                draft.team_list = draft.team_list.filter((_, index) => index !== removeIndex)
            })
        )
    }

    const cloneTeam = (cloneIndex) => {
        setData(
            produce((draft) => {
                const newList = [...draft.team_list]
                const clonedItem = { ...newList[cloneIndex] }
                newList.splice(cloneIndex + 1, 0, clonedItem)
                draft.team_list = newList
                setOpenIndex(cloneIndex + 1)
            })
        )
    }

    const addNewTeam = () => {
        setData(
            produce((draft) => {
                draft.team_list.push({
                    team_member_name: "",
                    team_member_designation: "",
                    team_member_description: "", // Added
                    team_member_category: "", // Added
                    team_image_url: "",
                    team_member_action_url: "",
                    social_btns: []
                })
                setOpenIndex(draft.team_list.length - 1)
            })
        )
    }

    const addNewSocialButton = (teamIndex) => {
        setData(
            produce((draft) => {
                draft.team_list[teamIndex].social_btns.push({
                    social_icon_class: "",
                    social_action_url: ""
                })
            })
        )
    }

    const removeSocialButton = (teamIndex, socialIndex) => {
        setData(
            produce((draft) => {
                draft.team_list[teamIndex].social_btns.splice(socialIndex, 1)
            })
        )
    }

    useEffect(() => {
        if (index) {
            setData({
                layout: sectionData?.data?.layout ?? "1",
                section_title: sectionData?.data?.section_title ?? "",
                section_subtitle: sectionData?.data?.section_subtitle ?? "",
                section_description: sectionData?.data?.section_description ?? "",
                section_btn_text: sectionData?.data?.section_btn_text ?? "",
                section_btn_url: sectionData?.data?.section_btn_url ?? "",
                team_list: sectionData?.data?.team_list ?? [
                    {
                        team_member_name: "",
                        team_member_designation: "",
                        team_member_description: "",
                        team_member_category: "",
                        team_image_url: "",
                        team_member_action_url: "",
                        social_btns: [{ social_icon_class: "", social_action_url: "" }]
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

    const filteredTeams = teams?.data?.filter((study) => study?.text?.toLowerCase().includes(searchTerm?.toLowerCase()))

    const handleTeamSelect = (url, teamIndex) => {
        setData(
            produce((draft) => {
                draft.team_list[teamIndex].team_member_action_url = url
            })
        )
        setSavedLinkToggle(false)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSavedLinkToggle(false)
            }
        }
        if (savedLinkToggle) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [savedLinkToggle])

    return (
        <>
            <div className="cs_tab_wrap">
                <span className={`cs_tab_item${tab === "general" ? " active" : ""}`} onClick={() => setTab("general")}>
                    <Icon icon="lucide:pencil" width="18" height="18" /> General
                </span>
                <span className={`cs_tab_item${tab === "advance" ? " active" : ""}`} onClick={() => setTab("advance")}>
                    <Icon icon="lucide:settings" width="18" height="18" /> Advance
                </span>
            </div>
            {tab === "general" ? (
                <>
                    <div className="cs_design_layout_box">
                        <div className={`cs_design_layout_select ${layout ? "active" : ""}`}>
                            <label>Design Layout</label>
                            <div className="cs_design_layout_toggle_btn" onClick={() => setLayout(!layout)}>
                                Team Style {data.layout}
                                <Icon icon="lucide:chevron-down" width="17" height="17" />
                            </div>
                        </div>
                        {layout && (
                            <div className="cs_section_images">
                                {["1", "2", "3", "4"].map((value) => (
                                    <div key={value} className="cs_section_image" onClick={() => setLayout(!layout)}>
                                        <input
                                            type="radio"
                                            id={`layout-${value}`}
                                            name="layout"
                                            value={value}
                                            checked={data.layout === value}
                                            onChange={(e) => setData({ ...data, layout: e.target.value })}
                                            className="form-check-input"
                                        />
                                        <div className="cs_section_image_in">
                                            <img src={`/static/sections/team/team_style_${value}.jpg`} alt="Thumb" loading="lazy" />
                                            <label htmlFor={`layout-${value}`}>Team Style {value}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div>
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
                                rows="2"
                                className="form-control"
                                value={data.section_subtitle}
                                onChange={(e) => setData({ ...data, section_subtitle: e.target.value })}
                            ></textarea>
                        </div>

                        <div className="cs_loop_list">
                            <label>Team List</label>
                            <div className="cs_loop_list_in">
                                {data.team_list?.map((item, index) => (
                                    <div className="cs_loop_item" key={index}>
                                        <div className="cs_loop_item_head">
                                            <span onClick={() => handleToggle(index)}>
                                                <span>{item.team_member_name || "List Item"}</span>
                                            </span>
                                            <div className="cs_loop_item_control_btns">
                                                <button className="cs_clone_loop_item" onClick={() => cloneTeam(index)}>
                                                    <Icon icon="lucide:copy" width="18" height="18" />
                                                </button>
                                                {data.team_list.length > 1 && (
                                                    <button className="cs_remove_loop_item" onClick={() => removeTeam(index)}>
                                                        <Icon icon="lucide:x" width="18" height="18" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        {openIndex === index && (
                                            <div className="cs_loop_item_body">
                                                <div className="form-group">
                                                    <label>Member Category (e.g. Advisors, Executive)</label>
                                                    <input
                                                        type="text"
                                                        value={item.team_member_category}
                                                        onChange={(e) =>
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.team_list[index].team_member_category = e.target.value
                                                                })
                                                            )
                                                        }
                                                        className="form-control"
                                                        placeholder="Board of Members..."
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Member Image</label>
                                                    <SingleMediaUploader
                                                        onSelected={(e) =>
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.team_list[index].team_image_url = e
                                                                })
                                                            )
                                                        }
                                                        handleRemoved={() =>
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.team_list[index].team_image_url = ""
                                                                })
                                                            )
                                                        }
                                                        defaultValue={item.team_image_url}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input
                                                        type="text"
                                                        value={item.team_member_name}
                                                        onChange={(e) =>
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.team_list[index].team_member_name = e.target.value
                                                                })
                                                            )
                                                        }
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Designation</label>
                                                    <input
                                                        type="text"
                                                        value={item.team_member_designation}
                                                        onChange={(e) =>
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.team_list[index].team_member_designation = e.target.value
                                                                })
                                                            )
                                                        }
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Description (Hover Overlay)</label>
                                                    <textarea
                                                        rows="3"
                                                        value={item.team_member_description}
                                                        onChange={(e) =>
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.team_list[index].team_member_description = e.target.value
                                                                })
                                                            )
                                                        }
                                                        className="form-control"
                                                    />
                                                </div>
                                                {/* Action Button URL Logic Remains Same... */}
                                                <div className="form-group">
                                                    <label>Social Links</label>
                                                    <div className="cs_social_links_box">
                                                        {item.social_btns?.map((socialBtn, socialIndex) => (
                                                            <div className="cs_group_with_delete" key={socialIndex}>
                                                                <div className="row">
                                                                    <div className="col-sm-7">
                                                                        <input
                                                                            type="text"
                                                                            value={socialBtn.social_icon_class}
                                                                            placeholder="Icon Class"
                                                                            onChange={(e) =>
                                                                                setData(
                                                                                    produce((draft) => {
                                                                                        draft.team_list[index].social_btns[
                                                                                            socialIndex
                                                                                        ].social_icon_class = e.target.value
                                                                                    })
                                                                                )
                                                                            }
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                    <div className="col-sm-5">
                                                                        <input
                                                                            type="text"
                                                                            value={socialBtn.social_action_url}
                                                                            placeholder="URL"
                                                                            onChange={(e) =>
                                                                                setData(
                                                                                    produce((draft) => {
                                                                                        draft.team_list[index].social_btns[
                                                                                            socialIndex
                                                                                        ].social_action_url = e.target.value
                                                                                    })
                                                                                )
                                                                            }
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <span
                                                                    className="cs_group_delete"
                                                                    onClick={() => removeSocialButton(index, socialIndex)}
                                                                >
                                                                    <Icon icon="lucide:trash" width="16" height="16" />
                                                                </span>
                                                            </div>
                                                        ))}
                                                        <div className="text-center">
                                                            <button className="cs_add_btn_border" onClick={() => addNewSocialButton(index)}>
                                                                Add New
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="cs_loop_list_btn">
                                    <button className="btn btn-sm btn-primary" onClick={addNewTeam}>
                                        Add new member
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <AdvanceCustomize advancedCallback={advancedCallback} currentSection={advancedData} />
            )}
        </>
    )
}
