import React from 'react'

export const Hero = () => {
    return (
        <div className='bg-[url(/hero-image.jpg)] w-full h-screen bg-no-repeat bg-cover'>
            <div className='w-[80%] m-auto h-screen flex flex-col justify-center gap-4'>
                <h1 className='text-7xl font-bold w-[40%] leading-22'>Peace, nature, dream.</h1>
                <p className='text-xl font-medium'>Find and book a great experience.</p>
            </div>
        </div>
    )
}
