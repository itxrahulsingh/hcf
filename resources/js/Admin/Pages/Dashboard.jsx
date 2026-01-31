import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import { Link, Head, usePage } from "@inertiajs/react"
import gravatarUrl from "gravatar-url"
import translate from "@/utils/translate"
import { Icon } from "@iconify/react"
import Amount from "@/Components/Amount"
import moment from "moment"

// Chart.js Imports
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export default function Dashboard() {
    const {
        post_count,
        user_count,
        subscriber_count,
        cause_count,
        total_raised,
        recent_donations,
        top_causes,
        recent_inquiries,
        isEnabledService
    } = usePage().props

    // --- Helpers ---
    const getAvatar = (email) => gravatarUrl(email || 'default', { size: 50, default: 'mp' });

    // --- Chart Data (Real Data Only) ---
    const labels = recent_donations?.slice().reverse().map(order => moment(order.created_at).format('DD MMM')) || [];
    const dataPoints = recent_donations?.slice().reverse().map(order => parseFloat(order.total_price)) || [];

    const chartData = {
        labels,
        datasets: [{
            fill: true,
            label: 'Donation Received',
            data: dataPoints,
            borderColor: '#0ea5e9', // Sky Blue
            borderWidth: 2,
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                gradient.addColorStop(0, 'rgba(14, 165, 233, 0.15)');
                gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
                return gradient;
            },
            tension: 0.4, // Smooth curve
            pointRadius: 3,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#0ea5e9',
            pointBorderWidth: 2,
            pointHoverRadius: 6,
        }],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1e293b',
                titleColor: '#fff',
                bodyColor: '#e2e8f0',
                padding: 12,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    label: (context) => ` Amount: ${context.parsed.y}`
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8', font: { size: 11 } }
            },
            y: {
                grid: { color: '#f1f5f9', borderDash: [4, 4] },
                border: { display: false },
                ticks: { display: false } // Minimalist look
            }
        }
    };

    // --- Component: Stat Card ---
    const StatCard = ({ title, value, icon, color }) => (
        <div className="col-12 col-md-6 col-xl-3">
            <div className="card h-100 border border-light-subtle bg-white shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className={`d-flex align-items-center justify-content-center rounded-circle text-${color}`}
                             style={{ width: '48px', height: '48px', background: `var(--bs-${color}-bg-subtle)` }}>
                            <Icon icon={icon} width="24" />
                        </div>
                    </div>
                    <div>
                        <h3 className="fw-bold text-dark mb-1 tracking-tight">{value}</h3>
                        <p className="text-secondary small fw-medium mb-0 text-uppercase" style={{ letterSpacing: '0.5px', fontSize: '11px' }}>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <AdminLayouts>
            <Head title="Dashboard" />

            <div className="container-fluid py-5" style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>

                {/* --- 1. Header --- */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-3">
                    <div>
                        <h2 className="fw-bolder text-dark mb-1" style={{ letterSpacing: '-0.5px' }}>Dashboard Overview</h2>
                        <p className="text-muted mb-0 small">Welcome back! Here is your platform's latest activity.</p>
                    </div>
                    <div className="d-flex gap-2">
                        <div className="px-4 py-2 bg-white border shadow-sm rounded-pill text-secondary small fw-medium d-flex align-items-center">
                            <Icon icon="ion:calendar-outline" className="me-2 text-primary" />
                            {moment().format('MMMM Do, YYYY')}
                        </div>
                        <Link href={route('admin.causes.create')} className="btn btn-dark rounded-pill px-4 py-2 fw-medium d-flex align-items-center small shadow-sm hover-lift">
                            <Icon icon="ion:add-circle" className="me-2 fs-5" />
                            <span>Create Cause</span>
                        </Link>
                    </div>
                </div>

                {/* --- 2. Stats Grid --- */}
                <div className="row g-4 mb-5">
                    <StatCard
                        title={translate("Total Funds Raised")}
                        value={<Amount amount={total_raised} />}
                        icon="ion:wallet-outline"
                        color="success"
                    />
                    <StatCard
                        title={translate("Total Donations")}
                        value={recent_donations?.length > 0 ? "Active" : "0"}
                        icon="ion:heart-outline"
                        color="danger"
                    />
                    <StatCard
                        title={translate("Total Donors")}
                        value={user_count}
                        icon="ion:people-outline"
                        color="primary"
                    />
                    <StatCard
                        title={translate("Subscribers")}
                        value={subscriber_count}
                        icon="ion:mail-open-outline"
                        color="warning"
                    />
                </div>

                {/* --- 3. Main Content Split --- */}
                <div className="row g-4">

                    {/* Left Column (Chart & Transactions) */}
                    <div className="col-xl-8 col-lg-7">

                        {/* A. Donation Trends Chart */}
                        <div className="card border border-light-subtle rounded-4 mb-4 bg-white shadow-sm overflow-hidden">
                            <div className="card-header bg-white border-bottom border-light-subtle py-4 px-4 d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="fw-bold text-dark mb-0">Donation Performance</h6>
                                    <small className="text-muted">Real-time donation tracking</small>
                                </div>
                                <div className="p-2 bg-light rounded-circle text-muted">
                                    <Icon icon="ion:analytics" />
                                </div>
                            </div>
                            <div className="card-body p-4">
                                <div style={{ height: '320px' }}>
                                    <Line options={chartOptions} data={chartData} />
                                </div>
                            </div>
                        </div>

                        {/* B. Recent Transactions Table */}
                        <div className="card border border-light-subtle rounded-4 bg-white shadow-sm">
                            <div className="card-header bg-white border-bottom border-light-subtle py-4 px-4 d-flex justify-content-between align-items-center">
                                <h6 className="fw-bold text-dark mb-0">Recent Transactions</h6>
                                <Link href={route('admin.orders.index')} className="btn btn-light btn-sm rounded-pill px-3 fw-medium text-secondary">
                                    View All
                                </Link>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th className="ps-4 py-3 text-secondary xsmall fw-bold border-0 text-uppercase" style={{fontSize:'11px'}}>Donor</th>
                                            <th className="py-3 text-secondary xsmall fw-bold border-0 text-uppercase" style={{fontSize:'11px'}}>Cause</th>
                                            <th className="py-3 text-secondary xsmall fw-bold border-0 text-uppercase" style={{fontSize:'11px'}}>Amount</th>
                                            <th className="py-3 text-secondary xsmall fw-bold border-0 text-uppercase text-end pe-4" style={{fontSize:'11px'}}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recent_donations && recent_donations.map((order, i) => (
                                            <tr key={i}>
                                                <td className="ps-4 py-3">
                                                    <div className="d-flex align-items-center">
                                                        <img src={getAvatar(order.customer_email)} className="rounded-circle border me-3" width="36" height="36" alt="" />
                                                        <div>
                                                            <div className="fw-bold text-dark fs-6 mb-0">{order.customer_name}</div>
                                                            <small className="text-secondary" style={{fontSize: '11px'}}>{moment(order.created_at).fromNow()}</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3">
                                                    <span className="badge bg-light text-secondary border fw-normal px-2 rounded-2 text-truncate" style={{maxWidth: '150px'}}>
                                                        {order.cause?.content?.title || 'General'}
                                                    </span>
                                                </td>
                                                <td className="py-3">
                                                    <span className="fw-bold text-dark"><Amount amount={order.total_price} /></span>
                                                </td>
                                                <td className="text-end pe-4 py-3">
                                                    {order.payment_status == 2 ? (
                                                        <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-2 py-1" style={{fontSize: '10px'}}>Paid</span>
                                                    ) : (
                                                        <span className="badge bg-warning-subtle text-warning border border-warning-subtle rounded-pill px-2 py-1" style={{fontSize: '10px'}}>Pending</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                        {(!recent_donations || recent_donations.length === 0) && (
                                            <tr><td colSpan="4" className="text-center py-5 text-secondary small">No transactions found.</td></tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Widgets) */}
                    <div className="col-xl-4 col-lg-5">

                        {/* 1. Top Performing Causes */}
                        <div className="card border border-light-subtle rounded-4 mb-4 bg-white shadow-sm">
                            <div className="card-header bg-white border-bottom border-light-subtle py-4 px-4">
                                <h6 className="fw-bold text-dark mb-0">Top Causes</h6>
                            </div>
                            <div className="card-body p-4">
                                <div className="d-flex flex-column gap-4">
                                    {top_causes && top_causes.map((cause, i) => (
                                        <div key={i}>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div className="d-flex align-items-center overflow-hidden">
                                                    <span className="text-muted fw-bold me-3" style={{width: '15px'}}>0{i+1}</span>
                                                    <span className="fw-bold text-dark small text-truncate" style={{maxWidth:'180px'}}>
                                                        {cause.content?.title}
                                                    </span>
                                                </div>
                                                <span className="badge bg-light text-dark border small">{cause.orders_count} Donors</span>
                                            </div>
                                            <div className="progress" style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '4px' }}>
                                                <div className="progress-bar bg-dark" style={{ width: `${Math.min(cause.orders_count * 10, 100)}%`, borderRadius: '4px' }}></div>
                                            </div>
                                        </div>
                                    ))}
                                    {(!top_causes || top_causes.length === 0) && <div className="text-center text-secondary small py-3">No data available</div>}
                                </div>
                                <div className="mt-4 pt-3 border-top text-center">
                                    <Link href={route('admin.causes.index')} className="text-decoration-none small fw-bold text-primary">
                                        Manage All Causes
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 2. Recent Inquiries */}
                        <div className="card border border-light-subtle rounded-4 bg-white shadow-sm">
                            <div className="card-header bg-white border-bottom border-light-subtle py-4 px-4 d-flex justify-content-between align-items-center">
                                <h6 className="fw-bold text-dark mb-0">Inquiries</h6>
                                <span className="badge bg-primary-subtle text-primary rounded-pill">{recent_inquiries?.length || 0} New</span>
                            </div>
                            <div className="list-group list-group-flush">
                                {recent_inquiries && recent_inquiries.map((inq, i) => (
                                    <Link key={i} href={route("admin.form.response.show", inq)} className="list-group-item list-group-item-action border-bottom border-light-subtle px-4 py-3">
                                        <div className="d-flex justify-content-between w-100 mb-1">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-2 text-dark fw-bold" style={{width:'24px', height:'24px', fontSize:'10px'}}>
                                                    {inq.response_data?.your_full_name?.charAt(0)}
                                                </div>
                                                <h6 className="mb-0 fw-bold text-dark small">{inq.response_data?.your_full_name}</h6>
                                            </div>
                                            <small className="text-secondary" style={{fontSize: '10px'}}>{moment(inq.created_at).fromNow(true)}</small>
                                        </div>
                                        <p className="mb-0 text-secondary small text-truncate ps-4 ms-1" style={{fontSize: '12px'}}>
                                            {inq.response_data?.message || 'New message received...'}
                                        </p>
                                    </Link>
                                ))}
                                {(!recent_inquiries || recent_inquiries.length === 0) && (
                                    <div className="p-5 text-center text-secondary small">
                                        <Icon icon="ion:mail-open-outline" className="fs-3 mb-2 opacity-50" /><br/>
                                        Inbox is clear.
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <style>{`
                .bg-success-subtle { background-color: #ecfdf5 !important; }
                .bg-danger-subtle { background-color: #fef2f2 !important; }
                .bg-primary-subtle { background-color: #eff6ff !important; }
                .bg-warning-subtle { background-color: #fffbeb !important; }
                .hover-lift { transition: transform 0.2s; }
                .hover-lift:hover { transform: translateY(-2px); }
            `}</style>

        </AdminLayouts>
    )
}
