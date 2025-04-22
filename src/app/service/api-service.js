export const getAnimeRespone = async (resource, query) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const data = await res.json()
    return data
}