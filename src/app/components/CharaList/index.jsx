import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import "./index.css";

const index = ({ api }) => {
    // console.log("api chara = ", api.data);
    
    return (
        <div className="grid gap-2 md:grid-cols-2">
            {api.data.map((chara, index) => {
                return (
                    <Link className='card' href={`/${chara.mal_id}`} key={chara.mal_id}>
                        <div className="image-container relative flex gap-5 bg-slate-600 rounded-lg hover:opacity-80 transition-all duration-300 ease-in-out p-2">
                            <Image className='rounded-lg w-full max-h-64 object-cover h-auto min-h-[100px] max-w-[90px]' width={70} height={100} src={chara.images.webp.image_url} alt={chara.name} />
                            <div>
                                <h1 className='mt-2'>{chara.name_kanji}</h1>
                                <h1 className=''>{chara.name}</h1>
                                <p className='text-sm absolute z-10 top-[120px] right-2'>{chara.favorites}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}

        </div>

    )
}

export default index