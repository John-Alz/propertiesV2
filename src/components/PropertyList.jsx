import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useReducer } from 'react';
import { PropertyCard } from './PropertyCard';
import { propertiesReducer } from '../reducers/propertiesReducer';
import { useContext } from 'react';
import { PropertiesContext } from '../context/PropertiesContext';


export const PropertyList = () => {

    const [state, dispatch] = useContext(PropertiesContext)


    useFetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json", dispatch)

    const filteredProperties = state.properties.filter((item) => {
        return (
            (state.filteredByCountry === "All Stays" || item.location === state.filteredByCountry) &&
            (state.filteredByBedrooms === "All" || item.capacity.bedroom == state.filteredByBedrooms) &&
            (state.filteredByHost === null || item.superhost === state.filteredByHost)
        )
    })

    console.log(filteredProperties);


    return (
        <div className='w-[85%] m-auto pb-12'>
            <h2 className='text-white text-3xl font-semibold pb-10'>Over 200 stays</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-11 justify-self-center'>
                {
                    filteredProperties.length > 0 ? filteredProperties.map(item => (
                        <PropertyCard key={item.id} item={item} />
                    )) : state.properties.map(item => (
                        <PropertyCard key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}
