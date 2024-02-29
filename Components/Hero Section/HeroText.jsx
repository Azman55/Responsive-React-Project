import React from 'react'

function HeroText() {
    return (
        <div className=' w-full md:w-[50%] lg:w-[50%]'>
            <h2 className=' text-slate-700 font-bold text-4xl text-center md:text-left md:text-5xl md:leading-[70px] lg:text-left lg:text-6xl lg:leading-[70px] leading-[50px] lg:mb-7 mb-5'>One-click solution  for your static website.</h2>
            <p className='text-slate-700 font-normal lg:text-2xl text-xl text-center md:text-left lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, distinctio.</p>
            <div className='mt-7 flex gap-3 lg:gap-7 justify-center md:justify-start lg:justify-start'>
                <button className='text-xl text-white bg-purple-800 lg:py-3 py-2 lg:px-6 px-3 capitalize lg:rounded-2xl md:rounded-2xl rounded-2xl hover:bg-black transition-all'>
                    view more
                </button>
                <button className='text-xl text-purple-800 border-purple-800 border-2 lg:py-3 py-2 lg:px-6 px-3 capitalize lg:rounded-2xl md:rounded-2xl rounded-2xl hover:border-black hover:border-2 hover:text-black transition-all '>
                    watch video
                </button>
            </div>
        </div>
    )
}

export default HeroText;