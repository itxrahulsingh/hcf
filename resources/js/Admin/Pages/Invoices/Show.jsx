import FromValidationError from "@/Admin/Components/Validation/FromValidationError"
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import Amount from "@/Components/Amount"
import translate from "@/utils/translate"
import { Head, useForm, Link } from "@inertiajs/react"
import moment from "moment"
import React from "react"

export default function Show({ invoice, canEdit = false }) {
    // 1. Destructure Invoice specific fields
    const {
        id,
        invoice_number,
        created_at,
        customer_name,
        customer_email,
        customer_phone,
        shipping_address,
        state,
        pancard,
        financial_year,
        is_80g,
        total_price,
        payment_date,
        order // Relationship to Order
    } = invoice

    // 2. Destructure Order specific data (Items, etc.)
    const orderItems = order?.orderitems || []
    const orderNumber = order?.order_number
    const couponCode = order?.coupon_code
    const discount = order?.discount || 0

    // 3. Form for updating editable invoice details
    const { data, setData, errors, put, processing } = useForm({
        customer_name: customer_name || "",
        customer_email: customer_email || "",
        customer_phone: customer_phone || "",
        pancard: pancard || "",
        shipping_address: shipping_address || "",
        state: state || ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!canEdit) return
        // Routes to Invoice Update
        put(route("admin.invoices.update", invoice))
    }

    return (
        <AdminLayouts>
            <Head title={translate("Invoice Details")} />
            <div className="yoo-height-b30 yoo-height-lg-b30" />
            <div className="container-fluid">
                <div className="yoo-uikits-heading">
                    <h2 className="yoo-uikits-title">{translate("Invoice Details")}</h2>
                </div>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                    {/* Left Column: Invoice Info */}
                    <div className="col-lg-8">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left">
                                    <h2 className="yoo-card-title">{translate("Invoice Information")}</h2>
                                </div>
                                <div className="yoo-card-heading-right">
                                    {is_80g ? (
                                        <span className="badge badge-success">80G Tax Exempt</span>
                                    ) : (
                                        <span className="badge badge-secondary">Non-80G</span>
                                    )}
                                </div>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-30">

                                    {/* Top Row: IDs and Dates */}
                                    <div className="row border-bottom pb-3 mb-3">
                                        <div className="col-md-6 mb-3">
                                            <div className="invoice-title text-muted">{translate("Invoice Number")}</div>
                                            <div className="invoice-content text-primary" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
                                                #{invoice_number}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3 text-md-right">
                                            <div className="invoice-title text-muted">{translate("Invoice Date")}</div>
                                            <div className="invoice-content font-weight-bold">
                                                {moment(created_at).format("DD MMM YYYY, h:mm A")}
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title text-muted">{translate("Order Reference")}</div>
                                            <div className="invoice-content">
                                                {order ? (
                                                    <Link href={route('admin.orders.show', order.id)} style={{ textDecoration: 'underline' }}>
                                                        #{orderNumber}
                                                    </Link>
                                                ) : "N/A"}
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title text-muted">{translate("Financial Year")}</div>
                                            <div className="invoice-content font-weight-bold">{financial_year}</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title text-muted">{translate("Payment Date")}</div>
                                            <div className="invoice-content">
                                                {payment_date ? moment(payment_date).format("DD MMM YYYY") : "Pending"}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Customer Details */}
                                    <h5 className="mb-3">{translate("Bill To")}</h5>
                                    <div className="row mb-4">
                                        <div className="col-md-4 mb-3">
                                            <div className="invoice-title text-muted">{translate("Customer Name")}</div>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.customer_name ? "is-invalid" : ""}`}
                                                value={data.customer_name}
                                                disabled={!canEdit}
                                                onChange={(e) => setData("customer_name", e.target.value)}
                                            />
                                            <FromValidationError message={errors.customer_name} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="invoice-title text-muted">{translate("Email")}</div>
                                            <input
                                                type="email"
                                                className={`form-control ${errors.customer_email ? "is-invalid" : ""}`}
                                                value={data.customer_email}
                                                disabled={!canEdit}
                                                onChange={(e) => setData("customer_email", e.target.value)}
                                            />
                                            <FromValidationError message={errors.customer_email} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="invoice-title text-muted">{translate("Phone")}</div>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.customer_phone ? "is-invalid" : ""}`}
                                                value={data.customer_phone}
                                                disabled={!canEdit}
                                                onChange={(e) => setData("customer_phone", e.target.value)}
                                            />
                                            <FromValidationError message={errors.customer_phone} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="invoice-title text-muted">{translate("PAN Card")}</div>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.pancard ? "is-invalid" : ""}`}
                                                value={data.pancard}
                                                disabled={!canEdit}
                                                onChange={(e) => setData("pancard", e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10))}
                                            />
                                            <FromValidationError message={errors.pancard} />
                                            {data.pancard && data.pancard.length === 10 && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data.pancard) && (
                                                <div className="text-danger small mt-1">Invalid PAN format. Use ABCDE1234F</div>
                                            )}
                                        </div>
                                        <div className="col-md-8 mb-3">
                                            <div className="invoice-title text-muted">{translate("Address")}</div>
                                            <textarea
                                                className={`form-control ${errors.shipping_address ? "is-invalid" : ""}`}
                                                rows={2}
                                                value={data.shipping_address}
                                                disabled={!canEdit}
                                                onChange={(e) => setData("shipping_address", e.target.value)}
                                            />
                                            <FromValidationError message={errors.shipping_address} />
                                            <div className="invoice-title text-muted mt-2">{translate("State")}</div>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.state ? "is-invalid" : ""}`}
                                                value={data.state}
                                                disabled={!canEdit}
                                                onChange={(e) => setData("state", e.target.value)}
                                            />
                                            <FromValidationError message={errors.state} />
                                        </div>
                                    </div>

                                    {/* Order Items Table */}
                                    <h5 className="mb-3">{translate("Line Items")}</h5>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
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
                                                {orderItems.length > 0 ? orderItems.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                {item.item_image && (
                                                                    <img
                                                                        src={item.item_image}
                                                                        alt={item.item_name}
                                                                        loading="lazy" decoding="async"
                                                                        style={{ width: "40px", height: "40px", objectFit: "cover", marginRight: "10px", borderRadius: "4px" }}
                                                                    />
                                                                )}
                                                                <span>{item.item_name}</span>
                                                            </div>
                                                        </td>
                                                        <td>{item.type_name || "Product"}</td>
                                                        <td className="text-center">{item.quantity}</td>
                                                        <td className="text-right"><Amount amount={item.item_price} /></td>
                                                        <td className="text-right"><Amount amount={item.total_price} /></td>
                                                    </tr>
                                                )) : (
                                                    <tr>
                                                        <td colSpan="5" className="text-center">No items found linked to this invoice.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Totals Section */}
                                    <div className="row mt-3 justify-content-end">
                                        <div className="col-md-5">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="text-muted">{translate("Subtotal")}:</span>
                                                <span className="font-weight-bold">
                                                    <Amount amount={parseFloat(total_price) + parseFloat(discount)} />
                                                </span>
                                            </div>
                                            {parseFloat(discount) > 0 && (
                                                <div className="d-flex justify-content-between mb-2 text-success">
                                                    <span>{translate("Discount")} {couponCode && `(${couponCode})`}:</span>
                                                    <span>- <Amount amount={discount} /></span>
                                                </div>
                                            )}
                                            <div className="d-flex justify-content-between border-top pt-2 mt-2">
                                                <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{translate("Grand Total")}:</span>
                                                <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#2e70c3' }}>
                                                    <Amount amount={total_price} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    {order && (
                                        <div className="btn-list mt-5 text-right">
                                            <a
                                                href={route("admin.orders.show.invoice", order.id)}
                                                target="_blank"
                                                className="btn btn-outline-primary mr-2"
                                            >
                                                <i className="fa fa-eye mr-1"></i> {translate("View PDF")}
                                            </a>
                                            <a href={route("admin.orders.download.invoice", order.id)} className="btn btn-primary">
                                                <i className="fa fa-download mr-1"></i> {translate("Download PDF")}
                                            </a>
                                        </div>
                                    )}
                                    {canEdit && (
                                        <div className="mt-4">
                                            <button type="submit" className="btn btn-success" disabled={processing}>
                                                {translate("Update Invoice")}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </AdminLayouts>
    )
}
