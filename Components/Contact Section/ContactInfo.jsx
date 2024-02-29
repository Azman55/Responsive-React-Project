import React from 'react'
import ContactInfoInner from './ContactInfoInner'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import ContactSocial from './ContactSocial'

function ContactInfo() {
    return (
        <div className='w-full lg:w-[50%] md:w-[50%]'>
            <ContactInfoInner
                contHeader="Contact Info"
                contactIcon={img1}
                contactTitle="+91 879 090 3780"
            />
            <ContactInfoInner
                contactIcon={img2}
                contactTitle="contact@yourmail.com"
            />
            <ContactInfoInner
                contactIcon={img3}
                contactTitle="203, Envato Labs, Behind Alis Street, Australia"
            />

            <ContactSocial
        
            />
        </div>

    )
}

export default ContactInfo;