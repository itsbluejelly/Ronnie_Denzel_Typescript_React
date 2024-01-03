// A TYPE FOR APP COMPONENT PROPS
export type AppProps = { children?: React.ReactNode }

// A TYPE FOR THE USER COMPONENT PROPS
export type UserProps = {
    name: {
        first: string,
        last: string,
    },

    email: string
}