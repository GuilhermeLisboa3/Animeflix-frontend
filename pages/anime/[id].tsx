import styles from "../../styles/animePage.module.scss";
import Head from "next/head";
import { HeaderAuth } from "../../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import animeService, { AnimeType } from "../../src/services/animesService";

const AnimePage = () => {
  const [anime, setAnime] = useState<AnimeType>();
  const router = useRouter();
  const { id } = router.query;

  const getAnime = async () => {
    if (typeof id !== "string") return;
    const res = await animeService.getEpisodes(id);

    if (res.status === 200) {
      setAnime(res.data);
    }
  };
  useEffect(() => {
    getAnime();
  }, [id]);

  return (
    <>
      <Head>
        <title>Animeflix - {anime?.name}</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
        <p>{anime?.name}</p>
      </main>
    </>
  );
};

export default AnimePage;
