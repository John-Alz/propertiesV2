import React from 'react'
import { PropertiesContext } from './PropertiesContext'
import { propertiesReducer } from '../reducers/propertiesReducer'
import { useReducer } from 'react'

const initialState = {
    properties: [],
    filteredByCountry: "All Stays",
    filteredByBedrooms: "All",
    filteredByHost: true,
}

export const PropertiesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(propertiesReducer, initialState)

    return (
        <PropertiesContext.Provider value={[state, dispatch]}>
            {children}
        </PropertiesContext.Provider>
    )
}
