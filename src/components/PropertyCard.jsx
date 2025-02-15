import React from 'react'

export const PropertyCard = ({ item }) => {
    return (
        <div className='text-white w-[398px] font-outfit'>
            <div className='relative'>
                <img className='rounded-tr-2xl rounded-tl-2xl w-[398px]' src={item.image} />
                {
                    item.superhost && <span className='absolute top-2 left-2 bg-primary flex px-2 py-1 rounded-2xl text-xs gap-1'>SuperHost <img width={15} src={'/Starfill.svg'} alt='star' /></span>
                }
            </div>
            <div className=' border border-t-0 border-grayV1 rounded-br-2xl rounded-bl-2xl  p-3'>
                <h3 className='font-medium mb-2'>{item.title}</h3>
                <p className='text-sm'>{item.description}</p>
                <div className='flex gap-5 text-xs pt-4 pb-4 border-b-2 border-grayV1'>
                    <p className='flex items-center'><img src={'/Home_duotone.svg'} alt='homeIcon' />{item.capacity.bedroom} bedroom</p>
                    <p className='flex items-center'> <img src={'/User_alt_duotone.svg'} />{item.capacity.people} guest</p>
                </div>
                <div className='flex justify-between pt-4 pb-4'>
                    <p className='text-lg'>${item.price}<small className='opacity-78'>/nigth</small></p>
                    <span className='flex items-center gap-1'><img src={'/Starfill.svg'} alt='star' />{item.rating}</span>
                </div>
            </div>
        </div>
    )
}
