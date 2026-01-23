import { Head, Link, router } from "@inertiajs/react"
import {
    search,
    documentTextOutline,
    trashOutline,
    downloadOutline,
    paperPlaneOutline,
    calendarOutline,
    barChartOutline,
    cashOutline,
    cloudDownloadOutline,
    checkmarkCircleOutline,
    refreshOutline,
    alertCircleOutline,
    timeOutline
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

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const StatCard = ({ title, value, subtext, icon, gradient }) => (
    <div
        className="yoo-card yoo-style1 h-100 position-relative overflow-hidden border-0 shadow-sm"
        style={{ background: gradient, color: "#fff", borderRadius: "15px" }}
    >
        <div className="yoo-card-body p-4 position-relative" style={{ zIndex: 2 }}>
            <div className="d-flex align-items-center mb-1 text-white">
                <div
                    className="d-flex align-items-center justify-content-center mr-3"
                    style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(5px)"
                    }}
                >
                    <IonIcon icon={icon} style={{ fontSize: "22px", color: "#fff" }} />
                </div>
                <h5 className="mb-0 font-weight-normal" style={{ fontSize: "1.1rem", opacity: 0.9, color: "#fff" }}>
                    {title}
                </h5>
            </div>
            <h2 className="mb-0 mt-3 font-weight-bold" style={{ fontSize: "2rem" }}>
                {value}
            </h2>
            <div
                className="mt-2"
                style={{
                    fontSize: "0.85rem",
                    opacity: 0.8,
                    background: "rgba(0,0,0,0.1)",
                    display: "inline-block",
                    padding: "2px 8px",
                    borderRadius: "4px"
                }}
            >
                {subtext}
            </div>
        </div>
        {/* Decorative Background Icon */}
        <div className="position-absolute" style={{ right: "-20px", top: "-20px", opacity: 0.1, transform: "rotate(15deg)" }}>
            <IonIcon icon={icon} style={{ fontSize: "180px", color: "#fff" }} />
        </div>
    </div>
)

const RemarksCell = ({ invoice, canEdit }) => {
    const [value, setValue] = useState(invoice.order?.order_notes || "")
    const [originalValue, setOriginalValue] = useState(invoice.order?.order_notes || "")

    useEffect(() => {
        const note = invoice.order?.order_notes || ""
        setValue(note)
        setOriginalValue(note)
    }, [invoice.id])

    const handleBlur = () => {
        if (value !== originalValue) {
            router.post(
                route("admin.invoices.update.remarks", invoice.id),
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

const ExportStatusCard = ({ exportData }) => {
    if (!exportData) return null

    const refreshStatus = () => {
        router.reload({ only: ["latest_export"] })
    }

    const isProcessing = exportData.status === "processing"
    const isReady = exportData.status === "completed"
    const isFailed = exportData.status === "failed"

    return (
        <div className="col-12 mb-4">
            <div
                className={`yoo-card yoo-style1 border-0 shadow-sm p-3 d-flex align-items-center justify-content-between`}
                style={{
                    background: isProcessing ? "#fff8e1" : isReady ? "#e8f5e9" : "#ffebee",
                    borderLeft: `5px solid ${isProcessing ? "#ffc107" : isReady ? "#4caf50" : "#f44336"}`,
                    borderRadius: "8px"
                }}
            >
                <div className="d-flex align-items-center">
                    <div
                        className="mr-3 d-flex align-items-center justify-content-center"
                        style={{
                            width: "40px",
                            height: "40px",
                            background: "#fff",
                            borderRadius: "50%",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
                        }}
                    >
                        {isProcessing && <div className="spinner-border spinner-border-sm text-warning" role="status"></div>}
                        {isReady && <IonIcon icon={checkmarkCircleOutline} className="text-success" style={{ fontSize: "20px" }} />}
                        {isFailed && <IonIcon icon={alertCircleOutline} className="text-danger" style={{ fontSize: "20px" }} />}
                    </div>
                    <div>
                        <h6 className="mb-0 font-weight-bold" style={{ color: "#333" }}>
                            {isProcessing && "Generating Invoice Bundle..."}
                            {isReady && "Download Ready"}
                            {isFailed && "Export Failed"}
                        </h6>
                        <small className="text-muted">
                            {isProcessing && "We are creating your ZIP file in the background."}
                            {isReady && `Generated ${moment(exportData.updated_at).fromNow()}`}
                            {isReady && <span>({exportData.file_name})</span>}
                            {isFailed && "Something went wrong. Please try again."}
                        </small>
                    </div>
                </div>

                <div>
                    {isProcessing && (
                        <button onClick={refreshStatus} className="btn btn-sm btn-light border d-flex align-items-center" style={{ gap: "5px" }}>
                            <IonIcon icon={refreshOutline} /> Check Status
                        </button>
                    )}
                    {isReady && (
                        <a
                            href={exportData.download_url}
                            target="_blank"
                            className="btn btn-success btn-sm d-flex align-items-center shadow-sm text-white"
                        >
                            <IonIcon icon={cloudDownloadOutline} className="mr-2" /> Download ZIP
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function Index({ invoices, sort, filter, causes, total_turnover, chart_data, latest_export }) {
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
        let start = moment()
        let end = moment()

        if (type === "Custom") {
            setRangeLabel("Custom")
            return
        }

        switch (type) {
            case "Today":
                break
            case "Yesterday":
                start = moment().subtract(1, "days")
                end = moment().subtract(1, "days")
                break
            case "This Week":
                start = moment().startOf("week")
                end = moment().endOf("week")
                break
            case "Last Week":
                start = moment().subtract(1, "week").startOf("week")
                end = moment().subtract(1, "week").endOf("week")
                break
            case "This Month":
                start = moment().startOf("month")
                end = moment().endOf("month")
                break
            case "Last Month":
                start = moment().subtract(1, "month").startOf("month")
                end = moment().subtract(1, "month").endOf("month")
                break
            default:
                return
        }

        const rangeString = `${start.format("YYYY-MM-DD")} to ${end.format("YYYY-MM-DD")}`
        setDateRange(rangeString)
        setRangeLabel(type)
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
        let method = "delete"

        if (selectedOption === "Delete") {
            confirmMessage = "You want to delete selected receipts?"
            action = "admin.invoices.bulk.delete"
            method = "delete"
        } else if (selectedOption === "Download ZIP") {
            router.post(
                route("admin.invoices.bulk.download"),
                {
                    ids: markItems.join(",")
                },
                {
                    onSuccess: () => {
                        setMarkItems([])
                        setIsMarkAll(false)
                    }
                }
            )
            return
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

    const getCauseTitle = (invoice) => {
        if (invoice.order?.cause?.content?.title) {
            return invoice.order.cause.content.title
        }
        if (invoice.order?.cause_id) {
            const found = causes.find((c) => c.id === invoice.order.cause_id)
            if (found && found.content?.title) {
                return found.content.title
            }
        }
        return <span className="text-muted small">-</span>
    }

    // Chart Options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: { display: false },
            tooltip: {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                titleColor: "#333",
                bodyColor: "#666",
                borderColor: "#eee",
                borderWidth: 1,
                padding: 10,
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || ""
                        if (label) {
                            label += ": "
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(context.parsed.y)
                        }
                        return label
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: "#f5f5f5", borderDash: [5, 5] },
                ticks: { font: { size: 11 }, color: "#999" },
                border: { display: false }
            },
            x: {
                grid: { display: false },
                ticks: { font: { size: 11 }, color: "#999" },
                border: { display: false }
            }
        }
    }

    const chartDataFormatted = {
        labels: chart_data?.map((item) => moment(item.date).format("DD MMM")) || [],
        datasets: [
            {
                label: translate("Turnover"),
                data: chart_data?.map((item) => item.total_amount) || [],
                borderColor: "#4361ee",
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200)
                    gradient.addColorStop(0, "rgba(67, 97, 238, 0.3)")
                    gradient.addColorStop(1, "rgba(67, 97, 238, 0.0)")
                    return gradient
                },
                pointBackgroundColor: "#4361ee",
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: 3,
                pointHoverRadius: 5,
                tension: 0.4,
                fill: true
            }
        ]
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

                    {latest_export && (
                        <div className="row">
                            <ExportStatusCard exportData={latest_export} />
                        </div>
                    )}
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <StatCard
                                title={translate("Total Turnover")}
                                value={<Amount amount={total_turnover || 0} />}
                                subtext={dateRange ? `Period: ${dateRange}` : translate("All Time Data")}
                                icon={cashOutline}
                                gradient="linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" // Deep Purple/Dark
                            />
                        </div>

                        {/* Chart Card */}
                        <div className="col-lg-8 mb-4">
                            <div className="yoo-card yoo-style1 h-100 border-0 shadow-sm" style={{ borderRadius: "15px" }}>
                                <div className="yoo-card-heading d-flex justify-content-between align-items-center pt-3 px-4">
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="d-flex align-items-center justify-content-center mr-2"
                                            style={{ width: "35px", height: "35px", background: "#eef2ff", borderRadius: "10px" }}
                                        >
                                            <IonIcon icon={barChartOutline} style={{ color: "#4361ee" }} />
                                        </div>
                                        <h2 className="yoo-card-title font-weight-bold" style={{ fontSize: "1.1rem" }}>
                                            {translate("Donation Trends")}
                                        </h2>
                                    </div>
                                    <div className="badge badge-light px-3 py-2">{chart_data?.length || 0} Days Active</div>
                                </div>
                                <div className="yoo-card-body px-4 pb-4">
                                    <div style={{ height: "260px" }}>
                                        {chart_data && chart_data.length > 0 ? (
                                            <Line options={chartOptions} data={chartDataFormatted} />
                                        ) : (
                                            <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted">
                                                <IonIcon icon={barChartOutline} style={{ fontSize: "40px", opacity: 0.2, marginBottom: "10px" }} />
                                                <span>{translate("No transaction data for this period")}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --- END STATS SECTION --- */}

                    <div className="yoo-card yoo-style1 border-0 shadow-sm" style={{ borderRadius: "15px" }}>
                        <div className="yoo-card-heading px-4 pt-4 border-bottom-0">
                            <div className="yoo-card-heading-left">
                                <h2 className="yoo-card-title d-flex align-items-center">
                                    <span className="yoo-card-title-icon yoo-blue-bg mr-2">
                                        <IonIcon icon={documentTextOutline} style={{ width: "16px", height: "16px" }} />
                                    </span>
                                    {translate("Receipts List")}
                                </h2>
                            </div>
                        </div>
                        <div className="yoo-card-body px-4">
                            <div className="">
                                <div className="yoo-height-b15 yoo-height-lg-b15" />
                                <div className="yooDataTableWrap">
                                    <div className="dataTables_heading">
                                        {/* LEFT SIDE: Filters & Bulk Actions */}
                                        <div className="dataTables_heading_left">
                                            {/* 1. Bulk Action */}
                                            <div className="yoo-group-btn">
                                                <div className="position-relative">
                                                    <DropDownButton selectedOption={selectedOption} disabled={!markItems.length}>
                                                        {hasPermission("invoices.delete") && (
                                                            <a
                                                                onClick={() => setSelectedOption("Delete")}
                                                                className={`dropdown-item ${selectedOption === "Delete" ? "active" : ""}`}
                                                                href="#"
                                                            >
                                                                <IonIcon icon={trashOutline} className="mr-2" /> {translate("Delete")}
                                                            </a>
                                                        )}
                                                        <a
                                                            onClick={() => setSelectedOption("Download ZIP")}
                                                            className={`dropdown-item ${selectedOption === "Download ZIP" ? "active" : ""}`}
                                                            href="#"
                                                        >
                                                            <IonIcon icon={cloudDownloadOutline} className="mr-2" /> {translate("Download ZIP")}
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

                                            {/* 2. Cause Filter (Always Visible) */}
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

                                            {/* 3. Date Presets (Always Visible) */}
                                            <div className="position-relative">
                                                <DropDownButton selectedOption={rangeLabel}>
                                                    <a onClick={() => applyDatePreset("Today")} className="dropdown-item" href="#">
                                                        Today
                                                    </a>
                                                    <a onClick={() => applyDatePreset("Yesterday")} className="dropdown-item" href="#">
                                                        Yesterday
                                                    </a>
                                                    <a onClick={() => applyDatePreset("This Week")} className="dropdown-item" href="#">
                                                        This Week
                                                    </a>
                                                    <a onClick={() => applyDatePreset("Last Week")} className="dropdown-item" href="#">
                                                        Last Week
                                                    </a>
                                                    <a onClick={() => applyDatePreset("This Month")} className="dropdown-item" href="#">
                                                        This Month
                                                    </a>
                                                    <a onClick={() => applyDatePreset("Last Month")} className="dropdown-item" href="#">
                                                        Last Month
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <a onClick={() => applyDatePreset("Custom")} className="dropdown-item" href="#">
                                                        Custom Range
                                                    </a>
                                                </DropDownButton>
                                            </div>

                                            {/* 4. Date Picker Input (Always Visible) */}
                                            <div className="position-relative" style={{ minWidth: "200px" }}>
                                                <span
                                                    className="position-absolute"
                                                    style={{ left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 5, color: "#999" }}
                                                >
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
                                            <button onClick={() => getResults(searchQuery)} className="btn btn-success btn-sm">
                                                {translate("Filter")}
                                            </button>
                                        </div>

                                        {/* RIGHT SIDE: Search */}
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
                                                    <ThSortable
                                                        width="10%"
                                                        sort={sort}
                                                        onSorted={() => getResults(searchQuery)}
                                                        column="invoice_number"
                                                    >
                                                        {translate("Receipt No")}
                                                    </ThSortable>
                                                    <ThSortable
                                                        width="20%"
                                                        sort={sort}
                                                        onSorted={() => getResults(searchQuery)}
                                                        column="customer_name"
                                                    >
                                                        {translate("Donor Name")}
                                                    </ThSortable>
                                                    <ThSortable
                                                        width="12%"
                                                        sort={sort}
                                                        onSorted={() => getResults(searchQuery)}
                                                        column="payment_date"
                                                    >
                                                        {translate("Donation Date")}
                                                    </ThSortable>
                                                    <th width="15%">{translate("Cause")}</th>
                                                    <th width="20%">{translate("Remarks")}</th>
                                                    <ThSortable width="10%" sort={sort} onSorted={() => getResults(searchQuery)} column="total_price">
                                                        {translate("Amount")}
                                                    </ThSortable>
                                                    <th width="5%" className="text-center">
                                                        {translate("PDF")}
                                                    </th>
                                                    <th width="5%" className="text-center">
                                                        {translate("Send")}
                                                    </th>
                                                    {hasPermission("invoices.delete") && (
                                                        <th style={{ width: "5%" }} className="text-center">
                                                            {translate("Action")}
                                                        </th>
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
                                                            <div className="d-flex flex-wrap gap-1 mt-1" style={{ gap: "5px" }}>
                                                                {invoice.pancard && (
                                                                    <span className="badge badge-light border">PAN: {invoice.pancard}</span>
                                                                )}
                                                                {invoice.order?.is_80g == 1 && (
                                                                    <span className="badge badge-success text-white">80G Benefit</span>
                                                                )}
                                                            </div>
                                                        </td>

                                                        {/* Payment Date */}
                                                        <td>{invoice.payment_date ? moment(invoice.payment_date).format("DD MMM YYYY") : "-"}</td>

                                                        {/* Cause Title Fix */}
                                                        <td>{getCauseTitle(invoice)}</td>

                                                        {/* Inline Remarks Editor */}
                                                        <td>
                                                            <RemarksCell invoice={invoice} canEdit={hasPermission("invoices.edit")} />
                                                        </td>

                                                        <td>
                                                            <strong className="text-success">
                                                                <Amount amount={invoice.total_price} />
                                                            </strong>
                                                        </td>

                                                        {/* Download */}
                                                        <td className="text-center">
                                                            <a
                                                                href={route("admin.orders.download.invoice", invoice.order)}
                                                                download
                                                                className="btn btn-sm btn-outline-secondary"
                                                                title={translate("Download Invoice")}
                                                                style={{ padding: "4px 8px" }}
                                                            >
                                                                <IonIcon icon={downloadOutline} style={{ fontSize: "16px" }} />
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
                                                                style={{ padding: "4px 8px" }}
                                                            >
                                                                <IonIcon icon={paperPlaneOutline} style={{ fontSize: "16px" }} />
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
