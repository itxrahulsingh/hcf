import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import { Link, Head, usePage } from "@inertiajs/react"
import gravatarUrl from "gravatar-url"
import translate from "@/utils/translate"
import { Icon } from "@iconify/react"
import Amount from "@/Components/Amount"
import moment from "moment"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

export default function Dashboard() {
    const {
        subscriber_count,
        cause_count,
        total_raised,
        month_raised,
        donation_count,
        pending_donations,
        unique_donors,
        average_donation,
        donation_trend,
        payment_breakdown,
        donation_health,
        recent_donations,
        top_causes,
        recent_inquiries,
    } = usePage().props

    const getAvatar = (email) => gravatarUrl(email || "default", { size: 50, default: "mp" })

    const trendLabels = donation_trend?.map((item) => item.date) || []
    const trendAmounts = donation_trend?.map((item) => Number(item.total || 0)) || []
    const trendCounts = donation_trend?.map((item) => Number(item.donations || 0)) || []

    const chartData = {
        labels: trendLabels,
        datasets: [
            {
                fill: true,
                label: "Raised",
                data: trendAmounts,
                borderColor: "#0f766e",
                borderWidth: 2.5,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx
                    const gradient = ctx.createLinearGradient(0, 0, 0, 280)
                    gradient.addColorStop(0, "rgba(15, 118, 110, 0.24)")
                    gradient.addColorStop(1, "rgba(15, 118, 110, 0.02)")
                    return gradient
                },
                tension: 0.35,
                pointRadius: 0,
                pointHoverRadius: 5,
                pointBackgroundColor: "#0f766e",
            },
        ],
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#111827",
                titleColor: "#fff",
                bodyColor: "#e5e7eb",
                padding: 12,
                cornerRadius: 12,
                displayColors: false,
                callbacks: {
                    label: (context) => `Raised: ${context.parsed.y}`,
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "#64748b", maxTicksLimit: 8 },
            },
            y: {
                grid: { color: "rgba(148, 163, 184, 0.16)" },
                border: { display: false },
                ticks: { color: "#94a3b8" },
            },
        },
    }

    const currentTotal = Number(donation_health?.current_total || 0)
    const previousTotal = Number(donation_health?.previous_total || 0)
    const growth = previousTotal > 0 ? (((currentTotal - previousTotal) / previousTotal) * 100).toFixed(1) : null
    const topCausePeak = Math.max(...((top_causes || []).map((cause) => Number(cause.raised_total || 0))), 1)
    const paymentTotal = (payment_breakdown || []).reduce((sum, item) => sum + Number(item.total || 0), 0)

    const StatCard = ({ title, value, subtitle, icon, tone = "teal" }) => (
        <div className="col-12 col-md-6 col-xl-3">
            <div className={`dashboard-stat dashboard-stat-${tone}`}>
                <div className="dashboard-stat-icon">
                    <Icon icon={icon} width="22" />
                </div>
                <div className="dashboard-stat-copy">
                    <div className="dashboard-stat-title">{title}</div>
                    <div className="dashboard-stat-value">{value}</div>
                    <div className="dashboard-stat-subtitle">{subtitle}</div>
                </div>
            </div>
        </div>
    )

    return (
        <AdminLayouts>
            <Head title="Dashboard" />

            <div className="dashboard-shell">
                <div className="dashboard-hero">
                    <div>
                        <div className="dashboard-eyebrow">Donation analytics</div>
                        <h1 className="dashboard-title">Fundraising dashboard</h1>
                        <p className="dashboard-subtitle">
                            Live donation health, campaign momentum, and donor activity for {moment().format("MMMM YYYY")}.
                        </p>
                    </div>
                    <div className="dashboard-hero-actions">
                        <div className="dashboard-date-pill">
                            <Icon icon="ion:calendar-outline" />
                            <span>{moment().format("MMMM Do, YYYY")}</span>
                        </div>
                        <Link href={route("admin.causes.create")} className="dashboard-primary-action">
                            <Icon icon="ion:add-circle-outline" width="18" />
                            <span>Create Cause</span>
                        </Link>
                    </div>
                </div>

                <div className="row g-4 mb-4">
                    <StatCard
                        title={translate("Total Funds Raised")}
                        value={<Amount amount={total_raised} />}
                        subtitle={`${donation_count || 0} successful donations`}
                        icon="ion:wallet-outline"
                    />
                    <StatCard
                        title={translate("This Month")}
                        value={<Amount amount={month_raised} />}
                        subtitle={growth === null ? "First reporting month" : `${growth}% vs last month`}
                        icon="ion:trending-up-outline"
                        tone="amber"
                    />
                    <StatCard
                        title={translate("Unique Donors")}
                        value={unique_donors || 0}
                        subtitle={`${pending_donations || 0} payments pending`}
                        icon="ion:people-outline"
                        tone="blue"
                    />
                    <StatCard
                        title={translate("Average Gift")}
                        value={<Amount amount={average_donation} />}
                        subtitle={`${cause_count || 0} active causes, ${subscriber_count || 0} subscribers`}
                        icon="ion:gift-outline"
                        tone="rose"
                    />
                </div>

                <div className="row g-4">
                    <div className="col-xl-8">
                        <div className="dashboard-panel dashboard-gradient-panel mb-4">
                            <div className="dashboard-panel-head">
                                <div>
                                    <div className="dashboard-panel-title">30-day donation trend</div>
                                    <div className="dashboard-panel-note">Raised amount over the last 30 days with real order data</div>
                                </div>
                                <div className="dashboard-mini-kpis">
                                    <div>
                                        <span>Days tracked</span>
                                        <strong>{donation_trend?.length || 0}</strong>
                                    </div>
                                    <div>
                                        <span>Total gifts</span>
                                        <strong>{trendCounts.reduce((sum, item) => sum + item, 0)}</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-chart-wrap">
                                <Line options={chartOptions} data={chartData} />
                            </div>
                        </div>

                        <div className="dashboard-panel mb-4">
                            <div className="dashboard-panel-head">
                                <div>
                                    <div className="dashboard-panel-title">Recent donations</div>
                                    <div className="dashboard-panel-note">Latest successful and pending donation orders</div>
                                </div>
                                <Link href={route("admin.orders.index")} className="dashboard-inline-link">
                                    View all
                                </Link>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-middle mb-0 dashboard-table">
                                    <thead>
                                        <tr>
                                            <th>Donor</th>
                                            <th>Cause</th>
                                            <th>Method</th>
                                            <th>Amount</th>
                                            <th className="text-end">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(recent_donations || []).map((order) => (
                                            <tr key={order.id}>
                                                <td>
                                                    <div className="dashboard-donor-cell">
                                                        <img
                                                            src={getAvatar(order.customer_email)}
                                                            className="dashboard-avatar"
                                                            width="42"
                                                            height="42"
                                                            alt=""
                                                            loading="lazy"
                                                            decoding="async"
                                                        />
                                                        <div>
                                                            <div className="fw-semibold text-dark">{order.customer_name || "Anonymous"}</div>
                                                            <div className="dashboard-muted-copy">{moment(order.created_at).fromNow()}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dashboard-chip">{order.cause?.content?.title || "General Donation"}</div>
                                                </td>
                                                <td className="text-capitalize">{order.payment_method || "N/A"}</td>
                                                <td className="fw-semibold">
                                                    <Amount amount={order.total_price} />
                                                </td>
                                                <td className="text-end">
                                                    <span className={`dashboard-status ${Number(order.payment_status) === 2 ? "is-paid" : "is-pending"}`}>
                                                        {Number(order.payment_status) === 2 ? "Paid" : "Pending"}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                        {(!recent_donations || recent_donations.length === 0) && (
                                            <tr>
                                                <td colSpan="5" className="text-center py-5 text-secondary">
                                                    No donation activity found yet.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="dashboard-panel mb-4">
                            <div className="dashboard-panel-head">
                                <div>
                                    <div className="dashboard-panel-title">Campaign performance</div>
                                    <div className="dashboard-panel-note">Top causes ranked by amount raised</div>
                                </div>
                            </div>
                            <div className="dashboard-stack">
                                {(top_causes || []).map((cause, index) => (
                                    <div key={cause.id || index} className="dashboard-cause-row">
                                        <div className="dashboard-cause-copy">
                                            <div className="dashboard-rank">0{index + 1}</div>
                                            <div>
                                                <div className="fw-semibold text-dark">{cause.content?.title || "Untitled Cause"}</div>
                                                <div className="dashboard-muted-copy">
                                                    {cause.donations_count || 0} donations • <Amount amount={cause.raised_total || 0} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dashboard-progress">
                                            <span
                                                className="dashboard-progress-bar"
                                                style={{ width: `${Math.max((Number(cause.raised_total || 0) / topCausePeak) * 100, 8)}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                                {(!top_causes || top_causes.length === 0) && <div className="text-center text-secondary py-4">No cause performance data yet.</div>}
                            </div>
                        </div>

                        <div className="dashboard-panel mb-4">
                            <div className="dashboard-panel-head">
                                <div>
                                    <div className="dashboard-panel-title">Payment mix</div>
                                    <div className="dashboard-panel-note">Successful donations by payment method</div>
                                </div>
                            </div>
                            <div className="dashboard-stack">
                                {(payment_breakdown || []).map((item) => {
                                    const total = Number(item.total || 0)
                                    const share = paymentTotal > 0 ? (total / paymentTotal) * 100 : 0

                                    return (
                                        <div key={item.payment_method} className="dashboard-payment-row">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div className="text-capitalize fw-semibold text-dark">{item.payment_method || "unknown"}</div>
                                                <div className="dashboard-muted-copy">
                                                    <Amount amount={total} /> • {item.donations} donations
                                                </div>
                                            </div>
                                            <div className="dashboard-progress is-soft">
                                                <span className="dashboard-progress-bar is-dark" style={{ width: `${Math.max(share, 6)}%` }} />
                                            </div>
                                        </div>
                                    )
                                })}
                                {(!payment_breakdown || payment_breakdown.length === 0) && (
                                    <div className="text-center text-secondary py-4">No payment method data available.</div>
                                )}
                            </div>
                        </div>

                        <div className="dashboard-panel">
                            <div className="dashboard-panel-head">
                                <div>
                                    <div className="dashboard-panel-title">Inbox pulse</div>
                                    <div className="dashboard-panel-note">Newest form responses waiting for review</div>
                                </div>
                                <div className="dashboard-badge">{recent_inquiries?.length || 0} open</div>
                            </div>
                            <div className="dashboard-stack">
                                {(recent_inquiries || []).map((inq) => (
                                    <Link key={inq.id} href={route("admin.form.response.show", inq)} className="dashboard-inquiry-card">
                                        <div className="dashboard-inquiry-head">
                                            <div className="dashboard-inquiry-avatar">
                                                {inq.response_data?.your_full_name?.charAt(0) || "?"}
                                            </div>
                                            <div>
                                                <div className="fw-semibold text-dark">{inq.response_data?.your_full_name || "Unknown"}</div>
                                                <div className="dashboard-muted-copy">{moment(inq.created_at).fromNow()}</div>
                                            </div>
                                        </div>
                                        <div className="dashboard-inquiry-body">
                                            {inq.response_data?.message || "New message received."}
                                        </div>
                                    </Link>
                                ))}
                                {(!recent_inquiries || recent_inquiries.length === 0) && (
                                    <div className="text-center text-secondary py-4">Inbox is clear.</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .dashboard-shell {
                    min-height: 100vh;
                    padding: 32px 16px 48px;
                    background:
                        radial-gradient(circle at top left, rgba(20, 184, 166, 0.12), transparent 28%),
                        radial-gradient(circle at top right, rgba(251, 191, 36, 0.12), transparent 24%),
                        linear-gradient(180deg, #f7fafc 0%, #eef4f7 100%);
                }
                .dashboard-hero {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 28px;
                    padding: 28px;
                    border: 1px solid rgba(148, 163, 184, 0.14);
                    border-radius: 28px;
                    background: linear-gradient(135deg, #0f172a 0%, #12324a 45%, #155e75 100%);
                    color: #f8fafc;
                    box-shadow: 0 22px 60px rgba(15, 23, 42, 0.16);
                }
                .dashboard-eyebrow {
                    font-size: 12px;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(226, 232, 240, 0.72);
                    margin-bottom: 12px;
                }
                .dashboard-title {
                    margin: 0;
                    font-size: 34px;
                    line-height: 1.05;
                    letter-spacing: -0.04em;
                    font-weight: 800;
                    color: #fff;
                    text-transform: uppercase;
                }
                .dashboard-subtitle {
                    margin: 12px 0 0;
                    max-width: 640px;
                    color: rgba(226, 232, 240, 0.82);
                }
                .dashboard-hero-actions {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                }
                .dashboard-date-pill,
                .dashboard-primary-action {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border-radius: 999px;
                    padding: 11px 16px;
                    font-weight: 600;
                    text-decoration: none;
                }
                .dashboard-date-pill {
                    background: rgba(255, 255, 255, 0.1);
                    color: #e2e8f0;
                    border: 1px solid rgba(255, 255, 255, 0.14);
                }
                .dashboard-primary-action {
                    background: #f8fafc;
                    color: #0f172a;
                }
                .dashboard-stat {
                    height: 100%;
                    display: flex;
                    gap: 16px;
                    align-items: flex-start;
                    padding: 22px;
                    border-radius: 24px;
                    border: 1px solid rgba(148, 163, 184, 0.16);
                    background: rgba(255, 255, 255, 0.88);
                    backdrop-filter: blur(12px);
                    box-shadow: 0 14px 40px rgba(15, 23, 42, 0.05);
                }
                .dashboard-stat-icon {
                    width: 52px;
                    height: 52px;
                    border-radius: 18px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #0f172a;
                }
                .dashboard-stat-teal .dashboard-stat-icon { background: rgba(20, 184, 166, 0.16); color: #115e59; }
                .dashboard-stat-amber .dashboard-stat-icon { background: rgba(251, 191, 36, 0.18); color: #92400e; }
                .dashboard-stat-blue .dashboard-stat-icon { background: rgba(59, 130, 246, 0.14); color: #1d4ed8; }
                .dashboard-stat-rose .dashboard-stat-icon { background: rgba(244, 63, 94, 0.14); color: #be123c; }
                .dashboard-stat-title {
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    color: #64748b;
                    margin-bottom: 8px;
                }
                .dashboard-stat-value {
                    font-size: 28px;
                    font-weight: 800;
                    line-height: 1.1;
                    color: #0f172a;
                }
                .dashboard-stat-subtitle {
                    margin-top: 8px;
                    color: #64748b;
                    font-size: 13px;
                }
                .dashboard-panel {
                    border-radius: 24px;
                    border: 1px solid rgba(148, 163, 184, 0.16);
                    background: rgba(255, 255, 255, 0.94);
                    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.06);
                    overflow: hidden;
                }
                .dashboard-gradient-panel {
                    background:
                        linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(240, 249, 255, 0.96)),
                        linear-gradient(135deg, rgba(15, 118, 110, 0.06), rgba(59, 130, 246, 0.06));
                }
                .dashboard-panel-head {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 14px;
                    padding: 22px 22px 18px;
                }
                .dashboard-panel-title {
                    font-size: 18px;
                    font-weight: 700;
                    color: #0f172a;
                }
                .dashboard-panel-note {
                    margin-top: 4px;
                    font-size: 13px;
                    color: #64748b;
                }
                .dashboard-mini-kpis {
                    display: flex;
                    gap: 18px;
                    flex-wrap: wrap;
                }
                .dashboard-mini-kpis span {
                    display: block;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #64748b;
                }
                .dashboard-mini-kpis strong {
                    display: block;
                    margin-top: 4px;
                    font-size: 18px;
                    color: #0f172a;
                }
                .dashboard-chart-wrap {
                    height: 340px;
                    padding: 0 18px 18px;
                }
                .dashboard-inline-link {
                    color: #0f766e;
                    text-decoration: none;
                    font-weight: 600;
                }
                .dashboard-table thead th {
                    border: 0;
                    background: #f8fafc;
                    color: #64748b;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    padding: 16px 22px;
                }
                .dashboard-table tbody td {
                    padding: 18px 22px;
                    border-color: rgba(226, 232, 240, 0.72);
                }
                .dashboard-donor-cell {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .dashboard-avatar {
                    border-radius: 50%;
                    border: 2px solid rgba(226, 232, 240, 0.9);
                }
                .dashboard-chip {
                    display: inline-flex;
                    max-width: 220px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    background: #f8fafc;
                    border: 1px solid rgba(148, 163, 184, 0.16);
                    color: #334155;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .dashboard-muted-copy {
                    color: #64748b;
                    font-size: 12px;
                }
                .dashboard-status {
                    display: inline-flex;
                    align-items: center;
                    border-radius: 999px;
                    padding: 7px 12px;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }
                .dashboard-status.is-paid {
                    background: rgba(16, 185, 129, 0.12);
                    color: #047857;
                }
                .dashboard-status.is-pending {
                    background: rgba(245, 158, 11, 0.14);
                    color: #b45309;
                }
                .dashboard-stack {
                    display: grid;
                    gap: 16px;
                    padding: 0 22px 22px;
                }
                .dashboard-cause-row,
                .dashboard-payment-row {
                    padding: 14px 0;
                    border-bottom: 1px solid rgba(226, 232, 240, 0.7);
                }
                .dashboard-cause-row:last-child,
                .dashboard-payment-row:last-child {
                    border-bottom: 0;
                    padding-bottom: 0;
                }
                .dashboard-cause-copy {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 10px;
                }
                .dashboard-rank {
                    width: 34px;
                    height: 34px;
                    border-radius: 12px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #ecfeff;
                    color: #155e75;
                    font-weight: 800;
                }
                .dashboard-progress {
                    width: 100%;
                    height: 10px;
                    border-radius: 999px;
                    background: #e2e8f0;
                    overflow: hidden;
                }
                .dashboard-progress.is-soft {
                    height: 8px;
                    background: #eef2f7;
                }
                .dashboard-progress-bar {
                    display: block;
                    height: 100%;
                    border-radius: inherit;
                    background: linear-gradient(90deg, #14b8a6, #0f766e);
                }
                .dashboard-progress-bar.is-dark {
                    background: linear-gradient(90deg, #1d4ed8, #0f172a);
                }
                .dashboard-badge {
                    padding: 8px 12px;
                    border-radius: 999px;
                    background: rgba(59, 130, 246, 0.12);
                    color: #1d4ed8;
                    font-size: 12px;
                    font-weight: 700;
                }
                .dashboard-inquiry-card {
                    display: block;
                    padding: 16px;
                    border-radius: 18px;
                    border: 1px solid rgba(148, 163, 184, 0.14);
                    background: #f8fafc;
                    text-decoration: none;
                }
                .dashboard-inquiry-head {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 10px;
                }
                .dashboard-inquiry-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 12px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #dbeafe;
                    color: #1d4ed8;
                    font-weight: 800;
                }
                .dashboard-inquiry-body {
                    color: #475569;
                    font-size: 13px;
                    line-height: 1.5;
                }
                @media (max-width: 991px) {
                    .dashboard-hero {
                        flex-direction: column;
                    }
                    .dashboard-hero-actions {
                        justify-content: flex-start;
                    }
                }
            `}</style>
        </AdminLayouts>
    )
}
