// IMPORTING NECESSARY MODULES
import React from "react"

// A TYPE FOR THE HEADING PROPS
export type HeadingProps = { title: string }

// A TYPE FOR THE SECTION PROPS
export type SectionProps = {
    title ?: string,
    children: React.ReactNode
}

// A TYPE FOR THE COUNTER PROPS
export type CounterProps = {
    children: React.ReactNode,
    handleCount: React.Dispatch<React.SetStateAction<number>>
}

// A TYPE FOR THE GENERICLIST PROPS
export type GenericListProps<T> = {
    items: T[],
    render: (item: T) => React.ReactNode
}