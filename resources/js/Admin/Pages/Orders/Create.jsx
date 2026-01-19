import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import translate from "@/utils/translate"
import { Head, useForm, Link } from "@inertiajs/react"
import { IonIcon } from "@ionic/react"
import { arrowBackOutline, addCircleOutline, trashOutline, saveOutline, heartOutline } from "ionicons/icons"
import React, { useEffect } from "react"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_blue.css"

export default function Create({ causes = [], products = [], gifts = [] }) {
    const { data, setData, post, processing, errors } = useForm({
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        shipping_address: "",
        pancard: "",
        is_80g: false,
        cause_id: "",
        cause_amount: "",
        cause_min_amount: 0,
        cause_custom_amounts: [],
        items: [],
        status: "pending",
        payment_status: "0",
        payment_method: "Cash",
        special_name: "",
        special_message: "",
        special_date: "",
        special_video: "",
        special_image: null,
        order_notes: ""
    })

    // --- CAUSE LOGIC ---
    const handleCauseSelect = (id) => {
        const selected = causes.find((c) => c.id == id)
        if (selected) {
            setData((data) => ({
                ...data,
                cause_id: id,
                cause_min_amount: selected.min_amount || 0,
                cause_custom_amounts: selected.suggested_amounts || [],
                cause_amount: selected.min_amount || "" // Default to min amount
            }))
        } else {
            setData((data) => ({ ...data, cause_id: "" }))
        }
    }

    // --- ADD-ON ITEM LOGIC ---
    const getOptionsList = (type) => {
        if (type === "product") return products
        if (type === "gift") return gifts
        return []
    }

    const addItem = () => {
        setData("items", [
            ...data.items,
            {
                type: "product",
                id: "",
                name: "",
                amount: "",
                quantity: 1,
                min_qty: 1
            }
        ])
    }

    const removeItem = (index) => {
        const newItems = data.items.filter((_, i) => i !== index)
        setData("items", newItems)
    }

    const handleItemChange = (index, field, value) => {
        const newItems = [...data.items]

        // Type Change Reset
        if (field === "type") {
            newItems[index] = { type: value, id: "", name: "", amount: "", quantity: 1, min_qty: 1 }
        }
        // ID Selection Logic
        else if (field === "id") {
            const list = getOptionsList(newItems[index].type)
            const selected = list.find((i) => i.id == value)
            newItems[index].id = value
            if (selected) {
                newItems[index].name = selected.title
                newItems[index].amount = selected.price
                newItems[index].min_qty = selected.min_qty || 1
                newItems[index].quantity = selected.min_qty || 1
            }
        }
        // Standard Field
        else {
            newItems[index][field] = value
        }

        setData("items", newItems)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validation: Cause Amount
        if (parseFloat(data.cause_amount) < parseFloat(data.cause_min_amount)) {
            alert(`${translate("Error")}: ${translate("Cause donation cannot be less than")} ${data.cause_min_amount}`)
            return
        }

        // Validation: Item Qty
        for (let item of data.items) {
            if (parseInt(item.quantity) < parseInt(item.min_qty)) {
                alert(`${translate("Error")}: ${item.name} ${translate("minimum quantity is")} ${item.min_qty}`)
                return
            }
        }

        post(route("admin.orders.store"))
    }

    return (
        <AdminLayouts>
            <Head title={translate("Create Order")} />
            <div className="container-fluid p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="h4 mb-0">{translate("Create New Order")}</h2>
                    <Link href={route("admin.orders.index")} className="btn btn-outline-secondary btn-sm">
                        <IonIcon icon={arrowBackOutline} className="mr-1" /> {translate("Back")}
                    </Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {/* LEFT COLUMN */}
                        <div className="col-lg-8">
                            {/* 1. DONOR INFO */}
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
                                            {errors.customer_name && <small className="text-danger">{errors.customer_name}</small>}
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

                            {/* 2. PRIMARY CAUSE (REQUIRED) */}
                            <div className="card shadow-sm mb-4 border-primary">
                                <div className="card-header bg-primary text-white font-weight-bold d-flex align-items-center">
                                    <IonIcon icon={heartOutline} className="mr-2" /> {translate("Primary Donation Cause")} (Required)
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8 mb-3">
                                            <label>{translate("Select Cause")} *</label>
                                            <select
                                                className="form-control"
                                                value={data.cause_id}
                                                onChange={(e) => handleCauseSelect(e.target.value)}
                                                required
                                            >
                                                <option value="">-- Select Cause --</option>
                                                {causes.map((c) => (
                                                    <option key={c.id} value={c.id}>
                                                        {c.title}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.cause_id && <small className="text-danger">{errors.cause_id}</small>}
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <label>{translate("Donation Amount")} *</label>
                                            {data.cause_custom_amounts.length > 0 ? (
                                                <div className="input-group">
                                                    <select
                                                        className="form-control"
                                                        onChange={(e) => setData("cause_amount", e.target.value)}
                                                        value={
                                                            data.cause_custom_amounts.includes(data.cause_amount?.toString())
                                                                ? data.cause_amount
                                                                : "custom"
                                                        }
                                                    >
                                                        {data.cause_custom_amounts.map((amt) => (
                                                            <option key={amt} value={amt}>
                                                                {amt}
                                                            </option>
                                                        ))}
                                                        <option value="custom">Custom</option>
                                                    </select>
                                                    {!data.cause_custom_amounts.includes(data.cause_amount?.toString()) && (
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            value={data.cause_amount}
                                                            onChange={(e) => setData("cause_amount", e.target.value)}
                                                            placeholder={`Min ${data.cause_min_amount}`}
                                                            required
                                                        />
                                                    )}
                                                </div>
                                            ) : (
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={data.cause_amount}
                                                    onChange={(e) => setData("cause_amount", e.target.value)}
                                                    placeholder={data.cause_min_amount > 0 ? `Min ${data.cause_min_amount}` : "Amount"}
                                                    required
                                                />
                                            )}
                                            {data.cause_id && <small className="text-muted">Min: {data.cause_min_amount}</small>}
                                            {errors.cause_amount && <div className="text-danger small">{errors.cause_amount}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. OPTIONAL ADD-ONS (Products/Gifts) */}
                            <div className="card shadow-sm mb-4">
                                <div className="card-header bg-white font-weight-bold d-flex justify-content-between align-items-center">
                                    {translate("Add-on Items (Optional)")}
                                    <button type="button" onClick={addItem} className="btn btn-sm btn-outline-primary">
                                        <IonIcon icon={addCircleOutline} /> Add Item
                                    </button>
                                </div>
                                <div className="card-body p-0">
                                    {data.items.length === 0 ? (
                                        <div className="text-center p-3 text-muted small">No additional items added.</div>
                                    ) : (
                                        <table className="table table-bordered mb-0">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th width="15%">Type</th>
                                                    <th width="35%">Item</th>
                                                    <th>Price</th>
                                                    <th width="10%">Qty</th>
                                                    <th width="5%"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.items.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <select
                                                                className="form-control"
                                                                value={item.type}
                                                                onChange={(e) => handleItemChange(index, "type", e.target.value)}
                                                            >
                                                                <option value="product">Product</option>
                                                                <option value="gift">Gift</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <select
                                                                className="form-control"
                                                                value={item.id}
                                                                onChange={(e) => handleItemChange(index, "id", e.target.value)}
                                                                required
                                                            >
                                                                <option value="">-- Select --</option>
                                                                {getOptionsList(item.type).map((opt) => (
                                                                    <option key={opt.id} value={opt.id}>
                                                                        {opt.title} ({opt.price})
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            {item.id && <small className="text-muted d-block mt-1">Min Qty: {item.min_qty}</small>}
                                                        </td>
                                                        <td>
                                                            <input type="number" className="form-control" value={item.amount} readOnly />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                value={item.quantity}
                                                                onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                                                                min={item.min_qty}
                                                            />
                                                        </td>
                                                        <td className="text-center align-middle">
                                                            <button
                                                                type="button"
                                                                onClick={() => removeItem(index)}
                                                                className="btn btn-sm text-danger"
                                                            >
                                                                <IonIcon icon={trashOutline} style={{ fontSize: "18px" }} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>

                            {/* 4. SPECIAL DETAILS */}
                            <div className="card shadow-sm mb-4">
                                <div className="card-header bg-white font-weight-bold text-info">{translate("Special Details")}</div>
                                <div className="card-body">
                                    <div className="row">
                                        {/* ADDED: Special Name */}
                                        <div className="col-md-6 mb-3">
                                            <label>{translate("Special Name")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. In Memory of..."
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

                                        <div className="col-md-12 mb-3">
                                            <label>{translate("Video Link")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="https://..."
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
                                            <label>{translate("Upload Image")}</label>
                                            <div className="custom-file">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="customFile"
                                                    accept="image/*"
                                                    onChange={(e) => setData("special_image", e.target.files[0])}
                                                />
                                                <label className="custom-file-label" htmlFor="customFile">
                                                    {data.special_image ? data.special_image.name : "Choose file"}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
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
                                    <button type="submit" className="btn btn-success btn-block" disabled={processing}>
                                        <IonIcon icon={saveOutline} className="mr-2" /> {translate("Create Order")}
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
