// IMPORTING OTHER TYPES
import { UserProps } from "./Props"

// A TYPE FOR THE USER DATA
export type UserType = UserProps & { login: { uuid: string } }
// A TYPE FOR THE APP FROMDATA
export type AppFormData = { userNumber: number }