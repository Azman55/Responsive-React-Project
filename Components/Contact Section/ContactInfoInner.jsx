import React from 'react'

function ContactInfoInner({ contHeader, contactIcon, contactTitle }) {
    return (
        <div>
            <h3 className='font-bold text-4xl text-slate-700 capitalize mb-6 text-center md:text-left lg:text-left'>{contHeader}</h3>
            <div className='flex items-center mb-4'>
                <img src={contactIcon} alt="contact icon" className='w-[40px] h-[40px] p-1 rounded-2xl bg-blue-500 cursor-pointer' />
                <p className='ml-4 text-xl font-semibold text-[rgb(98,98,167)] pr-0 lg:pr-16'>{contactTitle}</p>
            </div>
        </div>
    )
}

export default ContactInfoInner;