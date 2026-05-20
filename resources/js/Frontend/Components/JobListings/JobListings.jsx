import React, { useMemo, useState } from "react"

export default function JobListings({ data }) {
    const { section_title, section_subtitle, job_list } = data
    const [activeJobIndex, setActiveJobIndex] = useState(null)
    const activeJob = useMemo(() => {
        if (activeJobIndex === null) return null
        return (job_list || [])[activeJobIndex] || null
    }, [activeJobIndex, job_list])

    const buildMailTo = (job) => {
        const to = (job?.contact_email || "").trim() || "careers@homelesscarefoundation.org"
        const subject = `Application for ${job?.job_title || "Open Position"}`
        const body = `Hello Team,\n\nI am interested in applying for the ${
            job?.job_title || "open role"
        } role.\n\nRegards,`
        return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    const labelValuePairs = (job) => [
        { label: "Work Place", value: job?.workplace || job?.job_duration },
        { label: "Organization Type", value: job?.organization_type },
        { label: "Reporting To", value: job?.reporting_to },
        { label: "Employment Type", value: job?.employment_type || job?.job_status },
        { label: "Salary", value: job?.salary }
    ]

    return (
        <div className="container">
            {(section_subtitle || section_title) && (
                <>
                    <div className="cs_section_heading cs_style_1 text-center">
                        {section_subtitle && (
                            <p
                                className="cs_section_subtitle cs_fs_18 cs_medium"
                                dangerouslySetInnerHTML={{
                                    __html: section_subtitle
                                }}
                            />
                        )}
                        {section_title && (
                            <h2
                                className="cs_section_title cs_fs_53 cs_normal mb-0"
                                dangerouslySetInnerHTML={{
                                    __html: section_title
                                }}
                            />
                        )}
                    </div>
                    <div className="cs_height_85 cs_height_lg_50" />
                </>
            )}

            <ul className="cs_list cs_style_5 cs_mp0">
                {job_list?.map((item, index) => (
                    <li key={index}>
                        <div className="cs_list_left">
                            <h2
                                className="cs_fs_30 cs_normal"
                                dangerouslySetInnerHTML={{
                                    __html: item.job_title
                                }}
                            />
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: item.job_summary || item.job_description
                                }}
                            />
                            <div className="cs_list_meta">
                                {(item.workplace || item.job_duration) && (
                                    <span>
                                        <i>
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM9.78 5H9.72C9.32 5 9 5.32 9 5.72V10.44C9 10.79 9.18 11.12 9.49 11.3L13.64 13.79C13.98 13.99 14.42 13.89 14.62 13.55C14.83 13.21 14.72 12.76 14.37 12.56L10.5 10.26V5.72C10.5 5.32 10.18 5 9.78 5Z"
                                                    fill="#FE5B2C"
                                                />
                                            </svg>
                                        </i>
                                        {item.workplace || item.job_duration}
                                    </span>
                                )}
                                {(item.employment_type || item.job_status) && (
                                    <span>
                                        <i>
                                            <svg width={20} height={19} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 4V2H8V4H12ZM2 6V17H18V6H2ZM18 4C19.11 4 20 4.89 20 6V17C20 18.11 19.11 19 18 19H2C0.89 19 0 18.11 0 17L0.00999999 6C0.00999999 4.89 0.89 4 2 4H6V2C6 0.89 6.89 0 8 0H12C13.11 0 14 0.89 14 2V4H18Z"
                                                    fill="#FE5B2C"
                                                />
                                            </svg>
                                        </i>
                                        {item.employment_type || item.job_status}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="cs_list_right">
                            <button
                                type="button"
                                className="cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color"
                                onClick={() => setActiveJobIndex(index)}
                            >
                                View Details
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {activeJob && (
                <>
                    <div className="modal-backdrop fade show" onClick={() => setActiveJobIndex(null)} />
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{activeJob.job_title}</h5>
                                    <button type="button" className="close" onClick={() => setActiveJobIndex(null)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        {labelValuePairs(activeJob)
                                            .filter((entry) => entry.value)
                                            .map((entry) => (
                                                <div className="col-md-6 mb-2" key={entry.label}>
                                                    <strong>{entry.label}: </strong>
                                                    <span>{entry.value}</span>
                                                </div>
                                            ))}
                                    </div>
                                    {activeJob.job_summary && (
                                        <div
                                            className="mt-3"
                                            dangerouslySetInnerHTML={{
                                                __html: activeJob.job_summary
                                            }}
                                        />
                                    )}
                                    {activeJob.job_description && (
                                        <div
                                            className="mt-2 mb-0"
                                            dangerouslySetInnerHTML={{
                                                __html: activeJob.job_description
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="modal-footer">
                                    <a
                                        href={buildMailTo(activeJob)}
                                        className="cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color"
                                    >
                                        Send Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
