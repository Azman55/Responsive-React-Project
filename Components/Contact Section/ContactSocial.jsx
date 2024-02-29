import React from 'react'
import fb from '../../Assets/fb.jpg'
import instagram from '../../Assets/instagram.jpg'
import twitter from '../../Assets/twitter.jpg'
import youtube from '../../Assets/youtube.jpg'
// contactSocial, isAdd
function ContactSocial(socialIcons) {
    return (
        <div className='flex mt-9'>
            <a href="#">
                <img src={fb} alt="Social image" className='w-[44px] h-[44px] p-1 rounded-2xl bg-sky-700 hover:bg-orange-700' />
            </a>
            <a href="#">
                <img src={instagram} alt="Social image" className='w-[44px] h-[44px] p-1 rounded-2xl bg-sky-700 hover:bg-orange-700 ml-4' />
            </a>
            <a href="#">
                <img src={twitter} alt="Social image" className='w-[44px] h-[44px] p-1 rounded-2xl bg-sky-700 hover:bg-orange-700 ml-4' />
            </a>
            <a href="#">
                <img src={youtube} alt="Social image" className='w-[44px] h-[44px] p-1 rounded-2xl bg-sky-700 hover:bg-orange-700 ml-4' />
            </a>

        </div> 
    )
}

export default ContactSocial;