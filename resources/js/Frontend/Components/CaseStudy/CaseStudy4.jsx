import React from "react"
import Button from "../Button"

const styles = {
    heroSection: {
        height: "550px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#111"
    },
    bgImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        zIndex: 0,
        transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)",
        zIndex: 1
    },
    contentWrapper: {
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: "900px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 20px"
    },
    btnWrapper: {
        marginTop: "40px"
    }
}

export default function CaseStudy4({ data }) {
    const { casestudy_list } = data

    return (
        <div className="position-relative" id="all_casestudy">
            <style>
                {`
                    .cs_hero_hover_trigger:hover .cs_hero_bg {
                        transform: scale(1.1);
                    }
                    .cs_custom_hero_btn {
                        background: linear-gradient(90deg, #FF4305 0%, #F58700 100%) !important;
                        color: #ffffff !important;
                        border: none !important;
                        opacity: 1 !important;
                        box-shadow: 0 4px 15px rgba(255, 67, 5, 0.4);
                        transition: all 0.3s ease;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                    .cs_custom_hero_btn:hover {
                        background: linear-gradient(90deg, #F58700 0%, #FF4305 100%) !important;
                        transform: translateY(-3px);
                        box-shadow: 0 8px 25px rgba(255, 67, 5, 0.6);
                        color: #fff !important;
                    }
                `}
            </style>

            {casestudy_list?.map((item, index) => (
                <div className="cs_top_sticky_0" key={index}>
                    <div style={styles.heroSection} className="cs_hero cs_style_10 cs_hero_hover_trigger">
                        <div
                            className="cs_hero_bg"
                            style={{
                                ...styles.bgImage,
                                backgroundImage: `url(${item.casestudy_image_url})`
                            }}
                        />
                        <div style={styles.overlay}></div>
                        <div style={styles.contentWrapper}>
                            <div className="cs_section_heading cs_style_1">
                                {item.casestudy_subtitle && (
                                    <p
                                        className="cs_section_subtitle cs_fs_18 cs_medium cs_white_color mb-3"
                                        style={{
                                            letterSpacing: "3px",
                                            textTransform: "uppercase",
                                            opacity: 0.9,
                                            background: "rgba(255,255,255,0.15)",
                                            display: "inline-block",
                                            padding: "8px 20px",
                                            borderRadius: "30px",
                                            backdropFilter: "blur(5px)",
                                            border: "1px solid rgba(255,255,255,0.2)"
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: item.casestudy_subtitle
                                        }}
                                    />
                                )}
                                {item.casestudy_title && (
                                    <h2
                                        className="cs_section_title cs_fs_50 cs_bold cs_white_color mb-0"
                                        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
                                        dangerouslySetInnerHTML={{
                                            __html: item.casestudy_title
                                        }}
                                    />
                                )}
                                {(item?.casestudy_btn_text || item?.casestudy_btn_url) && (
                                    <div style={styles.btnWrapper}>
                                        <Button
                                            href={item?.casestudy_btn_url}
                                            btnText={item?.casestudy_btn_text}
                                            btnClass="cs_btn cs_custom_hero_btn cs_fs_16 cs_bold cs_radius_30 px-5 py-3"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
