import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import NavigationLink from "@/Components/NavigationLink"
import moment from "moment"

export default function Cause3({ data }) {
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
                <div className="cs_section_heading cs_style_3">
                    <div className="cs_section_heading_left">
                        {(section_subtitle || section_title) && (
                            <>
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
                            </>
                        )}
                    </div>
                    <div className="cs_section_heading_right">
                        <div className="cs_slider_arrows cs_style1">
                            <div className="cs_left_arrow cs_accent_bg rounded-circle cs_center cs_white_color">
                                <svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM17 5.25L1 5.25V6.75L17 6.75V5.25Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="cs_right_arrow cs_accent_bg rounded-circle cs_center cs_white_color">
                                <svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L11.7574 0.696698C11.4645 0.403805 10.9896 0.403805 10.6967 0.696698C10.4038 0.989592 10.4038 1.46447 10.6967 1.75736L14.9393 6L10.6967 10.2426C10.4038 10.5355 10.4038 11.0104 10.6967 11.3033C10.9896 11.5962 11.4645 11.5962 11.7574 11.3033L16.5303 6.53033ZM6.55671e-08 6.75L16 6.75L16 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {(section_subtitle || section_title) && <div className="cs_height_85 cs_height_lg_50" />}
            </div>
            <div className="position-relative">
                <div className="container">
                    <div className="cs_auto_per_view_1 cs_full_screen_right">
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={24}
                            pagination={{
                                clickable: true
                            }}
                            speed={800}
                            loop={finalCauses.length > 1} // Only loop if multiple items exist
                            modules={[Pagination, Navigation]}
                            navigation={{
                                nextEl: ".cs_right_arrow",
                                prevEl: ".cs_left_arrow",
                                disabledClass: "swiper-button-disabled"
                            }}
                            className={`mySwiper${pagination_style === "pagination_0" ? " cs_swiper_pagination_wrap_0" : ""}${
                                pagination_style === "pagination_1" ? " cs_swiper_pagination_wrap_1" : ""
                            }${pagination_style === "pagination_2" ? " cs_swiper_pagination_wrap_2" : ""}${
                                pagination_style === "pagination_3" ? " cs_swiper_pagination_wrap_3" : ""
                            }`}
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
                                                    <NavigationLink href={route("cause.show", item?.slug)}>
                                                        {item?.category?.content?.title}
                                                    </NavigationLink>
                                                </span>
                                                <span>{moment(item?.created_at).format("ll")}</span>
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
                </div>
            </div>
        </>
    )
}
