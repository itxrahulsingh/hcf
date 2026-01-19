import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import translate from "@/utils/translate"
import { Head, useForm, Link } from "@inertiajs/react"
import { IonIcon } from "@ionic/react"
import { arrowBackOutline, saveOutline } from "ionicons/icons"
import React from "react"
import moment from "moment"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_blue.css"

export default function Edit({ order }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: "POST",
        customer_name: order.customer_name || "",
        customer_email: order.customer_email || "",
        customer_phone: order.customer_phone || "",
        shipping_address: order.shipping_address || "",
        pancard: order.pancard || "",
        is_80g: order.is_80g == 1,
        status: order.status,
        payment_status: order.payment_status,
        payment_method: order.payment_method || "",
        special_name: order.special_name || "",
        special_message: order.special_message || "",
        special_date: order.special_date ? order.special_date : "",
        special_video: order.special_video || "",
        special_image: null,
        order_notes: order.order_notes || ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route("admin.orders.update.details", order.id))
    }

    return (
        <AdminLayouts>
            <Head title={translate("Edit Order")} />
            <div className="container-fluid p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="h4 mb-0">
                        {translate("Edit Order")} #{order.order_number}
                    </h2>
                    <Link href={route("admin.orders.index")} className="btn btn-outline-secondary btn-sm">
                        <IonIcon icon={arrowBackOutline} className="mr-1" /> {translate("Back")}
                    </Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {/* LEFT: Details */}
                        <div className="col-lg-8">
                            {/* Donor Info */}
                            <div className="card shadow-sm mb-4">
                                <div className="card-header bg-white font-weight-bold">{translate("Donor Information")}</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label>{translate("Full Name")} *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.customer_name}
                                                onChange={(e) => setData("customer_name", e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>{translate("Email")}</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={data.customer_email}
                                                onChange={(e) => setData("customer_email", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>{translate("Phone")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.customer_phone}
                                                onChange={(e) => setData("customer_phone", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>{translate("PAN Card")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.pancard}
                                                onChange={(e) => setData("pancard", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label>{translate("Address")}</label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={data.shipping_address}
                                                onChange={(e) => setData("shipping_address", e.target.value)}
                                            ></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="is80g"
                                                    checked={data.is_80g}
                                                    onChange={(e) => setData("is_80g", e.target.checked)}
                                                />
                                                <label className="custom-control-label" htmlFor="is80g">
                                                    {translate("Eligible for 80G Benefit")}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Special Details */}
                            <div className="card shadow-sm mb-4">
                                <div className="card-header bg-white font-weight-bold text-info">{translate("Special Details")}</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label>{translate("Special Name")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.special_name}
                                                onChange={(e) => setData("special_name", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>{translate("Special Date")}</label>
                                            <Flatpickr
                                                className="form-control bg-white"
                                                value={data.special_date}
                                                onChange={([date]) => setData("special_date", moment(date).format("YYYY-MM-DD"))}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>{translate("Video Link")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.special_video}
                                                onChange={(e) => setData("special_video", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label>{translate("Special Message")}</label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value={data.special_message}
                                                onChange={(e) => setData("special_message", e.target.value)}
                                            ></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <label>{translate("Change Image")}</label>
                                            <div className="custom-file">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="spImage"
                                                    accept="image/*"
                                                    onChange={(e) => setData("special_image", e.target.files[0])}
                                                />
                                                <label className="custom-file-label" htmlFor="spImage">
                                                    {data.special_image ? data.special_image.name : translate("Choose file...")}
                                                </label>
                                            </div>
                                            {order.special_image && !data.special_image && (
                                                <div className="mt-2">
                                                    <small className="text-muted">Current:</small>
                                                    <img
                                                        src={order.special_image}
                                                        alt="current"
                                                        className="d-block mt-1"
                                                        style={{ height: "60px", borderRadius: "4px" }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Status */}
                        <div className="col-lg-4">
                            <div className="card shadow-sm mb-4">
                                <div className="card-header bg-white font-weight-bold">{translate("Settings")}</div>
                                <div className="card-body">
                                    <div className="form-group mb-3">
                                        <label>{translate("Order Status")}</label>
                                        <select className="form-control" value={data.status} onChange={(e) => setData("status", e.target.value)}>
                                            <option value="pending">Pending</option>
                                            <option value="confirmed">Confirmed</option>
                                            <option value="completed">Completed</option>
                                            <option value="canceled">Canceled</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>{translate("Payment Status")}</label>
                                        <select
                                            className="form-control"
                                            value={data.payment_status}
                                            onChange={(e) => setData("payment_status", e.target.value)}
                                        >
                                            <option value="0">Initialize</option>
                                            <option value="1">Awaiting Payment</option>
                                            <option value="2">Success</option>
                                            <option value="3">Canceled</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>{translate("Payment Method")}</label>
                                        <select
                                            className="form-control"
                                            value={data.payment_method}
                                            onChange={(e) => setData("payment_method", e.target.value)}
                                        >
                                            <option value="Cash">Cash</option>
                                            <option value="Bank Transfer">Bank Transfer</option>
                                            <option value="Cheque">Cheque</option>
                                            <option value="Online">Online</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>{translate("Internal Notes")}</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={data.order_notes}
                                            onChange={(e) => setData("order_notes", e.target.value)}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block" disabled={processing}>
                                        <IonIcon icon={saveOutline} className="mr-2" /> {translate("Update Order")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayouts>
    )
}
