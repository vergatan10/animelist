import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BSAE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header
          title={`Pencarian untuk ${keyword}...`}
          // linkTitle="Lihat Semua"
          // linkHref="/populer"
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
