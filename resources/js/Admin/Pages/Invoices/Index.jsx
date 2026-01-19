import { Head, Link, router } from "@inertiajs/react"
import {
    search,
    documentTextOutline,
    trashOutline,
    downloadOutline,
    paperPlaneOutline,
    calendarOutline
} from "ionicons/icons"
import { IonIcon } from "@ionic/react"
import { useState, useEffect } from "react"
import ThSortable from "@/Admin/Components/Table/ThSortable"
import { showAlert } from "@/Admin/Utils/SweetAlert"
import DropDownButton from "@/Admin/Components/Button/DropDownButton"
import DeleteButton from "@/Admin/Components/Button/DeleteButton"
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import Amount from "@/Components/Amount"
import hasPermission from "@/Admin/Utils/hasPermission"
import translate from "@/utils/translate"
import moment from "moment"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_blue.css"

// --- Inline Remarks Editor (Textarea) ---
const RemarksCell = ({ invoice, canEdit }) => {
    const [value, setValue] = useState(invoice.order?.order_notes || "");
    const [originalValue, setOriginalValue] = useState(invoice.order?.order_notes || "");

    useEffect(() => {
        const note = invoice.order?.order_notes || "";
        setValue(note);
        setOriginalValue(note);
    }, [invoice.id]);

    const handleBlur = () => {
        if (value !== originalValue) {
            router.post(
                route('admin.invoices.update.remarks', invoice.id),
                { remarks: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => setOriginalValue(value)
                }
            );
        }
    };

    if (!canEdit) {
        return (
            <div className="text-muted small" style={{ whiteSpace: 'pre-wrap', minWidth: '200px', maxHeight: '60px', overflowY: 'auto' }}>
                {value || "-"}
            </div>
        );
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
                width: '100%',
                minWidth: '200px',
                border: '1px solid #e2e8f0',
                background: '#f8f9fa',
                fontSize: '13px',
                resize: 'vertical'
            }}
        />
    );
};

export default function Index({ invoices, sort, filter, causes }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedOption, setSelectedOption] = useState("Bulk Action")

    const [selectedCause, setSelectedCause] = useState(filter?.cause_id || "All")
    const [dateRange, setDateRange] = useState(filter?.date_range || "")
    const [rangeLabel, setRangeLabel] = useState("Date Period")

    const [isMarkAll, setIsMarkAll] = useState(false)
    const [markItems, setMarkItems] = useState([])

    // Search
    const getResults = (search) => {
        router.get(
            route("admin.invoices.index", {
                search: search ?? setSearchQuery,
                sort: sort,
                filter: {
                    cause_id: selectedCause,
                    date_range: dateRange
                }
            }),
            {},
            { preserveState: true }
        )
    }

    // Date Picker Change
    const onDateChange = (dates) => {
        if (dates.length === 2) {
            const start = moment(dates[0]).format("YYYY-MM-DD")
            const end = moment(dates[1]).format("YYYY-MM-DD")
            setDateRange(`${start} to ${end}`)
            setRangeLabel("Custom")
        }
    }

    // Date Presets
    const applyDatePreset = (type) => {
        let start = moment();
        let end = moment();

        if (type === 'Custom') {
            setRangeLabel("Custom");
            return;
        }

        switch(type) {
            case 'Today': break;
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
            default: return;
        }

        const rangeString = `${start.format("YYYY-MM-DD")} to ${end.format("YYYY-MM-DD")}`;
        setDateRange(rangeString);
        setRangeLabel(type);
    }

    // Bulk Action Logic
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

    const getSelectedCauseLabel = () => {
        if (selectedCause === "All") return translate("All Causes")
        const found = causes?.find((c) => c.id == selectedCause)
        return found?.content?.title || translate("All Causes")
    }

    // --- Cause Title Lookup Fix ---
    const getCauseTitle = (invoice) => {
        if (invoice.order?.cause?.content?.title) {
            return invoice.order.cause.content.title;
        }
        if (invoice.order?.cause_id) {
            const found = causes.find(c => c.id === invoice.order.cause_id);
            if (found && found.content?.title) {
                return found.content.title;
            }
        }
        return <span className="text-muted small">-</span>;
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

                                        {/* LEFT SIDE: Filters & Bulk Actions */}
                                        <div className="dataTables_heading_left">

                                            {/* 1. Bulk Action (Only if Permission) */}
                                            {hasPermission("invoices.delete") && (
                                                <div className="yoo-group-btn">
                                                    <div className="position-relative">
                                                        <DropDownButton selectedOption={selectedOption} disabled={!markItems.length}>
                                                            <a onClick={() => setSelectedOption("Delete")} className={`dropdown-item ${selectedOption === "Delete" ? "active" : ""}`} href="#">{translate("Delete")}</a>
                                                        </DropDownButton>
                                                    </div>
                                                    <button disabled={!markItems.length} onClick={() => handleBulkAction()} className="btn btn-success btn-sm">Apply</button>
                                                </div>
                                            )}

                                            {/* 2. Cause Filter (Always Visible) */}
                                            <div className="position-relative">
                                                <DropDownButton selectedOption={getSelectedCauseLabel()}>
                                                    <a onClick={() => setSelectedCause("All")} className={`dropdown-item ${selectedCause === "All" ? "active" : ""}`} href="#">{translate("All Causes")}</a>
                                                    {causes && causes.map((cause) => (
                                                        <a key={cause.id} onClick={() => setSelectedCause(cause.id)} className={`dropdown-item ${selectedCause == cause.id ? "active" : ""}`} href="#">{cause.content?.title || "Untitled"}</a>
                                                    ))}
                                                </DropDownButton>
                                            </div>

                                            {/* 3. Date Presets (Always Visible) */}
                                            <div className="position-relative">
                                                <DropDownButton selectedOption={rangeLabel}>
                                                    <a onClick={() => applyDatePreset('Today')} className="dropdown-item" href="#">Today</a>
                                                    <a onClick={() => applyDatePreset('Yesterday')} className="dropdown-item" href="#">Yesterday</a>
                                                    <a onClick={() => applyDatePreset('This Week')} className="dropdown-item" href="#">This Week</a>
                                                    <a onClick={() => applyDatePreset('Last Week')} className="dropdown-item" href="#">Last Week</a>
                                                    <a onClick={() => applyDatePreset('This Month')} className="dropdown-item" href="#">This Month</a>
                                                    <a onClick={() => applyDatePreset('Last Month')} className="dropdown-item" href="#">Last Month</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a onClick={() => applyDatePreset('Custom')} className="dropdown-item" href="#">Custom Range</a>
                                                </DropDownButton>
                                            </div>

                                            {/* 4. Date Picker Input (Always Visible) */}
                                            <div className="position-relative" style={{ minWidth: "200px" }}>
                                                <span className="position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 5, color: '#999' }}>
                                                    <IonIcon icon={calendarOutline} />
                                                </span>
                                                <Flatpickr
                                                    className="form-control pl-4"
                                                    placeholder="Select Range"
                                                    value={dateRange ? dateRange.split(" to ") : []}
                                                    options={{ mode: "range", dateFormat: "Y-m-d" }}
                                                    onChange={onDateChange}
                                                />
                                            </div>

                                            {/* 5. Filter Button (Always Visible) */}
                                            <button onClick={() => getResults(searchQuery)} className="btn btn-success btn-sm">{translate("Filter")}</button>
                                        </div>

                                        {/* RIGHT SIDE: Search */}
                                        <div className="dataTables_heading_right">
                                            <div id="yooDataTable_filter" className="dataTables_filter">
                                                <label>
                                                    <input type="search" placeholder="Search Receipt, Donor..." value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); getResults(e.target.value) }} />
                                                </label>
                                                <button className="dataTables_filter_btn"><IonIcon icon={search} /></button>
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
                                                    <ThSortable width="10%" sort={sort} onSorted={() => getResults(searchQuery)} column="invoice_number">{translate("Receipt No")}</ThSortable>
                                                    <ThSortable width="20%" sort={sort} onSorted={() => getResults(searchQuery)} column="customer_name">{translate("Donor Name")}</ThSortable>
                                                    <ThSortable width="12%" sort={sort} onSorted={() => getResults(searchQuery)} column="payment_date">{translate("Donation Date")}</ThSortable>
                                                    <th width="15%">{translate("Cause")}</th>
                                                    <th width="20%">{translate("Remarks")}</th>
                                                    <ThSortable width="10%" sort={sort} onSorted={() => getResults(searchQuery)} column="total_price">{translate("Amount")}</ThSortable>
                                                    <th width="5%" className="text-center">{translate("PDF")}</th>
                                                    <th width="5%" className="text-center">{translate("Send")}</th>
                                                    {hasPermission("invoices.delete") && (
                                                        <th style={{ width: "5%" }} className="text-center">{translate("Action")}</th>
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
                                                            <div className="yoo-table-medias yoo-style1 text-primary font-weight-bold">
                                                                #{invoice.invoice_number}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="font-weight-bold text-dark">{invoice.customer_name}</span> <br />
                                                            <small className="text-muted d-block">{invoice.customer_email}</small>
                                                            <small className="text-muted d-block">{invoice.customer_phone}</small>

                                                            <div className="d-flex flex-wrap gap-1 mt-1" style={{gap: '5px'}}>
                                                                {invoice.pancard && (
                                                                    <span className="badge badge-light border">PAN: {invoice.pancard}</span>
                                                                )}
                                                                {invoice.order?.is_80g == 1 && (
                                                                    <span className="badge badge-success text-white">80G Benefit</span>
                                                                )}
                                                            </div>
                                                        </td>

                                                        {/* Payment Date */}
                                                        <td>{invoice.payment_date ? moment(invoice.payment_date).format("DD MMM YYYY") : '-'}</td>

                                                        {/* Cause Title Fix */}
                                                        <td>{getCauseTitle(invoice)}</td>

                                                        {/* Inline Remarks Editor */}
                                                        <td>
                                                            <RemarksCell invoice={invoice} canEdit={hasPermission("invoices.edit")} />
                                                        </td>

                                                        <td>
                                                            <strong className="text-success"><Amount amount={invoice.total_price} /></strong>
                                                        </td>

                                                        {/* Download */}
                                                        <td className="text-center">
                                                            <a
                                                                href={route("admin.orders.download.invoice", invoice.order)}
                                                                download
                                                                className="btn btn-sm btn-outline-secondary"
                                                                title={translate("Download Invoice")}
                                                                style={{ padding: '4px 8px' }}
                                                            >
                                                                <IonIcon icon={downloadOutline} style={{ fontSize: '16px' }}/>
                                                            </a>
                                                        </td>

                                                        {/* Resend */}
                                                        <td className="text-center">
                                                            <Link
                                                                href={route("admin.invoices.resend", invoice)}
                                                                method="post"
                                                                as="button"
                                                                className="btn btn-sm btn-outline-secondary"
                                                                title={translate("Resend Receipt")}
                                                                style={{ padding: '4px 8px' }}
                                                            >
                                                                <IonIcon icon={paperPlaneOutline} style={{ fontSize: '16px' }}/>
                                                            </Link>
                                                        </td>

                                                        {hasPermission("invoices.delete") && (
                                                            <td className="text-center">
                                                                <DeleteButton href={route("admin.invoices.destroy", invoice)} />
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
                                        <Link href={link.url} className="page-link" dangerouslySetInnerHTML={{ __html: link.label }} />
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
