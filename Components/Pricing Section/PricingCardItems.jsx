import React from 'react'

function PricingCardItems({ Plan, money, cardtitle, isButton }) {
    return (
        <div className='w-full md:w-[45%] lg:w-[30%] bg-white border-2 border-orange-800 py-16 px-6 rounded-2xl mb-12 shadow-xl'>
            <h3 className='text-sky-600 font-normal text-[26px] mb-2'>{Plan}</h3>
            <h3 className='text-indigo-700 font-bold text-[42px] mb-5'>{money}</h3>
            <button className=' text-xl text-white bg-emerald-800 py-2 px-5 capitalize rounded-2xl hover:bg-black transition-all'>{isButton}</button>
            <p className='text-lg mt-7'>{cardtitle}</p>
        </div>
    )
}

export default PricingCardItems;