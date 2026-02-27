import AdminLayouts from "@/Admin/Layouts/AdminLayouts"
import { Head, Link } from "@inertiajs/react"
import { newspaperOutline, search } from "ionicons/icons"
import { IonIcon } from "@ionic/react"
import { createOutline } from "ionicons/icons"
import moment from "moment"
import { useState } from "react"
import { router } from "@inertiajs/react"
import ThSortable from "@/Admin/Components/Table/ThSortable"
import DropDownButton from "@/Admin/Components/Button/DropDownButton"
import { showAlert } from "@/Admin/Utils/SweetAlert.js"
import DeleteButton from "@/Admin/Components/Button/DeleteButton"
import { useEffect } from "react"
import translate from "@/utils/translate"
import hasPermission from "@/Admin/Utils/hasPermission"

export default function Index({ gifts, sort, filtered_lang, languages }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedLang, setSelectedLang] = useState(filtered_lang)
    const [selectedOption, setSelectedOption] = useState(translate("Bulk Action"))
    const [isMarkAll, setIsMarkAll] = useState(false)
    const [markItems, setMarkItems] = useState([])

    // handle search sort
    const getResults = (search, lang) => {
        router.get(
            route("admin.gifts.index", {
                search: search ?? setSearchQuery,
                sort: sort,
                filter: {
                    lang: lang ?? selectedLang
                }
            }),
            {},
            { preserveState: true }
        )
    }

    // mark all
    const markAll = () => {
        if (isMarkAll) {
            setMarkItems([])
            setIsMarkAll(false)
        } else {
            const items = gifts.data.map((gift) => gift.id)
            setMarkItems(items)
            setIsMarkAll(true)
        }
    }

    // handle mark unmark
    const handleMark = (giftId) => {
        const existsMark = markItems.some((item) => item === giftId)
        if (existsMark) {
            const removeItem = markItems.filter((item) => item !== giftId)
            setMarkItems(removeItem)
        } else {
            const addedItem = [...markItems, giftId]
            setMarkItems(addedItem)
        }
    }

    // handle bulk action
    const handleBulkAction = () => {
        let confirmMessage = ""
        let action = ""

        if (selectedOption === "Delete") {
            confirmMessage = `${translate("You want to delete selected gifts")}?`
            action = "admin.gifts.bulk.delete"
        }
        setIsMarkAll([])
        showAlert(`${translate("Are you sure")}?`, confirmMessage, selectedOption + "!", () => {
            router.delete(route(action, { ids: markItems.join(",") }))
        })
    }

    useEffect(() => {
        setSelectedLang(filtered_lang)
    }, [filtered_lang])

    return (
        <>
            <Head title="All Gifts" />
            <AdminLayouts>
                <div className="yoo-height-b30 yoo-height-lg-b30" />
                <div className="container">
                    <div className="yoo-uikits-heading">
                        <h2 className="yoo-uikits-title">{translate("All Gifts")}</h2>
                    </div>
                    <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                    <div className="yoo-card yoo-style1">
                        <div className="yoo-card-heading">
                            <div className="yoo-card-heading-left">
                                <h2 className="yoo-card-title">
                                    <span className="yoo-card-title-icon yoo-blue-bg">
                                        <IonIcon
                                            icon={newspaperOutline}
                                            style={{
                                                width: "16px",
                                                height: "16px"
                                            }}
                                        />
                                    </span>
                                    {translate("Gifts")}
                                </h2>
                            </div>
                        </div>
                        <div className="yoo-card-body">
                            <div className="">
                                <div className="yoo-height-b15 yoo-height-lg-b15" />
                                <div className="yooDataTableWrap">
                                    <div className="dataTables_heading">
                                        <div className="dataTables_heading_left">
                                            <div className="yoo-group-btn">
                                                <div className="position-relative">
                                                    <DropDownButton selectedOption={selectedOption} disabled={!markItems.length}>
                                                        <a
                                                            onClick={() => setSelectedOption("Delete")}
                                                            className={`dropdown-item ${selectedOption === "Delete" ? "active" : ""}`}
                                                            href="#"
                                                        >
                                                            {translate("Delete")}
                                                        </a>
                                                    </DropDownButton>
                                                </div>
                                                <button
                                                    disabled={!markItems.length}
                                                    onClick={() => handleBulkAction()}
                                                    className="btn btn-success btn-sm"
                                                >
                                                    {translate("Apply")}
                                                </button>
                                            </div>
                                            <div className="yoo-group-btn">
                                                <div className="position-relative">
                                                    <DropDownButton selectedOption={languages[selectedLang]?.name || selectedLang}>
                                                        {Object.entries(languages).map(([code, language]) => (
                                                            <a
                                                                onClick={() => {
                                                                    setSelectedLang(code)
                                                                }}
                                                                className={`dropdown-item ${selectedLang === code ? "active" : ""}`}
                                                                href="#"
                                                                key={code}
                                                            >
                                                                {language.name}
                                                            </a>
                                                        ))}
                                                    </DropDownButton>
                                                </div>
                                                <button onClick={() => getResults(searchQuery)} className="btn btn-success btn-sm">
                                                    {translate("Change language")}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="dataTables_heading_right">
                                            <div id="yooDataTable_filter" className="dataTables_filter">
                                                <label>
                                                    <input
                                                        type="search"
                                                        className=""
                                                        placeholder={`${translate("Search")}.....`}
                                                        value={searchQuery}
                                                        onChange={(e) => {
                                                            setSearchQuery(e.target.value)
                                                            getResults(e.target.value)
                                                        }}
                                                    />
                                                </label>
                                                <button className="dataTables_filter_btn">
                                                    <IonIcon icon={search} />
                                                </button>
                                            </div>
                                            <Link href={route("admin.gifts.create")} className="btn btn-success btn-sm yoo-table-btn1">
                                                <span className="yoo-add">+</span> {translate("Create New")}
                                            </Link>
                                        </div>
                                    </div>
                                    <div id="yooDataTable_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="yooDataTable" className="display dataTable no-footer" style={{ width: "100%" }}>
                                            <thead>
                                                <tr role="row">
                                                    <th onClick={() => markAll()} style={{ width: "1%" }}>
                                                        <div className={`yoo-check-mark-all ${isMarkAll && "active"}`}>
                                                            <span className="yoo-first" />
                                                            <span className="yoo-last" />
                                                        </div>
                                                    </th>
                                                    <ThSortable width="15%" sort={sort} onSorted={() => getResults(searchQuery)} column="image">
                                                        {translate("Image")}
                                                    </ThSortable>
                                                    <ThSortable width="35%" sort={sort} onSorted={() => getResults(searchQuery)} column="title">
                                                        {translate("Title")}
                                                    </ThSortable>
                                                    <th width="15%">{translate("Pricing & Unit")}</th>
                                                    <ThSortable width="15%" sort={sort} onSorted={() => getResults(searchQuery)} column="created_at">
                                                        {translate("Date")}
                                                    </ThSortable>
                                                    <th style={{ width: "1%" }} className="sorting">
                                                        {translate("Action")}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {gifts.data.map((gift, index) => (
                                                    <tr className="odd" key={index}>
                                                        <td className="sorting_1" onClick={() => handleMark(gift.id)}>
                                                            <div
                                                                className={`yoo-check-mark ${markItems.some((item) => item === gift.id) && "active"}`}
                                                            />
                                                        </td>
                                                        <td>
                                                            <img
                                                                src={gift?.gift_image || "static/no-image.jpg"}
                                                                alt={gift?.content?.title}
                                                                style={{ width: "60px", borderRadius: "4px" }}
                                                                loading="lazy"
                                                                decoding="async"
                                                            />
                                                        </td>
                                                        <td>
                                                            <div className="font-weight-bold">{gift?.content?.title}</div>
                                                            {gift.have_variations === 1 && (
                                                                <small className="text-primary d-block">
                                                                    {gift.variations?.length} {translate("Variations Available")}
                                                                </small>
                                                            )}
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column gap-1">
                                                                <span className="font-weight-bold text-dark">
                                                                    ₹{gift.amount}
                                                                </span>
                                                                <div className="d-flex gap-1 align-items-center mt-1">
                                                                    {gift.unit && (
                                                                        <span
                                                                            className="badge badge-light border text-muted px-2"
                                                                            style={{ fontSize: "11px" }}
                                                                        >
                                                                            Per {gift.unit}
                                                                        </span>
                                                                    )}
                                                                    {gift.have_variations === 1 ? (
                                                                        <span
                                                                            className="badge badge-success border text-black px-2"
                                                                            style={{ fontSize: "11px" }}
                                                                        >
                                                                            {translate("Multi-Price")}
                                                                        </span>
                                                                    ) : (
                                                                        <span
                                                                            className="badge badge-light border text-muted px-2"
                                                                            style={{ fontSize: "11px" }}
                                                                        >
                                                                            {translate("Fixed")}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{moment(gift.created_at).format("ll")}</td>
                                                        <td>
                                                            <div className="d-flex" style={{ gap: "5px" }}>
                                                                <Link href={route("admin.gifts.edit", gift)} className="badge badge-primary">
                                                                    <IonIcon icon={createOutline} style={{ height: "16px", width: "16px" }} />
                                                                </Link>
                                                                <DeleteButton href={route("admin.gifts.destroy", gift)} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {!gifts.data.length && (
                                            <div
                                                className="no-data-found"
                                                style={{
                                                    textAlign: "center",
                                                    padding: "50px"
                                                }}
                                            >
                                                <p>{translate("No gift found")}!</p>
                                            </div>
                                        )}
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* .yoo-card */}
                    {gifts.total > 1 && (
                        <div className="pagination-wrapper" style={{ marginTop: "10px" }}>
                            <ul className="pagination">
                                {gifts.links.map((link, index) => (
                                    <li className={`page-item ${link.active ? "active" : ""}`} key={`pagination_${index}`}>
                                        <Link
                                            href={link.url}
                                            className="page-link"
                                            dangerouslySetInnerHTML={{
                                                __html: link.label
                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="yoo-height-b30 yoo-height-lg-b30" />
                </div>
            </AdminLayouts>
        </>
    )
}
