import React, { useEffect, useRef, useState, Suspense, lazy, useMemo } from "react"
import FrontendLayout from "@/Frontend/Layouts/FrontendLayout"
import PageHeading from "@/Frontend/Components/PageHeading"
import { useDispatch, useSelector } from "react-redux"
import { usePage } from "@inertiajs/react"
import { updateClickedSection, updateCurrentLang, updatePageData, updatePageInfo } from "@/Redux/features/pages/Page/page"
import SeoMeta from "@/utils/SeoMeta"

export default function Page() {
    const { page_data, lang, page_info, site_name } = usePage().props
    const { pageInfo, pageData, currentLang, currentEditedSection, isEditorMode } = useSelector((state) => state.pages)
    const sectionData = pageData[currentLang] ?? []
    const currentLangPageInfo = pageInfo[currentLang]
    const dispatch = useDispatch()
    const sectionRef = useRef()
    const [screenSize, setScreenSize] = useState("desktop")
    const sectionComponents = {
        Hero: lazy(() => import("@/Frontend/Components/Sections/HeroSection")),
        FunFact: lazy(() => import("@/Frontend/Components/Sections/FunFactSection")),
        Service: lazy(() => import("@/Frontend/Components/Sections/ServicesSection")),
        Portfolio: lazy(() => import("@/Frontend/Components/Sections/PortfolioSection")),
        AditionalFeature: lazy(() => import("@/Frontend/Components/Sections/AditionalFeatureSection")),
        Video: lazy(() => import("@/Frontend/Components/Sections/VideoSection")),
        Team: lazy(() => import("@/Frontend/Components/Sections/TeamSection")),
        Testimonial: lazy(() => import("@/Frontend/Components/Sections/TestimonialSection")),
        Blog: lazy(() => import("@/Frontend/Components/Sections/BlogSection")),
        Cause: lazy(() => import("@/Frontend/Components/Sections/CauseSection")),
        Marquee: lazy(() => import("@/Frontend/Components/Sections/MarqueeSection")),
        Partner: lazy(() => import("@/Frontend/Components/Sections/PartnerSection")),
        CTA: lazy(() => import("@/Frontend/Components/Sections/CTASection")),
        Pricing: lazy(() => import("@/Frontend/Components/Sections/PricingSection")),
        GoogleMap: lazy(() => import("@/Frontend/Components/Sections/GoogleMapSection")),
        CaseStudy: lazy(() => import("@/Frontend/Components/Sections/CaseStudySection")),
        About: lazy(() => import("@/Frontend/Components/Sections/AboutSection")),
        WhyChooseUs: lazy(() => import("@/Frontend/Components/Sections/WhyChooseUsSection")),
        Faq: lazy(() => import("@/Frontend/Components/Sections/FaqSection")),
        PhotoGallery: lazy(() => import("@/Frontend/Components/Sections/PhotoGallerySection")),
        WorkingProcess: lazy(() => import("@/Frontend/Components/Sections/WorkingProcessSection")),
        Banner: lazy(() => import("@/Frontend/Components/Sections/BannerSection")),
        CoreValue: lazy(() => import("@/Frontend/Components/Sections/CoreValueSection")),
        ContactWithFormBuilder: lazy(() => import("@/Frontend/Components/Sections/ContactWithFormBuilderSection")),
        CustomHTML: lazy(() => import("@/Frontend/Components/Sections/CustomHTMLSection")),
        JobListings: lazy(() => import("@/Frontend/Components/Sections/JobListingsSection")),
        TeamDetails: lazy(() => import("@/Frontend/Components/Sections/TeamDetailsSection")),
        HorizontalScroll: lazy(() => import("@/Frontend/Components/Sections/HorizontalScrollSection")),
        EventSchedule: lazy(() => import("@/Frontend/Components/Sections/EventScheduleSection")),
        PortfolioDetails: lazy(() => import("@/Frontend/Components/Sections/PortfolioDetailsSection")),
        CaseStudyDetails: lazy(() => import("@/Frontend/Components/Sections/CaseStudyDetailsSection")),
        TextEditor: lazy(() => import("@/Frontend/Components/Sections/TextEditorSection")),
        Category: lazy(() => import("@/Frontend/Components/Sections/CategorySection")),
        PopularProduct: lazy(() => import("@/Frontend/Components/Sections/PopularProductSection")),
        TrendingProduct: lazy(() => import("@/Frontend/Components/Sections/TrendingProductSection"))
    }

    SeoMeta(
        currentLangPageInfo?.meta_title ?? currentLangPageInfo?.title,
        currentLangPageInfo?.meta_title ?? currentLangPageInfo?.title,
        currentLangPageInfo?.meta_tags,
        currentLangPageInfo?.meta_description,
        currentLangPageInfo?.meta_image,
        site_name
    )

    // page header data
    let pageHeaderData = {
        title: currentLangPageInfo?.breadcrumb_title ? currentLangPageInfo?.breadcrumb_title : currentLangPageInfo?.title,
        breadcrumb: [
            { label: "Home", url: "/" },
            {
                label: currentLangPageInfo?.breadcrumb_title ? currentLangPageInfo?.breadcrumb_title : currentLangPageInfo?.title,
                url: null
            }
        ]
    }

    useEffect(() => {
        if (page_data) {
            dispatch(updateCurrentLang(lang.default_lang))
            dispatch(updatePageData(page_data))
            dispatch(updatePageInfo(page_info))
        }
    }, [page_data])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setScreenSize("mobile")
            } else {
                setScreenSize("desktop")
            }
        }

        handleResize()

        // Add event listener for window resize
        window.addEventListener("resize", handleResize)

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (sectionRef.current) {
            const children = sectionRef.current.children
            const targetChild = Array.from(children).find((child) => child.id === currentEditedSection)
            if (targetChild) {
                targetChild.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
        }
    }, [currentEditedSection])

    return (
        <FrontendLayout headerLayout={currentLangPageInfo?.header_layout} footerLayout={currentLangPageInfo?.footer_layout}>
            {currentLangPageInfo?.is_show_breadcrumb && (
                <PageHeading
                    data={pageHeaderData}
                    is_show_breadcrumb={currentLangPageInfo?.is_show_breadcrumb}
                    bgSrc={currentLangPageInfo?.breadcrumb_image ? currentLangPageInfo?.breadcrumb_image : "/static/page_heading.jpeg"}
                />
            )}

            <div ref={sectionRef}>
                <Suspense fallback={<div className="section-loader-placeholder" style={{ height: "200px" }} />}>
                    {sectionData?.map((section) => {
                        const advanced = section?.advanced
                        const SectionComponent = sectionComponents[section?.type]

                        if (!SectionComponent) return null

                        return (
                            <section
                                id={section.sectionId}
                                key={section.sectionId}
                                onClick={() => dispatch(updateClickedSection(section.sectionId))}
                                style={{
                                    paddingTop: screenSize === "desktop" ? `${advanced?.padding?.top.lg}px` : `${advanced?.padding?.top.md}px`,
                                    paddingBottom: screenSize === "desktop" ? `${advanced?.padding?.bottom.lg}px` : `${advanced?.padding?.bottom.md}px`,
                                    backgroundImage: advanced?.backgroundImage ? `url(${advanced.backgroundImage})` : "none",
                                    backgroundColor: advanced?.backgroundColor ?? "transparent"
                                }}
                                className={`cs_bg_filed${advanced?.is_section_dark ? " cs_dark_section" : ""} ${advanced?.classes} ${isEditorMode ? "editor-hover-active" : ""}`}
                            >
                                <SectionComponent sections_data={section?.data} />
                            </section>
                        )
                    })}
                </Suspense>
            </div>
        </FrontendLayout>
    )
}
