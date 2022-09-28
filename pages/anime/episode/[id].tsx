import styles from "../../../styles/episodePlayer.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { HeaderGeneric } from "../../../src/components/common/headerGeneric";
import { useState, useEffect } from "react";
import animeService, { AnimeType } from "../../../src/services/animesService";
import { PageSpinner } from "../../../src/components/common/spinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const EpisodePlayer = () => {
  const router = useRouter();
  const [anime, setAnime] = useState<AnimeType>();
  const episodeOrder = parseFloat(router.query.id?.toString() || "");
  const animeId = router.query.animeid?.toString() || "";

  const getAnime = async () => {
    if (typeof animeId !== "string") return;

    const res = await animeService.getEpisodes(animeId);

    if (res.status === 200) {
      setAnime(res.data);
    }
  };

  const handleLastEpisode = () => {
    router.push(`/anime/episode/${episodeOrder - 1}?animeId=${anime?.id}`);
  };
  const handleNextEpisode = () => {
    router.push(`/anime/episode/${episodeOrder + 1}?animeId=${anime?.id}`);
  };

  useEffect(() => {
    getAnime();
  }, [animeId]);

  if (anime?.episodes === undefined) return <PageSpinner />;

  return (
    <>
      <Head>
        <title>Animeflix - {anime.episodes[episodeOrder].name}</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric
          logoUrl="/home"
          btnContent={"Voltar para o anime"}
          btnUrl={`/anime/${animeId}`}
        />
        <Container className={styles.episodeContainer}>
          <div className={styles.containerButtons}>
            <div className="d-flex align-items-center gap-3">
              <Button
                className={styles.episodeButtonLeft}
                disabled={episodeOrder === 0 ? true : false}
                onClick={handleLastEpisode}
              >
                <MdOutlineArrowBackIosNew className={styles.icon}/>
              </Button>
              <p className={styles.TextBtnDirection}>Anterior</p>
            </div>
            <div className="d-flex align-items-center gap-3">
            <p className={styles.TextBtnDirection}>Próximo</p>
              <Button
                className={styles.episodeButtonRight}
                disabled={
                  episodeOrder + 1 === anime.episodes.length ? true : false
                }
                onClick={handleNextEpisode}
              >
                <MdOutlineArrowForwardIos className={styles.icon}/>
              </Button>
            </div>
          </div>

          <p className={styles.episodeTitle}>
            {anime.episodes[episodeOrder].name}
          </p>
          {typeof window === "undefined" ? null : (
            <ReactPlayer
              className={styles.player}
              url={`${
                process.env.NEXT_PUBLIC_BASEURL
              }/episodes/stream?videoUrl=${
                anime.episodes[episodeOrder].videoUrl
              }&token=${sessionStorage.getItem("animeflix-token")}`}
              controls
            />
          )}
          <div className={styles.DescriptionEpisode}>
            <p className={styles.animeTitle}>
              {anime.name} - Episódio {anime.episodes[episodeOrder].order}
            </p>
            <p className={styles.animeDescription}>
              {anime.episodes[episodeOrder].synopsis}
            </p>
          </div>
        </Container>
      </main>
    </>
  );
};

export default EpisodePlayer;
