import React from 'react';
import work from '../../Assets/work.png';
function HeroImage() {
    return (
        <div className=' w-full md:w-[50%] lg:w-[50%] flex justify-center md:justify-end mt-16 lg:mt-0'>
            <img src={work} alt="w-full" className='h-[400px]' />
        </div>
    )
}

export default HeroImage;