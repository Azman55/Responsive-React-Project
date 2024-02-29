import React from 'react'

function HeadingRightItems({ isicons, isTitle }) {
    return (
        <div className=' mt-5 lg:mt-0 w-[50%] bg-re-200 justify-center items-center  flex gap-3'>
            <img className='w-[35px] h-[35px] p-1 bg-sky-400 rounded-2xl' src={isicons} alt="icons image" />
            <p className=' text-lg text-[#1f2937] w-[120px]'>{isTitle}</p>
        </div>
    )
}

export default HeadingRightItems;