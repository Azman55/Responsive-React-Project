import React from 'react'
import FooterContentLeft from './FooterContentLeft'
import FooterContentRight from './FooterContentRight'


function FooterMain() {
    return (
        <div className='w-[90%] lg:flex justify-between mx-auto'>
            <FooterContentLeft />
            <FooterContentRight />


        </div>
    )
}

export default FooterMain;