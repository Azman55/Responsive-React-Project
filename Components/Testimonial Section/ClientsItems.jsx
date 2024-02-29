import React from 'react'
import developer from '../../Assets/developer.jpg'
import Clients from './Clients'

function ClientsItems() {
    return (
        <div className='w-full md:flex lg:flex flex-wrap xl:flex-nowrap rounded-2xl gap-5 justify-between'>
            <Clients
                isImage={developer}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                isName="Celia Almeda"
                title="Web Developer"
            />
            <Clients
                isImage={developer}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                isName="Nat Reynolds"
                title="Android Developer"
            />
            <Clients
                isImage={developer}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                isName="Bob Roberts"
                title="UI/UX Designer"
            />
            <Clients
                isImage={developer}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                isName=" Mattie Smith"
                title="Full Stack Developer"
            />
        </div>
    )
}

export default ClientsItems;