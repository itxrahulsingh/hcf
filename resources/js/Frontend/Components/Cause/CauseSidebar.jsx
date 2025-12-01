import React from "react"
import RecentPost from "../Widget/RecentPost"
import SideMenuWidget from "../Widget/SideMenuWidget"
import translate from "@/utils/translate"

export default function CauseSidebar({ customizedCategories, customizedTags, recent_post }) {
    return (
        <div className="cs_sidebar cs_right_sidebar">
            <SideMenuWidget title={translate("Categories")} data={customizedCategories} />
            <RecentPost title={translate("Recent Posts")} data={recent_post} />
        </div>
    )
}
