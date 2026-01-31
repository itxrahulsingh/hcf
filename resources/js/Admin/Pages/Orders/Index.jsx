import { Head, Link, usePage } from "@inertiajs/react"
import {
    search,
    businessOutline,
    eyeOutline,
    pencilOutline,
    addCircleOutline,
    videocamOutline,
    imageOutline,
    documentTextOutline,
    closeOutline,
    giftOutline
} from "ionicons/icons"
import { IonIcon } from "@ionic/react"
import { useState, useEffect } from "react"
import { router } from "@inertiajs/react"
import ThSortable from "@/Admin/Components/Table/ThSortable"
import { showAlert } from "@/Admin/Utils/SweetAlert"
import DropDownButton from "@/Admin/Components/Button/DropDownButton"
import DeleteButton from "@/Admin/Components/Button/DeleteButton"
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import Amount from "@/Components/Amount"
import hasPermission from "@/Admin/Utils/hasPermission"
import translate from "@/utils/translate"
import moment from "moment"

const RemarksCell = ({ order, canEdit }) => {
    const [value, setValue] = useState(order?.order_notes || "")
    const [originalValue, setOriginalValue] = useState(order?.order_notes || "")

    useEffect(() => {
        const note = order?.order_notes || ""
        setValue(note)
        setOriginalValue(note)
    }, [order?.id])

    const handleBlur = () => {
        if (value !== originalValue) {
            router.post(
                route("admin.orders.update.remarks", order.id),
                { remarks: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => setOriginalValue(value)
                }
            )
        }
    }

    if (!canEdit) {
        return (
            <div className="text-muted small" style={{ whiteSpace: "pre-wrap", minWidth: "200px", maxHeight: "60px", overflowY: "auto" }}>
                {value || "-"}
            </div>
        )
    }

    return (
        <textarea
            className="form-control form-control-sm"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
            placeholder="Add remarks..."
            rows="2"
            style={{
                width: "100%",
                minWidth: "200px",
                border: "1px solid #e2e8f0",
                background: "#f8f9fa",
                fontSize: "13px",
                resize: "vertical"
            }}
        />
    )
}

export default function Index({ orders, sort, filter, causes }) {
    const { causeTypes } = usePage().props
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedOption, setSelectedOption] = useState("Bulk Action")
    const [selectedStatus, setSelectedStatus] = useState(filter?.status || "All Order Status")
    const [selectedType, setSelectedType] = useState(filter?.type || "All")
    const [selectedCause, setSelectedCause] = useState(filter?.cause_id || "All")
    const [selectedPaymentStatus, setSelectedPaymentStatus] = useState(filter?.payment_status || "All Payment")
    const [isMarkAll, setIsMarkAll] = useState(false)
    const [markItems, setMarkItems] = useState([])

    // State for Media Modal
    const [mediaModalOrder, setMediaModalOrder] = useState(null)

    const paymentStatusOptions = {
        0: "Initialize",
        1: "Awaiting Payment",
        2: "Success",
        3: "Canceled",
        "All Payment": "All Payment"
    }

    // handle search sort
    const getResults = (search) => {
        router.get(
            route("admin.orders.index", {
                search: search ?? setSearchQuery,
                sort: sort,
                filter: {
                    status: selectedStatus,
                    type: selectedType,
                    cause_id: selectedCause,
                    payment_status: selectedPaymentStatus
                }
            }),
            {},
            { preserveState: true }
        )
    }

    // mark all
    const markAll = () => {
        if (isMarkAll) {
            setMarkItems([])
            setIsMarkAll(false)
        } else {
            const items = orders.data.map((order) => order.id)
            setMarkItems(items)
            setIsMarkAll(true)
        }
    }

    // handle mark unmark
    const handleMark = (orderId) => {
        const existsMark = markItems.some((item) => item === orderId)
        if (existsMark) {
            const removeItem = markItems.filter((item) => item !== orderId)
            setMarkItems(removeItem)
        } else {
            const addedItem = [...markItems, orderId]
            setMarkItems(addedItem)
        }
    }

    // handle bulk action
    const handleBulkAction = () => {
        let confirmMessage = ""
        let action = ""

        if (selectedOption === "Delete") {
            confirmMessage = "You want to delete selected orders?"
            action = "admin.orders.bulk.delete"
        } else if (["Mark as Completed", "Mark as Canceled", "Mark as Pending", "Mark as Confirmed"].includes(selectedOption)) {
            confirmMessage = "You want to update status of selected orders?"
            action = "admin.orders.bulk.update.status"
        }

        setIsMarkAll([])
        showAlert("Are you sure?", confirmMessage, selectedOption + "!", () => {
            if (["Mark as Completed", "Mark as Canceled", "Mark as Pending", "Mark as Confirmed"].includes(selectedOption)) {
                let status = ""
                if (selectedOption === "Mark as Completed") status = "completed"
                else if (selectedOption === "Mark as Canceled") status = "canceled"
                else if (selectedOption === "Mark as Pending") status = "pending"
                else if (selectedOption === "Mark as Confirmed") status = "confirmed"

                router.post(route(action, { ids: markItems.join(","), status: status }))
                return
            }
            router.delete(route(action, { ids: markItems.join(",") }))
        })
    }

    return (
        <>
            <Head title="All Orders" />
            <AdminLayouts>
                <div className="yoo-height-b30 yoo-height-lg-b30" />
                <div className="container-fluid">
                    <div className="yoo-uikits-heading d-flex justify-content-between align-items-center">
                        <h2 className="yoo-uikits-title">{translate("All Orders")}</h2>

                        {hasPermission("orders.create") && (
                            <Link href={route("admin.orders.create")} className="btn btn-success btn-sm">
                                <IonIcon icon={addCircleOutline} className="mr-1" /> {translate("Create New Order")}
                            </Link>
                        )}
                    </div>
                    <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                    <div className="yoo-card yoo-style1">
                        <div className="yoo-card-heading">
                            <div className="yoo-card-heading-left">
                                <h2 className="yoo-card-title">
                                    <span className="yoo-card-title-icon yoo-blue-bg">
                                        <IonIcon
                                            icon={businessOutline}
                                            style={{
                                                width: "16px",
                                                height: "16px"
                                            }}
                                        />
                                    </span>
                                    {translate("Orders")}
                                </h2>
                            </div>
                        </div>
                        <div className="yoo-card-body">
                            <div className="">
                                <div className="yoo-height-b15 yoo-height-lg-b15" />
                                <div className="yooDataTableWrap">
                                    <div className="dataTables_heading">
                                        {/* FILTERS START */}
                                        {hasPermission("orders.delete") && (
                                            <div className="dataTables_heading_left">
                                                <div className="yoo-group-btn">
                                                    <div className="position-relative">
                                                        {(hasPermission("orders.delete") || hasPermission("orders.edit")) && (
                                                            <DropDownButton selectedOption={selectedOption} disabled={!markItems.length}>
                                                                {hasPermission("orders.delete") && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setSelectedOption("Delete")}
                                                                        className={`dropdown-item ${selectedOption === "Delete" ? "active" : ""}`}
                                                                    >
                                                                        {translate("Delete")}
                                                                    </button>
                                                                )}

                                                                {hasPermission("orders.edit") && (
                                                                    <>
                                                                        {[
                                                                            "Mark as Pending",
                                                                            "Mark as Confirmed",
                                                                            "Mark as Canceled",
                                                                            "Mark as Completed"
                                                                        ].map((option) => (
                                                                            <button
                                                                                key={option}
                                                                                type="button"
                                                                                onClick={() => setSelectedOption(option)}
                                                                                className={`dropdown-item ${selectedOption === option ? "active" : ""}`}
                                                                            >
                                                                                {translate(option)}
                                                                            </button>
                                                                        ))}
                                                                    </>
                                                                )}
                                                            </DropDownButton>
                                                        )}
                                                    </div>
                                                    <button
                                                        disabled={!markItems.length}
                                                        onClick={() => handleBulkAction()}
                                                        className="btn btn-success btn-sm"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                                <div>
                                                    <div className="position-relative">
                                                        <DropDownButton selectedOption={selectedStatus}>
                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedStatus("All")}
                                                                className={`dropdown-item ${selectedStatus === "All" ? "active" : ""}`}
                                                            >
                                                                {translate("All Order Status")}
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedStatus("Pending")}
                                                                className={`dropdown-item ${selectedStatus === "Pending" ? "active" : ""}`}
                                                            >
                                                                Pending
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedStatus("Confirmed")}
                                                                className={`dropdown-item ${selectedStatus === "Confirmed" ? "active" : ""}`}
                                                            >
                                                                {translate("Confirmed")}
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedStatus("Canceled")}
                                                                className={`dropdown-item ${selectedStatus === "Canceled" ? "active" : ""}`}
                                                            >
                                                                {translate("Canceled")}
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedStatus("Completed")}
                                                                className={`dropdown-item ${selectedStatus === "Completed" ? "active" : ""}`}
                                                            >
                                                                {translate("Completed")}
                                                            </button>
                                                        </DropDownButton>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="position-relative">
                                                        <DropDownButton
                                                            selectedOption={
                                                                selectedType === "All"
                                                                    ? translate("All Types")
                                                                    : causeTypes[selectedType]
                                                                      ? translate(causeTypes[selectedType])
                                                                      : selectedType
                                                            }
                                                        >
                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedType("All")}
                                                                className={`dropdown-item ${selectedType === "All" ? "active" : ""}`}
                                                            >
                                                                {translate("All Types")}
                                                            </button>

                                                            {causeTypes &&
                                                                Object.entries(causeTypes).map(([key, label]) => (
                                                                    <button
                                                                        key={key}
                                                                        type="button"
                                                                        onClick={() => setSelectedType(key)}
                                                                        className={`dropdown-item ${selectedType === key ? "active" : ""}`}
                                                                    >
                                                                        {translate(label)}
                                                                    </button>
                                                                ))}
                                                        </DropDownButton>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="position-relative">
                                                        <DropDownButton
                                                            selectedOption={
                                                                selectedCause === "All"
                                                                    ? translate("All Causes")
                                                                    : causes.find((c) => c.id === selectedCause)?.content?.title ||
                                                                      translate("All Causes")
                                                            }
                                                        >
                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedCause("All")}
                                                                className={`dropdown-item ${selectedCause === "All" ? "active" : ""}`}
                                                            >
                                                                {translate("All Causes")}
                                                            </button>

                                                            {causes.map((cause) => (
                                                                <button
                                                                    key={cause.id}
                                                                    type="button"
                                                                    onClick={() => setSelectedCause(cause.id)}
                                                                    className={`dropdown-item ${selectedCause === cause.id ? "active" : ""}`}
                                                                >
                                                                    {cause.content?.title || "Untitled Cause"}
                                                                </button>
                                                            ))}
                                                        </DropDownButton>
                                                    </div>
                                                </div>

                                                <div className="yoo-group-btn">
                                                    <div className="position-relative">
                                                        <DropDownButton selectedOption={paymentStatusOptions[selectedPaymentStatus]}>
                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedPaymentStatus("All Payment")}
                                                                className={`dropdown-item ${selectedPaymentStatus === "All Payment" ? "active" : ""}`}
                                                            >
                                                                {translate("All Payment")}
                                                            </button>

                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedPaymentStatus("1")}
                                                                className={`dropdown-item ${selectedPaymentStatus === "1" ? "active" : ""}`}
                                                            >
                                                                {translate("Awaiting Payment")}
                                                            </button>

                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedPaymentStatus("2")}
                                                                className={`dropdown-item ${selectedPaymentStatus === "2" ? "active" : ""}`}
                                                            >
                                                                {translate("Success")}
                                                            </button>

                                                            <button
                                                                type="button"
                                                                onClick={() => setSelectedPaymentStatus("3")}
                                                                className={`dropdown-item ${selectedPaymentStatus === "3" ? "active" : ""}`}
                                                            >
                                                                {translate("Cancel")}
                                                            </button>
                                                        </DropDownButton>
                                                    </div>

                                                    <button onClick={() => getResults(searchQuery)} className="btn btn-success btn-sm">
                                                        {translate("Filter")}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        {/* FILTERS END */}

                                        <div className="dataTables_heading_right">
                                            <div id="yooDataTable_filter" className="dataTables_filter">
                                                <label>
                                                    <input
                                                        type="search"
                                                        className=""
                                                        placeholder="Search..."
                                                        value={searchQuery}
                                                        onChange={(e) => {
                                                            setSearchQuery(e.target.value)
                                                            getResults(e.target.value)
                                                        }}
                                                    />
                                                </label>
                                                <button className="dataTables_filter_btn">
                                                    <IonIcon icon={search} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="yooDataTable_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="yooDataTable" className="display dataTable no-footer" style={{ width: "100%" }}>
                                            <thead>
                                                <tr role="row">
                                                    <th onClick={() => markAll()} style={{ width: "1%" }}>
                                                        <div className={`yoo-check-mark-all ${isMarkAll && "active"}`}>
                                                            <span className="yoo-first" />
                                                            <span className="yoo-last" />
                                                        </div>
                                                    </th>
                                                    <ThSortable
                                                        width="15%"
                                                        sort={sort}
                                                        onSorted={() => getResults(searchQuery)}
                                                        column="special_date"
                                                    >
                                                        {translate("Special Date")}
                                                    </ThSortable>
                                                    <ThSortable
                                                        width="20%"
                                                        sort={sort}
                                                        onSorted={() => getResults(searchQuery)}
                                                        column="customer_name"
                                                    >
                                                        {translate("Customer Details")}
                                                    </ThSortable>
                                                    <th width="20%">{translate("Special Data")}</th>
                                                    <th width="20%">{translate("Remarks")}</th>
                                                    <ThSortable width="10%" sort={sort} onSorted={() => getResults(searchQuery)} column="total_price">
                                                        Amount
                                                    </ThSortable>
                                                    <ThSortable
                                                        width="10%"
                                                        sort={sort}
                                                        onSorted={() => getResults(searchQuery)}
                                                        column="payment_status"
                                                    >
                                                        {translate("Pay Status")}
                                                    </ThSortable>
                                                    <ThSortable width="10%" sort={sort} onSorted={() => getResults(searchQuery)} column="status">
                                                        {translate("Status")}
                                                    </ThSortable>
                                                    {(hasPermission("orders.show") ||
                                                        hasPermission("orders.delete") ||
                                                        hasPermission("orders.edit")) && <th style={{ width: "5%" }}>{translate("Action")}</th>}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.data.map((order, index) => (
                                                    <tr key={order.id || index}>
                                                        <td className="sorting_1" onClick={() => handleMark(order.id)}>
                                                            <div className={`yoo-check-mark ${markItems.includes(order.id) && "active"}`} />
                                                        </td>

                                                        {/* Special Date (Normal Font Size as Basic Details) */}
                                                        <td>
                                                            {order.special_date ? (
                                                                <span className="text-dark font-weight-bold" style={{ fontSize: "14px" }}>
                                                                    {moment(order.special_date).format("DD MMM YYYY")}
                                                                </span>
                                                            ) : (
                                                                <span className="text-muted">-</span>
                                                            )}
                                                        </td>

                                                        <td>
                                                            <strong>{order.customer_name}</strong>
                                                            <div className="small text-muted">{moment(order.created_at).format("DD MMM YYYY")}</div>
                                                            <div className="small">
                                                                <a href={`mailto:${order.customer_email}`} className="text-muted">
                                                                    {order.customer_email}
                                                                </a>
                                                            </div>
                                                            <div className="small text-muted">{order.customer_phone}</div>
                                                            <div className="mt-2 d-flex flex-wrap gap-1" style={{ gap: "5px" }}>
                                                                {order.pancard && <span className="badge badge-dark">PAN: {order.pancard}</span>}
                                                                {order.is_80g == 1 && (
                                                                    <span
                                                                        className="badge badge-success text-white"
                                                                        style={{ backgroundColor: "#28a745" }}
                                                                    >
                                                                        80G Benefit
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column gap-2">
                                                                {order.special_name && (
                                                                    <div className="font-weight-bold text-primary small">{order.special_name}</div>
                                                                )}
                                                                {order.special_message && (
                                                                    <div
                                                                        className="text-dark small border-left pl-2"
                                                                        style={{ borderLeftColor: "#007bff" }}
                                                                    >
                                                                        "
                                                                        {order.special_message.length > 50
                                                                            ? order.special_message.substring(0, 50) + "..."
                                                                            : order.special_message}
                                                                        "
                                                                    </div>
                                                                )}
                                                                {order.special_image || order.special_video ? (
                                                                    <button
                                                                        className="btn btn-sm btn-info text-white d-inline-flex align-items-center"
                                                                        style={{ width: "fit-content" }}
                                                                        onClick={() => setMediaModalOrder(order)}
                                                                    >
                                                                        <IonIcon icon={imageOutline} className="mr-1" />
                                                                        {order.special_video ? "Media (Video)" : "View Image"}
                                                                    </button>
                                                                ) : (
                                                                    !order.special_message && <span className="text-muted">-</span>
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <RemarksCell order={order} canEdit={hasPermission("orders.edit")} />
                                                        </td>
                                                        <td>
                                                            <Amount amount={order.total_price} /> <br />
                                                            <small className="text-muted">{order.payment_method}</small>
                                                        </td>

                                                        <td>
                                                            <span
                                                                className={`badge ${
                                                                    order.payment_status === "0"
                                                                        ? "badge-secondary"
                                                                        : order.payment_status === "1"
                                                                          ? "badge-warning"
                                                                          : order.payment_status === "2"
                                                                            ? "badge-success"
                                                                            : "badge-danger"
                                                                }`}
                                                            >
                                                                {order.payment_status === "0"
                                                                    ? "Init"
                                                                    : order.payment_status === "1"
                                                                      ? "Wait"
                                                                      : order.payment_status === "2"
                                                                        ? "Paid"
                                                                        : "Cancel"}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span
                                                                className={`badge ${
                                                                    order.status === "initialize"
                                                                        ? "badge-secondary"
                                                                        : order.status === "pending"
                                                                          ? "badge-warning"
                                                                          : order.status === "confirmed"
                                                                            ? "badge-success"
                                                                            : order.status === "canceled"
                                                                              ? "badge-danger"
                                                                              : "badge-info"
                                                                }`}
                                                            >
                                                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                            </span>
                                                        </td>

                                                        {(hasPermission("orders.show") ||
                                                            hasPermission("orders.delete") ||
                                                            hasPermission("orders.edit")) && (
                                                            <td>
                                                                <div className="d-flex" style={{ gap: "5px" }}>
                                                                    {hasPermission("orders.show") && (
                                                                        <Link
                                                                            href={route("admin.orders.show", order)}
                                                                            className="badge badge-secondary"
                                                                            title="View"
                                                                        >
                                                                            <IonIcon icon={eyeOutline} style={{ height: "16px", width: "16px" }} />
                                                                        </Link>
                                                                    )}

                                                                    {hasPermission("orders.edit") && (
                                                                        <Link
                                                                            href={route("admin.orders.edit", order)}
                                                                            className="badge badge-primary"
                                                                            title="Edit"
                                                                        >
                                                                            <IonIcon icon={pencilOutline} style={{ height: "16px", width: "16px" }} />
                                                                        </Link>
                                                                    )}

                                                                    {hasPermission("orders.delete") && (
                                                                        <DeleteButton href={route("admin.orders.destroy", order)} />
                                                                    )}
                                                                </div>
                                                            </td>
                                                        )}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {!orders.data.length && (
                                            <div className="no-data-found" style={{ textAlign: "center", padding: "50px" }}>
                                                <p>No orders found!</p>
                                            </div>
                                        )}
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pagination */}
                    {orders.total > 1 && (
                        <div className="pagination-wrapper" style={{ marginTop: "10px" }}>
                            <ul className="pagination">
                                {orders.links.map((link, index) => (
                                    <li className={`page-item ${link.active ? "active" : ""}`} key={`pagination_${index}`}>
                                        <Link href={link.url} className="page-link" dangerouslySetInnerHTML={{ __html: link.label }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="yoo-height-b30 yoo-height-lg-b30" />
                </div>

                {/* --- MEDIA MODAL (Image & Video Only) --- */}
                {mediaModalOrder && (
                    <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}>
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        <IonIcon icon={giftOutline} className="mr-2 text-primary" style={{ verticalAlign: "middle" }} />
                                        {translate("Attached Media")}
                                    </h5>
                                    <button type="button" className="close" onClick={() => setMediaModalOrder(null)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body text-center bg-dark">
                                    {/* Image */}
                                    {mediaModalOrder.special_image && (
                                        <div className="mb-3">
                                            <img
                                                src={`/storage/${mediaModalOrder.special_image}`}
                                                alt="Special Request"
                                                className="img-fluid rounded"
                                                style={{ maxHeight: "60vh", objectFit: "contain" }}
                                            />
                                        </div>
                                    )}

                                    {!mediaModalOrder.special_image && !mediaModalOrder.special_video && (
                                        <div className="text-white">No media attached.</div>
                                    )}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setMediaModalOrder(null)}>
                                        <IonIcon icon={closeOutline} className="mr-1" /> {translate("Close")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </AdminLayouts>
        </>
    )
}
