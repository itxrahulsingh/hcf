import React, { useState } from "react"
import LightGallery from "./LightGallery"
import { Icon } from "@iconify/react"

export default function PhotoGallery1({ data }) {
    const { section_subtitle, section_title, gallery_list } = data
    const [modalToggle, setModalToggle] = useState(false)
    const [initialSlideIndex, setInitialSlideIndex] = useState(0)
    const [activeFilter, setActiveFilter] = useState("all")

    // Helper to get YouTube Thumbnail
    const getYoutubeThumbnail = (url) => {
        if (!url) return ""
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)/
        const match = url.match(regExp)
        const id = match && match[1]?.length === 11 ? match[1] : url.split("v=")[1]?.split("&")[0] || url.split("/").pop().split("?")[0]
        return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : ""
    }

    // FIXED FILTER LOGIC: Handles empty media_type as "photo"
    const filteredList = gallery_list?.filter((item) => {
        if (activeFilter === "all") return true

        // If media_type is missing or empty, treat it as "photo" (Fallback)
        const itemType = item.media_type || "photo"
        return itemType === activeFilter
    })

    const slideTo = (index) => {
        setInitialSlideIndex(index)
        setModalToggle(true)
    }

    return (
        <>
            {(section_subtitle || section_title) && (
                <div className="container">
                    <div className="cs_section_heading cs_style_1 text-center">
                        {section_subtitle && (
                            <p className="cs_section_subtitle cs_fs_18 cs_medium" dangerouslySetInnerHTML={{ __html: section_subtitle }} />
                        )}
                        {section_title && (
                            <h2 className="cs_section_title cs_fs_53 cs_normal mb-0" dangerouslySetInnerHTML={{ __html: section_title }} />
                        )}
                    </div>

                    <div className="cs_gallery_filter_wrap text-center mt-4">
                        <button className={`cs_filter_btn ${activeFilter === "all" ? "active" : ""}`} onClick={() => setActiveFilter("all")}>
                            All
                        </button>
                        <button className={`cs_filter_btn ${activeFilter === "photo" ? "active" : ""}`} onClick={() => setActiveFilter("photo")}>
                            Photos
                        </button>
                        <button className={`cs_filter_btn ${activeFilter === "video" ? "active" : ""}`} onClick={() => setActiveFilter("video")}>
                            Videos
                        </button>
                    </div>
                </div>
            )}

            <div className="container">
                <div className="row cs_gap_y_30">
                    {filteredList?.map((item, index) => {
                        const displayImage = item.gallery_image_url || getYoutubeThumbnail(item.video_url)

                        return (
                            <div className="col-xl-3 col-lg-4 col-sm-6" key={`${activeFilter}-${index}`}>
                                <div
                                    className="cs_gallery_item cs_style_1 cs_type_mixed"
                                    style={{ backgroundImage: `url(${displayImage})` }}
                                    onClick={() => slideTo(index)}
                                >
                                    {item.media_type === "video" && (
                                        <div className="cs_video_play_icon">
                                            <Icon icon="fa6-solid:play" />
                                        </div>
                                    )}
                                    <div className="cs_gallery_hover">
                                        <div className="cs_gallery_text">
                                            <h3 className="cs_fs_20 cs_white_color mb-0">{item.gallery_title}</h3>
                                            <p className="cs_fs_14 cs_white_color mb-0">{item.gallery_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <LightGallery
                modalToggle={modalToggle}
                setModalToggle={setModalToggle}
                galleryList={filteredList}
                initialSlideIndex={initialSlideIndex}
            />
        </>
    )
}
