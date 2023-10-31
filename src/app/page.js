import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BSAE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua..."
        />
        <AnimeList api={topAnime} />
      </section>
      {/* anime terpopuler */}
    </>
  );
};

export default Page;
