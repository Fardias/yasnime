import ClientAnimeSection from "@/app/components/ClientAnimeSection";
import { getAnimeRespone } from "@/app/service/api-service";

export default async function Page({ params }) {
  const { keyword } = await params;

 const res = await getAnimeRespone("anime", `q=${keyword}&limit=5`);

  return (
    <ClientAnimeSection initialData={res} keyword={keyword} />
  );
}
