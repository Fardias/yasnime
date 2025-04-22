import React from 'react'

const InfoRow = ({title,value}) => {
    return (
        <div className='flex gap-2 mt-5 '>
            <h1 className='uppercase font-bold'>{title}:</h1>
            <p className=''>{value}</p>
        </div>
    )
}

export default InfoRow