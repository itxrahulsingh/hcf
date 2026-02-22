import React, { useEffect, useState } from "react"
import { produce } from "immer"
import AdvanceCustomize from "@/Admin/Components/SectionCustomize/AdvanceCustomize"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { updatePageSection, updatePageAdvancedSettings } from "@/Redux/features/pages/Page/page"
import SingleMediaUploader from "../Media/SingleMediaUploader"
import { Icon } from "@iconify/react"

export default function WorkingProcessSectionCustomize({ index }) {
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

    const [openIndex, setOpenIndex] = useState(0)
    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
    }

    const [openMediaIndex, setOpenMediaIndex] = useState(0)
    const handleMediaToggle = (index) => {
        setOpenMediaIndex((prevIndex) => (prevIndex === index ? -1 : index))
    }

    const removeFeature = (removeIndex) => {
        setData(
            produce((draft) => {
                draft.feature_list = draft.feature_list.filter((_, index) => index !== removeIndex)
            })
        )
    }
    const cloneFeature = (cloneIndex) => {
        setData(
            produce((draft) => {
                const newList = [...draft.feature_list]
                const clonedItem = { ...newList[cloneIndex] }
                newList.splice(cloneIndex + 1, 0, clonedItem)
                draft.feature_list = newList
                setOpenIndex(cloneIndex + 1)
            })
        )
    }

    const addNewFeature = () => {
        setData(
            produce((draft) => {
                draft.feature_list.push({
                    feature_title: "",
                    feature_subtitle: "",
                    feature_number: "",
                    feature_image_url: ""
                })
                setOpenIndex(draft.feature_list.length - 1)
            })
        )
    }

    const addMedia = () => {
        setData(
            produce((draft) => {
                if (!draft.media_list) {
                    draft.media_list = []
                }
                draft.media_list.push({
                    file_url: "",
                    file_type: "image"
                })
                setOpenMediaIndex(draft.media_list.length - 1)
            })
        )
    }

    const removeMedia = (removeIndex) => {
        setData(
            produce((draft) => {
                draft.media_list = draft.media_list.filter((_, index) => index !== removeIndex)
            })
        )
    }

    let customizer = ""
    if (data.layout === "1" || data.layout === "2" || data.layout === "3") {
        customizer = (
            <>
                <div className="form-group">
                    <label>Content Position</label>
                    <select
                        className="form-control"
                        value={data.content_position}
                        onChange={(e) => setData({ ...data, content_position: e.target.value })}
                    >
                        <option value="left text-right">Media Left / Content Right</option>
                        <option value="right text-left">Content Left / Media Right</option>
                    </select>
                </div>

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

                <div className="form-group">
                    <label>Background image / Static Side Image</label>
                    <SingleMediaUploader
                        onSelected={(e) => {
                            setData(
                                produce((draft) => {
                                    draft.image_url = e
                                })
                            )
                        }}
                        handleRemoved={() =>
                            setData(
                                produce((draft) => {
                                    draft.image_url = ""
                                })
                            )
                        }
                        defaultValue={data.image_url}
                    />
                </div>

                <div className="cs_loop_list mb-4">
                    <label>Media Slider (Images & Videos)</label>
                    <div className="cs_loop_list_in">
                        {data.media_list?.map((item, index) => (
                            <div className="cs_loop_item" key={index}>
                                <div className="cs_loop_item_head">
                                    <span onClick={() => handleMediaToggle(index)}>
                                        <span>
                                            {item.file_type ? item.file_type.toUpperCase() : "Media"} #{index + 1}
                                        </span>
                                    </span>
                                    <div className="cs_loop_item_control_btns">
                                        <button className="cs_remove_loop_item" onClick={() => removeMedia(index)}>
                                            <Icon icon="lucide:x" width="18" height="18" />
                                        </button>
                                    </div>
                                </div>
                                {openMediaIndex === index && (
                                    <div className="cs_loop_item_body">
                                        <div className="form-group">
                                            <label>Media Type</label>
                                            <select
                                                className="form-control"
                                                value={item.file_type}
                                                onChange={(e) =>
                                                    setData(
                                                        produce((draft) => {
                                                            draft.media_list[index].file_type = e.target.value
                                                        })
                                                    )
                                                }
                                            >
                                                <option value="image">Image</option>
                                                <option value="video">Video (MP4)</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Upload Media</label>
                                            <SingleMediaUploader
                                                onSelected={(e) =>
                                                    setData(
                                                        produce((draft) => {
                                                            draft.media_list[index].file_url = e
                                                        })
                                                    )
                                                }
                                                handleRemoved={() =>
                                                    setData(
                                                        produce((draft) => {
                                                            draft.media_list[index].file_url = ""
                                                        })
                                                    )
                                                }
                                                defaultValue={item.file_url}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="cs_loop_list_btn">
                            <button className="btn btn-sm btn-outline-primary w-100" onClick={addMedia}>
                                + Add Media to Slider
                            </button>
                        </div>
                    </div>
                </div>

                <div className="cs_loop_list">
                    <label>Feature List (Content Cards)</label>
                    <div className="cs_loop_list_in">
                        {data.feature_list?.map((item, index) => (
                            <div className="cs_loop_item" key={index}>
                                <div className="cs_loop_item_head">
                                    <span onClick={() => handleToggle(index)}>
                                        <span>{item.feature_title ? item.feature_title : "List Item"}</span>
                                    </span>
                                    <div className="cs_loop_item_control_btns">
                                        <button className="cs_clone_loop_item" onClick={() => cloneFeature(index)}>
                                            <Icon icon="lucide:copy" width="18" height="18" />
                                        </button>
                                        {data.feature_list.length === 1 ? (
                                            ""
                                        ) : (
                                            <button className="cs_remove_loop_item" onClick={() => removeFeature(index)}>
                                                <Icon icon="lucide:x" width="18" height="18" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                {openIndex === index && (
                                    <div className="cs_loop_item_body">
                                        <div className="form-group">
                                            <label>Feature Title</label>
                                            <input
                                                type="text"
                                                value={item.feature_title}
                                                onChange={(e) => {
                                                    setData(
                                                        produce((draft) => {
                                                            draft.feature_list[index].feature_title = e.target.value
                                                        })
                                                    )
                                                }}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Feature Subtitle</label>
                                            <textarea
                                                cols="30"
                                                rows="5"
                                                className="form-control"
                                                value={item.feature_subtitle}
                                                onChange={(e) => {
                                                    setData(
                                                        produce((draft) => {
                                                            draft.feature_list[index].feature_subtitle = e.target.value
                                                        })
                                                    )
                                                }}
                                            ></textarea>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="cs_loop_list_btn">
                            <button className="btn btn-sm btn-primary" onClick={addNewFeature}>
                                Add new card
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
                content_position: sectionData?.data?.content_position ?? "left text-right",
                section_title: sectionData?.data?.section_title ?? "",
                section_subtitle: sectionData?.data?.section_subtitle ?? "",
                image_url: sectionData?.data?.image_url ?? "",
                media_list: sectionData?.data?.media_list ?? [],
                feature_list: sectionData?.data?.feature_list ?? [
                    {
                        feature_title: "",
                        feature_subtitle: "",
                        feature_number: "",
                        feature_image_url: ""
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
                                Working Process {data.layout}
                                <Icon icon="lucide:chevron-down" width="17" height="17" />
                            </div>
                        </div>
                        {layout && (
                            <div className="cs_section_images">
                                {["1", "2", "3"].map((value) => (
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
                                            <img
                                                src={`/static/sections/working_process/working_process_style_${value}.jpg`}
                                                alt="Thumb"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <label htmlFor={`layout-${value}`}>Working Process Style {value}</label>
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
