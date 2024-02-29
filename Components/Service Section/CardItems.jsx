import React from 'react'

function CardItems({ icon, isHeading, description }) {
    return (
        <div className=' w-full md:w-[48%] py-8 px-5 lg:px-2 xl:px-5 bg-white rounded-lg text-center border-2 hover:rounded-3xl hover:border-indigo-800 transition-all cursor-pointer shadow-lg'>
            <div className='flex justify-center'>
                <img className=' rounded-2xl p-1 border-black w-[60px] h-[60px] hover:bg-slate-700 hover:cursor-pointer' src={icon} alt="icons" />
            </div>
            <h3 className=' font-semibold text-[26px] lg:text-[22px] xl:text-[26px] text-indigo-700 my-4'>{isHeading}</h3>
            <p className='text-xl lg:text-lg xl:text-xl font-normal px-2 mb-5'>{description}</p>
            <button className=' text-[16px] text-white bg-sky-600 py-2 px-4 capitalize rounded-2xl hover:bg-black transition-all'>
                view more
            </button>
        </div>
    )
}

export default CardItems;