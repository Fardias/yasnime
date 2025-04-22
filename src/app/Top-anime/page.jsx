'use client'

import React, { useEffect, useState } from 'react'
import TopAnimeList from './TopAnimeList'
import { getAnimeRespone } from '../service/api-service'

const TopAnimeClient = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAnimeRespone('top/anime', `page=${page}`)
      setData(res)
    }

    fetchData()
  }, [page])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToPage = (newPage) => {
    scrollToTop()
    setPage(newPage)
  }

  const lastPage = data?.pagination?.last_visible_page || 1

  return (
    <div className='
    lg:mx-20'>
      <h1 className="text-xl mb-3">✨ Top Anime #{page}</h1>
      {data ? (
        <div>
        <TopAnimeList api={data} />
        <div className="flex gap-2 mt-6 justify-center items-center">
        <button
          onClick={() => goToPage(1)}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          ⏮ First
        </button>

        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          ◀ Prev
        </button>

        <p className="text-center font-semibold text-white ">
          Page {page} of {lastPage}
        </p>

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === lastPage}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Next ▶
        </button>

        <button
          onClick={() => goToPage(lastPage)}
          disabled={page === lastPage}
          className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Last ⏭
        </button>
      </div>
      </div>
    ) : <p>Loading...</p>}

      
    </div>
  )
}

export default TopAnimeClient
