import React, { useState, useEffect, useRef } from "react"
import { IonIcon } from "@ionic/react"
import { checkmarkOutline } from 'ionicons/icons';
import "./CustomSelect.css"

const CustomSelect = ({ options, value, placeholder, onSelect }) => {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const selectContainerRef = useRef(null)
    const searchInputRef = useRef(null)
    const optionsContainerRef = useRef(null)

    // Sync selected option when value or options change
    useEffect(() => {
        const found = options.find((option) => option.value == value)
        setSelectedOption(found || null)
    }, [value, options])

    const filteredOptions = options.filter((option) => {
        const label = (option.label || "").toString().toLowerCase()
        const query = (searchQuery || "").toLowerCase()
        return label.includes(query) || option.value.toString().includes(query)
    })

    const toggleOptions = () => {
        if (!showOptions) {
            setShowOptions(true)
            setSelectedIndex(-1)
            setSearchQuery("") // Reset search on open
            setTimeout(() => searchInputRef.current?.focus(), 0)
        } else {
            setShowOptions(false)
        }
    }

    const selectOption = (option) => {
        setSelectedOption(option)
        setShowOptions(false)
        onSelect(option.value)
        setSelectedIndex(-1)
    }

    // Handle Outside Click
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectContainerRef.current && !selectContainerRef.current.contains(event.target)) {
                setShowOptions(false)
            }
        }
        if (showOptions) {
            document.addEventListener("mousedown", handleOutsideClick)
        }
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    }, [showOptions])

    // Keyboard Navigation Logic
    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault()
            setSelectedIndex(prev => (prev < filteredOptions.length - 1 ? prev + 1 : prev))
        } else if (e.key === "ArrowUp") {
            e.preventDefault()
            setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev))
        } else if (e.key === "Enter" && selectedIndex !== -1) {
            e.preventDefault()
            selectOption(filteredOptions[selectedIndex])
        } else if (e.key === "Escape") {
            setShowOptions(false)
        }
    }

    // Auto-scroll to selected keyboard index
    useEffect(() => {
        if (selectedIndex !== -1 && optionsContainerRef.current) {
            const container = optionsContainerRef.current
            const selectedItem = container.children[selectedIndex]
            if (selectedItem) {
                selectedItem.scrollIntoView({ block: "nearest" })
            }
        }
    }, [selectedIndex])

    return (
        <div className={`custom-select-container ${showOptions ? "is-open" : ""}`} ref={selectContainerRef}>
            <div
                className="selected-area single-select"
                onClick={toggleOptions}
                tabIndex="0"
                onKeyDown={(e) => e.key === "Enter" && toggleOptions()}
            >
                <div className="selected-tags">
                    {selectedOption ? (
                        <div className="select-tag-static">
                            {selectedOption.image && <img src={selectedOption.image} alt="" className="tag-img" />}
                            <span className="option-label">{selectedOption.label}</span>
                        </div>
                    ) : (
                        <span className="placeholder-text">{placeholder}</span>
                    )}
                </div>
                <div className="select-actions">
                    <i className={`arrow-icon ${showOptions ? "up" : "down"}`}></i>
                </div>
            </div>

            {showOptions && (
                <div className="options-dropdown">
                    <div className="search-wrapper">
                        <input
                            ref={searchInputRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="search-input"
                            placeholder="Search..."
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    <div className="options-list" ref={optionsContainerRef}>
                        {filteredOptions.map((option, index) => {
                            const isSelected = selectedOption?.value == option.value
                            const isFocused = index === selectedIndex

                            return (
                                <div
                                    key={option.value}
                                    className={`option-item ${isSelected ? "selected" : ""} ${isFocused ? "focused" : ""}`}
                                    onClick={() => selectOption(option)}
                                >
                                    {option.image && (
                                        <div className="option-image-wrapper">
                                            <img src={option.image} alt="" className="option-img" />
                                        </div>
                                    )}
                                    <span className="option-label">{option.label}</span>
                                    {isSelected && <IonIcon icon={checkmarkOutline} className="ms-auto text-primary" style={{ fontSize: '18px' }} />}
                                </div>
                            )
                        })}
                        {filteredOptions.length === 0 && (
                            <div className="no-options p-3 text-center text-muted small">
                                No results found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomSelect
