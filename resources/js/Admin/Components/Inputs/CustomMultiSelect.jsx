import React, { useState, useRef, useEffect } from "react"
import "./CustomSelect.css"

export default function CustomMultiSelect({ options, value = [], placeholder, onChange }) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const boxRef = useRef(null)

    const filtered = options.filter((o) => {
        const label = (o.label || "").toString().toLowerCase()
        const s = (search || "").toString().toLowerCase()
        return label.includes(s)
    })

    useEffect(() => {
        const clickHandler = (e) => {
            if (!boxRef.current?.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("click", clickHandler)
        return () => document.removeEventListener("click", clickHandler)
    }, [])

    const toggleItem = (val) => {
        let newValues

        if (value.includes(val)) {
            newValues = value.filter((v) => v !== val)
        } else {
            newValues = [...value, val]
        }

        onChange(newValues)
    }

    return (
        <div className="custom-select" ref={boxRef}>
            <div className="selected-option" onClick={() => setOpen(!open)}>
                {value.length > 0 ? `${value.length} Selected` : placeholder}
                <i className={`arrow-icon ${open ? "up" : "down"}`}></i>
            </div>

            {open && (
                <div className="options-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <div className="options-container-option">
                        {filtered.map((option) => (
                            <div
                                key={option.value}
                                className={`option ${value.includes(option.value) ? "defaultSelect" : ""}`}
                                onClick={() => toggleItem(option.value)}
                            >
                                <input type="checkbox" checked={value.includes(option.value)} readOnly />
                                <span>{option.label}</span>
                            </div>
                        ))}

                        {filtered.length === 0 && <div className="no-options">No results found</div>}
                    </div>
                </div>
            )}
        </div>
    )
}
