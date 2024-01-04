// IMPORTING DIFFERENT FILES
    // IMPORTING DIFFERENT MODULES
import React from "react"
    // IMPORTING DIFFERENT COMPONENTS
import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import GenericList from "./components/GenericList"

// DECLARING A FUNCTION THAT RETURNS THE APP COMPONENT
export default function App(){
    // DEFINING A STATE THAT KEEPS TRACK OF COUNT VALUE
    const [count, setCount] = React.useState<number>(0)

    return (
        <div>
            <Heading title="Hello"/>
            <Section title="different section">A section paragraph</Section>
            <Counter handleCount={setCount}>Count is: {count}</Counter>
            
            <GenericList 
                items={[[1, 2], ["t", "f"]]} 
                render={(item) => <span className="gold">{item}</span>}
            />
        </div>
    )
}