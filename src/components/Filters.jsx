import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { PropertiesContext } from '../context/PropertiesContext';

export const Filters = () => {

    const [place, setPlace] = useState('All Stays')
    const [host, setHost] = useState(true)

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

    const onFilterHost = () => {
        setHost(!host)
        dispatch({
            type: 'filter_host',
            payload: host
        })
    }


    return (
        <div className='bg-filters w-[95%] md:w-[85%] m-auto translate-y-[-50%] text-white text-xs md:text-base rounded-2xl border-2 border-grayV1 left-0 right-0'>
            <div className='flex flex-col items-center lg:flex-row lg:justify-between gap-5 w-[95%] m-auto pt-8 pb-8'>
                <div className='flex  md:gap-5 items-center'>
                    {
                        countries.map((country) => (
                            <button onClick={() => onFilterLocation(country.name)} key={country.id} className={`${place === country.name ? 'bg-btn-active 0' : null}py-1 px-3 rounded-lg cursor-pointer`}>{country.name}</button>
                        ))
                    }
                </div>
                <div className='flex items-center gap-5'>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="superHost" class="sr-only peer" />
                        <div onClick={onFilterHost} class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-toggle"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">SuperHost</span>
                    </label>
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
