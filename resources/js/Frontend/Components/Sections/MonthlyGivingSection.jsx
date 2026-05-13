import axios from "axios"
import { useEffect, useMemo, useState } from "react"

const mobileRegex = /^(?:\+91|91)?[6-9][0-9]{9}$/
const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/

export default function MonthlyGivingSection({ sections_data }) {
    const [causes, setCauses] = useState([])
    const [loadingCauses, setLoadingCauses] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        cause_id: "",
        name: "",
        email: "",
        mobile: "",
        amount: sections_data?.default_amount || "",
        is_80g: false,
        pancard: "",
    })

    const accent = sections_data?.accent_color || "#f08a24"
    const fixedAmounts = useMemo(() => {
        const raw = sections_data?.fixed_amounts || "200,500,1000"
        return raw
            .split(",")
            .map((n) => Number(String(n).trim()))
            .filter((n) => Number.isFinite(n) && n > 0)
            .slice(0, 8)
    }, [sections_data?.fixed_amounts])
    const selectedCause = useMemo(() => causes.find((c) => String(c.id) === String(form.cause_id)), [causes, form.cause_id])

    const loadCauses = async () => {
        if (causes.length || loadingCauses) return
        setLoadingCauses(true)
        try {
            const { data } = await axios.get(route("monthly.giving.causes"))
            setCauses(data.causes || [])
        } catch (e) {
            setError("Unable to load causes right now. Please refresh and try again.")
        } finally {
            setLoadingCauses(false)
        }
    }

    useEffect(() => {
        loadCauses()
    }, [])

    const openCheckout = (payload) => {
        if (!window.Razorpay) {
            const script = document.createElement("script")
            script.src = "https://checkout.razorpay.com/v1/checkout.js"
            script.onload = () => launchRazorpay(payload)
            document.body.appendChild(script)
            return
        }
        launchRazorpay(payload)
    }

    const launchRazorpay = (payload) => {
        const options = {
            key: payload.razorpay_key,
            subscription_id: payload.razorpay_subscription_id,
            name: "Monthly Giving",
            description: "Recurring monthly donation",
            theme: { color: accent },
            prefill: {
                name: payload.name,
                email: payload.email,
                contact: payload.mobile,
            },
            handler: async function (response) {
                await axios.post(route("monthly.giving.verify"), {
                    subscription_uuid: payload.subscription_uuid,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_subscription_id: response.razorpay_subscription_id,
                    razorpay_signature: response.razorpay_signature,
                })
                setMessage("Your monthly giving subscription is now active.")
                setError("")
            },
        }
        new window.Razorpay(options).open()
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setMessage("")
        if (!mobileRegex.test(form.mobile)) {
            setError("Please enter valid mobile number.")
            return
        }
        if (form.is_80g && !form.pancard) {
            setError("PAN card is required when 80G is selected.")
            return
        }
        if (form.is_80g && !panRegex.test((form.pancard || "").toUpperCase())) {
            setError("Please enter valid PAN card for 80G.")
            return
        }
        if (!form.cause_id) {
            setError("Please select cause.")
            return
        }
        if (selectedCause && Number(form.amount) < Number(selectedCause.min_amount || 1)) {
            setError(`Minimum amount is INR ${selectedCause.min_amount}`)
            return
        }

        setSubmitting(true)
        try {
            const { data } = await axios.post(route("monthly.giving.create"), form)
            openCheckout(data)
        } catch (err) {
            const apiMessage = err?.response?.data?.message
            const apiError = err?.response?.data?.error
            const validationErrors = err?.response?.data?.errors
            const firstValidationError = validationErrors ? Object.values(validationErrors)[0]?.[0] : null
            setError(firstValidationError || apiError || apiMessage || "Unable to create subscription right now.")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <section className="container cs_height_120 cs_height_lg_80" style={{ position: "relative", zIndex: 5 }}>
            <div
                className="p-4 p-md-5"
                style={{
                    position: "relative",
                    zIndex: 5,
                    isolation: "isolate",
                    borderRadius: 16,
                    background: "#fff",
                    border: "1px solid #ebeef2",
                }}
            >
                <div className="row align-items-start">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <span
                            style={{
                                display: "inline-block",
                                padding: "6px 12px",
                                borderRadius: 999,
                                background: "rgba(240,138,36,0.15)",
                                color: accent,
                                fontWeight: 700,
                                fontSize: 12,
                                letterSpacing: 0.4,
                                textTransform: "uppercase",
                            }}
                        >
                            Monthly Giving
                        </span>
                        <h2 className="mt-3 mb-2">{sections_data?.section_title || "Become a Monthly Giving Partner"}</h2>
                        <p className="text-muted mb-4">{sections_data?.section_subtitle || "Support a cause every month with automatic donation."}</p>
                        <div className="p-3" style={{ borderRadius: 12, background: "#fcfcfd", border: "1px solid #eceff3" }}>
                            <div className="font-weight-bold mb-2">Why monthly giving?</div>
                            <ul className="mb-0 pl-3 text-muted">
                                <li>Auto monthly deduction with Razorpay subscription.</li>
                                <li>Change lives with consistent support.</li>
                                <li>80G option available for eligible receipts.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <form onSubmit={onSubmit} className="p-3 p-md-4" style={{ background: "#fafbfc", border: "1px solid #edf1f5", borderRadius: 14 }}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="small text-muted mb-1">Full Name</label>
                                    <input onFocus={loadCauses} className="form-control" placeholder="Enter full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="small text-muted mb-1">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="small text-muted mb-1">Mobile Number</label>
                                    <input className="form-control" placeholder="Enter mobile number" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="small text-muted mb-1">Cause</label>
                                    <select className="form-control" value={form.cause_id} onChange={(e) => setForm({ ...form, cause_id: e.target.value })} onFocus={loadCauses} required>
                                        <option value="">{loadingCauses ? "Loading causes..." : "Select cause"}</option>
                                        {causes.map((cause) => <option key={cause.id} value={cause.id}>{cause.title}</option>)}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="small text-muted mb-1">Monthly Amount (INR)</label>
                                    <input type="number" min="1" className="form-control" placeholder="Enter monthly amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label className="small text-muted mb-2 d-block">Quick Pick Amount</label>
                                    <div className="d-flex flex-wrap" style={{ gap: 8 }}>
                                        {fixedAmounts.map((amount) => (
                                            <button
                                                key={amount}
                                                type="button"
                                                onClick={() => setForm({ ...form, amount: String(amount) })}
                                                className="btn btn-sm"
                                                style={{
                                                    border: `1px solid ${String(form.amount) === String(amount) ? accent : "#d6dee8"}`,
                                                    background: String(form.amount) === String(amount) ? accent : "#fff",
                                                    color: String(form.amount) === String(amount) ? "#fff" : "#1f2d3d",
                                                    fontWeight: 700,
                                                    borderRadius: 999,
                                                    padding: "7px 14px",
                                                    boxShadow:
                                                        String(form.amount) === String(amount)
                                                            ? "0 8px 18px rgba(240,138,36,0.32)"
                                                            : "0 2px 8px rgba(15,23,42,0.06)",
                                                    transition: "all 0.2s ease",
                                                }}
                                            >
                                                INR {amount}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-12 mb-2">
                                    <label className="d-flex align-items-center" style={{ gap: 8 }}>
                                        <input
                                            type="checkbox"
                                            checked={form.is_80g}
                                            onChange={(e) => setForm({ ...form, is_80g: e.target.checked, pancard: e.target.checked ? form.pancard : "" })}
                                        />
                                        <span>Need 80G certificate</span>
                                    </label>
                                </div>
                                {form.is_80g && (
                                    <div className="col-12 mb-3">
                                        <label className="small text-muted mb-1">PAN Card (Required for 80G)</label>
                                        <input className="form-control" placeholder="ABCDE1234F" value={form.pancard} onChange={(e) => setForm({ ...form, pancard: e.target.value.toUpperCase() })} required />
                                    </div>
                                )}
                            </div>
                            {error ? <div className="mt-3 text-danger">{error}</div> : null}
                            {message ? <div className="mt-3 text-success">{message}</div> : null}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="cs_btn cs_style_1 mt-3"
                                style={{
                                    backgroundColor: accent,
                                    borderColor: accent,
                                    minWidth: 220,
                                    boxShadow: "0 12px 24px rgba(240,138,36,0.35)",
                                }}
                            >
                                {submitting ? "Processing..." : "Start Monthly Giving"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
