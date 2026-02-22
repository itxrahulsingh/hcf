import React, { useMemo } from "react"
import { useSelector } from "react-redux"
import translate from "@/utils/translate"
import { usePage } from "@inertiajs/react"
import ContactInfoWidget from "../Widget/ContactInfoWidget"
import MenuWidget from "../Widget/MenuWidget"
import Newsletter from "../Widget/Newsletter"
import SocialWidget from "../Widget/SocialWidget"
import organizeMenusIntoHierarchy from "@/utils/organizeMenusIntoHierarchy"
import MenuItem from "../Widget/MenuItem"
import CookiePolicy from "../Cookie/CookiePolicy"
import { Icon } from "@iconify/react"

export default function Footer() {
    const { lang } = usePage().props
    const customize = useSelector((state) => state.customize)
    const { currentLang } = useSelector((state) => state.pages)
    const currentLanguage = currentLang ?? lang.default_lang

    // --- Safe Parsing Helper for Addresses ---
    const addresses = useMemo(() => {
        const rawAddresses = customize?.footer?.addresses
        if (Array.isArray(rawAddresses)) return rawAddresses
        if (typeof rawAddresses === "string") {
            try {
                return JSON.parse(rawAddresses)
            } catch (e) {
                return []
            }
        }
        return []
    }, [customize?.footer?.addresses])

    const servicesMenu = localStorage.getItem("services_menu") ? JSON.parse(localStorage.getItem("services_menu")) : []
    const services_menu = servicesMenu ? organizeMenusIntoHierarchy(servicesMenu[currentLanguage]) : []

    const FooterMenu = localStorage.getItem("footer_menu") ? JSON.parse(localStorage.getItem("footer_menu")) : []
    const footer_menu = FooterMenu ? organizeMenusIntoHierarchy(FooterMenu[currentLanguage]) : []

    const resourcesMenu = localStorage.getItem("resources_menu") ? JSON.parse(localStorage.getItem("resources_menu")) : []
    const resources_menu = resourcesMenu ? organizeMenusIntoHierarchy(resourcesMenu[currentLanguage]) : []

    const usefulLinks = localStorage.getItem("useful_links") ? JSON.parse(localStorage.getItem("useful_links")) : []
    const useful_links = usefulLinks ? organizeMenusIntoHierarchy(usefulLinks[currentLanguage]) : []

    return (
        <footer className="cs_footer cs_primary_bg cs_ternary_color">
            <div className="cs_footer_main">
                <div className="container">
                    {Boolean(Number(customize?.footer?.footer_is_show_newslatter)) && (
                        <Newsletter
                            placeholder={translate("Email address")}
                            title={translate("Subscribe to our newsletter")}
                            btnClass="cs_btn cs_style_1 cs_type_2 cs_primary_color cs_white_bg"
                            titleClass="cs_newsletter_title cs_fs_53 cs_normal mb-0 cs_white_color"
                        />
                    )}

                    {/* Updated grid class to accommodate 5 columns if necessary or stay with 4 */}
                    <div className="cs_footer_grid_5">
                        {customize?.footer?.footer_is_show_contact_logo_section && (
                            <div className="cs_footer_grid_item">
                                <div className="cs_footer_item">
                                    <div className="cs_text_widget">
                                        {customize.general.site_favicon && (
                                            <img src={customize.general.site_logo_light} alt="Logo" loading="lazy" decoding="async" />
                                        )}
                                        <ContactInfoWidget />
                                    </div>
                                </div>
                            </div>
                        )}
                        {customize?.footer?.footer_is_show_useful_links_section && (
                            <div className="cs_footer_grid_item">
                                <div className="cs_footer_item">
                                    <MenuWidget menus={useful_links} title={translate("Useful Links")} />
                                </div>
                            </div>
                        )}
                        {customize?.footer?.footer_is_show_service_section && (
                            <div className="cs_footer_grid_item">
                                <div className="cs_footer_item">
                                    <MenuWidget menus={services_menu} title={translate("Service")} />
                                </div>
                            </div>
                        )}
                        {customize?.footer?.footer_is_show_resources_section && (
                            <div className="cs_footer_grid_item">
                                <div className="cs_footer_item">
                                    <MenuWidget menus={resources_menu} title={translate("Resources")} />
                                </div>
                            </div>
                        )}

                        {customize?.footer?.footer_is_show_address && addresses.length > 0 && (
                            <div className="cs_footer_grid_item">
                                <div className="cs_footer_item">
                                    <h2 className="cs_widget_title cs_secondary_font cs_medium text-uppercase cs_fs_18 cs_white_color">{translate("Our Locations")}</h2>
                                    <div className="cs_footer_address_list">
                                        {addresses.map((item, index) => (
                                            <div key={index} className="cs_address_block mb-2">
                                                <div className="cs_address_title fw-bold text-white mb-1" style={{ fontSize: "15px" }}>
                                                    {item.title}
                                                </div>
                                                <div
                                                    className="cs_address_text cs_ternary_color small d-flex align-items-start"
                                                    style={{ lineHeight: "1.4" }}
                                                >
                                                    <Icon
                                                        icon="mdi:home-variant-outline"
                                                        className="me-2 text-primary mt-1"
                                                        style={{ minWidth: "18px", fontSize: "16px" }}
                                                    />
                                                    <span>{item.details}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="cs_bottom_footer_wrap">
                <div className="container">
                    <div className="cs_bottom_footer">
                        {customize.footer.footer_is_show_social_media == "1" && (
                            <div className="cs_bottom_footer_left">
                                <SocialWidget />
                            </div>
                        )}

                        <div
                            className="cs_copyright"
                            dangerouslySetInnerHTML={{
                                __html: customize.footer.copyright_text
                            }}
                        />

                        <div className="cs_bottom_footer_right">
                            <ul className="cs_footer_links cs_mp0">
                                {footer_menu.map((menu, index) => (
                                    <MenuItem key={index} menu={menu} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <CookiePolicy />

            {/* CSS to handle the 5th column grid responsiveness */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @media (min-width: 1200px) {
                    .cs_footer_grid_5 {
                        display: grid;
                        grid-template-columns: repeat(5, 1fr);
                        gap: 30px;
                    }
                }
                @media (max-width: 1199px) and (min-width: 992px) {
                    .cs_footer_grid_5 {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 30px;
                    }
                }
                .cs_address_title { border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; display: inline-block; }
            `
                }}
            />
        </footer>
    )
}
