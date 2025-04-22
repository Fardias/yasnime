import Image from 'next/image'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center pt-[50px] gap-5'>
               <Image src="/notfound.jpg" className='rounded-xl' width={300} height={200} alt="404" />
               <p>PAGE NOT FOUND</p>
            </div>
        </div>
    )
}

export default NotFound