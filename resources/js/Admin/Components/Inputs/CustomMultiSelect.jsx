import React, { useState, useRef, useEffect } from "react"
import { IonIcon } from "@ionic/react"
import { checkmarkOutline } from 'ionicons/icons';
import "./CustomSelect.css"

export default function CustomMultiSelect({ options, value = [], placeholder, onChange }) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const boxRef = useRef(null)

    // Filter logic
    const filtered = options.filter((o) => {
        const label = (o.label || "").toString().toLowerCase()
        const s = (search || "").toString().toLowerCase()
        return label.includes(s)
    })

    // Close on outside click
    useEffect(() => {
        const clickHandler = (e) => {
            if (!boxRef.current?.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", clickHandler)
        return () => document.removeEventListener("mousedown", clickHandler)
    }, [])

    const toggleItem = (val) => {
        let newValues = value.includes(val)
            ? value.filter((v) => v !== val)
            : [...value, val]
        onChange(newValues)
    }

    const removeValue = (e, val) => {
        e.stopPropagation();
        onChange(value.filter((v) => v !== val));
    }

    return (
        <div className={`custom-select-container ${open ? "is-open" : ""}`} ref={boxRef}>
            <div className="selected-area" onClick={() => setOpen(!open)}>
                <div className="selected-tags">
                    {value.length > 0 ? (
                        options.filter(o => value.includes(o.value)).map(o => (
                            <span key={o.value} className="select-tag">
                                {o.image && <img src={o.image} alt="" className="tag-img" />}
                                {o.label}
                                <span className="tag-remove" onClick={(e) => removeValue(e, o.value)}>×</span>
                            </span>
                        ))
                    ) : (
                        <span className="placeholder-text">{placeholder}</span>
                    )}
                </div>
                <div className="select-actions">
                    <i className={`arrow-icon ${open ? "up" : "down"}`}></i>
                </div>
            </div>

            {open && (
                <div className="options-dropdown">
                    <div className="search-wrapper">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            autoFocus
                        />
                    </div>

                    <div className="options-list">
                        {filtered.map((option) => {
                            const isSelected = value.includes(option.value);
                            return (
                                <div
                                    key={option.value}
                                    className={`option-item ${isSelected ? "selected" : ""}`}
                                    onClick={() => toggleItem(option.value)}
                                >
                                    <div className="option-checkbox">
                                        <input type="checkbox" checked={isSelected} readOnly />
                                    </div>
                                    {option.image && (
                                        <div className="option-image-wrapper">
                                            <img src={option.image} alt="" className="option-img" />
                                        </div>
                                    )}
                                    <span className="option-label">{option.label}</span>
                                </div>
                            );
                        })}

                        {filtered.length === 0 && <div className="no-options">No results found</div>}
                    </div>
                </div>
            )}
        </div>
    )
}
