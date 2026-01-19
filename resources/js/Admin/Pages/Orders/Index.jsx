import { Head, Link, usePage } from "@inertiajs/react"
import { search, createOutline, businessOutline, arrowForwardOutline, eyeOutline, imageOutline, videocamOutline, documentTextOutline } from "ionicons/icons"
import { IonIcon } from "@ionic/react"
import { useState } from "react"
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
        }
        setIsMarkAll([])
        showAlert("Are you sure?", confirmMessage, selectedOption + "!", () => {
            router.delete(route(action, { ids: markItems.join(",") }))
        })
    }

    return (
        <>
            <Head title="All Orders" />
            <AdminLayouts>
                <div className="yoo-height-b30 yoo-height-lg-b30" />
                <div className="container-fluid">
                    <div className="yoo-uikits-heading">
                        <h2 className="yoo-uikits-title">{translate("All Orders")}</h2>
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
                                        {hasPermission("orders.delete") && (
                                            <div className="dataTables_heading_left">
                                                <div className="yoo-group-btn">
                                                    <div className="position-relative">
                                                        <DropDownButton selectedOption={selectedOption} disabled={!markItems.length}>
                                                            <a
                                                                onClick={() => setSelectedOption("Delete")}
                                                                className={`dropdown-item ${selectedOption === "Delete" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                {translate("Delete")}
                                                            </a>
                                                        </DropDownButton>
                                                    </div>
                                                    <button
                                                        disabled={!markItems.length}
                                                        onClick={() => handleBulkAction()}
                                                        className="btn btn-success btn-sm"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                                <div className="">
                                                    <div className="position-relative">
                                                        <DropDownButton selectedOption={selectedStatus}>
                                                            <a
                                                                onClick={() => setSelectedStatus("All")}
                                                                className={`dropdown-item ${selectedStatus === "All" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                {translate("All Order Status")}
                                                            </a>
                                                            <a
                                                                onClick={() => setSelectedStatus("Pending")}
                                                                className={`dropdown-item ${selectedStatus === "Pending" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                Pending
                                                            </a>
                                                            <a
                                                                onClick={() => setSelectedStatus("Confirmed")}
                                                                className={`dropdown-item ${selectedStatus === "Confirmed" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                {translate("Confirmed")}
                                                            </a>
                                                            <a
                                                                onClick={() => setSelectedStatus("Canceled")}
                                                                className={`dropdown-item ${selectedStatus === "Canceled" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                {translate("Canceled")}
                                                            </a>
                                                            <a
                                                                onClick={() => setSelectedStatus("Completed")}
                                                                className={`dropdown-item ${selectedStatus === "Completed" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                {translate("Completed")}
                                                            </a>
                                                        </DropDownButton>
                                                    </div>
                                                </div>

                                                <div className="">
                                                    <div className="position-relative">
                                                        <DropDownButton
                                                            selectedOption={
                                                                selectedType === "All"
                                                                    ? translate("All Types")
                                                                    : (causeTypes[selectedType] ? translate(causeTypes[selectedType]) : selectedType)
                                                            }
                                                        >
                                                            <a
                                                                onClick={() => setSelectedType("All")}
                                                                className={`dropdown-item ${selectedType === "All" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                {translate("All Types")}
                                                            </a>
                                                            {causeTypes && Object.entries(causeTypes).map(([key, label]) => (
                                                                <a
                                                                    key={key}
                                                                    onClick={() => setSelectedType(key)}
                                                                    className={`dropdown-item ${selectedType === key ? "active" : ""}`}
                                                                    href="#"
                                                                >
                                                                    {translate(label)}
                                                                </a>
                                                            ))}
                                                        </DropDownButton>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="position-relative">
                                                        <DropDownButton
                                                            selectedOption={
                                                                selectedCause === "All"
                                                                    ? translate("All Causes")
                                                                    :
                                                                    causes.find((c) => c.id == selectedCause)?.content?.title ||
                                                                    translate("All Causes")
                                                            }
                                                        >
                                                            <a
                                                                onClick={() => setSelectedCause("All")}
                                                                className={`dropdown-item ${selectedCause === "All" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                {translate("All Causes")}
                                                            </a>
                                                            {causes.map((cause) => (
                                                                <a
                                                                    key={cause.id}
                                                                    onClick={() => setSelectedCause(cause.id)}
                                                                    className={`dropdown-item ${selectedCause == cause.id ? "active" : ""}`}
                                                                    href="#"
                                                                >
                                                                    {cause.content?.title || "Untitled Cause"}
                                                                </a>
                                                            ))}
                                                        </DropDownButton>
                                                    </div>
                                                </div>
                                                <div className="yoo-group-btn">
                                                    <div className="position-relative">
                                                        <DropDownButton selectedOption={paymentStatusOptions[selectedPaymentStatus]}>
                                                            <a
                                                                onClick={() => setSelectedPaymentStatus("All Payment Status")}
                                                                className={`dropdown-item ${selectedPaymentStatus === "All Payment Status" ? "active" : ""
                                                                    }`}
                                                                href="#"
                                                            >
                                                                {translate("All Payment Status")}
                                                            </a>
                                                            <a
                                                                onClick={() => setSelectedPaymentStatus("1")}
                                                                className={`dropdown-item ${selectedPaymentStatus === "1" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                {translate("Awaiting Payment")}
                                                            </a>
                                                            <a
                                                                onClick={() => setSelectedPaymentStatus("2")}
                                                                className={`dropdown-item ${selectedPaymentStatus === "2" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                {translate("Success")}
                                                            </a>
                                                            <a
                                                                onClick={() => setSelectedPaymentStatus("3")}
                                                                className={`dropdown-item ${selectedPaymentStatus === "3" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                {translate("Cancel")}
                                                            </a>
                                                        </DropDownButton>
                                                    </div>
                                                    <button onClick={() => getResults(searchQuery)} className="btn btn-success btn-sm">
                                                        {translate("Filter")}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
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
                                                        width="10%"
                                                        sort={sort}
                                                        onSorted={() => getResults(searchQuery)}
                                                        column="special_date"
                                                    >
                                                        {translate("Special Date")}
                                                    </ThSortable>

                                                    {/* Customer Info */}
                                                    <ThSortable
                                                        width="20%"
                                                        sort={sort}
                                                        onSorted={() => getResults(searchQuery)}
                                                        column="customer_name"
                                                    >
                                                        {translate("Customer Details")}
                                                    </ThSortable>

                                                    <th width="15%">{translate("Special Data")}</th>

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
                                                    <ThSortable width="10%" sort={sort} onSorted={() => getResults(searchQuery)} column="created_at">
                                                        Donation Date
                                                    </ThSortable>
                                                    {(hasPermission("orders.show") || hasPermission("orders.delete")) && (
                                                        <th style={{ width: "5%" }}>{translate("Action")}</th>
                                                    )}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.data.map((order, index) => (
                                                    <tr key={order.id || index}>
                                                        <td className="sorting_1" onClick={() => handleMark(order.id)}>
                                                            <div className={`yoo-check-mark ${markItems.includes(order.id) && "active"}`} />
                                                        </td>
                                                        {/* Special Date */}
                                                        <td>
                                                            {order.special_date ? (
                                                                <span className="badge badge-light-primary">
                                                                    {moment(order.special_date).format("DD MMM YYYY")}
                                                                </span>
                                                            ) : (
                                                                <span className="text-muted">-</span>
                                                            )}
                                                        </td>

                                                        <td>
                                                            <strong>{order.customer_name}</strong> <br/>
                                                            <small>
                                                                <a href={`mailto:${order.customer_email}`} className="text-muted">{order.customer_email}</a>
                                                            </small> <br/>
                                                            <small>
                                                                <a href={`tel:${order.customer_phone}`} className="text-muted">{order.customer_phone}</a>
                                                            </small>
                                                            {/* Show PAN and 80G if available */}
                                                            {order.pancard && (
                                                                <div className="mt-1"><span className="badge badge-light-info">PAN: {order.pancard}</span></div>
                                                            )}
                                                            {order.is_80g == 1 && (
                                                                <div className="mt-1"><span className="badge badge-success text-white" style={{fontSize: '10px'}}>80G Support</span></div>
                                                            )}
                                                        </td>

                                                        {/* Special Content Display */}
                                                        <td>
                                                            <div className="d-flex align-items-center" style={{gap: '8px'}}>
                                                                {/* Special Message Tooltip/Icon */}
                                                                {order.special_message ? (
                                                                    <div title={order.special_message} style={{cursor: 'help'}}>
                                                                        <IonIcon icon={documentTextOutline} className="text-primary" style={{fontSize: '20px'}} />
                                                                    </div>
                                                                ) : null}

                                                                {/* Special Image */}
                                                                {order.special_image ? (
                                                                    <a href={order.special_image} target="_blank" title="View Image">
                                                                        <img
                                                                            src={order.special_image}
                                                                            style={{width: '35px', height: '35px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #eee'}}
                                                                            alt="Special"
                                                                        />
                                                                    </a>
                                                                ) : null}

                                                                {/* Special Video */}
                                                                {order.special_video ? (
                                                                    <a href={order.special_video} target="_blank" title="View Video" className="btn btn-sm btn-light p-1">
                                                                        <IonIcon icon={videocamOutline} className="text-danger" style={{fontSize: '18px'}} />
                                                                    </a>
                                                                ) : null}

                                                                {!order.special_message && !order.special_image && !order.special_video && (
                                                                    <span className="text-muted">-</span>
                                                                )}
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <Amount amount={order.total_price} /> <br/>
                                                            <small className="text-muted">{order.payment_method}</small>
                                                        </td>

                                                        <td>
                                                            <span
                                                                className={`badge ${
                                                                    order.payment_status === "0" ? "badge-secondary"
                                                                    : order.payment_status === "1" ? "badge-warning"
                                                                    : order.payment_status === "2" ? "badge-success"
                                                                    : "badge-danger"
                                                                }`}
                                                            >
                                                                {order.payment_status === "0" ? "Init"
                                                                : order.payment_status === "1" ? "Wait"
                                                                : order.payment_status === "2" ? "Paid"
                                                                : "Cancel"}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span
                                                                className={`badge ${
                                                                    order.status === "initialize" ? "badge-secondary"
                                                                    : order.status === "pending" ? "badge-warning"
                                                                    : order.status === "confirmed" ? "badge-success"
                                                                    : order.status === "canceled" ? "badge-danger"
                                                                    : "badge-info"
                                                                }`}
                                                            >
                                                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                            </span>
                                                        </td>
                                                        <td>{moment(order.created_at).format("DD MMM YYYY")}</td>

                                                        {(hasPermission("orders.show") || hasPermission("orders.delete")) && (
                                                            <td>
                                                                <div className="d-flex" style={{ gap: "5px" }}>
                                                                    {hasPermission("orders.show") && (
                                                                        <Link
                                                                            href={route("admin.orders.show", order)}
                                                                            className="badge badge-secondary"
                                                                        >
                                                                            <IonIcon icon={eyeOutline} style={{ height: "16px", width: "16px" }} />
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
                                            <div
                                                className="no-data-found"
                                                style={{
                                                    textAlign: "center",
                                                    padding: "50px"
                                                }}
                                            >
                                                <p>No orders found!</p>
                                            </div>
                                        )}
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* .yoo-card */}
                    {orders.total > 1 && (
                        <div className="pagination-wrapper" style={{ marginTop: "10px" }}>
                            <ul className="pagination">
                                {orders.links.map((link, index) => (
                                    <li className={`page-item ${link.active ? "active" : ""}`} key={`pagination_${index}`}>
                                        <Link
                                            href={link.url}
                                            className="page-link"
                                            dangerouslySetInnerHTML={{
                                                __html: link.label
                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="yoo-height-b30 yoo-height-lg-b30" />
                </div>
            </AdminLayouts>
        </>
    )
}
