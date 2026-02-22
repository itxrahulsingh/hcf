import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function WorkingProcess1({ data }) {
    const {
        section_title,
        section_subtitle,
        media_list,
        feature_list,
        content_position
    } = data || {}

    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: false,
    }

    const positionParts = content_position ? content_position.split(' ') : ['left'];
    const mediaSide = positionParts[0];
    const textAlignClass = positionParts[1] || '';
    const rowClass = `row align-items-center g-4 ${mediaSide === 'right' ? 'flex-row-reverse' : ''}`;

    return (
        <div className="container py-5">
            {(section_title || section_subtitle) && (
                <div className="cs_section_heading cs_style_1 text-center mb-5">
                    {section_title && (
                        <h2 className="cs_section_title cs_fs_48 cs_bold mb-2"
                            dangerouslySetInnerHTML={{ __html: section_title }}
                        />
                    )}
                    {section_subtitle && (
                        <p className="cs_section_subtitle cs_fs_18 text-muted mx-auto"
                            style={{ maxWidth: '750px' }}
                            dangerouslySetInnerHTML={{ __html: section_subtitle }}
                        />
                    )}
                </div>
            )}

            <div className={rowClass}>
                <div className="col-lg-6">
                    <div className="cs_working_process_media shadow-lg rounded-4 overflow-hidden" style={{ height: '400px' }}>
                        {media_list?.length > 0 ? (
                            <Slider {...slickSettings} className="h-100">
                                {media_list.map((media, index) => (
                                    <div key={index} style={{ height: '400px' }}>
                                        {media.file_type === 'video' ? (
                                            <video
                                                src={media.file_url}
                                                autoPlay muted loop playsInline
                                                className="w-100 h-100 object-fit-cover"
                                            />
                                        ) : (
                                            <img
                                                src={media.file_url}
                                                alt="Process"
                                                className="w-100 h-100 object-fit-cover"
                                            />
                                        )}
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <div className="bg-light d-flex align-items-center justify-content-center h-100">
                                <span className="text-muted small">Media Preview</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className={`row g-3 ${textAlignClass}`}>
                        {feature_list?.map((item, index) => (
                            <div key={index} className="col-md-6">
                                <div className="cs_process_rect_card">
                                    <div className="card_bg_rect"></div>
                                    <div className="card_content_inner">
                                        <h3 className="cs_fs_18 cs_semibold mb-0 card_title"
                                            dangerouslySetInnerHTML={{ __html: item.feature_title }}
                                        />
                                        {item.feature_subtitle && (
                                            <p className="card_subtitle mb-0"
                                                dangerouslySetInnerHTML={{ __html: item.feature_subtitle }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .cs_bold { font-weight: 700; }
                .cs_semibold { font-weight: 500; }

                .cs_process_rect_card {
                    position: relative;
                    background: #fff;
                    border: 1px solid #f0f0f0;
                    border-radius: 15px;
                    height: 160px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 20px;
                    overflow: hidden;
                    cursor: pointer;
                    z-index: 1;
                    transition: all 0.3s ease;
                }

                /* Rectangular Zoom Animation */
                .card_bg_rect {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0%;
                    height: 0%;
                    background: #ff8c00;
                    border-radius: 15px;
                    transform: translate(-50%, -50%);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: -1;
                    opacity: 0;
                }

                .cs_process_rect_card:hover .card_bg_rect {
                    opacity: 1;
                    width: 100%;
                    height: 100%;
                }

                .card_content_inner { z-index: 2; width: 100%; transition: all 0.3s ease; }
                .card_title { color: #222; transition: color 0.3s ease; }

                .card_subtitle {
                    font-size: 13px;
                    color: #555;
                    opacity: 0;
                    max-height: 0;
                    overflow: hidden;
                    transition: all 0.4s ease;
                }

                .cs_process_rect_card:hover .card_title { color: #fff; }
                .cs_process_rect_card:hover .card_subtitle {
                    color: #fff;
                    opacity: 1;
                    max-height: 100px;
                    margin-top: 10px;
                }
            `}} />
        </div>
    )
}
