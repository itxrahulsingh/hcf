import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import NavigationLink from "@/Components/NavigationLink"
import moment from "moment"

export default function Cause1({ data }) {
    const { section_title, section_subtitle, pagination_style } = data

    // 1. Get settings from the admin 'data' prop
    const limit = parseInt(data?.record_limit) || 4
    const orderBy = data?.order_by || "latest"

    // 2. Retrieve raw causes from localStorage
    let processedCauses = localStorage.getItem("causes") ? JSON.parse(localStorage.getItem("causes")) : []

    // 3. Apply Sorting Logic
    if (orderBy === "latest") {
        processedCauses.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    } else if (orderBy === "oldest") {
        processedCauses.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    } else if (orderBy === "alphabetical") {
        processedCauses.sort((a, b) => {
            const titleA = a.content?.title?.toLowerCase() || ""
            const titleB = b.content?.title?.toLowerCase() || ""
            return titleA.localeCompare(titleB)
        })
    } else if (orderBy === "random") {
        processedCauses.sort(() => Math.random() - 0.5)
    }

    // 4. Apply Limit Logic
    const finalCauses = processedCauses.slice(0, limit)

    return (
        <>
            <div className="container">
                {(section_subtitle || section_title) && (
                    <>
                        <div className="cs_section_heading cs_style_1 text-center">
                            {section_subtitle && (
                                <p
                                    className="cs_section_subtitle cs_fs_18 cs_medium"
                                    dangerouslySetInnerHTML={{
                                        __html: section_subtitle
                                    }}
                                />
                            )}
                            {section_title && (
                                <h2
                                    className="cs_section_title cs_fs_53 cs_normal mb-0"
                                    dangerouslySetInnerHTML={{
                                        __html: section_title
                                    }}
                                />
                            )}
                        </div>
                        <div className="cs_height_85 cs_height_lg_50" />
                    </>
                )}
            </div>
            <div className="container-fluid">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    pagination={{
                        clickable: true
                    }}
                    speed={800}
                    loop={finalCauses.length > 1} // Only loop if there's more than 1 item
                    modules={[Pagination]}
                    className={`mySwiper${pagination_style === "pagination_0" ? " cs_swiper_pagination_wrap_0" : ""}${
                        pagination_style === "pagination_1" ? " cs_swiper_pagination_wrap_1" : ""
                    }${pagination_style === "pagination_2" ? " cs_swiper_pagination_wrap_2" : ""}${
                        pagination_style === "pagination_3" ? " cs_swiper_pagination_wrap_3" : ""
                    }`}
                    breakpoints={{
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        991: {
                            slidesPerView: 3
                        },
                        1400: {
                            slidesPerView: 4
                        }
                    }}
                >
                    {finalCauses?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="cs_post cs_style_1">
                                <NavigationLink href={route("cause.show", item?.slug)} className="cs_post_thumb">
                                    <img src={item?.thumbnail_image} alt={item?.content?.title} loading="lazy" decoding="async" />
                                </NavigationLink>
                                <div className="cs_post_info">
                                    <div className="cs_post_meta">
                                        <span className="cs_medium cs_fs_18 cs_primary_color">
                                            <NavigationLink href={route("cause.show", item?.slug)}>{item?.category?.content?.title}</NavigationLink>
                                        </span>
                                    </div>
                                    <h2 className="cs_post_title cs_fs_30 cs_normal mb-0">
                                        <NavigationLink href={route("cause.show", item?.slug)}>{item?.content?.title}</NavigationLink>
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
