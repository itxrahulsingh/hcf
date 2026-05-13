import Hero from "@/Frontend/Components/Hero/index.jsx"
import Hero2 from "@/Frontend/Components/Hero/Hero2"
import Hero3 from "@/Frontend/Components/Hero/Hero3"
import Hero4 from "@/Frontend/Components/Hero/Hero4"
import Hero5 from "@/Frontend/Components/Hero/Hero5"
import Hero6 from "@/Frontend/Components/Hero/Hero6"
import Hero7 from "@/Frontend/Components/Hero/Hero7"
import Hero8 from "@/Frontend/Components/Hero/Hero8"
import Hero9 from "@/Frontend/Components/Hero/Hero9"
import Hero10 from "@/Frontend/Components/Hero/Hero10"
import Hero11 from "@/Frontend/Components/Hero/Hero11"
import Hero12 from "../Hero/Hero12"
import Hero13 from "../Hero/Hero13"
import Hero14 from "../Hero/Hero14"
import Hero15 from "../Hero/Hero15"
import Hero16 from "../Hero/Hero16"
import { useEffect, useMemo, useState } from "react"

export default function HeroSection({ sections_data }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768)
        onResize()
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    const resolvedData = useMemo(() => {
        if (!sections_data) return sections_data
        const mobileBg = sections_data.mobile_background_image_url
        if (isMobile && mobileBg) {
            return { ...sections_data, background_image_url: mobileBg }
        }
        return sections_data
    }, [sections_data, isMobile])

    const sectionLayout = sections_data?.layout ?? "1"

    let layoutSection = ""
    // conditional layout rendering
    if (sectionLayout === "1") {
        layoutSection = <Hero data={resolvedData} />
    } else if (sectionLayout === "2") {
        layoutSection = <Hero2 data={resolvedData} />
    } else if (sectionLayout === "3") {
        layoutSection = <Hero3 data={resolvedData} />
    } else if (sectionLayout === "4") {
        layoutSection = <Hero4 data={resolvedData} />
    } else if (sectionLayout === "5") {
        layoutSection = <Hero5 data={resolvedData} />
    } else if (sectionLayout === "6") {
        layoutSection = <Hero6 data={resolvedData} />
    } else if (sectionLayout === "7") {
        layoutSection = <Hero7 data={resolvedData} />
    } else if (sectionLayout === "8") {
        layoutSection = <Hero8 data={resolvedData} />
    } else if (sectionLayout === "9") {
        layoutSection = <Hero9 data={resolvedData} />
    } else if (sectionLayout === "10") {
        layoutSection = <Hero10 data={resolvedData} />
    } else if (sectionLayout === "11") {
        layoutSection = <Hero11 data={resolvedData} />
    } else if (sectionLayout === "12") {
        layoutSection = <Hero12 data={resolvedData} />
    } else if (sectionLayout === "13") {
        layoutSection = <Hero13 data={resolvedData} />
    } else if (sectionLayout === "14") {
        layoutSection = <Hero14 data={resolvedData} />
    } else if (sectionLayout === "15") {
        layoutSection = <Hero15 data={resolvedData} />
    } else if (sectionLayout === "16") {
        layoutSection = <Hero16 data={resolvedData} />
    }
    return <>{layoutSection}</>
}
