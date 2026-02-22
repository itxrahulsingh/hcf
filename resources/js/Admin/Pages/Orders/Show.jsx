import FromValidationError from "@/Admin/Components/Validation/FromValidationError"
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import Amount from "@/Components/Amount"
import translate from "@/utils/translate"
import { Head, useForm } from "@inertiajs/react"
import { IonIcon } from "@ionic/react"
import {
    personOutline,
    callOutline,
    mailOutline,
    locationOutline,
    cardOutline,
    calendarOutline,
    imageOutline,
    videocamOutline,
    documentTextOutline,
    giftOutline,
    eyeOutline
} from "ionicons/icons"
import moment from "moment"
import React from "react"

export default function Show({ order }) {
    const {
        // Standard fields
        coupon_code,
        created_at,
        customer_email,
        customer_name,
        customer_phone,
        shipping_address,
        discount,
        order_notes,
        order_number,
        payment_method,
        payment_status,
        status,
        total_price,
        orderitems,
        invoice, // The Invoice Object
        transaction_id,
        receipt_file_url,
        receipt_file,
        special_name,
        special_message,
        special_image,
        special_video,
        special_date,
        pancard,
        is_80g
    } = order

    const { data, setData, errors, put } = useForm({
        status: status,
        payment_status: payment_status
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route("admin.orders.update.status", order))
    }
    const hasSpecialData = special_date || special_name || special_message || special_image || special_video

    return (
        <AdminLayouts>
            <Head title={`Order #${order_number}`} />
            <div className="yoo-height-b30 yoo-height-lg-b30" />
            <div className="container-fluid">
                <div className="yoo-uikits-heading d-flex justify-content-between align-items-center">
                    <h2 className="yoo-uikits-title">
                        {translate("Order Details")} #{order_number}
                    </h2>
                    <span className="badge badge-light text-muted font-weight-normal">
                        {translate("Placed on")}: {moment(created_at).format("DD MMM YYYY, h:mm A")}
                    </span>
                </div>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>

                <div className="row">
                    {/* Left Column: Main Content */}
                    <div className="col-lg-8">
                        {/* 1. DONOR & BASIC INFO CARD */}
                        <div className="yoo-card yoo-style1 mb-4">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left">
                                    <h2 className="yoo-card-title">
                                        <IonIcon icon={personOutline} className="mr-2" style={{ verticalAlign: "middle" }} />
                                        {translate("Donor Information")}
                                    </h2>
                                </div>
                                <div className="yoo-card-heading-right">
                                    {is_80g == 1 && <span className="badge badge-success">80G Benefit</span>}
                                </div>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-30 py-3">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="text-muted small text-uppercase">{translate("Full Name")}</div>
                                            <div className="font-weight-bold text-dark">{customer_name}</div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="text-muted small text-uppercase">{translate("Email Address")}</div>
                                            <div className="text-primary">
                                                <IonIcon icon={mailOutline} className="mr-1" /> {customer_email}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="text-muted small text-uppercase">{translate("Phone Number")}</div>
                                            <div className="text-dark">
                                                <IonIcon icon={callOutline} className="mr-1" /> {customer_phone}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="text-muted small text-uppercase">{translate("PAN Card")}</div>
                                            <div className="font-weight-bold">
                                                <IonIcon icon={cardOutline} className="mr-1 text-muted" />
                                                {pancard || <span className="text-muted font-italic">N/A</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="text-muted small text-uppercase">{translate("Billing Address")}</div>
                                            <div>
                                                <IonIcon icon={locationOutline} className="mr-1 text-muted" /> {shipping_address}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. SPECIAL REQUEST DATA (CONDITIONAL) */}
                        {hasSpecialData && (
                            <div className="yoo-card yoo-style1 mb-4 border border-info">
                                <div className="yoo-card-heading bg-light-info">
                                    <div className="yoo-card-heading-left">
                                        <h2 className="yoo-card-title text-info">
                                            <IonIcon icon={giftOutline} className="mr-2" style={{ verticalAlign: "middle" }} />
                                            {translate("Special Donation Request")}
                                        </h2>
                                    </div>
                                </div>
                                <div className="yoo-card-body">
                                    <div className="yoo-padd-lr-30 py-3">
                                        <div className="row">
                                            {special_name && (
                                                <div className="col-md-6 mb-3">
                                                    <div className="text-muted small text-uppercase">{translate("Special Name")}</div>
                                                    <div className="font-weight-bold text-dark h5">{special_name}</div>
                                                </div>
                                            )}
                                            {special_date && (
                                                <div className="col-md-4 mb-3">
                                                    <div className="text-muted small text-uppercase">{translate("Special Date")}</div>
                                                    <div className="font-weight-bold text-info">
                                                        <IonIcon icon={calendarOutline} className="mr-1" />
                                                        {moment(special_date).format("DD MMMM YYYY")}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Media Grid */}
                                            <div className="col-md-12">
                                                <div className="d-flex flex-wrap gap-3 mt-2">
                                                    {special_image && (
                                                        <div className="mr-4">
                                                            <div className="text-muted small text-uppercase mb-1">{translate("Attached Image")}</div>
                                                            <a
                                                                href={special_image}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="d-block border rounded p-1"
                                                            >
                                                                <img
                                                                    src={special_image}
                                                                    alt="Special"
                                                                    loading="lazy" decoding="async"
                                                                    style={{ height: "100px", width: "auto", borderRadius: "4px" }}
                                                                />
                                                                <div className="text-center small mt-1 text-primary">
                                                                    <IonIcon icon={imageOutline} /> View
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )}
                                                    {special_video && (
                                                        <div>
                                                            <div className="text-muted small text-uppercase mb-1">{translate("Attached Video")}</div>
                                                            <a
                                                                href={special_video}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="btn btn-outline-danger btn-sm mt-2"
                                                            >
                                                                <IonIcon icon={videocamOutline} className="mr-1" /> Watch Video
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {special_message && (
                                                <div className="col-md-12 mt-3">
                                                    <div className="text-muted small text-uppercase">{translate("Special Message")}</div>
                                                    <div className="p-3 bg-light rounded font-italic mt-1 border">"{special_message}"</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 3. ORDER ITEMS & PAYMENT */}
                        <div className="yoo-card yoo-style1 mb-4">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left">
                                    <h2 className="yoo-card-title">{translate("Donation Summary")}</h2>
                                </div>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-30 py-3">
                                    {/* Items Table */}
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>{translate("Item")}</th>
                                                    <th>{translate("Type")}</th>
                                                    <th className="text-center">{translate("Qty")}</th>
                                                    <th className="text-right">{translate("Price")}</th>
                                                    <th className="text-right">{translate("Total")}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderitems?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                {item.item_image && (
                                                                    <img
                                                                        src={item.item_image}
                                                                        alt=""
                                                                        loading="lazy" decoding="async"
                                                                        className="rounded mr-2"
                                                                        style={{ width: "40px", height: "40px", objectFit: "cover" }}
                                                                    />
                                                                )}
                                                                <span className="font-weight-bold">{item.item_name}</span>
                                                            </div>
                                                        </td>
                                                        <td>{item.type_name || "Donation"}</td>
                                                        <td className="text-center">{item.quantity}</td>
                                                        <td className="text-right">
                                                            <Amount amount={item.item_price} />
                                                        </td>
                                                        <td className="text-right">
                                                            <Amount amount={item.total_price} />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Financial Breakdown */}
                                    <div className="row justify-content-end mt-3">
                                        <div className="col-md-5">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="text-muted">{translate("Subtotal")}</span>
                                                <span className="font-weight-bold">
                                                    <Amount amount={parseFloat(total_price) + parseFloat(discount || 0)} />
                                                </span>
                                            </div>
                                            {parseFloat(discount) > 0 && (
                                                <div className="d-flex justify-content-between mb-2 text-success">
                                                    <span>
                                                        {translate("Discount")} {coupon_code && <small>({coupon_code})</small>}
                                                    </span>
                                                    <span>
                                                        - <Amount amount={discount} />
                                                    </span>
                                                </div>
                                            )}
                                            <div className="d-flex justify-content-between border-top pt-2 mt-2">
                                                <span className="h6 mb-0">{translate("Grand Total")}</span>
                                                <span className="h6 mb-0 text-primary">
                                                    <Amount amount={total_price} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    {/* Payment & Transaction Info */}
                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <div className="text-muted small text-uppercase">{translate("Payment Method")}</div>
                                            <div className="font-weight-bold">{payment_method}</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-muted small text-uppercase">{translate("Transaction ID")}</div>
                                            <div className="font-weight-bold">{transaction_id || "N/A"}</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-muted small text-uppercase">{translate("Invoice Number")}</div>
                                            <div className="font-weight-bold">
                                                {invoice ? `#${invoice.invoice_number}` : <span className="badge badge-warning">Not Generated</span>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order Notes */}
                                    {order_notes && (
                                        <div className="alert alert-warning mt-4 mb-0">
                                            <strong>{translate("Note")}:</strong> {order_notes}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Status & Actions */}
                    <div className="col-lg-4">
                        <form onSubmit={handleSubmit}>
                            <div className="yoo-card yoo-style1 mb-4">
                                <div className="yoo-card-heading">
                                    <div className="yoo-card-heading-left">
                                        <h2 className="yoo-card-title">{translate("Status & Actions")}</h2>
                                    </div>
                                </div>
                                <div className="yoo-card-body">
                                    <div className="yoo-padd-lr-20 py-3">
                                        {/* Status Dropdowns */}
                                        <div className="form-group mb-3">
                                            <label className="font-weight-bold text-dark" htmlFor="status">
                                                {translate("Order Status")}
                                            </label>
                                            <select
                                                id="status"
                                                value={data.status}
                                                className="form-control"
                                                onChange={(e) => setData("status", e.target.value)}
                                            >
                                                <option value="pending">{translate("Pending")}</option>
                                                <option value="confirmed">{translate("Confirmed")}</option>
                                                <option value="completed">{translate("Completed")}</option>
                                                <option value="canceled">{translate("Canceled")}</option>
                                            </select>
                                            <FromValidationError message={errors.status} />
                                        </div>

                                        <div className="form-group mb-3">
                                            <label className="font-weight-bold text-dark" htmlFor="payment_status">
                                                {translate("Payment Status")}
                                            </label>
                                            <select
                                                id="payment_status"
                                                value={data.payment_status}
                                                className="form-control"
                                                onChange={(e) => setData("payment_status", e.target.value)}
                                            >
                                                <option value="0">{translate("Initialize")}</option>
                                                <option value="1">{translate("Awaiting Payment")}</option>
                                                <option value="2">{translate("Success")}</option>
                                                <option value="3">{translate("Canceled")}</option>
                                            </select>
                                            <FromValidationError message={errors.payment_status} />
                                        </div>

                                        <button type="submit" className="btn btn-success btn-block">
                                            {translate("Update Status")}
                                        </button>

                                        {/* INVOICE ACTIONS - CONDITIONALLY RENDERED */}
                                        {invoice && (
                                            <div className="mt-4 pt-3 border-top">
                                                <h6 className="mb-3 text-muted">{translate("Invoice Actions")}</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    <a
                                                        href={route("admin.orders.show.invoice", order)}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="btn btn-outline-primary btn-block text-left"
                                                    >
                                                        <IonIcon icon={eyeOutline} className="mr-2" />
                                                        {translate("View Invoice PDF")}
                                                    </a>
                                                    <a
                                                        href={route("admin.orders.download.invoice", order)}
                                                        download
                                                        className="btn btn-primary btn-block text-left"
                                                    >
                                                        <IonIcon icon={documentTextOutline} className="mr-2" />
                                                        {translate("Download Invoice")}
                                                    </a>
                                                </div>
                                            </div>
                                        )}

                                        {/* Receipt File */}
                                        {receipt_file_url && (
                                            <div className="mt-3 pt-3 border-top">
                                                <h6 className="mb-2 text-muted">{translate("Payment Receipt")}</h6>
                                                <a href={receipt_file_url} target="_blank" rel="noreferrer" className="btn btn-link px-0">
                                                    View Uploaded Receipt
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayouts>
    )
}
