import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import "./index.css";

const index = ({ api }) => {
    return (
        <div className="grid gap-2 md:grid-cols-2">
            {api.data.map((anime, index) => {
                // console.log("anime epsidoes", anime.episodes);
                return (
                    <Link className='card' href={`anime/${anime.mal_id}`} key={anime.mal_id}>
                        <div className="image-container relative flex gap-5 bg-slate-600 rounded-lg hover:opacity-80 transition-all duration-300 ease-in-out p-2">
                            <Image className='rounded-lg w-full max-h-64 object-cover h-auto min-h-[100px] max-w-[90px]' width={70} height={100} src={anime.images.webp.image_url} alt={anime.title} />
                            <div>

                                <h1 className='font-bold'>{anime.title}</h1>
                                <p className='text-sm text-slate-300'>{anime.episodes} Episodes</p>
                                <p className='text-sm text-slate-300'>Rating: {anime.score}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}

        </div>


    )
}

export default index