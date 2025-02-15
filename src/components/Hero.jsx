import React from 'react'

export const Hero = () => {
    return (
        <div className="w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden">
            <img src="/hero-image.jpg" className="w-full h-full object-cover" alt="Hero" />
            <div className='w-[90%] absolute lg:w-[80%] m-auto h-[80vh] flex flex-col justify-center gap-4'>
                <h1 className='text-5xl md:text-7xl font-bold md:w-[70%] lg:w-[50%] lg:leading-22'>Peace, nature, dream.</h1>
                <p className='text-xl font-medium'>Find and book a great experience.</p>
            </div>
        </div>
    )
}
