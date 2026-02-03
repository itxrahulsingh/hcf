import FrontendLayout from "@/Frontend/Layouts/FrontendLayout"
import PageHeading from "@/Frontend/Components/PageHeading"
import { clearCart } from "@/Redux/features/Cart/cart"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import translate from "@/utils/translate"
import { Link } from "@inertiajs/react"
import SeoMeta from "@/utils/SeoMeta"
import Amount from "@/Components/Amount"

export default function DonationSuccess({ order, meta_tags, tagline, site_name }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCart())
        localStorage.removeItem("coupon")
    }, [dispatch])

    SeoMeta(tagline, "", meta_tags, "", "", site_name)

    const pageHeaderData = {
        title: translate("Donation Success"),
        breadcrumb: [
            { label: translate("Home"), url: "/", key: "home" },
            { label: translate("Donation Success"), url: null, key: "success" }
        ]
    }

    const ReceiptRow = ({ label, value }) => (
        <tr>
            <td className="fw-bold text-secondary bg-light bg-opacity-10" style={{ width: "30%", padding: "12px 15px" }}>
                {translate(label)}
            </td>
            <td className="text-dark" style={{ padding: "12px 15px" }}>
                {value || "NA"}
            </td>
        </tr>
    )

    return (
        <FrontendLayout>
            <PageHeading data={pageHeaderData} bgSrc={"/static/page_heading.jpeg"} />

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div
                            className="card shadow-sm border-0 rounded-0"
                            style={{ backgroundColor: "#fff9f0" }}
                        >
                            <div className="card-body p-4 p-md-5">
                                <h2 className="text-center fw-bold mb-5" style={{ color: "#fbbf24", fontSize: "2.5rem" }}>
                                    {translate("Donation Receipt")}
                                </h2>

                                <div className="table-responsive bg-white border">
                                    <table className="table table-bordered mb-0" style={{ borderColor: "#dee2e6" }}>
                                        <tbody>
                                            <ReceiptRow label="Name" value={order.customer_name} />
                                            <ReceiptRow label="Email" value={order.customer_email} />
                                            <ReceiptRow label="PAN Number" value={order.pancard} />
                                            <ReceiptRow label="Amount" value={<Amount amount={order.total_price || order.amount} />} />
                                            <ReceiptRow label="Campaign" value={order.cause?.content?.title || translate("General Donation")} />
                                            <ReceiptRow label="Receipt No" value={order?.invoice?.invoice_number || "NA"} />
                                            <ReceiptRow label="Phone" value={order.customer_phone ?? "NA"} />
                                            <ReceiptRow label="Address" value={order.shipping_address ?? "NA"} />
                                            <ReceiptRow label="Payment Method" value={order.payment_method} />
                                            <ReceiptRow
                                                label="Payment Status"
                                                value={
                                                    <span className={order.payment_status == "2" ? "text-success" : "text-warning"}>
                                                        {order.payment_status_label || (order.payment_status == "2" ? "Complete" : "Pending")}
                                                    </span>
                                                }
                                            />
                                            <ReceiptRow label="Transaction ID" value={order.transaction_id} />
                                        </tbody>
                                    </table>
                                </div>

                                <div className="text-center mt-5">
                                    <a
                                        href={route("download.invoice", order.id)}
                                        className="btn btn-lg px-5 py-2 fw-normal text-dark"
                                        style={{
                                            backgroundColor: "#fcd34d",
                                            borderColor: "#fcd34d",
                                            borderRadius: "4px",
                                            fontSize: "1.1rem"
                                        }}
                                    >
                                        {translate("Download Receipt")}
                                    </a>
                                </div>

                                <div className="text-center mt-3">
                                    <Link href={route("home")} className="text-muted text-decoration-none small">
                                        <i className="fa fa-arrow-left me-1"></i> {translate("Back to Home")}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    )
}
