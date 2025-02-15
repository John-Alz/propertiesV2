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


    return (
        <div className='w-[90%] m-auto pt-12'>
            <h2 className='text-white text-3xl font-semibold pt-12 pb-10'>Over 200 stays</h2>
            <div className='grid grid-cols-3'>
                {
                    state.properties.map(item => (
                        <PropertyCard key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}
