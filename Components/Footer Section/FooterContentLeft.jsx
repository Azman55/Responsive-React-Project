import React from 'react'
import FooterSocialLInk from './FooterSocialLInk'
import fb from '../../Assets/fb.jpg'
import instagram from '../../Assets/instagram.jpg'
import twitter from '../../Assets/twitter.jpg'
import youtube from '../../Assets/youtube.jpg'
function FooterContentLeft() {
    return (
        <div className='w-full lg:w-[45%] text-center lg:text-left'>
            <a href="#" className='logo text-purple-700 text-3xl lg:text-4xl font-bold' >DEBUG ENTITY</a>
            <p className=' text-xl text-white mt-5 lg:pr-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore tenetur id tempore dolor nisi perspiciatis alias modi quos laboriosam.</p>
            <div className='flex gap-5 mt-9 justify-center lg:justify-start'>
                <FooterSocialLInk
                    footerImage={fb}
                />
                <FooterSocialLInk
                    footerImage={instagram}
                />
                <FooterSocialLInk
                    footerImage={twitter}
                />
                <FooterSocialLInk
                    footerImage={youtube}
                />
            </div>


        </div>
    )
}

export default FooterContentLeft;