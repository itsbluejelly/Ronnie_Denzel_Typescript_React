// IMPORTING DIFFERENT TYPES
import {SectionProps} from "../types/Props"

// A FUNCTION THAT RETURNS A SECTION COMPONENT
export default function Section({title = "My section", children}: SectionProps){
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}