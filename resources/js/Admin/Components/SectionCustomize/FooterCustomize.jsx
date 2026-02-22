import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { produce } from "immer"
import { updateFooter } from "@/Redux/features/pages/Customize/customize"
import { Icon } from "@iconify/react"

const parseAddresses = (addresses) => {
    if (Array.isArray(addresses)) return addresses
    if (typeof addresses === "string") {
        try {
            return JSON.parse(addresses)
        } catch (e) {
            return []
        }
    }
    return []
}

export default function FooterCustomize() {
    const footer = useSelector((state) => state.customize.footer)
    const dispatch = useDispatch()

    const [data, setData] = useState({
        ...footer,
        footer_is_show_social_media: footer.footer_is_show_social_media === "1" || footer.footer_is_show_social_media === true,
        footer_is_show_newslatter: footer.footer_is_show_newslatter === "1" || footer.footer_is_show_newslatter === true,
        footer_is_show_contact_logo_section:
            footer.footer_is_show_contact_logo_section === "1" || footer.footer_is_show_contact_logo_section === true,
        footer_is_show_useful_links_section:
            footer.footer_is_show_useful_links_section === "1" || footer.footer_is_show_useful_links_section === true,
        footer_is_show_service_section: footer.footer_is_show_service_section === "1" || footer.footer_is_show_service_section === true,
        footer_is_show_resources_section: footer.footer_is_show_resources_section === "1" || footer.footer_is_show_resources_section === true,
        footer_is_show_address: footer.footer_is_show_address === "1" || footer.footer_is_show_address === true,
        addresses: parseAddresses(footer.addresses)
    })

    useEffect(() => {
        dispatch(updateFooter(data))
    }, [data])

    const addAddress = () => {
        setData(
            produce((draft) => {
                draft.addresses.push({ title: "", details: "" })
            })
        )
    }

    const removeAddress = (index) => {
        setData(
            produce((draft) => {
                draft.addresses.splice(index, 1)
            })
        )
    }

    const updateAddressField = (index, field, value) => {
        setData(
            produce((draft) => {
                draft.addresses[index][field] = value
            })
        )
    }

    return (
        <>
            <div className="form-group">
                <label style={{ display: "flex", gap: "10px" }}>
                    Show Social Media:
                    <div
                        className={`yoo-switch ${data.footer_is_show_social_media ? "active" : ""}`}
                        onClick={() =>
                            setData(
                                produce((d) => {
                                    d.footer_is_show_social_media = !d.footer_is_show_social_media
                                })
                            )
                        }
                    >
                        <div className="yoo-switch-in" />
                    </div>
                </label>
            </div>

            <div className="form-group">
                <label style={{ display: "flex", gap: "10px" }}>
                    Show Newslatter:
                    <div
                        className={`yoo-switch ${data.footer_is_show_newslatter ? "active" : ""}`}
                        onClick={() =>
                            setData(
                                produce((d) => {
                                    d.footer_is_show_newslatter = !d.footer_is_show_newslatter
                                })
                            )
                        }
                    >
                        <div className="yoo-switch-in" />
                    </div>
                </label>
            </div>

            <div className="form-group">
                <label style={{ display: "flex", gap: "10px" }}>
                    Show Contact Logo Section:
                    <div
                        className={`yoo-switch ${data.footer_is_show_contact_logo_section ? "active" : ""}`}
                        onClick={() =>
                            setData(
                                produce((d) => {
                                    d.footer_is_show_contact_logo_section = !d.footer_is_show_contact_logo_section
                                })
                            )
                        }
                    >
                        <div className="yoo-switch-in" />
                    </div>
                </label>
            </div>

            <div className="form-group">
                <label style={{ display: "flex", gap: "10px" }}>
                    Show Useful Links Section:
                    <div
                        className={`yoo-switch ${data.footer_is_show_useful_links_section ? "active" : ""}`}
                        onClick={() =>
                            setData(
                                produce((d) => {
                                    d.footer_is_show_useful_links_section = !d.footer_is_show_useful_links_section
                                })
                            )
                        }
                    >
                        <div className="yoo-switch-in" />
                    </div>
                </label>
            </div>

            <div className="form-group">
                <label style={{ display: "flex", gap: "10px" }}>
                    Show Service Section:
                    <div
                        className={`yoo-switch ${data.footer_is_show_service_section ? "active" : ""}`}
                        onClick={() =>
                            setData(
                                produce((d) => {
                                    d.footer_is_show_service_section = !d.footer_is_show_service_section
                                })
                            )
                        }
                    >
                        <div className="yoo-switch-in" />
                    </div>
                </label>
            </div>

            <div className="form-group">
                <label style={{ display: "flex", gap: "10px" }}>
                    Show Resources Section:
                    <div
                        className={`yoo-switch ${data.footer_is_show_resources_section ? "active" : ""}`}
                        onClick={() =>
                            setData(
                                produce((d) => {
                                    d.footer_is_show_resources_section = !d.footer_is_show_resources_section
                                })
                            )
                        }
                    >
                        <div className="yoo-switch-in" />
                    </div>
                </label>
            </div>

            <hr className="my-4" />

            <div className="form-group">
                <label style={{ display: "flex", gap: "10px", fontWeight: "bold", color: "#000" }}>
                    Enable Address Section:
                    <div
                        className={`yoo-switch ${data.footer_is_show_address ? "active" : ""}`}
                        onClick={() =>
                            setData(
                                produce((d) => {
                                    d.footer_is_show_address = !d.footer_is_show_address
                                })
                            )
                        }
                    >
                        <div className="yoo-switch-in" />
                    </div>
                </label>
            </div>

            {data.footer_is_show_address && (
                <div className="customize-address-section mt-3 animate-fade-in">
                    <h4 className="mb-3" style={{ fontSize: "13px", textTransform: "uppercase", color: "#666" }}>
                        Manage Addresses
                    </h4>

                    {data.addresses.map((item, index) => (
                        <div key={index} className="address-item p-3 mb-3 border rounded bg-light position-relative shadow-sm">
                            <button
                                type="button"
                                onClick={() => removeAddress(index)}
                                className="btn btn-sm text-danger position-absolute"
                                style={{ top: "5px", right: "5px", zIndex: 2 }}
                            >
                                <Icon icon="lucide:trash-2" width="18" />
                            </button>

                            <div className="form-group mb-2">
                                <label className="small font-weight-bold">Address Title</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Office Name / Branch..."
                                    value={item.title}
                                    onChange={(e) => updateAddressField(index, "title", e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-0">
                                <label className="small font-weight-bold">Full Address</label>
                                <textarea
                                    className="form-control form-control-sm"
                                    rows="2"
                                    placeholder="Enter complete address..."
                                    value={item.details}
                                    onChange={(e) => updateAddressField(index, "details", e.target.value)}
                                />
                            </div>
                        </div>
                    ))}

                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm w-100 d-flex align-items-center justify-content-center gap-2 mb-4"
                        onClick={addAddress}
                    >
                        <Icon icon="lucide:plus" /> Add Location
                    </button>
                </div>
            )}

            <hr className="my-4" />

            <div className="form-group">
                <label className="font-weight-bold">Copyright Text</label>
                <input
                    type="text"
                    value={data.copyright_text}
                    onChange={(e) => setData({ ...data, copyright_text: e.target.value })}
                    className="form-control"
                    placeholder="© 2026 Your Company Name"
                />
            </div>
        </>
    )
}
