import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import { Head, router } from "@inertiajs/react"
import { useState } from "react"
import moment from "moment"

export default function Show({ subscription, can }) {
    const [reason, setReason] = useState("")

    const cancelSubscription = () => {
        router.post(route("admin.monthly.giving.cancel", subscription.id), { reason })
    }

    const deleteSubscription = () => {
        if (window.confirm("Delete this subscription record?")) {
            router.delete(route("admin.monthly.giving.destroy", subscription.id))
        }
    }

    return (
        <AdminLayouts>
            <Head title="Monthly Giving Details" />
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                    <div>
                        <h2 className="mb-1">Subscription Details</h2>
                        <p className="text-muted mb-0">Full subscriber profile and recurring payment timeline.</p>
                    </div>
                    <div className="mt-2 mt-md-0">
                        <span className={`badge ${subscription.status === "active" ? "badge-success" : subscription.status === "cancelled" ? "badge-danger" : "badge-warning"}`}>
                            {subscription.status}
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="yoo-card yoo-style1 p-4 mb-4">
                            <h5 className="mb-3">Subscriber Profile</h5>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Name</div>
                                    <div className="font-weight-bold">{subscription.name}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Email</div>
                                    <div className="font-weight-bold">{subscription.email || "-"}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Mobile</div>
                                    <div className="font-weight-bold">{subscription.mobile || "-"}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Cause</div>
                                    <div className="font-weight-bold">{subscription.cause?.content?.title || "-"}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Monthly Amount</div>
                                    <div className="font-weight-bold">INR {Number(subscription.amount || 0).toLocaleString()}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Total Successful Payments</div>
                                    <div className="font-weight-bold">{subscription.paid_count ?? 0}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">80G Required</div>
                                    <div className="font-weight-bold">{subscription.is_80g ? "Yes" : "No"}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">PAN Card</div>
                                    <div className="font-weight-bold">{subscription.pancard || "-"}</div>
                                </div>
                                <div className="col-12">
                                    <div className="text-muted small">Razorpay Subscription ID</div>
                                    <code style={{ fontSize: "12px" }}>{subscription.razorpay_subscription_id || "-"}</code>
                                </div>
                            </div>
                        </div>

                        <div className="yoo-card yoo-style1 p-4 mb-4">
                            <h5 className="mb-3">Transaction History</h5>
                            <div className="table-responsive">
                                <table className="table table-sm mb-0">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Payment ID</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Method</th>
                                            <th>Paid At</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(subscription.transactions || []).length ? (
                                            subscription.transactions.map((tx) => (
                                                <tr key={tx.id}>
                                                    <td><code style={{ fontSize: "11px" }}>{tx.razorpay_payment_id || "-"}</code></td>
                                                    <td>INR {Number(tx.amount || 0).toLocaleString()}</td>
                                                    <td>{tx.status || "-"}</td>
                                                    <td>{tx.payment_method || "-"}</td>
                                                    <td>{tx.paid_at ? moment(tx.paid_at).format("DD MMM YYYY, hh:mm A") : "-"}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center text-muted py-3">
                                                    No payments recorded yet.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="yoo-card yoo-style1 p-4 mb-4">
                            <h5 className="mb-3">Subscription Timeline</h5>
                            <div className="mb-2">
                                <div className="text-muted small">Created</div>
                                <div>{subscription.created_at ? moment(subscription.created_at).format("DD MMM YYYY, hh:mm A") : "-"}</div>
                            </div>
                            <div className="mb-2">
                                <div className="text-muted small">Started</div>
                                <div>{subscription.started_at ? moment(subscription.started_at).format("DD MMM YYYY, hh:mm A") : "-"}</div>
                            </div>
                            <div className="mb-2">
                                <div className="text-muted small">Last Charge</div>
                                <div>{subscription.last_charge_at ? moment(subscription.last_charge_at).format("DD MMM YYYY, hh:mm A") : "-"}</div>
                            </div>
                            <div className="mb-2">
                                <div className="text-muted small">Next Charge</div>
                                <div>{subscription.next_charge_at ? moment(subscription.next_charge_at).format("DD MMM YYYY, hh:mm A") : "-"}</div>
                            </div>
                            <div>
                                <div className="text-muted small">Cancelled At</div>
                                <div>{subscription.cancelled_at ? moment(subscription.cancelled_at).format("DD MMM YYYY, hh:mm A") : "-"}</div>
                            </div>
                        </div>

                        <div className="yoo-card yoo-style1 p-4">
                            <h5 className="mb-3">Admin Actions</h5>
                            <input className="form-control mb-2" placeholder="Cancel reason" value={reason} onChange={(e) => setReason(e.target.value)} />
                            {can?.edit && <button className="btn btn-warning btn-block mb-2" onClick={cancelSubscription}>Cancel Subscription</button>}
                            {can?.delete && <button className="btn btn-danger btn-block" onClick={deleteSubscription}>Delete Record</button>}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayouts>
    )
}
