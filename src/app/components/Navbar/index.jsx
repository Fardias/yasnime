import Link from 'next/link'
import React from 'react'
import InputSearch from './InputSearch'
const index = () => {
    return (
        <div className='mb-5 lg:mx-20'>
            <nav className='flex gap-2 justify-between items-center bg-gray-800 p-4 text-white rounded-lg
            '>
                <Link href='/' className='font-bold'>YASNIME</Link>
               <InputSearch />
            </nav>
        </div>
    )
}

export default index