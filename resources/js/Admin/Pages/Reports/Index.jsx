import React, { useState, useMemo } from "react";
import AdminLayouts from "@/Admin/Layouts/AdminLayouts";
import { Head, router, usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import Amount from "@/Components/Amount";
import moment from "moment";
import { scaleLinear } from "d3-scale";

// --- MAP & CHART IMPORTS ---
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
    BarElement, ArcElement, Tooltip, Legend as ChartLegend, Filler
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, ChartLegend, Filler);

// --- CONFIGURATION ---
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Full list of Coordinates to ensure ALL states show up (even if 0 revenue)
const STATE_COORDINATES = {
    "delhi": [77.1025, 28.7041], "maharashtra": [75.7139, 19.7515], "karnataka": [75.7139, 15.3173],
    "telangana": [79.0193, 18.1124], "uttar pradesh": [80.9462, 26.8467], "tamil nadu": [78.6569, 11.1271],
    "gujarat": [71.1924, 22.2587], "west bengal": [87.8550, 22.9868], "rajasthan": [74.2179, 27.0238],
    "bihar": [85.3131, 25.0961], "madhya pradesh": [78.6569, 22.9734], "andhra pradesh": [79.7400, 15.9129],
    "punjab": [75.3412, 31.1471], "haryana": [76.0856, 29.0588], "kerala": [76.2711, 10.8505],
    "assam": [92.9376, 26.2006], "odisha": [85.0985, 20.9517], "chhattisgarh": [81.8661, 21.2787],
    "jharkhand": [85.3131, 23.6102], "uttarakhand": [79.0193, 30.0668], "himachal pradesh": [77.1734, 31.1048],
    "goa": [74.1240, 15.2993], "jammu and kashmir": [76.5762, 33.7782]
};

// --- UTILS: CSV EXPORT ---
const downloadCSV = (data, filename = "report.csv") => {
    if (!data.length) return;
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map(row => Object.values(row).map(val => `"${val}"`).join(","));
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// --- SUB-COMPONENTS ---

// 1. GEO MAP (Shows Active & Inactive States)
const GeoMap = ({ data }) => {
    const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });

    // Merge DB Data with Static Coordinates to show ALL states
    const mapNodes = useMemo(() => {
        return Object.keys(STATE_COORDINATES).map(key => {
            const found = data.find(d => d.state_key === key);
            return {
                name: key.charAt(0).toUpperCase() + key.slice(1),
                coordinates: STATE_COORDINATES[key],
                total: found ? found.total : 0,
                count: found ? found.count : 0,
                hasData: !!found
            };
        });
    }, [data]);

    const maxVal = Math.max(...mapNodes.map(d => d.total), 1);
    const popScale = scaleLinear().domain([0, maxVal]).range([4, 20]);

    return (
        <div className="w-100 h-100 rounded-4 overflow-hidden position-relative border border-secondary border-opacity-10 bg-dark" style={{background:'#1e293b', minHeight:'400px'}}>

            {/* Custom Floating Tooltip */}
            {tooltip.show && (
                <div className="position-absolute bg-white text-dark px-3 py-2 rounded shadow-lg z-3 pointer-events-none"
                     style={{ left: tooltip.x, top: tooltip.y - 50, transform: 'translateX(-50%)', minWidth:'120px' }}>
                    <div className="fw-bold text-capitalize small">{tooltip.name}</div>
                    <div className="d-flex justify-content-between align-items-center mt-1">
                        <span className="text-muted xsmall me-2">Rev:</span>
                        <span className="fw-bold text-success"><Amount amount={tooltip.total} /></span>
                    </div>
                </div>
            )}

            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1100, center: [78.9629, 22.5937] }} style={{width:"100%", height:"100%"}}>
                <ZoomableGroup>
                    <Geographies geography={GEO_URL}>
                        {({ geographies }) => geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} fill="#334155" stroke="#475569" strokeWidth={0.5} style={{default:{outline:"none"}, hover:{fill:"#475569", outline:"none"}}} />
                        ))}
                    </Geographies>
                    {mapNodes.map((d, i) => (
                        <Marker
                            key={i}
                            coordinates={d.coordinates}
                            onMouseEnter={(e) => {
                                const rect = e.target.getBoundingClientRect();
                                const parent = e.target.closest('.position-relative').getBoundingClientRect();
                                setTooltip({ show: true, name: d.name, total: d.total, x: rect.left - parent.left + 10, y: rect.top - parent.top });
                            }}
                            onMouseLeave={() => setTooltip({ ...tooltip, show: false })}
                        >
                            {/* Pulse Animation only for active states */}
                            {d.hasData ? (
                                <>
                                    <circle r={popScale(d.total) + 6} fill="rgba(16, 185, 129, 0.2)" stroke="none">
                                        <animate attributeName="r" from={popScale(d.total)} to={popScale(d.total) + 10} dur="1.5s" repeatCount="indefinite"/>
                                        <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite"/>
                                    </circle>
                                    <circle r={popScale(d.total)} fill="#10b981" stroke="#fff" strokeWidth={1.5} style={{cursor:'pointer'}} />
                                    <text textAnchor="middle" y={-popScale(d.total) - 8} style={{fontFamily:"sans-serif", fontSize:"10px", fill:"#fff", fontWeight:"bold", textShadow:"0 2px 4px rgba(0,0,0,0.8)"}}>{d.name}</text>
                                </>
                            ) : (
                                // Inactive State Dot
                                <circle r={3} fill="#64748b" stroke="none" style={{opacity:0.5, cursor:'crosshair'}} />
                            )}
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
            <div className="position-absolute bottom-0 start-0 m-3 px-3 py-1 bg-dark rounded border border-secondary text-white small d-flex align-items-center gap-2">
                <span className="rounded-circle bg-success" style={{width:'8px', height:'8px'}}></span> Active
                <span className="rounded-circle bg-secondary" style={{width:'8px', height:'8px'}}></span> Inactive
            </div>
        </div>
    );
};

// 2. CUSTOM LEGEND
const CustomLegend = ({ labels, data, colors }) => (
    <div className="d-flex flex-column justify-content-center h-100 ps-3">
        {labels.map((l, i) => {
            const val = Number(data[i]);
            return (
                <div key={i} className="d-flex justify-content-between mb-2 small w-100">
                    <div className="d-flex align-items-center text-truncate">
                        <span className="rounded-circle me-2 flex-shrink-0" style={{width:'10px',height:'10px',background:colors[i%colors.length]}}></span>
                        <span className="text-truncate" style={{maxWidth:'120px'}}>{l}</span>
                    </div>
                    <div className="fw-bold ms-2"><Amount amount={val}/></div>
                </div>
            );
        })}
    </div>
);

// 3. KPI CARD
const KpiCard = ({ title, value, prev, icon, color }) => {
    const isUp = (value - prev) >= 0;
    const diff = Math.abs(prev > 0 ? ((value - prev) / prev) * 100 : 0).toFixed(0);

    return (
        <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift" style={{background: 'linear-gradient(145deg, #ffffff, #f8fafc)'}}>
            <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="rounded-3 d-flex align-items-center justify-content-center text-white shadow-sm" style={{width:'48px', height:'48px', background: color}}>
                        <Icon icon={icon} width="22"/>
                    </div>
                    {prev !== 0 && <span className={`badge rounded-pill fw-normal text-dark ${isUp?'bg-success-subtle':'bg-danger-subtle'}`}>{isUp?'↑':'↓'} {diff}%</span>}
                </div>
                <h2 className="fw-bold text-dark mb-0 tracking-tight"><Amount amount={value}/></h2>
                <p className="text-muted small fw-bold text-uppercase mt-1 mb-0 tracking-wide">{title}</p>
            </div>
        </div>
    );
};

// 4. MINI SPARKLINE
const MiniSparkline = ({ data, color = "#10b981" }) => {
    if (!data || data.length === 0) return <span className="text-muted small">-</span>;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const points = data.map((d, i) => `${(i / (data.length - 1)) * 100},${100 - ((d - min) / range) * 100}`).join(" ");
    return (
        <svg width="120" height="35" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline points={points} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={(100)} cy={100 - ((data[data.length-1] - min) / range) * 100} r="15" fill={color} />
        </svg>
    );
};

// --- MAIN PAGE ---
export default function Reports() {
    const { stats, revenue_trend, payment_methods, cross_tab, cause_deep_dive, geo_data, revenue_breakdown, filters } = usePage().props;
    const [dateRange, setDateRange] = useState({ start_date: filters.start, end_date: filters.end });
    const handleFilter = () => router.get(route("admin.reports.index"), dateRange, { preserveState: true, preserveScroll: true });

    // Function to Export Data
    const handleExport = () => {
        const exportData = revenue_breakdown.map(r => ({
            Date: r.date,
            Orders: r.count,
            Total: r.total
        }));
        downloadCSV(exportData, `revenue_report_${dateRange.start_date}.csv`);
    };

    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#8b5cf6'];

    // Chart Options (Optimized for Hover)
    const lineOptions = {
        responsive: true, maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false }, // Improved Hover
        plugins: { legend: { display: false } },
        scales: { x: { grid: { display: false } }, y: { display: false } }
    };

    // Data Config
    const areaData = {
        labels: revenue_trend.map(d => d.date),
        datasets: [{
            label: "Revenue", data: revenue_trend.map(d => d.total),
            borderColor: "#10b981",
            backgroundColor: (ctx) => { const g = ctx.chart.ctx.createLinearGradient(0,0,0,300); g.addColorStop(0,'rgba(16,185,129,0.2)'); g.addColorStop(1,'rgba(16,185,129,0)'); return g; },
            fill: true, tension: 0.4, pointRadius: 0, pointHoverRadius: 6, pointBackgroundColor: '#fff', borderWidth: 2
        }]
    };
    const pieData = { labels: payment_methods.map(p => p.payment_method), datasets: [{ data: payment_methods.map(p => p.total), backgroundColor: colors, borderWidth: 0 }] };
    const crossData = {
        labels: cross_tab.labels,
        datasets: cross_tab.datasets.map((d, i) => ({ label: d.label, data: d.data, backgroundColor: colors[i % colors.length], borderRadius: 4, barThickness: 20 }))
    };

    return (
        <AdminLayouts>
            <Head title="Enterprise Analytics" />
            <style>{`
                body { background-color: #f8fafc; }
                .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15); transition: all 0.2s; }
                .table-modern th { font-size: 0.7rem; text-transform: uppercase; color: #64748b; background: #f8fafc; padding: 16px 20px; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0; }
                .table-modern td { padding: 16px 20px; vertical-align: middle; border-bottom: 1px solid #f1f5f9; }
                .glass-header { background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0,0,0,0.05); }
            `}</style>

            <div className="container-fluid px-4 py-5">

                {/* --- HEADER --- */}
                <div className="d-flex justify-content-between align-items-end mb-5 pb-4 border-bottom glass-header sticky-top pt-3" style={{zIndex:100, top:0, margin:'0 -1.5rem', padding:'0 1.5rem'}}>
                    <div>
                        <h2 className="fw-bolder text-dark mb-0">Financial Command Center</h2>
                        <p className="text-secondary mb-0 mt-1">Holistic view of donations, causes, and trends.</p>
                    </div>
                    <div className="d-flex gap-2 bg-white p-2 rounded-pill shadow-sm border">
                        <input type="date" className="form-control-sm border-0" value={dateRange.start_date} onChange={e=>setDateRange({...dateRange,start_date:e.target.value})} />
                        <span className="text-muted align-self-center">to</span>
                        <input type="date" className="form-control-sm border-0" value={dateRange.end_date} onChange={e=>setDateRange({...dateRange,end_date:e.target.value})} />
                        <button onClick={handleFilter} className="btn btn-dark rounded-pill btn-sm px-4 fw-bold">Update</button>
                    </div>
                </div>

                {/* --- 1. KPI CARDS --- */}
                <div className="row g-4 mb-5">
                    <div className="col-xl-3 col-md-6"><KpiCard title="Total Revenue" value={stats.revenue.value} prev={stats.revenue.prev} icon="ion:wallet" color="#6366f1"/></div>
                    <div className="col-xl-3 col-md-6"><KpiCard title="Donations" value={stats.donations.value} prev={stats.donations.prev} icon="ion:heart" color="#10b981"/></div>
                    <div className="col-xl-3 col-md-6"><KpiCard title="Avg. Gift" value={stats.avg_gift.value} prev={stats.avg_gift.prev} icon="ion:stats-chart" color="#f59e0b"/></div>
                    <div className="col-xl-3 col-md-6"><KpiCard title="Active Donors" value={stats.unique_donors.value} prev={stats.unique_donors.prev} icon="ion:people" color="#ef4444"/></div>
                </div>

                {/* --- 2. MAIN TRENDS --- */}
                <div className="row g-4 mb-5">
                    <div className="col-xl-8">
                        <div className="card h-100 border-0 shadow-sm rounded-4">
                            <div className="card-header bg-white border-0 pt-4 px-4"><h6 className="fw-bold mb-0">Revenue Trajectory</h6></div>
                            <div className="card-body p-4"><div style={{height:'350px'}}><Line data={areaData} options={lineOptions} /></div></div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4">
                            <div className="card-header bg-white border-0 pt-4 px-4"><h6 className="fw-bold mb-0">Payment Mix</h6></div>
                            <div className="card-body p-4">
                                <div className="row h-100 align-items-center">
                                    <div className="col-6"><div style={{height:'150px'}}><Doughnut data={pieData} options={{cutout:'70%', plugins:{legend:{display:false}}}} /></div></div>
                                    <div className="col-6"><CustomLegend labels={pieData.labels} data={pieData.datasets[0].data} colors={colors} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 3. ADVANCED MIXING (Payment vs Cause & Map) --- */}
                <div className="row g-4 mb-5">
                    <div className="col-xl-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4">
                            <div className="card-header bg-white border-0 pt-4 px-4"><h6 className="fw-bold mb-0">Payment Attribution (Data Mixing)</h6><small className="text-muted">How donors pay for specific causes</small></div>
                            <div className="card-body p-4"><div style={{height:'350px'}}><Bar data={crossData} options={{maintainAspectRatio:false, scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,display:false}}}} /></div></div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                            <div className="card-header bg-white border-0 pt-4 px-4"><h6 className="fw-bold mb-0">Geographic Impact</h6></div>
                            <div className="card-body p-0"><GeoMap data={geo_data} /></div>
                        </div>
                    </div>
                </div>

                {/* --- 4. DEEP DIVE: CAUSE INTELLIGENCE --- */}
                <div className="card border-0 shadow-sm rounded-4 mb-5">
                    <div className="card-header bg-white border-0 py-3 px-4"><h5 className="fw-bold text-dark mb-0">Cause Intelligence & Trends</h5></div>
                    <div className="table-responsive">
                        <table className="table table-modern mb-0 align-middle">
                            <thead><tr><th className="ps-4">Cause Title</th><th>Total Raised</th><th>Avg. Gift</th><th>Activity Trend (Daily)</th><th className="text-end pe-4">Donations</th></tr></thead>
                            <tbody>
                                {cause_deep_dive.map((c, i) => (
                                    <tr key={i} className="hover-lift">
                                        <td className="ps-4 fw-bold text-dark text-wrap" style={{maxWidth:'300px'}}>{c.title}</td>
                                        <td className="text-success fw-bold"><Amount amount={c.raised} /></td>
                                        <td className="text-muted"><Amount amount={c.avg} /></td>
                                        <td><MiniSparkline data={c.trend} color={colors[i%colors.length]} /></td>
                                        <td className="text-end pe-4"><span className="badge bg-light text-dark border">{c.count}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --- 5. TRANSACTION LOG --- */}
                <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-header bg-white border-0 py-3 px-4 d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold text-dark mb-0">Transaction Log</h5>
                        <button onClick={handleExport} className="btn btn-outline-dark btn-sm rounded-pill px-4 hover-lift">
                            <Icon icon="ion:download-outline" className="me-2"/> Export CSV
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-modern mb-0 align-middle">
                            <thead><tr><th className="ps-4">Date</th><th>Orders</th><th>Revenue</th><th className="text-end pe-4">Status</th></tr></thead>
                            <tbody>
                                {revenue_breakdown.map((r, i) => (
                                    <tr key={i}>
                                        <td className="ps-4 fw-medium text-dark">{moment(r.date).format("MMM D, YYYY")}</td>
                                        <td className="text-muted">{r.count} Orders</td>
                                        <td className="fw-bold text-dark"><Amount amount={r.total} /></td>
                                        <td className="text-end pe-4"><span className="badge bg-success-subtle text-success border border-success-subtle px-2">Verified</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </AdminLayouts>
    );
}
