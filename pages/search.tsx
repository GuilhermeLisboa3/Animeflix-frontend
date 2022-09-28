import styles from "../styles/search.module.scss";
import Head from "next/head";
import { HeaderAuth } from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import animeService, { AnimeType } from "../src/services/animesService";
import { Container } from "reactstrap";
import { SearchCard } from "../src/components/searchCard";
import { Footer } from "../src/components/common/footer";

const Search = () => {
  const router = useRouter();
  const searchName: any = router.query.name;
  const [searchResult, setSearchResult] = useState<AnimeType[]>([]);

  const searchAnime = async () => {
    const res = await animeService.getSearch(searchName);
    setSearchResult(res.data.animes);
  };

  useEffect(() => {
    searchAnime();
  }, [searchName]);

  return (
    <>
      <Head>
        <title>Animeflix - {searchName}</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.headerFooterBg}>
          <HeaderAuth />
        </div>
        {searchResult.length >= 1 ? (
          <div className={styles.searchContainer}>
            <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
              {searchResult?.map((anime) => (
                <SearchCard key={anime.id} anime={anime} />
              ))}
            </Container>
          </div>
        ) : (
          <div className={styles.searchContainer}>
            <p className={styles.noSearchTetx}>Nenhum resultado encontrado!</p>
          </div>
        )}
        <div className={styles.headerFooterBg}>
          <Footer/>
        </div>
      </main>
    </>
  );
};

export default Search;
