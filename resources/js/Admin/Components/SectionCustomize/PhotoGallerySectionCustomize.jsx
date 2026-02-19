import React, { useEffect, useState } from "react"
import AdvanceCustomize from "@/Admin/Components/SectionCustomize/AdvanceCustomize"
import { produce } from "immer"
import { useSelector, useDispatch } from "react-redux"
import { updatePageSection, updatePageAdvancedSettings } from "@/Redux/features/pages/Page/page"
import SingleMediaUploader from "../Media/SingleMediaUploader"
import { Icon } from "@iconify/react"

export default function PhotoGallerySectionCustomize({ index }) {
    const { currentLang, pageData } = useSelector((state) => state.pages)
    const [tab, setTab] = useState("general")
    const dispatch = useDispatch()
    const [sectionData, setSectionData] = useState({})
    const [advancedData, setAdvancedData] = useState({})
    const [data, setData] = useState({})
    const [layout, setLayout] = useState(false)

    // Helper to get YouTube ID and Thumbnail
    const getYoutubeThumbnail = (url) => {
        if (!url) return null
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)/
        const match = url.match(regExp)
        const id = match && match[1].length === 11 ? match[1] : url.split("v=")[1]?.split("&")[0] || url.split("/").pop().split("?")[0]

        if (id) {
            return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
        }
        return null
    }

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

    const removeGallery = (removeIndex) => {
        setData(
            produce((draft) => {
                draft.gallery_list = draft.gallery_list.filter((_, index) => index !== removeIndex)
            })
        )
    }

    const cloneGallery = (cloneIndex) => {
        setData(
            produce((draft) => {
                const newList = [...draft.gallery_list]
                const clonedItem = { ...newList[cloneIndex] }
                newList.splice(cloneIndex + 1, 0, clonedItem)
                draft.gallery_list = newList
                setOpenIndex(cloneIndex + 1)
            })
        )
    }

    const addNewGallery = () => {
        setData(
            produce((draft) => {
                draft.gallery_list.push({
                    gallery_title: "",
                    gallery_description: "",
                    gallery_image_url: "",
                    media_type: "photo",
                    video_url: ""
                })
                setOpenIndex(draft.gallery_list.length - 1)
            })
        )
    }

    useEffect(() => {
        if (index) {
            setData({
                layout: sectionData?.data?.layout ?? "1",
                section_title: sectionData?.data?.section_title ?? "",
                section_subtitle: sectionData?.data?.section_subtitle ?? "",
                gallery_list: sectionData?.data?.gallery_list ?? [
                    {
                        gallery_title: "",
                        gallery_description: "",
                        gallery_image_url: "",
                        media_type: "photo",
                        video_url: ""
                    }
                ]
            })
        }
    }, [currentLang, sectionData, index])

    useEffect(() => {
        if (index) setSectionData(pageData[currentLang][index])
    }, [index, currentLang])

    useEffect(() => {
        if (Object.keys(data).length !== 0 && index) {
            dispatch(updatePageSection({ data, index }))
        }
    }, [data, index])

    useEffect(() => {
        if (index) setAdvancedData(pageData[currentLang][index].advanced)
    }, [index, currentLang, pageData])

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
                    {/* Layout select code remains the same as previous version */}
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
                            rows="2"
                            className="form-control"
                            value={data.section_subtitle}
                            onChange={(e) => setData({ ...data, section_subtitle: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="cs_loop_list">
                        <label>Media Items (Photos/Videos)</label>
                        <div className="cs_loop_list_in">
                            {data.gallery_list?.map((item, index) => (
                                <div className="cs_loop_item" key={index}>
                                    <div className="cs_loop_item_head">
                                        <span onClick={() => handleToggle(index)}>
                                            <Icon icon={item.media_type === "video" ? "lucide:video" : "lucide:image"} className="me-2" />
                                            {item.gallery_title || `Media Item ${index + 1}`}
                                        </span>
                                        <div className="cs_loop_item_control_btns">
                                            <button className="cs_clone_loop_item" onClick={() => cloneGallery(index)}>
                                                <Icon icon="lucide:copy" />
                                            </button>
                                            {data.gallery_list.length > 1 && (
                                                <button className="cs_remove_loop_item" onClick={() => removeGallery(index)}>
                                                    <Icon icon="lucide:x" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    {openIndex === index && (
                                        <div className="cs_loop_item_body">
                                            <div className="form-group">
                                                <label>Media Type</label>
                                                <select
                                                    className="form-control"
                                                    value={item.media_type}
                                                    onChange={(e) =>
                                                        setData(
                                                            produce((draft) => {
                                                                draft.gallery_list[index].media_type = e.target.value
                                                            })
                                                        )
                                                    }
                                                >
                                                    <option value="photo">Photo</option>
                                                    <option value="video">Video (YouTube/Shorts)</option>
                                                </select>
                                            </div>

                                            {item.media_type === "video" && (
                                                <div className="form-group">
                                                    <label>YouTube/Shorts URL</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Paste link here..."
                                                        value={item.video_url || ""}
                                                        onChange={(e) =>
                                                            setData(
                                                                produce((draft) => {
                                                                    draft.gallery_list[index].video_url = e.target.value
                                                                })
                                                            )
                                                        }
                                                    />
                                                </div>
                                            )}

                                            <div className="form-group">
                                                <label>{item.media_type === "video" ? "Custom Thumbnail (Optional)" : "Gallery Image"}</label>
                                                <SingleMediaUploader
                                                    onSelected={(e) =>
                                                        setData(
                                                            produce((draft) => {
                                                                draft.gallery_list[index].gallery_image_url = e
                                                            })
                                                        )
                                                    }
                                                    handleRemoved={() =>
                                                        setData(
                                                            produce((draft) => {
                                                                draft.gallery_list[index].gallery_image_url = ""
                                                            })
                                                        )
                                                    }
                                                    defaultValue={item.gallery_image_url}
                                                />
                                                {item.media_type === "video" && !item.gallery_image_url && item.video_url && (
                                                    <div className="mt-2 small text-muted">
                                                        <Icon icon="lucide:info" className="me-1" />
                                                        No custom image selected. Using YouTube default preview:
                                                        <div className="mt-1" style={{ width: "100px", borderRadius: "4px", overflow: "hidden" }}>
                                                            <img
                                                                src={getYoutubeThumbnail(item.video_url)}
                                                                alt="Auto preview"
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label>Title</label>
                                                <input
                                                    type="text"
                                                    value={item.gallery_title}
                                                    onChange={(e) =>
                                                        setData(
                                                            produce((draft) => {
                                                                draft.gallery_list[index].gallery_title = e.target.value
                                                            })
                                                        )
                                                    }
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea
                                                    rows="2"
                                                    value={item.gallery_description}
                                                    onChange={(e) =>
                                                        setData(
                                                            produce((draft) => {
                                                                draft.gallery_list[index].gallery_description = e.target.value
                                                            })
                                                        )
                                                    }
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="cs_loop_list_btn">
                                <button className="btn btn-sm btn-primary" onClick={addNewGallery}>
                                    Add Media Item
                                </button>
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
