import AnimeList from "@/app/components/AnimeList";
import CharaList from "@/app/components/CharaList";
import Link from "next/link";
import { getAnimeRespone } from "./service/api-service";

export default async function Home() {
  const dataTopAnime = await getAnimeRespone("top/anime", "limit=5")

  // top characters
  const dataTopCharacters = await getAnimeRespone("top/characters", "limit=5")
  
  return (
    <div>
      <section className="lg:mx-20">
        <h1 className="text-xl md:text-2xl lg:text-3xl mb-3">✨ Top 5 Anime</h1>
        <AnimeList api={dataTopAnime} />
        <Link href="/Top-anime" className="text-center block p-4 hover:scale-90 transition-all duration-300 ease-in-out w-fit mx-auto">👉Lihat semua</Link>
      </section>

      {/* <section className="mt-5">
        <h1 className="text-xl mb-3">✨ Top Characters</h1>
        <CharaList api={dataTopCharacters} />
        <Link href="/Top-characters" className="text-center block p-4 hover:scale-90 transition-all duration-300 ease-in-out w-fit mx-auto">👉Lihat semua</Link>
      </section> */}



    </div>
  );
}
