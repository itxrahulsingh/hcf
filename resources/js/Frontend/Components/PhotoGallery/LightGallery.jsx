import React, { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel, Navigation, Autoplay } from "swiper/modules"
import { Icon } from "@iconify/react"

export default function LightGallery({ modalToggle, setModalToggle, galleryList, initialSlideIndex }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [zoomLevel, setZoomLevel] = useState(1)
    const [swiperRef, setSwiperRef] = useState(null)
    const [isFullscreen, setIsFullscreen] = useState(false)

    // Helper to convert YouTube links to Embed links
    const getEmbedUrl = (url) => {
        if (!url) return ""
        let videoId = ""
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)/
        const match = url.match(regExp)

        if (match) {
            videoId = url.split(match[0])[1]?.split(/[?&]/)[0]
        } else {
            videoId = url.split("/").pop()
        }
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    }

    const handleZoomIn = () => setZoomLevel((prev) => prev * 1.1)
    const handleZoomOut = () => zoomLevel > 1 && setZoomLevel((prev) => prev / 1.1)

    const handleDownload = (imageUrl) => {
        const link = document.createElement("a")
        link.href = imageUrl
        link.download = "download"
        link.click()
    }

    const toggleAutoplay = () => {
        if (swiperRef && swiperRef.autoplay) {
            isPlaying ? swiperRef.autoplay.stop() : swiperRef.autoplay.start()
            setIsPlaying(!isPlaying)
        }
    }

    const toggleFullScreen = () => {
        !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen()
    }

    useEffect(() => {
        const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement)
        document.addEventListener("fullscreenchange", handleFullscreenChange)
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }, [])

    const handleCloseModal = () => {
        setModalToggle(false)
        setZoomLevel(1)
    }

    return (
        modalToggle && (
            <div className="cs_gallery_modal">
                <div className="cs_gallery_modal_overlay" onClick={handleCloseModal}></div>
                <div className="cs_gallery_modal_slider_wrap">
                    <Swiper
                        onSwiper={setSwiperRef}
                        pagination={{ type: "fraction" }}
                        navigation={true}
                        modules={[Pagination, Mousewheel, Navigation, Autoplay]}
                        className="mySwiper"
                        speed={1000}
                        initialSlide={initialSlideIndex}
                        autoplay={isPlaying ? { delay: 3000, disableOnInteraction: false } : false}
                    >
                        {galleryList?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="cs_gallery_modal_item">
                                    {item.media_type === "video" ? (
                                        <div className="cs_video_container" style={{ transform: `scale(${zoomLevel})` }}>
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={getEmbedUrl(item.video_url)}
                                                title={item.gallery_title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <img
                                            src={item.gallery_image_url}
                                            alt={item.gallery_title}
                                            style={{
                                                transform: `scale(${zoomLevel})`,
                                                transition: "transform 0.3s ease"
                                            }}
                                        />
                                    )}
                                </div>
                                <h4 className="cs_gallery_modal_title">{item.gallery_title}</h4>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="cs_gallery_controler">
                    <button onClick={handleZoomIn} className="cs_gallery_controler_btn">
                        <Icon icon="lucide:zoom-in" />
                    </button>
                    <button onClick={handleZoomOut} className="cs_gallery_controler_btn">
                        <Icon icon="lucide:zoom-out" />
                    </button>
                    {galleryList[initialSlideIndex]?.media_type !== "video" && (
                        <button
                            onClick={() => handleDownload(galleryList[initialSlideIndex]?.gallery_image_url)}
                            className="cs_gallery_controler_btn"
                        >
                            <Icon icon="lucide:download" />
                        </button>
                    )}
                    <button onClick={handleCloseModal} className="cs_gallery_controler_btn">
                        <Icon icon="lucide:x" />
                    </button>
                </div>
            </div>
        )
    )
}
