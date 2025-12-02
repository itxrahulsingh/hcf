import { useState, useEffect } from "react";

const COUNTRY_STATES = {
    IN: [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
        "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
        "Uttarakhand", "West Bengal"
    ],

    US: [
        "Alabama","Alaska","Arizona","Arkansas","California","Colorado",
        "Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho",
        "Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana",
        "Maine","Maryland","Massachusetts","Michigan","Minnesota",
        "Mississippi","Missouri","Montana","Nebraska","Nevada",
        "New Hampshire","New Jersey","New Mexico","New York",
        "North Carolina","North Dakota","Ohio","Oklahoma","Oregon",
        "Pennsylvania","Rhode Island","South Carolina","South Dakota",
        "Tennessee","Texas","Utah","Vermont","Virginia","Washington",
        "West Virginia","Wisconsin","Wyoming"
    ],

    CA: [
        "Alberta","British Columbia","Manitoba","New Brunswick",
        "Newfoundland and Labrador","Nova Scotia","Ontario",
        "Prince Edward Island","Quebec","Saskatchewan"
    ],

    AU: [
        "Australian Capital Territory","New South Wales","Northern Territory",
        "Queensland","South Australia","Tasmania","Victoria","Western Australia"
    ],

    UK: [
        "England","Scotland","Wales","Northern Ireland"
    ]
};

export default function useStatesByCountry(countryCode = "IN") {
    const [states, setStates] = useState([]);

    useEffect(() => {
        const list = COUNTRY_STATES[countryCode] || [];
        setStates([...list].sort());
    }, [countryCode]);

    return { states };
}
