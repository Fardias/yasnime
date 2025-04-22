'use client'

import React, { useState, useEffect } from 'react'
import AnimeList from "../AnimeList"
import { getAnimeRespone } from '@/app/service/api-service';

export default function ClientAnimeSection({ initialData, keyword }) {
    const [data, setData] = useState(initialData)
    console.log(data.data.length);

    console.log("data = ", data.data == [] ? true : false);

    const [limit, setLimit] = useState(5)

    const handleClick = async () => {
        const res = await getAnimeRespone("anime", `q=${keyword}`)
        setData(res)
        setLimit(20)
    }

    return (
        <section>
            <h1 className="text-xl mb-3">✨ Result for "{decodeURIComponent(keyword)}"</h1>
            <AnimeList api={data} />
            {data.data.length === 0 ? (<p className="text-center">No result found</p>)
                : (limit === 5 && (
                    <p onClick={handleClick} className="text-center block p-4 hover:scale-90 transition-all duration-300 ease-in-out w-fit mx-auto cursor-pointer">👉Lihat semua</p>
                ))}
        </section>
    )
}
