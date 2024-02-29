import React from 'react'
import PricingTopHeadingLeftBar from './PricingTopHeadingLeftBar'
import PricingTopHeadingRight from './PricingTopHeadingRight'
function PricingTopHeading() {
    return (
        <div className='lg:flex justify-between gap-5 mb-20'>
            <PricingTopHeadingLeftBar />
            <PricingTopHeadingRight />
        </div>
    )
}

export default PricingTopHeading;