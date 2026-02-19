import React, { useState } from "react"
import NavigationLink from "@/Components/NavigationLink"
import { Icon } from "@iconify/react"

export default function Team4({ data }) {
    const { section_title, section_subtitle, team_list } = data
    const [activeFilter, setActiveFilter] = useState("All")

    // Extract unique categories dynamically
    const categories = ["All", ...new Set(team_list?.map((item) => item.team_member_category).filter(Boolean))]

    // Filter Logic
    const filteredList = activeFilter === "All" ? team_list : team_list?.filter((item) => item.team_member_category === activeFilter)

    return (
        <>
            <div className="container">
                <div className="cs_section_heading cs_style_1 text-center">
                    {section_subtitle && (
                        <p className="cs_section_subtitle cs_fs_18 cs_medium" dangerouslySetInnerHTML={{ __html: section_subtitle }} />
                    )}
                    {section_title && <h2 className="cs_section_title cs_fs_53 cs_normal mb-0" dangerouslySetInnerHTML={{ __html: section_title }} />}
                </div>

                {/* Dynamic Group Filter Bar */}
                {categories.length > 1 && (
                    <div className="cs_team_filter_wrap text-center mt-4 mb-5">
                        {categories.map((cat, i) => (
                            <button key={i} onClick={() => setActiveFilter(cat)} className={`cs_filter_btn ${activeFilter === cat ? "active" : ""}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

                {(section_subtitle || section_title) && <div className="cs_height_50" />}
            </div>

            <div className="container">
                <div className="row cs_gap_y_80">
                    {filteredList?.map((item, index) => (
                        <div className="col-xl-3 col-sm-6" key={`${activeFilter}-${index}`}>
                            <div className="cs_team cs_style_2">
                                {/* The Sliding Description Overlay */}
                                {item.team_member_description && (
                                    <div className="cs_team_hover_description">
                                        <p>{item.team_member_description}</p>
                                    </div>
                                )}

                                {item.team_image_url && (
                                    <img className="cs_team_member_thumb" src={item.team_image_url} alt={item.team_member_name} loading="lazy" />
                                )}

                                <div className="cs_team_info">
                                    <div className="cs_team_info_in">
                                        <p className="cs_team_member_designation">{item.team_member_designation}</p>
                                        <h2 className="cs_team_member_name cs_fs_24 cs_normal">
                                            <NavigationLink href={item.team_member_action_url}>{item.team_member_name}</NavigationLink>
                                        </h2>
                                        <div className="cs_team_member_social cs_ternary_color">
                                            {item?.social_btns?.map((socialItem, socialIndex) => (
                                                <NavigationLink href={socialItem.social_action_url} key={socialIndex}>
                                                    <i>
                                                        <Icon icon={socialItem.social_icon_class} width="16" height="16" />
                                                    </i>
                                                </NavigationLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
