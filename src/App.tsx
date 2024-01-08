// IMPORTING DIFFERENT FILES
    // IMPORTING DIFFERENT MODULES
import React from "react"
    // IMPORTING DIFFERENT TYPES
import {UserData, AppFormData, NumberToNumberFunction} from "./types/Types"
    // IMPORTING DIFFERENT COMPONENTS
import Counter from "./components/Counter"
import Fibonacci from "./components/Fibonacci"

// DECLARING A FUNCTION THAT RETURNS THE APP COMPONENT
export default function App(){
    // DEFINING STATE
        // A STATE TO KEEP TRACK OF COUNT VALUE
    const [count, setCount] = React.useState<number>(0)
        // A STATE TO KEEP TRACK OF USERS VALUE
    const [users] = React.useState<UserData[]>([])
        // A STATE TO KEEP TRACK OF FORM DATA
    const [formData, setFormData] = React.useState<AppFormData>({ index: 0 })

    // DEFINING REFS
        // A REF FOR COUNTING THE RENDERS
    const renders = React.useRef<number>(0)
        // A REF FOR THE INPUT FIELD FOR THE FIBONACCI COMPONENT
    const inputRef = React.useRef<HTMLInputElement | null>(null)

    // A USEEFFECT TO KEEP TRACK OF THE USERS
    React.useEffect(() => {
        console.log("mounting")
        console.log(`${users}`)

        return console.log("dismounting")
    }, [users])

    // A USEEFFECT FOR COUNTING THE RENDERS
    React.useEffect(() => {renders.current++})

    // A MEMOIZED FUNCTION THAT ADDS UP THE COUNT
    const addCount: () => void = React.useCallback(() => setCount(prevCount => prevCount + 1), [])
    const subtractCount: () => void = React.useCallback(() => setCount(prevCount => prevCount - 1), [])

    // A FUNCTION THAT RETURNS THE FIBONACCI VALUE OF A SPECIFIED INDEX
    const findFibonacci: NumberToNumberFunction = React.useCallback((index: number) => (index < 2) ? index : findFibonacci(index - 1) + findFibonacci(index - 2), [])

    // A FUNCTION THAT HANDLES FORMDATA
    function handleFormData(e: React.ChangeEvent<HTMLInputElement>): void{
        const {name, value} = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // A MEMOIZED VALUE TO DISPLAY THE CALCULATED FIBONACCI NUMBER
    const fibonacciValue: number = React.useMemo(() => findFibonacci(formData.index), [findFibonacci, formData.index])

    return (
        <div className="App">
            <Counter
                addCount={addCount}
                subtractCount={subtractCount}
            >Count is {count}</Counter>

            <Fibonacci
                formData={formData}
                handleFormData={handleFormData}
                inputRef={inputRef}
            >The fibonacci value is: {fibonacciValue}</Fibonacci>

            <p>The renders are: {renders.current}</p>
        </div>
    )
}