import PageHeading from "@/Frontend/Components/PageHeading"
import CauseSidebar from "../Components/Cause/CauseSidebar"
import { usePage } from "@inertiajs/react"

export default function CauseLayout({
    children,
    pageHeaderData,
    causeDetails,
    causeDetailsTitle,
    causeDetailsBannerImageUrl,
    causeDetailsCategory,
    causeDetailsDate,
    causeDetailsUser,
    is_show_cause_details_sidebar
}) {
    const { breadcrumb_image, is_show_breadcrumb } = JSON.parse(localStorage.getItem("page_settings")) || {}
    const { categories, tags, recent_post, slug } = usePage().props

    // categories
    const customizedCategories = categories?.map((item) => {
        return {
            title: item?.content?.title,
            url: route("pages.show", {
                slug: slug,
                filter: { category: item?.content?.title }
            })
        }
    })

    return (
        <>
            {causeDetails ? (
                <>
                    <div className="cs_page_heading cs_style_2 cs_bg_filed" style={{ backgroundImage: `url(${causeDetailsBannerImageUrl})` }}>
                        <div className="container">
                            <h1 className="cs_page_heading_title cs_fs_120 cs_white_color cs_normal">{causeDetailsTitle}</h1>
                        </div>
                    </div>
                </>
            ) : (
                is_show_breadcrumb === "1" && (
                    <PageHeading bgSrc={breadcrumb_image ? breadcrumb_image : "/static/page_heading.jpeg"} data={pageHeaderData} />
                )
            )}
            {causeDetails ? <div className="cs_height_100 cs_height_lg_80"></div> : <div className="cs_height_150 cs_height_lg_80"></div>}

            <div className={`container cs_cause_section${causeDetails ? " cs_cause_details_content_section" : ""}`}>
                {children}
                <div className="row position-relative cs_gap_y_65">
                    {/* <div className="col-lg-8">{children}</div>
                    <div className="col-lg-4">
                        <CauseSidebar recent_post={recent_post} customizedCategories={customizedCategories} />
                    </div> */}
                </div>
            </div>
            <div className="cs_height_150 cs_height_lg_80"></div>
        </>
    )
}
