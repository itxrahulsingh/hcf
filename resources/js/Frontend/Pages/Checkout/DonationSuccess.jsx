import FrontendLayout from "@/Frontend/Layouts/FrontendLayout"
import PageHeading from "@/Frontend/Components/PageHeading"
import { clearCart } from "@/Redux/features/Cart/cart"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import Lottie from "lottie-react"
import SuccessAnimation from "../../Lottie/success.json"
import translate from "@/utils/translate"
import { Link } from "@inertiajs/react"
import SeoMeta from "@/utils/SeoMeta"

export default function DonationSuccess({ order, meta_tags, tagline, site_name }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCart())
        localStorage.removeItem("coupon")
    }, [dispatch])

    SeoMeta(tagline, "", meta_tags, "", "", site_name)
    // page header data
    const pageHeaderData = {
        title: translate("Donation Success"),
        breadcrumb: [
            { label: translate("Home"), url: "/", key: "home" },
            { label: translate("Donation Success"), url: null, key: "success" }
        ]
    }

    return (
        <FrontendLayout>
            <PageHeading data={pageHeaderData} bgSrc={"/static/page_heading.jpeg"} />
            <div className="container donation-success-page text-center py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card booking-card p-5 shadow-lg rounded-4 border-0">
                            <div className="card-body">
                                <div className="booking-success-icon mb-4" style={{ maxWidth: "200px", margin: "0 auto" }}>
                                    <Lottie animationData={SuccessAnimation} loop={true} />
                                </div>
                                <h1 className="my-3 fw-bold text-success" style={{ fontSize: "2.5rem" }}>
                                    {translate("Donation Successful")}!
                                </h1>
                                <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
                                    {translate("Thank you for your generosity. Your donation ID is")}: <strong>#{order.order_number}</strong>
                                </p>

                                <div className="text-start mt-4">
                                    {order.name && (
                                        <p>
                                            <strong>{translate("Donor Name")}:</strong> {order.name}
                                        </p>
                                    )}
                                    {order.amount && (
                                        <p>
                                            <strong>{translate("Donation Amount")}:</strong> ₹{order.amount}
                                        </p>
                                    )}
                                    {order.payment_method && (
                                        <p>
                                            <strong>{translate("Payment Method")}:</strong> {order.payment_method}
                                        </p>
                                    )}
                                    {order.address && (
                                        <p>
                                            <strong>{translate("Address")}:</strong> {order.address}
                                        </p>
                                    )}
                                    {order.city && (
                                        <p>
                                            <strong>{translate("City")}:</strong> {order.city}
                                        </p>
                                    )}
                                    {order.status && (
                                        <p>
                                            <strong>{translate("Status")}:</strong> {order.status}
                                        </p>
                                    )}
                                    {order.created_at && (
                                        <p>
                                            <strong>{translate("Donation Date")}:</strong> {new Date(order.created_at).toLocaleString()}
                                        </p>
                                    )}
                                </div>

                                <Link href={route("home")} className="btn booking-btn-custom btn-lg mt-4 px-4 py-2">
                                    {translate("Go to Homepage")}
                                </Link>

                                <p className="text-muted small mt-3">{translate("You will receive a confirmation email shortly.")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    )
}
