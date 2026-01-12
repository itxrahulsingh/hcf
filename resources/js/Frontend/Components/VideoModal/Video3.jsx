import React from "react"
import VideoModal from "."

const styles = {
    sectionWrapper: {
        position: "relative",
        padding: "80px 0",
        backgroundColor: "#f9f9f9",
        overflow: "hidden"
    },
    videoWrapper: {
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        width: "100%",
        height: "0",
        paddingBottom: "56.25%",
        backgroundColor: "#000"
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)",
        pointerEvents: "none",
        zIndex: 2
    },
    modalTrigger: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 1
    }
}

export default function Video3({ data }) {
    const { section_title, background_image_url, video_url } = data

    return (
        <section style={styles.sectionWrapper} className="cs_video_section">
            <style>
                {`
                    .cs_video_section:hover .cs_video_block {
                        transform: translateY(-5px);
                        transition: transform 0.3s ease;
                    }
                    .cs_play_btn {
                        z-index: 10;
                    }
                    .cs_play_btn::before, .cs_play_btn::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.3);
                        animation: cs_pulse 2s infinite;
                        z-index: -1;
                    }
                    .cs_play_btn::after {
                        animation-delay: 1s;
                    }
                    @keyframes cs_pulse {
                        0% { width: 80px; height: 80px; opacity: 1; }
                        100% { width: 150px; height: 150px; opacity: 0; }
                    }
                `}
            </style>

            <div className="container">
                {section_title && (
                    <div className="text-center mb-5">
                        <h2
                            className="cs_section_title cs_fs_48 cs_bold cs_primary_color mb-3"
                            style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.2" }}
                            dangerouslySetInnerHTML={{
                                __html: section_title
                            }}
                        />
                        <div className="cs_separator cs_accent_color" style={{ width: "60px", height: "4px", margin: "20px auto", borderRadius: "2px" }}></div>
                    </div>
                )}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div style={styles.videoWrapper} className="cs_video_block cs_radius_20">
                            <div style={styles.overlay}></div>
                            <div style={styles.modalTrigger}>
                                <VideoModal
                                    videoSrc={video_url}
                                    imageUrl={background_image_url}
                                    className="w-100 h-100 object-fit-cover d-block"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
