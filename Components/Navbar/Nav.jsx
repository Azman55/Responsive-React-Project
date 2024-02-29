
import React from 'react'
import Menu from './Menu'

function Nav() {
    return (
        <div className=' lg:w-[90%] mx-auto lg:flex justify-between'>
            <div className='lg:w-full pt-6 lg:pt-0 pl-5 lg:pl-0'>
                <a href="#home" className='logo text-stone-700 text-2xl lg:text-3xl font-bold lg:leading-[80px]'>DEBUG ENTITY</a>
            </div>
            <Menu />
        </div>

    )
}

export default Nav;