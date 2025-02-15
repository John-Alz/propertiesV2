import React from 'react'

export const Hero = () => {
    return (
        <div >
            <img src="/hero-image.jpg" className="w-[100%] h-[400px] md:h-[600px] relative object-bottom object-cover" alt="Hero" />
            <div className='absolute top-[40px] md:top-[130px] left-[10px] md:left-[140px] w-[350px] md:w-[500px]'>
                <h1 className='text-5xl md:text-7xl font-bold  lg:leading-22'>Peace, nature, dream.</h1>
                <p className='text-xl font-medium'>Find and book a great experience.</p>
            </div>
        </div>
    )
}
