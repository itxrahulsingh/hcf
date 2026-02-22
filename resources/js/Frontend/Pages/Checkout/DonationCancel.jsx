import FrontendLayout from "@/Frontend/Layouts/FrontendLayout"
import PageHeading from "@/Frontend/Components/PageHeading"
import React from "react"
import Lottie from "lottie-react"
import CancelAnimation from "../../Lottie/cancel.json"
import translate from "@/utils/translate"
import { Link } from "@inertiajs/react"
import SeoMeta from "@/utils/SeoMeta"
import Amount from "@/Components/Amount"
import { Icon } from "@iconify/react"

export default function PaymentCancel({ order, meta_tags, tagline, site_name }) {
    SeoMeta(tagline, "", meta_tags, "", "", site_name)

    const pageHeaderData = {
        title: translate("Donation Status"),
        breadcrumb: [
            { label: translate("Home"), url: "/" },
            { label: translate("Donation Failed"), url: null }
        ]
    }

    return (
        <FrontendLayout>
            <PageHeading data={pageHeaderData} bgSrc={"/static/page_heading.jpeg"} />

            <div className="donation-status-page py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="donation-status-card text-center p-4 p-lg-5 shadow-lg rounded-4 border-0 bg-white">
                                {/* Animation Wrapper */}
                                <div className="status-icon-wrapper mx-auto mb-4" style={{ maxWidth: "200px" }}>
                                    <Lottie animationData={CancelAnimation} loop={false} />
                                </div>

                                <h2 className="fw-bold text-danger mb-2">{translate("Payment Unsuccessful")}</h2>
                                <p className="text-muted mb-4">
                                    {translate("We couldn't process your donation at this time. No funds were debited from your account.")}
                                </p>

                                {/* Order Summary Box */}
                                {order && (
                                    <div className="failed-summary-box p-3 rounded-3 bg-light mb-4 text-start">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-muted small">{translate("Ref Number")}:</span>
                                            <span className="fw-bold small text-dark">#{order.order_number}</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="text-muted small">{translate("Attempted Amount")}:</span>
                                            <span className="fw-bold text-primary">
                                                <Amount amount={order.total_price} />
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="d-grid gap-3">
                                    <Link
                                        href={order ? route("pages.show", order.order_number) : "/"}
                                        className="btn btn-primary btn-lg rounded-pill fw-bold shadow-sm py-3"
                                        style={{ background: "linear-gradient(45deg, #ff8c00, #ffaa33)", border: "none" }}
                                    >
                                        <Icon icon="mdi:refresh" className="me-2" />
                                        {translate("Try Donation Again")}
                                    </Link>

                                    <Link href={route("home")} className="btn btn-link text-muted fw-semibold">
                                        {translate("Return to Home")}
                                    </Link>
                                </div>

                                {/* Support Contact */}
                                <div className="mt-5 pt-4 border-top">
                                    <p className="small text-muted mb-0">
                                        {translate("Need help with your donation?")} <br />
                                        <a href="mailto:support@dzarc.com" className="text-primary fw-bold text-decoration-none">
                                            {translate("Contact Support")}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .donation-status-page { background: #f8f9fa; min-height: 60vh; }
                .donation-status-card { transition: transform 0.3s ease; }
                .failed-summary-box { border: 1px dashed #dee2e6; }
                .status-icon-wrapper { filter: drop-shadow(0 10px 15px rgba(220, 53, 69, 0.2)); }
            `
                }}
            />
        </FrontendLayout>
    )
}
