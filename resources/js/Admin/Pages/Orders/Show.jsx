import FromValidationError from "@/Admin/Components/Validation/FromValidationError"
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import Amount from "@/Components/Amount"
import translate from "@/utils/translate"
import { Head, useForm } from "@inertiajs/react"
import moment from "moment"
import React from "react"

export default function Show({ order }) {
    const {
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
        transaction_id,
        receipt_file_url,
        receipt_file
    } = order

    const { data, setData, errors, put } = useForm({
        status: status,
        payment_status: payment_status
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route("admin.orders.update.status", order))
    }

    return (
        <AdminLayouts>
            <Head title="Order Information" />
            <div className="yoo-height-b30 yoo-height-lg-b30" />
            <div className="container-fluid">
                <div className="yoo-uikits-heading">
                    <h2 className="yoo-uikits-title">{translate("Order Information")}</h2>
                </div>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>

                <div className="row">
                    {/* Left Column */}
                    <div className="col-lg-8">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left">
                                    <h2 className="yoo-card-title">{translate("Order Information")}</h2>
                                </div>
                            </div>
                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-30">
                                    {/* Customer Info */}
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Placed On")}</div>
                                            <div className="invoice-content">{moment(created_at).format("lll")}</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Order Id")}</div>
                                            <div className="invoice-content">#{order_number}</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Full Name")}</div>
                                            <div className="invoice-content">{customer_name}</div>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Email")}</div>
                                            <div className="invoice-content">
                                                <a href={`mailto:${customer_email}`} style={{ color: "#2e70c3" }}>
                                                    {customer_email}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Phone")}</div>
                                            <div className="invoice-content">
                                                <a href={`tel:${customer_phone}`} style={{ color: "#2e70c3" }}>
                                                    {customer_phone}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Address")}</div>
                                            <div className="invoice-content">{shipping_address}</div>
                                        </div>
                                    </div>

                                    {/* Order Items */}
                                    {/* Order Items */}
                                    <h5 className="mt-5 mb-1">{translate("Order Items")}</h5>
                                    <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                                    <table className="display dataTable" style={{ width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>{translate("Image")}</th>
                                                <th>{translate("Item Name")}</th>
                                                <th>{translate("Type")}</th>
                                                <th>{translate("Quantity")}</th>
                                                <th>{translate("Unit Price")}</th>
                                                <th>{translate("Total")}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderitems?.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        {item.item_image && (
                                                            <img src={item.item_image} alt={item.item_name} style={{ width: "100px" }} />
                                                        )}
                                                    </td>
                                                    <td>{item.item_name}</td>
                                                    <td>{item.item_type || "Product"}</td>
                                                    <td>{item.quantity}</td>
                                                    <td><Amount amount={item.item_price} /></td>
                                                    <td><Amount amount={item.total_price} /></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Totals */}
                                    <div className="row mt-4">
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Subtotal")}</div>
                                            <div className="invoice-content">
                                                <Amount amount={parseFloat(total_price) + parseFloat(discount || 0)} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Discount Amount")}</div>
                                            <div className="invoice-content">
                                                <Amount amount={discount || 0} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Applied Coupon")}</div>
                                            <div className="invoice-content">{coupon_code || "N/A"}</div>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Grand Total")}</div>
                                            <div className="invoice-content">
                                                <Amount amount={total_price} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Order Notes")}</div>
                                            <div className="invoice-content">{order_notes || "N/A"}</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-title">{translate("Payment Method")}</div>
                                            <div className="invoice-content">{payment_method}</div>
                                        </div>
                                    </div>

                                    {/* Transaction / Receipt */}
                                    {(transaction_id || receipt_file) && (
                                        <div className="row mt-3">
                                            {transaction_id && (
                                                <div className="col-md-4">
                                                    <div className="invoice-title">{translate("Transaction ID")}</div>
                                                    <div className="invoice-content">{transaction_id}</div>
                                                </div>
                                            )}
                                            {receipt_file && (
                                                <div className="col-md-8">
                                                    <div className="invoice-title">{translate("Receipt URL")}</div>
                                                    <a href={receipt_file_url} target="_blank" className="invoice-content">
                                                        {receipt_file_url}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Invoice Buttons */}
                                    <div className="btn-list mt-4 mb-3">
                                        <a href={route("admin.orders.show.invoice", order)} target="_blank" className="btn btn-outline-secondary mr-3">
                                            {translate("View Invoice")}
                                        </a>
                                        <a href={route("admin.orders.download.invoice", order)} download className="btn btn-outline-secondary">
                                            {translate("Download Invoice")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Status Form */}
                    <div className="col-md-4">
                        <form onSubmit={handleSubmit}>
                            <div className="yoo-card yoo-style1">
                                <div className="yoo-card-heading">
                                    <div className="yoo-card-heading-left">
                                        <h2 className="yoo-card-title">{translate("Status")}</h2>
                                    </div>
                                </div>
                                <div className="yoo-card-body">
                                    <div className="yoo-padd-lr-20">
                                        <label className="pt-2" htmlFor="status">{translate("Order Status")} *</label>
                                        <div className="form-group form-group-md">
                                            <div className="yoo-select">
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
                                            </div>
                                            <FromValidationError message={errors.status} />
                                        </div>

                                        <label htmlFor="payment_status">{translate("Payment Status")} *</label>
                                        <div className="form-group form-group-md">
                                            <div className="yoo-select">
                                                <select id="payment_status" value={data.payment_status} className="form-control" onChange={(e) => setData("payment_status", e.target.value)}>
                                                    <option value="0">{translate("Initialize")}</option>
                                                    <option value="1">{translate("Awaiting Payment")}</option>
                                                    <option value="2">{translate("Success")}</option>
                                                    <option value="3">{translate("Canceled")}</option>
                                                </select>
                                            </div>
                                            <FromValidationError message={errors.payment_status} />
                                        </div>

                                        <button type="submit" className="btn btn-success mt-2 mb-3">
                                            {translate("Update")}
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
