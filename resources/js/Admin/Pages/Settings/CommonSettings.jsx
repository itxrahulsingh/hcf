import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import { useForm, Head } from "@inertiajs/react"
import FromValidationError from "@/Admin/Components/Validation/FromValidationError"
import translate from "@/utils/translate"
import { produce } from "immer"
import TextInput from "@/Admin/Components/Inputs/TextInput"

export default function CommonSettings({ get_common_settings }) {
    // Ensure new fields have default values if not present in props
    const { data, setData, errors, put, processing } = useForm({
        image_compression_quality: 80,
        image_max_width: 2000,
        ...get_common_settings
    })

    // update settings
    const handlePublish = (e) => {
        e.preventDefault()
        put(route("admin.settings.common.settings.update"))
    }

    return (
        <AdminLayouts>
            <Head title="Common Setting" />
            <div className="yoo-height-b30 yoo-height-lg-b30" />
            <div className="container-fluid">
                <div className="yoo-uikits-heading">
                    <h2 className="yoo-uikits-title">{translate("Common Setting")}</h2>
                </div>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                <form className="row" onSubmit={handlePublish}>
                    <div className="col-lg-6">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left">
                                    <h2 className="yoo-card-title">{translate("Common Settings Details")}</h2>
                                </div>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />

                                    {/* Form Response To */}
                                    <div className="form-group form-group-md">
                                        <label htmlFor="form_response_to">{translate("Form Response To")} *</label>
                                        <div className="yoo-select">
                                            <select
                                                className="form-control"
                                                id="form_response_to"
                                                onChange={(e) => setData("form_response_to", e.target.value)}
                                                value={data.form_response_to}
                                            >
                                                <option value="">{translate("Select Form Response To")}</option>
                                                <option value="email_only">{translate("Email Only")}</option>
                                                <option value="database_only">{translate("Database Only")}</option>
                                                <option value="both">{translate("Both")}</option>
                                            </select>
                                            <FromValidationError message={errors.form_response_to} />
                                        </div>
                                    </div>

                                    {/* Admin Email */}
                                    <TextInput
                                        title={translate("Admin Notification Mail")}
                                        type="text"
                                        id="admin_notification_email"
                                        error={errors?.admin_notification_email}
                                        value={data.admin_notification_email}
                                        onChange={(e) => setData("admin_notification_email", e.target.value)}
                                    />

                                    {/* --- Image Optimization Settings --- */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <TextInput
                                                title={translate("Image Compression Quality (0-100)")}
                                                type="number"
                                                id="image_compression_quality"
                                                min="1"
                                                max="100"
                                                error={errors?.image_compression_quality}
                                                value={data.image_compression_quality}
                                                onChange={(e) => setData("image_compression_quality", e.target.value)}
                                            />
                                            <small className="text-muted d-block mb-3" style={{marginTop: '-10px'}}>
                                                {translate("Recommended: 80")}
                                            </small>
                                        </div>
                                        <div className="col-md-6">
                                            <TextInput
                                                title={translate("Max Image Width (px)")}
                                                type="number"
                                                id="image_max_width"
                                                error={errors?.image_max_width}
                                                value={data.image_max_width}
                                                onChange={(e) => setData("image_max_width", e.target.value)}
                                            />
                                            <small className="text-muted d-block mb-3" style={{marginTop: '-10px'}}>
                                                {translate("Recommended: 2000")}
                                            </small>
                                        </div>
                                    </div>
                                    {/* ----------------------------------- */}

                                    <div className="form-group">
                                        <label
                                            htmlFor=""
                                            style={{
                                                display: "flex",
                                                gap: "10px"
                                            }}
                                        >
                                            {translate("Is Show Cookie Alert")}:{" "}
                                            <div
                                                className={`yoo-switch ${data.is_show_cookie_alert === "1" ? "active" : ""}`}
                                                onClick={() =>
                                                    setData(
                                                        produce((draft) => {
                                                            draft.is_show_cookie_alert = draft.is_show_cookie_alert === "0" ? "1" : "0"
                                                        })
                                                    )
                                                }
                                            >
                                                <div className="yoo-switch-in" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor=""
                                            style={{
                                                display: "flex",
                                                gap: "10px"
                                            }}
                                        >
                                            {translate("Allow Guest Checkout")}:{" "}
                                            <div
                                                className={`yoo-switch ${data.is_allow_guest_checkout === "1" ? "active" : ""}`}
                                                onClick={() =>
                                                    setData(
                                                        produce((draft) => {
                                                            draft.is_allow_guest_checkout = draft.is_allow_guest_checkout === "0" ? "1" : "0"
                                                        })
                                                    )
                                                }
                                            >
                                                <div className="yoo-switch-in" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                    <div>
                                        <button type="submit" className="btn btn-success" disabled={processing}>
                                            {translate("Update")}
                                        </button>
                                    </div>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                </div>
                            </div>
                        </div>
                        <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left">
                                    <h2 className="yoo-card-title">{translate("Module Settings")}</h2>
                                </div>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                    <div className="form-group">
                                        <label
                                            htmlFor=""
                                            style={{
                                                display: "flex",
                                                gap: "10px"
                                            }}
                                        >
                                            {translate("Enable eCommerce")}:{" "}
                                            <div
                                                className={`yoo-switch ${data.is_enabled_ecommerce === "1" ? "active" : ""}`}
                                                onClick={() =>
                                                    setData(
                                                        produce((draft) => {
                                                            draft.is_enabled_ecommerce = draft.is_enabled_ecommerce === "0" ? "1" : "0"
                                                        })
                                                    )
                                                }
                                            >
                                                <div className="yoo-switch-in" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor=""
                                            style={{
                                                display: "flex",
                                                gap: "10px"
                                            }}
                                        >
                                            {translate("Enable Case Study")}:{" "}
                                            <div
                                                className={`yoo-switch ${data.is_enabled_case_study === "1" ? "active" : ""}`}
                                                onClick={() =>
                                                    setData(
                                                        produce((draft) => {
                                                            draft.is_enabled_case_study = draft.is_enabled_case_study === "0" ? "1" : "0"
                                                        })
                                                    )
                                                }
                                            >
                                                <div className="yoo-switch-in" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor=""
                                            style={{
                                                display: "flex",
                                                gap: "10px"
                                            }}
                                        >
                                            {translate("Enable Portfolio")}:{" "}
                                            <div
                                                className={`yoo-switch ${data.is_enabled_portfolio === "1" ? "active" : ""}`}
                                                onClick={() =>
                                                    setData(
                                                        produce((draft) => {
                                                            draft.is_enabled_portfolio = draft.is_enabled_portfolio === "0" ? "1" : "0"
                                                        })
                                                    )
                                                }
                                            >
                                                <div className="yoo-switch-in" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor=""
                                            style={{
                                                display: "flex",
                                                gap: "10px"
                                            }}
                                        >
                                            {translate("Enable Services")}:{" "}
                                            <div
                                                className={`yoo-switch ${data.is_enabled_services === "1" ? "active" : ""}`}
                                                onClick={() =>
                                                    setData(
                                                        produce((draft) => {
                                                            draft.is_enabled_services = draft.is_enabled_services === "0" ? "1" : "0"
                                                        })
                                                    )
                                                }
                                            >
                                                <div className="yoo-switch-in" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor=""
                                            style={{
                                                display: "flex",
                                                gap: "10px"
                                            }}
                                        >
                                            {translate("Enable Team")}:{" "}
                                            <div
                                                className={`yoo-switch ${data.is_enabled_team === "1" ? "active" : ""}`}
                                                onClick={() =>
                                                    setData(
                                                        produce((draft) => {
                                                            draft.is_enabled_team = draft.is_enabled_team === "0" ? "1" : "0"
                                                        })
                                                    )
                                                }
                                            >
                                                <div className="yoo-switch-in" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                    <div>
                                        <button type="submit" className="btn btn-success" disabled={processing}>
                                            {translate("Update")}
                                        </button>
                                    </div>
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                </div>
                            </div>
                        </div>
                        <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                    </div>
                </form>
            </div>
        </AdminLayouts>
    )
}
