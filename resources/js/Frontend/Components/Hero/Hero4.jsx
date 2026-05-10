import React from "react"
import Button from "../Button"

export default function Hero4({ data }) {
    const { background_image_url, title, sub_title, action_text, action_url, action_text_2, action_url_2 } = data
    return (
        <>
            <img className="w-100" src={background_image_url} />
        </>
    )
}
