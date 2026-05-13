import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import { Head, Link, router } from "@inertiajs/react"
import { useState } from "react"
import moment from "moment"

export default function Index({ subscriptions, search, filter, stats, can }) {
    const [searchText, setSearchText] = useState(search || "")
    const [status, setStatus] = useState(filter?.status || "all")

    const applyFilter = () => {
        router.get(route("admin.monthly.giving.index"), { search: searchText, filter: { status } }, { preserveState: true })
    }

    const clearFilter = () => {
        setSearchText("")
        setStatus("all")
        router.get(route("admin.monthly.giving.index"), { search: "", filter: { status: "all" } }, { preserveState: true })
    }

    const exportHref = route("admin.monthly.giving.export", { search: searchText, filter: { status } })
    const statusClasses = {
        active: "badge badge-success",
        cancelled: "badge badge-danger",
        created: "badge badge-warning",
        pending: "badge badge-info",
    }

    return (
        <AdminLayouts>
            <Head title="Monthly Giving" />
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                    <div>
                        <h2 className="mb-1">Monthly Giving</h2>
                        <p className="text-muted mb-0">Track subscriptions, recurring payments, and cancellations.</p>
                    </div>
                    {can?.export && (
                        <a href={exportHref} className="btn btn-outline-success mt-2 mt-md-0">
                            Export CSV
                        </a>
                    )}
                </div>

                <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                        <div className="yoo-card yoo-style1 p-3 h-100 border-left border-success" style={{ borderLeftWidth: "5px" }}>
                            <div className="text-muted small">Active Subscriptions</div>
                            <h3 className="mb-0">{stats?.active_subscriptions || 0}</h3>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="yoo-card yoo-style1 p-3 h-100 border-left border-danger" style={{ borderLeftWidth: "5px" }}>
                            <div className="text-muted small">Cancelled Subscriptions</div>
                            <h3 className="mb-0">{stats?.cancelled_subscriptions || 0}</h3>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="yoo-card yoo-style1 p-3 h-100 border-left border-primary" style={{ borderLeftWidth: "5px" }}>
                            <div className="text-muted small">Recurring Monthly Volume</div>
                            <h3 className="mb-0">INR {Number(stats?.monthly_volume || 0).toLocaleString()}</h3>
                        </div>
                    </div>
                </div>

                <div className="yoo-card yoo-style1 p-3 mb-4">
                    <div className="row align-items-end">
                        <div className="col-md-5 mb-2">
                            <label className="small text-muted mb-1">Search</label>
                            <input
                                className="form-control"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && applyFilter()}
                                placeholder="Search by name, email, mobile, Razorpay ID"
                            />
                        </div>
                        <div className="col-md-3 mb-2">
                            <label className="small text-muted mb-1">Status</label>
                            <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="all">All Status</option>
                                <option value="created">Created</option>
                                <option value="active">Active</option>
                                <option value="pending">Pending</option>
                                <option value="cancelled">Cancelled</option>
                                <option value="failed">Failed</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-2 d-flex gap-2">
                            <button className="btn btn-primary mr-2" onClick={applyFilter}>Apply Filter</button>
                            <button className="btn btn-light border" onClick={clearFilter}>Clear</button>
                        </div>
                    </div>
                </div>

                <div className="yoo-card yoo-style1">
                    <div className="table-responsive">
                        <table className="table mb-0">
                            <thead className="thead-light">
                                <tr>
                                    <th>Subscriber</th>
                                    <th>Cause</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Payments</th>
                                    <th>Razorpay Subscription</th>
                                    <th>Created</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscriptions?.data?.length ? (
                                    subscriptions.data.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="font-weight-bold">{item.name}</div>
                                                <div className="text-muted small">{item.email || "-"}</div>
                                                <div className="text-muted small">{item.mobile || "-"}</div>
                                            </td>
                                            <td>{item.cause?.content?.title || "-"}</td>
                                            <td>
                                                <span className="font-weight-bold">INR {Number(item.amount || 0).toLocaleString()}</span>
                                                <div className="text-muted small">{item.currency || "INR"} / month</div>
                                            </td>
                                            <td>
                                                <span className={statusClasses[item.status] || "badge badge-secondary"}>{item.status || "-"}</span>
                                            </td>
                                            <td>{item.paid_count ?? 0}</td>
                                            <td>
                                                <code style={{ fontSize: "11px" }}>{item.razorpay_subscription_id || "-"}</code>
                                            </td>
                                            <td>{item.created_at ? moment(item.created_at).format("DD MMM YYYY, hh:mm A") : "-"}</td>
                                            <td className="text-right">
                                                {can?.show && (
                                                    <Link href={route("admin.monthly.giving.show", item.id)} className="btn btn-sm btn-outline-primary">
                                                        View
                                                    </Link>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="text-center text-muted py-4">
                                            No subscriptions found for current filters.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayouts>
    )
}
