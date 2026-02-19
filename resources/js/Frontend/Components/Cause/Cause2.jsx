import React from "react"
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
        fontSize: "clamp(14px, 2vw, 20px)"
    },
    headerLeft: {
        width: "50%",
        backgroundColor: "#3b5998",
        padding: "12px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    headerRight: {
        width: "50%",
        backgroundColor: "#7e3f98",
        padding: "12px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    cardContainer: {
        height: "100%", // Added to ensure all cards are equal height
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
        flexShrink: 0
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s ease"
    },
    title: {
        fontSize: "15px",
        fontWeight: "700",
        lineHeight: "1.4",
        color: "#222",
        textDecoration: "none",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        marginBottom: "15px"
    },
    donateBtn: {
        background: "linear-gradient(90deg, #e65c00 0%, #f9d423 100%)",
        color: "white",
        border: "none",
        padding: "10px 0",
        fontWeight: "700",
        borderRadius: "8px",
        width: "100%",
        marginTop: "auto", // Pushes button to bottom
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
    const limit = parseInt(data?.record_limit) || 4
    const orderBy = data?.order_by || "latest"
    let processedCauses = localStorage.getItem("causes") ? JSON.parse(localStorage.getItem("causes")) : []

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

    const finalCauses = processedCauses.slice(0, limit)

    return (
        <section className="cs_shape_wrap_4 position-relative">
            <div className="cs_height_120 cs_height_lg_80" />

            <div className="container">
                {/* Custom Split Header */}
                <div style={styles.splitHeader} className="cs_split_header">
                    <div style={styles.headerLeft}>Tax Benefit</div>
                    <div style={styles.headerRight}>100% Transparency</div>
                </div>

                <div className="row cs_gap_y_30">
                    {finalCauses?.map((item, index) => (
                        <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
                            <div style={styles.cardContainer} className="cs_zoom_effect_wrap">
                                <NavigationLink href={route("cause.show", item?.slug)} style={styles.imgWrapper} className="cs_zoom_effect">
                                    <img src={item?.thumbnail_image} alt={item?.content?.title} loading="lazy" decoding="async" style={styles.img} />
                                </NavigationLink>
                                <h2 className="mb-0 p-0 fs-6">
                                    <NavigationLink href={route("cause.show", item?.slug)} style={styles.title} title={item?.content?.title}>
                                        {item?.content?.title}
                                    </NavigationLink>
                                </h2>
                                <NavigationLink href={route("cause.show", item?.slug)} style={styles.donateBtn} className="cs_donate_btn_hover">
                                   {data?.action_text || "DONATE NOW"}
                                </NavigationLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cs_height_120 cs_height_lg_80" />
        </section>
    )
}
