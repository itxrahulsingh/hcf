import FromValidationError from "@/Admin/Components/Validation/FromValidationError"
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import Amount from "@/Components/Amount"
import translate from "@/utils/translate"
import { Head, useForm, Link } from "@inertiajs/react"
import moment from "moment"
import React from "react"

export default function Show({ invoice }) {
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
        payment_method,
        payment_date,
        status, // Invoice Status (Paid, Unpaid, etc.)
        order // Relationship to Order
    } = invoice

    // 2. Destructure Order specific data (Items, etc.)
    const orderItems = order?.orderitems || []
    const orderNumber = order?.order_number
    const couponCode = order?.coupon_code
    const discount = order?.discount || 0
    const transactionId = order?.transaction_id

    // 3. Form for updating Invoice Status
    const { data, setData, errors, put } = useForm({
        status: status,
        payment_method: payment_method
    })

    const handleSubmit = (e) => {
        e.preventDefault()
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
                                            <div className="invoice-content font-weight-bold">{customer_name}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="invoice-title text-muted">{translate("Email")}</div>
                                            <div className="invoice-content">
                                                <a href={`mailto:${customer_email}`}>{customer_email}</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="invoice-title text-muted">{translate("Phone")}</div>
                                            <div className="invoice-content">
                                                <a href={`tel:${customer_phone}`}>{customer_phone}</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="invoice-title text-muted">{translate("PAN Card")}</div>
                                            <div className="invoice-content">{pancard || "N/A"}</div>
                                        </div>
                                        <div className="col-md-8 mb-3">
                                            <div className="invoice-title text-muted">{translate("Address")}</div>
                                            <div className="invoice-content">
                                                {shipping_address}
                                                {state && <span className="d-block text-muted small">{state}</span>}
                                            </div>
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Status & Payment */}
                    <div className="col-lg-4">
                        <form onSubmit={handleSubmit}>
                            <div className="yoo-card yoo-style1">
                                <div className="yoo-card-heading">
                                    <div className="yoo-card-heading-left">
                                        <h2 className="yoo-card-title">{translate("Invoice Status")}</h2>
                                    </div>
                                </div>
                                <div className="yoo-card-body">
                                    <div className="yoo-padd-lr-20">

                                        {/* Status Field */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="status" className="font-weight-bold">{translate("Status")}</label>
                                            <select
                                                id="status"
                                                value={data.status}
                                                className="form-control"
                                                onChange={(e) => setData("status", e.target.value)}
                                            >
                                                <option value="Paid">{translate("Paid")}</option>
                                                <option value="Unpaid">{translate("Unpaid")}</option>
                                                <option value="Cancelled">{translate("Cancelled")}</option>
                                                <option value="Refunded">{translate("Refunded")}</option>
                                            </select>
                                            <FromValidationError message={errors.status} />
                                        </div>

                                        {/* Payment Method Field */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="payment_method" className="font-weight-bold">{translate("Payment Method")}</label>
                                            <select
                                                id="payment_method"
                                                value={data.payment_method}
                                                className="form-control"
                                                onChange={(e) => setData("payment_method", e.target.value)}
                                            >
                                                <option value="Card">{translate("Card")}</option>
                                                <option value="Cash">{translate("Cash")}</option>
                                                <option value="Bank Transfer">{translate("Bank Transfer")}</option>
                                                <option value="Cheque">{translate("Cheque")}</option>
                                                <option value="Online">{translate("Online")}</option>
                                            </select>
                                            <FromValidationError message={errors.payment_method} />
                                        </div>

                                        {/* Transaction Details (Read Only) */}
                                        {transactionId && (
                                            <div className="alert alert-light border mt-3">
                                                <small className="text-muted d-block">{translate("Transaction ID")}</small>
                                                <strong>{transactionId}</strong>
                                            </div>
                                        )}

                                        <button type="submit" className="btn btn-success btn-block mt-3 mb-3">
                                            {translate("Update Invoice")}
                                        </button>
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
