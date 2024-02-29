import React from 'react'
import HeadingRightItems from './HeadingRightItems'
import img from '../../Assets/img.jpg'
function PricingTopHeadingRight() {
    return (
        <div className='lg:w-[50%] flex justify-center items-center flex-wrap'>
            <HeadingRightItems
                isicons={img}
                isTitle="Unlimited Pages"
            />
            <HeadingRightItems
                isicons={img}
                isTitle="Free Sub-Domain"
            />
            <HeadingRightItems
                isicons={img}
                isTitle="Unlimited Pages"
            />
            <HeadingRightItems
                isicons={img}
                isTitle="Free SSL Certificate"
            />
            <HeadingRightItems
                isicons={img}
                isTitle="Unlimited Pages"
            />
            <HeadingRightItems
                isicons={img}
                isTitle="24/7 Support"
            />
        </div>
    )
}

export default PricingTopHeadingRight;