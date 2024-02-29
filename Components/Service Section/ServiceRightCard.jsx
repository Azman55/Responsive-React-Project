import React from 'react'
import icon1 from '../../Assets/icon1.jpg'
import icon2 from '../../Assets/icon2.jpg'
import icon3 from '../../Assets/icon3.jpg'
import icon4 from '../../Assets/icon4.jpg'
import CardItems from './CardItems'

function ServiceRightCard() {
    return (
        <div className='w-full flex lg:w-[50%] flex-wrap gap-5 lg:gap-3 xl:gap-5 justify-center text-center'>
            <CardItems
                icon={icon1}
                isHeading="SSL Certificate"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <CardItems
                icon={icon2}
                isHeading="Personal Domain"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <CardItems
                icon={icon3}
                isHeading="Media Storage"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <CardItems
                icon={icon4}
                isHeading="Code Editor"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
        </div>
    )
}

export default ServiceRightCard