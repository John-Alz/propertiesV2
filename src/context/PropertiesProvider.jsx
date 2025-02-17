import React from 'react'
import { PropertiesContext } from './PropertiesContext'
import { propertiesReducer } from '../reducers/propertiesReducer'
import { useReducer } from 'react'

const initialState = {
    properties: [],
    filteredProperties: [],
    filteredByCountry: "All Stays",
    filteredByBedrooms: "All",
    filteredByHost: false,
}

export const PropertiesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(propertiesReducer, initialState)

    return (
        <PropertiesContext.Provider value={[state, dispatch]}>
            {children}
        </PropertiesContext.Provider>
    )
}
