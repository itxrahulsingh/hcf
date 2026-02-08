import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import NavigationLink from "@/Components/NavigationLink"

// Inline styles for pixel-perfect adjustments
const styles = {
    splitHeader: {
        borderRadius: "50px",
        overflow: "hidden",
        display: "flex",
        color: "white",
        fontWeight: "700",
        marginBottom: "40px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        fontSize: "clamp(14px, 2vw, 20px)" // Responsive font size
    },
    headerLeft: {
        width: "50%",
        backgroundColor: "#3b5998", // Dark Blue
        padding: "12px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    headerRight: {
        width: "50%",
        backgroundColor: "#7e3f98", // Purple
        padding: "12px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    // Card Container to ensure equal height
    cardContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #f0f0f0",
        borderRadius: "15px",
        padding: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 5px 15px rgba(0,0,0,0.03)"
    },
    imgWrapper: {
        width: "100%",
        height: "180px",
        overflow: "hidden",
        borderRadius: "10px",
        marginBottom: "15px",
        flexShrink: 0 // Prevent image squishing
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s ease"
    },
    // Title Styling - Smaller & Clamped
    title: {
        fontSize: "17px", // Reduced from 20px
        fontWeight: "700",
        lineHeight: "1.4",
        color: "#222",
        marginBottom: "15px",
        display: "-webkit-box",
        WebkitLineClamp: "2", // Limit to 2 lines
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        height: "48px", // Fixed height for alignment
        textDecoration: "none"
    },
    // Button Styling
    donateBtn: {
        background: "linear-gradient(90deg, #e65c00 0%, #f9d423 100%)",
        color: "white",
        border: "none",
        padding: "10px 0",
        fontWeight: "700",
        borderRadius: "8px",
        width: "100%",
        marginTop: "auto", // Pushes button to the bottom
        display: "block",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: "14px",
        letterSpacing: "0.5px",
        cursor: "pointer",
        textDecoration: "none"
    }
}

export default function Cause2({ data }) {
    const { navigation_style } = data
    const causes = localStorage.getItem("causes") ? JSON.parse(localStorage.getItem("causes")) : []

    return (
        <section className="cs_shape_wrap_4 position-relative">
            <div className="cs_height_120 cs_height_lg_80" />

            <div className="container">
                {/* Custom Split Header */}
                <div style={styles.splitHeader} className="cs_split_header">
                    <div style={styles.headerLeft}>
                        Tax Benefit
                    </div>
                    <div style={styles.headerRight}>
                        100% Transparency
                    </div>
                </div>

                <div className="position-relative">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        pagination={{ clickable: true }}
                        speed={800}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        navigation={{
                            nextEl: ".cs_right_arrow",
                            prevEl: ".cs_left_arrow",
                            disabledClass: "swiper-button-disabled"
                        }}
                        className="mySwiper pb-5"
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 3 },
                            991: { slidesPerView: 4 },
                            1200: { slidesPerView: 4 }
                        }}
                    >
                        {causes?.map((item, index) => (
                            <SwiperSlide key={index} style={{ height: "auto" }}>
                                <div style={styles.cardContainer} className="cs_zoom_effect_wrap">
                                    <NavigationLink href={route("cause.show", item?.slug)} style={styles.imgWrapper} className="cs_zoom_effect">
                                        <img
                                            src={item?.thumbnail_image}
                                            alt={item?.content?.title}
                                            loading="lazy" decoding="async"
                                            style={styles.img}
                                        />
                                    </NavigationLink>
                                    <h2 className="mb-0">
                                        <NavigationLink
                                            href={route("cause.show", item?.slug)}
                                            style={styles.title}
                                            title={item?.content?.title}
                                        >
                                            {item?.content?.title}
                                        </NavigationLink>
                                    </h2>
                                    <NavigationLink
                                        href={route("cause.show", item?.slug)}
                                        style={styles.donateBtn}
                                        className="cs_donate_btn_hover"
                                    >
                                        DONATE NOW
                                    </NavigationLink>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {navigation_style === "navigation_1" && (
                        <div className="cs_slider_arrows cs_style2 cs_mobile_hide mt-4 justify-content-center">
                            <div className="cs_left_arrow cs_accent_color">
                                <svg width={52} height={24} viewBox="0 0 52 24" fill="none">
                                    <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM52 10.5L2 10.5V13.5L52 13.5V10.5Z" fill="currentColor"/>
                                </svg>
                            </div>
                            <div className="cs_right_arrow cs_accent_color">
                                <svg width={52} height={24} viewBox="0 0 52 24" fill="none">
                                    <path d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807611 39.9792 0.807611 39.3934 1.3934C38.8076 1.97919 38.8076 2.92893 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM0 13.5H50V10.5H0V13.5Z" fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80" />
        </section>
    )
}
