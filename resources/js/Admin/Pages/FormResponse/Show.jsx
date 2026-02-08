import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import translate from "@/utils/translate"
import { Head, Link } from "@inertiajs/react"
import { Icon } from "@iconify/react"

export default function Show({ response }) {
    const getResponseData = () => {
        try {
            if (typeof response.response_data === "string") {
                return JSON.parse(response.response_data)
            }
            return response.response_data
        } catch (error) {
            return {}
        }
    }

    const responseData = getResponseData()
    const convertToTitleCase = (str) => str.split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")

    const renderValue = (value) => {
        if (Array.isArray(value)) {
            return (
                <div className="d-flex flex-wrap gap-1">
                    {value.map((v, i) => (
                        <span key={i} className="badge bg-light text-dark border px-2 py-1 fw-normal">{v}</span>
                    ))}
                </div>
            )
        }

        if (typeof value === "string" && (value.startsWith('http') || value.includes('/storage/'))) {
            const isImage = /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(value);
            return (
                <div className="cs-file-card d-flex align-items-center gap-2 p-2 border rounded bg-white">
                    <Icon icon={isImage ? "lucide:image" : "lucide:file-text"} className="text-primary" width="20" />
                    <span className="text-truncate flex-grow-1 small fw-medium">{value.split('/').pop()}</span>
                    <a href={value} target="_blank" rel="noopener noreferrer" className="btn btn-xs btn-light border shadow-sm">
                        <Icon icon="lucide:external-link" width="14" />
                    </a>
                </div>
            );
        }

        return <span className="text-dark-700 fw-medium">{value || "—"}</span>;
    }

    const filteredKeys = responseData ? Object.keys(responseData).filter((k) => k !== "captchaToken") : []

    return (
        <AdminLayouts>
            <Head title="Submission Detail" />
            <div className="container-fluid py-4 cs-admin-wrapper">

                {/* Compact Header */}
                <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-1 small">
                                <li className="breadcrumb-item"><Link href={route('admin.form.response.index')}>{translate("Submissions")}</Link></li>
                                <li className="breadcrumb-item active">#{response.id}</li>
                            </ol>
                        </nav>
                        <h4 className="fw-bold m-0 d-flex align-items-center gap-2">
                            {response.form_name || translate("Form Submission")}
                            <span className="badge bg-soft-success text-success fs-12 fw-normal border border-success-subtle">
                                {translate("Completed")}
                            </span>
                        </h4>
                    </div>
                    <Link href={route('admin.form.response.index')} className="btn btn-outline-dark btn-sm fw-bold px-3">
                        {translate("Close")}
                    </Link>
                </div>

                <div className="row g-3">
                    {/* Main Data Column */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm rounded-3">
                            <div className="card-header bg-white py-3 border-bottom d-flex align-items-center gap-2">
                                <Icon icon="lucide:database" className="text-muted" width="18" />
                                <h6 className="m-0 fw-bold">{translate("Captured Information")}</h6>
                            </div>
                            <div className="card-body p-0">
                                <div className="cs-data-grid">
                                    {filteredKeys.map((key, index) => (
                                        <div className="cs-grid-row d-flex align-items-center border-bottom px-4 py-3" key={index}>
                                            <div className="cs-label-col text-muted small fw-bold text-uppercase" style={{ width: '220px' }}>
                                                {convertToTitleCase(key)}
                                            </div>
                                            <div className="cs-value-col flex-grow-1">
                                                {renderValue(responseData[key])}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Meta Sidebar */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm rounded-3 overflow-hidden mb-3">
                            <div className="card-header bg-white py-3 border-bottom">
                                <h6 className="m-0 fw-bold">{translate("Submission Log")}</h6>
                            </div>
                            <div className="card-body p-4">
                                <div className="mb-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="flex-shrink-0 bg-soft-primary p-2 rounded-circle">
                                            <Icon icon="lucide:calendar" width="20" className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-muted small mb-0">{translate("Submitted On")}</p>
                                            <p className="fw-bold m-0">{new Date(response.created_at).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="flex-shrink-0 bg-soft-info p-2 rounded-circle">
                                            <Icon icon="lucide:mail" width="20" className="text-info" />
                                        </div>
                                        <div>
                                            <p className="text-muted small mb-0">{translate("Notification Sent To")}</p>
                                            <p className="fw-bold m-0">{response.response_from || "N/A"}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-3 border-top">
                                    <button className="btn btn-light w-100 text-danger fw-bold d-flex align-items-center justify-content-center gap-2 border">
                                        <Icon icon="lucide:trash-2" width="16" />
                                        {translate("Delete Response")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .cs-admin-wrapper { background-color: #f8f9fa; min-height: 100vh; }
                .bg-soft-success { background-color: #e6fcf5; }
                .bg-soft-primary { background-color: #f0f7ff; }
                .bg-soft-info { background-color: #f0faff; }
                .text-dark-700 { color: #374151; }
                .cs-grid-row:last-child { border-bottom: none; }
                .cs-grid-row:hover { background-color: #fafafa; }
                .btn-xs { padding: 2px 8px; font-size: 11px; }
                .cs-file-card { max-width: 300px; transition: all 0.2s; }
                .cs-file-card:hover { border-color: #0d6efd !important; }
                .fs-12 { font-size: 12px; }
                .breadcrumb-item + .breadcrumb-item::before { content: "›"; }
                .card { box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1) !important; }
            `}} />
        </AdminLayouts>
    )
}
