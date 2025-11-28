import Cause1 from "@/Frontend/Components/Cause/Cause1"
import Cause2 from "@/Frontend/Components/Cause/Cause2"
import Cause3 from "@/Frontend/Components/Cause/Cause3"
import Cause4 from "@/Frontend/Components/Cause/Cause4"
import Cause5 from "@/Frontend/Components/Cause/Cause5"

export default function CauseSection({ sections_data }) {
    const sectionLayout = sections_data?.layout ?? "1"
    // conditional rendering
    let section = ""
    if (sectionLayout === "1") {
        section = <Cause1 data={sections_data} />
    } else if (sectionLayout === "2") {
        section = <Cause2 data={sections_data} />
    } else if (sectionLayout === "3") {
        section = <Cause3 data={sections_data} />
    } else if (sectionLayout === "4") {
        section = <Cause4 data={sections_data} />
    } else if (sectionLayout === "5") {
        section = <Cause5 data={sections_data} />
    }
    return <>{section}</>
}
