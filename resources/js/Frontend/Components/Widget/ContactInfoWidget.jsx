import React from "react"
import { Icon } from "@iconify/react"
import { useSelector } from "react-redux"

export default function ContactInfoWidget() {
    const contact = useSelector((state) => state.customize.contact)
    return (
        <>
            {contact?.contact_address ? (
                <p
                    dangerouslySetInnerHTML={{
                        __html: contact.contact_address
                    }}
                />
            ) : (
                <p>
                    Homeless Care Foundation has sole aim to provide Food, Care, Dignity & Shelter to Homeless & Abandoned Individuals who are
                    neglected by the society & have no one to take care for them.
                </p>
            )}
            {/* {contact.contact_phone_number && (
                <h3>
                    <a href={`tel:${contact.contact_phone_number}`}>{contact.contact_phone_number}</a>
                </h3>
            )}
            {contact.contact_email && (
                <p>
                    <a href={`mailto:${contact.contact_email}`}>{contact.contact_email}</a>
                </p>
            )} */}
        </>
    )
}
