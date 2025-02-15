import React from 'react'

export const Hero = () => {
    return (
        <div className="bg-[url(/hero-image.jpg)] w-full h-[80vh] bg-no-repeat  bg-[length:100%_auto]">
            <div className='w-[90%] lg:w-[80%] m-auto h-[80vh] flex flex-col justify-center gap-4'>
                <h1 className='text-5xl md:text-7xl font-bold md:w-[70%] lg:w-[50%] lg:leading-22'>Peace, nature, dream.</h1>
                <p className='text-xl font-medium'>Find and book a great experience.</p>
            </div>
        </div>
    )
}
