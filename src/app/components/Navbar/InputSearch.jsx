"use client"
import React, { useRef } from 'react'
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from 'next/navigation'

const InputSearch = () => {
    const searchRef = useRef(null)
    const router = useRouter()

    const handleSearch = () => {
        const keyword = searchRef.current.value
        if (keyword) {
            router.push(`/search/${keyword}`)
            searchRef.current.value = ""
        } else {
            alert("Please enter a keyword")
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        handleSearch()
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleSearch()
        }
    }

    return (
        <div className="relative w-full max-w-sm">
        <input
          ref={searchRef}
          className="w-full px-4 py-2 pr-10 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 text-white placeholder-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
          type="text"
          placeholder="Search anime..."
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>
          <MagnifyingGlass
            size={20}
            className="text-white absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
            weight="bold"
          />
        </button>
      </div>
      
    )
}

export default InputSearch