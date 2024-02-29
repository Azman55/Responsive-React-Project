import React from 'react'

function Clients({ isImage, myself, isName, title }) {
    return (
        <div className=' py-10 px-5 bg-[#e2e8f0] rounded-2xl md:w-[45%] lg:w-[30%] text-center border-2 hover:border-2 hover:border-indigo-700 transition-all lg:shadow-lg mb-7 md:mb-0 lg:mb-0'>
            <div className='flex justify-center'>
                <img className='w-[150px] rounded-2xl' src={isImage} alt="Web Developer" />
            </div>
            <p className=' font-normal text-lg pt-5'>{myself}</p>
            <h4 className=' text-slate-700 font-semibold text-2xl py-2'>{isName} </h4>
            <h5 className=' text-lg font-bold text-indigo-700'>{title}</h5>
        </div>
    )
}

export default Clients;