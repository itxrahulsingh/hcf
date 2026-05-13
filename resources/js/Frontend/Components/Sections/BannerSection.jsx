import Banner1 from "@/Frontend/Components/Banner/Banner1"
import Banner2 from "@/Frontend/Components/Banner/Banner2"
import Banner3 from "@/Frontend/Components/Banner/Banner3"
import Banner4 from "@/Frontend/Components/Banner/Banner4"
import Banner5 from "@/Frontend/Components/Banner/Banner5"
import Banner6 from "@/Frontend/Components/Banner/Banner6"
import { useEffect, useMemo, useState } from "react"

export default function BannerSection({ sections_data }) {
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
    let section = ""
    if (sectionLayout === "1") {
        section = <Banner1 data={resolvedData} />
    } else if (sectionLayout === "2") {
        section = <Banner2 data={resolvedData} />
    } else if (sectionLayout === "3") {
        section = <Banner3 data={resolvedData} />
    } else if (sectionLayout === "4") {
        section = <Banner4 data={resolvedData} />
    } else if (sectionLayout === "5") {
        section = <Banner5 data={resolvedData} />
    } else if (sectionLayout === "6") {
        section = <Banner6 data={resolvedData} />
    }
    return <>{section}</>
}
