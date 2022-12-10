import React, { createContext, useReducer } from 'react'
import { AuthReducer } from './AuthReducer'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [Auth, dispatch] = useReducer(AuthReducer, undefined)
    const setUser = (user) => {
        dispatch({type: 'login', payload: user})
    }
    return (
        <AuthContext.Provider value={{
            Auth,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
