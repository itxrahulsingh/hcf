import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
const styles = {
    sectionTitle: {
        marginBottom: "50px",
        position: "relative",
        display: "inline-block",
        paddingBottom: "10px"
    },
    brandCard: {
        height: "120px", // Fixed height for uniformity
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        border: "1px solid #f0f0f0",
        borderRadius: "12px",
        padding: "20px",
        transition: "all 0.4s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden"
    },
    img: {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        transition: "all 0.4s ease",
        filter: "grayscale(100%)",
        opacity: 0.7
    }
}

export default function Partner1({ data }) {
    const { section_title, partner_list, pagination_style } = data

    return (
        <section className="cs_partner_section" style={{ padding: "60px 0" }}>
            <style>
                {`
                    .cs_partner_card:hover {
                        border-color: var(--primary); /* Or your specific orange color */
                        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                        transform: translateY(-5px);
                    }
                    .cs_partner_card:hover img {
                        filter: grayscale(0%) !important;
                        opacity: 1 !important;
                        transform: scale(1.1);
                    }
                `}
            </style>

            <div className="container">
                {section_title && (
                    <div className="text-center">
                        <h2
                            className="cs_section_title cs_fs_53 cs_normal mb-0"
                            style={styles.sectionTitle}
                            dangerouslySetInnerHTML={{ __html: section_title }}
                        />
                    </div>
                )}

                <Swiper
                    slidesPerView={2}
                    spaceBetween={24}
                    speed={1000}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={pagination_style ? { clickable: true } : false}
                    modules={[Pagination, Navigation, Autoplay]}
                    className={`mySwiper pt-2 pb-5 ${pagination_style || ""}`}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        991: {
                            slidesPerView: 4,
                            spaceBetween: 24
                        },
                        1200: {
                            slidesPerView: 5, // Exactly 5 on Desktop
                            spaceBetween: 30
                        }
                    }}
                >
                    {partner_list?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="cs_partner_card"
                                style={styles.brandCard}
                            >
                                {item.partner_image_url && (
                                    <img
                                        src={item.partner_image_url}
                                        alt="Partner Brand"
                                        style={styles.img}
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
