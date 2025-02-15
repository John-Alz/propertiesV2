import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { PropertiesContext } from '../context/PropertiesContext';

export const Filters = () => {

    const [place, setPlace] = useState('All Stays')

    const [state, dispatch] = useContext(PropertiesContext)

    const countries = [
        {
            id: 1,
            name: 'All Stays',
        },
        {
            id: 2,
            name: 'Norway',
        },
        {
            id: 3,
            name: 'Finland',
        },
        {
            id: 4,
            name: 'Sweden',
        },
        {
            id: 5,
            name: 'Switzerland',
        },
    ];

    const onFilterLocation = (location) => {
        setPlace(location)
        dispatch({
            type: 'filter_location',
            payload: location
        });
    }

    const onFilterRoom = (e) => {
        e.preventDefault();
        const numsRooms = e.target.value
        dispatch({
            type: 'filter_rooms',
            payload: numsRooms
        })
    }


    return (
        <div className='bg-filters w-[85%] m-auto text-white rounded-2xl border-2 border-grayV1 absolute bottom-[-60px] left-0 right-0'>
            <div className='flex justify-between w-[95%] m-auto pt-8 pb-8'>
                <div className='flex gap-5 items-center'>
                    {
                        countries.map((country) => (
                            <button onClick={() => onFilterLocation(country.name)} key={country.id} className={`${place === country.name ? 'bg-btn-active 0' : null}py-1 px-3 rounded-lg cursor-pointer`}>{country.name}</button>
                        ))
                    }
                </div>
                <div className='flex items-center gap-5'>
                    <p>SuperHost</p>
                    <div className=' '>
                        <select className='cursor-pointer border-2 rounded-2xl border-grayV1 bg-filters px-6 py-3' onChange={onFilterRoom}>

                            <option value='all' className='text-white'>Property type</option>
                            <option value="1" className='text-white cursor-pointer'>1 Bedroom</option>
                            <option value="2" className='text-white cursor-pointer'>2 Bedroom</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )
}
