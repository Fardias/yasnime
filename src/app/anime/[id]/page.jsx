"use client"
import { getAnimeRespone } from '@/app/service/api-service'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import InfoRow from './InfoRow'
import Link from 'next/link'

const Page = () => {
    const params = useParams()
    const [anime, setAnime] = useState(null)

    useEffect(() => {
        const fetchAnime = async () => {
            const res = await getAnimeRespone(`anime/${params.id}`)
            setAnime(res.data) // simpan data ke state
        }
        fetchAnime()
    }, [params.id])

    return (
        <div className='mx-auto lg:mx-20'>
            {anime ? (
                <div>
                    <div>
                        <iframe
                            className='w-full lg:h-[500px] rounded-lg'
                            width="200"
                            height="315"
                            src={anime.trailer.embed_url}

                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        >
                        </iframe>

                        <div className='mt-5'>
                            <p className='font-bold text-center text-xl'>{anime.title} ({anime.year})</p>
                        </div>

                        <div className='mt-5'>
                            <h1 className='text-xl uppercase font-bold'>Synopsis</h1>
                            <p>{anime.synopsis}</p>
                            {/* <p>{anime.background}</p> */}
                            <InfoRow title="Status" value={anime.status} />
                            <InfoRow title="Synonyms" value={anime.title_synonyms[0]} />
                            <InfoRow title="Japanese" value={anime.title_japanese} />
                            <InfoRow title="English" value={anime.title_english} />
                            <InfoRow title="Type" value={anime.type} />
                            <InfoRow title="Episodes" value={anime.episodes} />
                            <InfoRow title="Aired" value={anime.aired.string} />
                            <InfoRow title="Duration" value={anime.duration} />
                            <InfoRow title="Rating" value={anime.rating} />
                            <InfoRow title="Score" value={anime.score} />
                            <InfoRow title="Season" value={anime.season} />
                            <InfoRow title="Studio" value={anime.studios[0].name} />
                            <InfoRow title="Genres" value={anime.genres[0].name} />
                            <InfoRow title="Producers" value={anime.producers[0].name} />
                            <div className='flex flex-col gap-2 mt-5 '>
                                <Link href={anime.url} target='_blank' className=''>👉 More about {anime.title}</Link>
                            </div>

                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Page
