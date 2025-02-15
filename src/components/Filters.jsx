import React from 'react'
import { useState } from 'react';

export const Filters = () => {

    const [place, setPlace] = useState('All Stays')

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
            name: 'Filand',
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

    const onFilter = (location) => {
        setPlace(location)
        console.log(place);
    }


    return (
        <div className='bg-filters w-[90%] m-auto text-white rounded-2xl border-2 border-grayV1 absolute bottom-[-60px] left-0 right-0'>
            <div className='flex justify-between w-[95%] m-auto pt-8 pb-8'>
                <div className='flex gap-5 items-center'>
                    {
                        countries.map((country) => (
                            <button onClick={() => onFilter(country.name)} key={country.id} className={`${place === country.name ? 'bg-btn-active 0' : null}py-1 px-3 rounded-lg cursor-pointer`}>{country.name}</button>
                        ))
                    }
                </div>
                <div className='flex items-center gap-5'>
                    <p>SuperHost</p>
                    <div className='px-6 py-3 border-2 rounded-2xl border-grayV1'>
                        <select className='cursor-pointer'>
                            <option>Property type</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )
}
