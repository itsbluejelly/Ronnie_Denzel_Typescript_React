// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
import React from 'react'
    // IMPORTING NECESSARY COMPONENTS
import User from './components/User'
    // IMPORTING NECESSARY TYPES
import {AppProps} from "./types/Props"
import {UserType, AppFormData} from './types/Types'

// DECLARING A FUNCTION THAT RETURNS THE APP COMPONENT
export default function App(props: AppProps){
    // DEFINING STATES
        // A STATE TO CONTAIN THE FETCHED DATA
    const [users, setUsers] = React.useState<UserType[]>([])
        // A STATE TO INDICATE IF THE FETCHED DATA IS LOADING
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
        // A STATE FOR THE FORMDATA
    const [formData, setFormData] = React.useState<AppFormData>({ userNumber: 1 })

    // A FUNCTION TO GET DATA FROM API
    async function getUsers(): Promise<void>{
        try {
            setIsLoading(true)

            const response: Response = await fetch(`https://randomuser.me/api/?results=${formData.userNumber}`)
            const {results, error} = await response.json()

            if(error){
                throw new Error(error)
            }else{
                setUsers(results as UserType[])
            }
        }catch (error) {
            console.error(`${(error as Error).name}: ${(error as Error).message}`);
        }finally{
            setFormData(prevFormData => ({
                ...prevFormData,
                userNumber: 1
            }))

            setIsLoading(false)
        }
    }

    // A FUNCTION TO GENERATE AN ARRAY OF USERS IN UI
    function generateUsersArray(): JSX.Element[]{
        return users.map(user => {
            const {login, name, email} = user

            return (<User 
                key={login.uuid}
                name={name}
                email={email}
            />)
        })
    }

    // RETURNING THE APP COMPONENT
    return(
        <div>
            <h1>{props.children}</h1>
            {/* A PARAGRAPH TO INDICATE LOADING */}
            {isLoading && <p>Loading...</p>}

            {/* A CONTAINER FOR THE INPUT CONTAINER*/}
            <div className='input-container'>
                <button
                    onClick={() => getUsers()}
                    disabled={isLoading ? true : false}
                >Get Users</button>

                <input 
                    type="number" 
                    name="userNumber" 
                    value={formData.userNumber}
                    placeholder='enter number of users'
                    min={1}
                    max={20}
                    
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData(prevFormData => {
                        const {name, value} = event.target

                        return {
                            ...prevFormData,
                            [name]: value
                        }
                    })} 
                />
            </div>

            <ul>{generateUsersArray()}</ul>
        </div>
    )
}