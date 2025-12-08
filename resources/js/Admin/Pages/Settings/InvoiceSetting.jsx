import { useForm, Head } from "@inertiajs/react"
import TextInput from "@/Admin/Components/Inputs/TextInput"
import FromValidationError from "@/Admin/Components/Validation/FromValidationError"
import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import SingleMediaUploader from "@/Admin/Components/Media/SingleMediaUploader"
import translate from "@/utils/translate"

export default function InvoiceSetting({ invoice_setting }) {
    const { data, setData, errors, put } = useForm(invoice_setting)

    // update settings
    const handlePublish = (e) => {
        e.preventDefault()
        put(route("admin.settings.invoice.update"))
    }

    return (
        <AdminLayouts>
            <Head title="Invoice Settings" />
            <div className="yoo-height-b30 yoo-height-lg-b30" />
            <div className="container">
                <div className="yoo-uikits-heading">
                    <h2 className="yoo-uikits-title">{translate("Invoice Settings")}</h2>
                </div>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>

                <form className="row" onSubmit={handlePublish}>
                    <div className="col-lg-8">
                        <div className="yoo-card yoo-style1">
                            <div className="yoo-card-heading">
                                <div className="yoo-card-heading-left">
                                    <h2 className="yoo-card-title">{translate("Invoice Details")}</h2>
                                </div>
                            </div>

                            <div className="yoo-card-body">
                                <div className="yoo-padd-lr-20">
                                    <div className="yoo-height-b20 yoo-height-lg-b20" />

                                    <div className="alert alert-warning" role="alert">
                                        {translate("Please upload a PNG image for the invoice logo. Thank you!")}
                                    </div>

                                    {/* Invoice Logo */}
                                    <div className="form-group">
                                        <label>{translate("Invoice Logo")}</label>
                                        <SingleMediaUploader
                                            onSelected={(e) => setData("invoice_logo", e)}
                                            handleRemoved={() => setData("invoice_logo", "")}
                                            defaultValue={data.invoice_logo}
                                        />
                                        <FromValidationError message={errors?.invoice_logo} />
                                    </div>

                                    {/* Row 1 – Footer Address and Footer Contact */}
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="footer_address">{translate("Footer Address")}</label>
                                            <TextInput
                                                title="Footer Address"
                                                type="text"
                                                id="footer_address"
                                                error={errors?.footer_address}
                                                value={data.footer_address}
                                                onChange={(e) => setData("footer_address", e.target.value)}
                                            />
                                            <FromValidationError message={errors?.footer_address} />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="footer_contact">{translate("Footer Contact")}</label>
                                            <TextInput
                                                title="Footer Contact"
                                                type="text"
                                                id="footer_contact"
                                                error={errors?.footer_contact}
                                                value={data.footer_contact}
                                                onChange={(e) => setData("footer_contact", e.target.value)}
                                            />
                                            <FromValidationError message={errors?.footer_contact} />
                                        </div>
                                    </div>

                                    {/* NEW FIELDS */}
                                    <div className="row mt-4">
                                        {/* Invoice Prefix */}
                                        <div className="col-md-6">
                                            <label htmlFor="invoice_prefix">{translate("Invoice Prefix")}</label>
                                            <TextInput
                                                title="Invoice Prefix"
                                                type="text"
                                                id="invoice_prefix"
                                                error={errors?.invoice_prefix}
                                                value={data.invoice_prefix || ""}
                                                onChange={(e) => setData("invoice_prefix", e.target.value)}
                                            />
                                            <FromValidationError message={errors?.invoice_prefix} />
                                        </div>

                                        {/* Financial Year Start Month */}
                                        <div className="col-md-6">
                                            <label htmlFor="financial_year_start_month">{translate("Financial Year Start Month")}</label>
                                            <select
                                                id="financial_year_start_month"
                                                className="form-control"
                                                value={data.financial_year_start_month || ""}
                                                onChange={(e) => setData("financial_year_start_month", e.target.value)}
                                            >
                                                <option value="">-- Select Month --</option>
                                                <option value="1">January</option>
                                                <option value="2">February</option>
                                                <option value="3">March</option>
                                                <option value="4">April</option>
                                                <option value="5">May</option>
                                                <option value="6">June</option>
                                                <option value="7">July</option>
                                                <option value="8">August</option>
                                                <option value="9">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                            <FromValidationError message={errors?.financial_year_start_month} />
                                        </div>
                                    </div>

                                    <div className="yoo-height-b20 yoo-height-lg-b20" />

                                    <button type="submit" className="btn btn-success">
                                        {translate("Update")}
                                    </button>

                                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayouts>
    )
}
