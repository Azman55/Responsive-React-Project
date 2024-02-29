import React from 'react'

function Menu() {
    return (
        <div className='lg:w-full bg-slate-700 lg:bg-transparent mt-5 lg:mt-0 hidden lg:block '>
            <ul className='lg:flex justify-end text-slate-700 font-semibold text-xl capitalize leading-[60px] lg:leading-[80px]'>
                <li className='hover:bg-indigo-500 hover:lg:bg-transparent text-center'><a href="#home" className='lg:px-4 hover:bg-indigo-500 py-2 rounded-2xl'>home</a></li>
                <li className='hover:bg-indigo-500 hover:lg:bg-transparent text-center'><a href="#services" className='lg:px-4 hover:bg-indigo-500 py-2 rounded-2xl'>services</a></li>
                <li className='hover:bg-indigo-500 hover:lg:bg-transparent text-center'><a href="#testimonials" className='lg:px-4 hover:bg-indigo-500 py-2 rounded-2xl'>testimonials</a></li>
                <li className='hover:bg-indigo-500 hover:lg:bg-transparent text-center'><a href="#pricing" className='lg:px-4 hover:bg-indigo-500 py-2 rounded-2xl'>pricing</a></li>
                <li className='hover:bg-indigo-500 hover:lg:bg-transparent text-center'><a href="#contact" className='lg:px-4 hover:bg-indigo-500 py-2 rounded-2xl'>contact</a></li>
            </ul>
        </div>
    )
}

export default Menu;