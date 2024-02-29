import React from 'react'

function FooterSocialLInk({ footerImage }) {
    return (
        <a href="#">
            <img src={footerImage} alt="SocialLink" className='w-[40px] h-[40px] bg-[white] rounded-2xl p-1 inline-block hover:bg-indigo-700' />
        </a>
    )

}
export default FooterSocialLInk;