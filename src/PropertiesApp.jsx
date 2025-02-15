import React from 'react'
import { Hero } from './components/Hero'
import { Filters } from './components/Filters'
import { PropertyList } from './components/PropertyList'
import { PropertiesProvider } from './context/PropertiesProvider'

export const PropertiesApp = () => {
    return (
        <div className='bg-primary'>
            <PropertiesProvider>
                <Hero />
                <Filters />
                <PropertyList />
            </PropertiesProvider>

        </div>
    )
}
