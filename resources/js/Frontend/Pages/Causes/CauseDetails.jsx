import { Link } from "@inertiajs/react"
import moment from "moment"
import CauseLayout from "@/Frontend/Layouts/CauseLayout"
import limitString from "@/utils/limitString.js"
import removeHTMLTags from "@/utils/removeHTMLTags.js"
import SeoMeta from "@/utils/SeoMeta"
import ProcessContent from "@/utils/ProcessContent"
import translate from "@/utils/translate"
import FrontendLayout from "@/Frontend/Layouts/FrontendLayout"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { Disclosure } from "@headlessui/react"
import { Icon } from "@iconify/react"

export default function CauseDetails({ cause, meta_title, meta_description, meta_image, site_name, slug }) {
    const galleryImages = (() => {
        try {
            if (Array.isArray(cause?.gallery_images)) return cause.gallery_images
            return JSON.parse(cause?.gallery_images || "[]")
        } catch {
            return []
        }
    })()

    const faqItems = (() => {
        try {
            if (Array.isArray(cause?.content?.faq)) return cause.content.faq
            return JSON.parse(cause?.content?.faq || "[]")
        } catch {
            return []
        }
    })()

    const { is_show_cause_details_sidebar } = JSON.parse(localStorage.getItem("page_settings")) || {}

    SeoMeta(
        cause?.content?.title ?? cause?.meta_title,
        meta_title ?? cause?.meta_title,
        cause?.meta_tags,
        meta_description ?? limitString(removeHTMLTags(cause?.meta_description), 150),
        meta_image ?? cause?.thumbnail_image,
        site_name
    )

    let pageHeaderData = {
        title: cause.content?.title,
        breadcrumb: [
            { label: translate("Home"), url: "/" },
            { label: translate("Cause"), url: route("pages.show", slug) },
            {
                label: cause?.category?.content?.title,
                url: route("pages.show", {
                    slug: slug,
                    filter: { category: cause?.category?.content?.title }
                })
            },
            { label: cause?.content?.title, url: null }
        ]
    }

    return (
        <FrontendLayout>
            <CauseLayout
                pageHeaderData={pageHeaderData}
                causeDetails={true}
                causeDetailsTitle={cause?.content?.title}
                causeDetailsBannerImageUrl={cause?.banner_image}
                causeDetailsCategory={cause?.category?.content?.title}
                causeDetailsDate={moment(cause?.created_at).format("ll")}
                causeDetailsUser={cause?.user?.name}
                is_show_cause_details_sidebar={is_show_cause_details_sidebar}
            >
                <div className="cs_cause_details_wrap">
                    <h1 className="cs_cause_details_title">{cause?.content?.title}</h1>
                </div>

                {galleryImages.length > 0 && (
                    <div className="cs_cause_details_wrap">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            speed={700}
                            loop={true}
                            modules={[Pagination]}
                            breakpoints={{
                                575: { slidesPerView: 2, spaceBetween: 20 },
                                991: { slidesPerView: 3, spaceBetween: 24 },
                                1400: { slidesPerView: 4, spaceBetween: 24 }
                            }}
                            className="gallerySwiper mySwiperpagination_0"
                        >
                            {galleryImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="cs_post cs_style_1">
                                        <div className="p-2">
                                            <img
                                                src={img}
                                                alt={`Gallery Image ${index}`}
                                                className="
                        w-full h-[220px]
                        object-cover rounded-xl shadow-md
                        transition-transform duration-300
                        hover:scale-105 hover:shadow-xl
                    "
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                <div className="cs_cause_details_wrap">
                    <h3>Content</h3>
                    <div
                        className="cs_cause_details"
                        dangerouslySetInnerHTML={{
                            __html: ProcessContent(cause?.content?.content)
                        }}
                    />

                    <h3>Project</h3>
                    <div
                        className="cs_cause_details"
                        dangerouslySetInnerHTML={{
                            __html: ProcessContent(cause?.content?.projects)
                        }}
                    />
                </div>

                {faqItems.length > 0 && (
                    <div className="cs_cause_details_wrap">
                        <h3>FAQ's</h3>
                        <div className="cs_cause_details space-y-4">
                            {faqItems.map((item, index) => (
                                <Disclosure key={index}>
                                    {({ open }) => (
                                        <div
                                            className="
                                rounded-xl shadow-lg border border-gray-100
                                overflow-hidden bg-white
                                transition hover:shadow-xl
                            "
                                        >
                                            <Disclosure.Button
                                                className="
                                    w-full flex items-center justify-between
                                    px-5 py-4
                                    text-left font-semibold text-lg
                                    bg-gradient-to-r from-gray-100 to-gray-200
                                "
                                            >
                                                <span className="text-gray-900">{item.title}</span>

                                                <Icon
                                                    icon="mdi:chevron-down"
                                                    className={`
                                        text-3xl text-gray-600 transition-transform
                                        ${open ? "rotate-180" : ""}
                                    `}
                                                />
                                            </Disclosure.Button>

                                            <Disclosure.Panel className="px-5 pb-5 pt-3 bg-white text-gray-700 text-[17px] leading-relaxed">
                                                <div
                                                    className="prose max-w-none"
                                                    dangerouslySetInnerHTML={{ __html: ProcessContent(item.content) }}
                                                />
                                            </Disclosure.Panel>
                                        </div>
                                    )}
                                </Disclosure>
                            ))}
                        </div>
                    </div>
                )}

                <div className="cs_cause_details_wrap">
                    <h3>Updates</h3>
                    <div
                        className="cs_cause_details"
                        dangerouslySetInnerHTML={{
                            __html: ProcessContent(cause?.content?.updates)
                        }}
                    />
                </div>
            </CauseLayout>
        </FrontendLayout>
    )
}
