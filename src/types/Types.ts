// IMPORTING NECESSARY ENUMS
import {APP_STATE_REDUCER_ACTION_TYPE} from './enums'

// DECLARING GENERICS
    // A GENERIC TO CREATE A UNION OF OBJECTS FROM A GIVEN OBJECT
type ObjectGenerator<Type extends object> = {
    [key in keyof Type]: { [name in key]: Type[key] }
}[keyof Type]

    // A GENERIC TO OMIT A CERTAIN FIELD FROM AN OBJECT, AND MAKE THE REST OPTIONAL
type ObjectEmitter<Type extends object, specifiedKey extends keyof Type> = {
    [key in keyof Type as key extends specifiedKey ? never : key]: Type[key]
}

// DECLARING A TYPE FOR THE APP STATE
export type AppState = {
    count: number,
    formData: { name: string }
}

// DECLARING A TYPE FOR THE PAYLOAD PROPERTY
type PayLoad = ObjectGenerator<ObjectEmitter<AppState, 'count'>>
// DECLARING A TYPE FOR THE APPSTATEREDUCERFUNCTION ACTION
export type AppStateReducerAction = {
    type: APP_STATE_REDUCER_ACTION_TYPE
    payLoad?: PayLoad
}