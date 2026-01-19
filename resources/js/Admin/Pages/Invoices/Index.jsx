import { Head, Link, router } from "@inertiajs/react"
import { search, documentTextOutline, pencilOutline, trashOutline } from "ionicons/icons"
import { IonIcon } from "@ionic/react"
import { useState } from "react"
import ThSortable from "@/Admin/Components/Table/ThSortable"
import { showAlert } from "@/Admin/Utils/SweetAlert"
import DropDownButton from "@/Admin/Components/Button/DropDownButton"
import DeleteButton from "@/Admin/Components/Button/DeleteButton"
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import Amount from "@/Components/Amount"
import hasPermission from "@/Admin/Utils/hasPermission"
import translate from "@/utils/translate"
import moment from "moment"
// Import Flatpickr for Date Range
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_blue.css"

export default function Index({ invoices, sort, filter, causes }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedOption, setSelectedOption] = useState("Bulk Action")

    // State for Filters
    const [selectedCause, setSelectedCause] = useState(filter?.cause_id || "All")
    // Added Date Range State
    const [dateRange, setDateRange] = useState(filter?.date_range || "")
    const [rangeLabel, setRangeLabel] = useState("Date Period") // Label for dropdown

    const [isMarkAll, setIsMarkAll] = useState(false)
    const [markItems, setMarkItems] = useState([])

    // Handle Search & Filter
    const getResults = (search) => {
        router.get(
            route("admin.invoices.index", {
                search: search ?? setSearchQuery,
                sort: sort,
                filter: {
                    cause_id: selectedCause,
                    date_range: dateRange // Pass date range to backend
                }
            }),
            {},
            { preserveState: true }
        )
    }

    // 1. Handle Date Change from Flatpickr (Manual)
    const onDateChange = (dates) => {
        if (dates.length === 2) {
            const start = moment(dates[0]).format("YYYY-MM-DD")
            const end = moment(dates[1]).format("YYYY-MM-DD")
            setDateRange(`${start} to ${end}`)
            setRangeLabel("Custom")
        }
    }

    // 2. Handle Preset Date Ranges (Today, Yesterday, etc.)
    const applyDatePreset = (type) => {
        let start = moment();
        let end = moment();

        switch(type) {
            case 'Today':
                break; // start/end are already today
            case 'Yesterday':
                start = moment().subtract(1, 'days');
                end = moment().subtract(1, 'days');
                break;
            case 'This Week':
                start = moment().startOf('week');
                end = moment().endOf('week');
                break;
            case 'Last Week':
                start = moment().subtract(1, 'week').startOf('week');
                end = moment().subtract(1, 'week').endOf('week');
                break;
            case 'This Month':
                start = moment().startOf('month');
                end = moment().endOf('month');
                break;
            case 'Last Month':
                start = moment().subtract(1, 'month').startOf('month');
                end = moment().subtract(1, 'month').endOf('month');
                break;
            default:
                return;
        }

        const rangeString = `${start.format("YYYY-MM-DD")} to ${end.format("YYYY-MM-DD")}`;
        setDateRange(rangeString);
        setRangeLabel(type);
    }

    // Mark All Logic
    const markAll = () => {
        if (isMarkAll) {
            setMarkItems([])
            setIsMarkAll(false)
        } else {
            const items = invoices.data.map((invoice) => invoice.id)
            setMarkItems(items)
            setIsMarkAll(true)
        }
    }

    // Handle Individual Mark
    const handleMark = (id) => {
        const existsMark = markItems.some((item) => item === id)
        if (existsMark) {
            const removeItem = markItems.filter((item) => item !== id)
            setMarkItems(removeItem)
        } else {
            const addedItem = [...markItems, id]
            setMarkItems(addedItem)
        }
    }

    // Handle Bulk Actions
    const handleBulkAction = () => {
        let confirmMessage = ""
        let action = ""

        if (selectedOption === "Delete") {
            confirmMessage = "You want to delete selected receipts?"
            action = "admin.invoices.bulk.delete"
        }

        if (action) {
            showAlert("Are you sure?", confirmMessage, selectedOption + "!", () => {
                router.delete(route(action, { ids: markItems.join(",") }), {
                    onSuccess: () => {
                        setMarkItems([])
                        setIsMarkAll(false)
                    }
                })
            })
        }
    }

    // Helper to get Cause Name for Dropdown Label
    const getSelectedCauseLabel = () => {
        if (selectedCause === "All") return translate("All Causes")
        const found = causes?.find((c) => c.id == selectedCause)
        return found?.content?.title || translate("All Causes")
    }

    return (
        <>
            <Head title="Financial Receipts" />
            <AdminLayouts>
                <div className="yoo-height-b30 yoo-height-lg-b30" />
                <div className="container-fluid">
                    <div className="yoo-uikits-heading">
                        <h2 className="yoo-uikits-title">{translate("All Receipts")}</h2>
                    </div>
                    <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                    <div className="yoo-card yoo-style1">
                        <div className="yoo-card-heading">
                            <div className="yoo-card-heading-left">
                                <h2 className="yoo-card-title">
                                    <span className="yoo-card-title-icon yoo-blue-bg">
                                        <IonIcon icon={documentTextOutline} style={{ width: "16px", height: "16px" }} />
                                    </span>
                                    {translate("Receipts List")}
                                </h2>
                            </div>
                        </div>
                        <div className="yoo-card-body">
                            <div className="">
                                <div className="yoo-height-b15 yoo-height-lg-b15" />
                                <div className="yooDataTableWrap">
                                    <div className="dataTables_heading">
                                        {hasPermission("invoices.delete") && (
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

                                                {/* Filter: Causes */}
                                                <div className="position-relative">
                                                    <DropDownButton selectedOption={getSelectedCauseLabel()}>
                                                        <a
                                                            onClick={() => setSelectedCause("All")}
                                                            className={`dropdown-item ${selectedCause === "All" ? "active" : ""}`}
                                                            href="#"
                                                        >
                                                            {translate("All Causes")}
                                                        </a>
                                                        {causes &&
                                                            causes.map((cause) => (
                                                                <a
                                                                    key={cause.id}
                                                                    onClick={() => setSelectedCause(cause.id)}
                                                                    className={`dropdown-item ${selectedCause == cause.id ? "active" : ""}`}
                                                                    href="#"
                                                                >
                                                                    {cause.content?.title || "Untitled"}
                                                                </a>
                                                            ))}
                                                    </DropDownButton>
                                                </div>

                                                {/* Filter: Date Range Presets (New) */}
                                                <div className="position-relative">
                                                    <DropDownButton selectedOption={rangeLabel}>
                                                        <a onClick={() => applyDatePreset('Today')} className="dropdown-item" href="#">Today</a>
                                                        <a onClick={() => applyDatePreset('Yesterday')} className="dropdown-item" href="#">Yesterday</a>
                                                        <a onClick={() => applyDatePreset('This Week')} className="dropdown-item" href="#">This Week</a>
                                                        <a onClick={() => applyDatePreset('Last Week')} className="dropdown-item" href="#">Last Week</a>
                                                        <a onClick={() => applyDatePreset('This Month')} className="dropdown-item" href="#">This Month</a>
                                                        <a onClick={() => applyDatePreset('Last Month')} className="dropdown-item" href="#">Last Month</a>
                                                    </DropDownButton>
                                                </div>

                                                {/* Filter: Date Range Picker (Input) */}
                                                <div className="position-relative" style={{ minWidth: "180px" }}>
                                                    <Flatpickr
                                                        className="form-control"
                                                        placeholder="Custom Date"
                                                        value={dateRange ? dateRange.split(" to ") : []}
                                                        options={{
                                                            mode: "range",
                                                            dateFormat: "Y-m-d",
                                                        }}
                                                        onChange={onDateChange}
                                                    />
                                                </div>

                                                <button onClick={() => getResults(searchQuery)} className="btn btn-success btn-sm">
                                                    {translate("Filter")}
                                                </button>
                                            </div>
                                        )}

                                        <div className="dataTables_heading_right">
                                            <div id="yooDataTable_filter" className="dataTables_filter">
                                                <label>
                                                    <input
                                                        type="search"
                                                        placeholder="Search Receipt, Donor..."
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
                                                    <ThSortable width="10%" sort={sort} onSorted={() => getResults(searchQuery)} column="invoice_number">
                                                        {translate("Receipt No")}
                                                    </ThSortable>
                                                    <ThSortable width="20%" sort={sort} onSorted={() => getResults(searchQuery)} column="customer_name">
                                                        {translate("Donor Name")}
                                                    </ThSortable>
                                                    <ThSortable width="15%" sort={sort} onSorted={() => getResults(searchQuery)} column="created_at">
                                                        {translate("Donation Date")}
                                                    </ThSortable>
                                                    <th width="15%">{translate("Cause")}</th>
                                                    <ThSortable width="12%" sort={sort} onSorted={() => getResults(searchQuery)} column="total_price">
                                                        {translate("Amount")}
                                                    </ThSortable>
                                                    {/* Status Header Removed */}
                                                    <ThSortable width="10%" sort={sort} column="Download">
                                                        {translate("Download")}
                                                    </ThSortable>
                                                    <ThSortable width="10%" sort={sort} column="resent">
                                                        {translate("Resend")}
                                                    </ThSortable>
                                                    {(hasPermission("invoices.edit") || hasPermission("invoices.delete")) && (
                                                        <th style={{ width: "5%" }}>{translate("Action")}</th>
                                                    )}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {invoices.data.map((invoice, index) => (
                                                    <tr key={invoice.id || index}>
                                                        <td className="sorting_1" onClick={() => handleMark(invoice.id)}>
                                                            <div className={`yoo-check-mark ${markItems.includes(invoice.id) && "active"}`} />
                                                        </td>
                                                        <td>
                                                            <div className="yoo-table-medias yoo-style1">
                                                                <Link
                                                                    href={route("admin.invoices.edit", invoice)}
                                                                    className="text-primary font-weight-bold"
                                                                >
                                                                    #{invoice.invoice_number}
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="font-weight-bold text-dark">{invoice.customer_name}</span> <br />
                                                            <small className="text-muted d-block">{invoice.customer_email}</small>
                                                            <small className="text-muted d-block">{invoice.customer_phone}</small>
                                                            {invoice.pancard && (
                                                                <span className="badge badge-light border mt-1">PAN: {invoice.pancard}</span>
                                                            )}
                                                        </td>
                                                        <td>{moment(invoice.created_at).format("DD MMM YYYY")}</td>
                                                        <td>
                                                            {invoice.order?.cause?.content?.title || <span className="text-muted small">-</span>}
                                                        </td>
                                                        <td>
                                                            <strong className="text-success">
                                                                <Amount amount={invoice.total_price} />
                                                            </strong>
                                                        </td>
                                                        {/* Status Column Removed */}
                                                        <td className="text-center">
                                                            <a
                                                                href={route("admin.orders.download.invoice", invoice.order)}
                                                                download
                                                                className="btn btn-sm btn-outline-secondary"
                                                            >
                                                                {translate("Download Invoice")}
                                                            </a>
                                                        </td>
                                                        <td className="text-center">
                                                            <a
                                                                href={route("admin.invoices.resend", invoice)}
                                                                className="btn btn-sm btn-outline-secondary"
                                                            >
                                                                {translate("Receipt Resend")}
                                                            </a>
                                                        </td>

                                                        {(hasPermission("invoices.edit") || hasPermission("invoices.delete")) && (
                                                            <td>
                                                                <div className="d-flex" style={{ gap: "5px" }}>
                                                                    {hasPermission("invoices.edit") && (
                                                                        <Link
                                                                            href={route("admin.invoices.edit", invoice)}
                                                                            className="badge badge-secondary"
                                                                            title="Edit"
                                                                        >
                                                                            <IonIcon icon={pencilOutline} style={{ height: "16px", width: "16px" }} />
                                                                        </Link>
                                                                    )}
                                                                    {hasPermission("invoices.delete") && (
                                                                        <DeleteButton href={route("admin.invoices.destroy", invoice)} />
                                                                    )}
                                                                </div>
                                                            </td>
                                                        )}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {!invoices.data.length && (
                                            <div className="no-data-found" style={{ textAlign: "center", padding: "50px" }}>
                                                <p>No receipts found!</p>
                                            </div>
                                        )}
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pagination */}
                    {invoices.total > 1 && (
                        <div className="pagination-wrapper" style={{ marginTop: "10px" }}>
                            <ul className="pagination">
                                {invoices.links.map((link, index) => (
                                    <li className={`page-item ${link.active ? "active" : ""}`} key={`pagination_${index}`}>
                                        <Link
                                            href={link.url}
                                            className="page-link"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
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
