import styles from "../../../styles/episodePlayer.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { HeaderGeneric } from "../../../src/components/common/headerGeneric";
import { useState, useEffect, useRef } from "react";
import animeService, { AnimeType } from "../../../src/services/animesService";
import { PageSpinner } from "../../../src/components/common/spinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { watchEpisodeService } from "../../../src/services/episodeService";

const EpisodePlayer = () => {
  const router = useRouter();
  const [anime, setAnime] = useState<AnimeType>();

  const [isReady, setIsReady] = useState(false);
  const [getEpisodeTime, setGetEpisodeTime] = useState(0);
  const [episodeTime, setEpisodeTime] = useState(0);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const playerRef = useRef<ReactPlayer>(null);

  const episodeOrder = parseFloat(router.query.id?.toString() || "");
  const episodeId = parseFloat(router.query.episodeid?.toString() || "");
  const animeId = router.query.animeid?.toString() || "";

  const handleGetEpisodeTime = async () => {
    const res = await watchEpisodeService.getWatchTime(episodeId);
    if (res.data !== null) {
      setGetEpisodeTime(res.data.seconds);
    }
  };

  useEffect(() => {
    handleGetEpisodeTime();
  }, [router]);

  const handleSetEpisodeTime = async () => {
    await watchEpisodeService.setWatchTime({
      episodeId: episodeId,
      seconds: Math.round(episodeTime),
    });
  };

  const handlePlayerTime = () => {
    playerRef.current?.seekTo(getEpisodeTime);
    setIsReady(true);
  };
  if (isReady === true) {
    setTimeout(() => {
      handleSetEpisodeTime();
    }, 1000 * 3);
  }

  const getAnime = async () => {
    if (typeof animeId !== "string") return;

    const res = await animeService.getEpisodes(animeId);

    if (res.status === 200) {
      setAnime(res.data);
    }
  };

  const getUrl = async () => {
    const res = await watchEpisodeService.getStreamEpisode({ animeId: parseFloat(animeId), order: episodeOrder + 1 })
    setUrl(res.data)
  }
  getUrl()

  const handleLastEpisode = () => {
    router.push(
      `/anime/episode/${episodeOrder - 1}?animeId=${anime?.id}&episodeid=${
        episodeId - 1
      }`
    );
  };
  const handleNextEpisode = () => {
    router.push(
      `/anime/episode/${episodeOrder + 1}?animeId=${anime?.id}&episodeid=${
        episodeId + 1
      }`
    );
  };

  useEffect(() => {
    getAnime();
  }, [animeId]);

  useEffect(() => {
    if (!sessionStorage.getItem("animeflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (anime?.episodes === undefined) return <PageSpinner />;

  if (episodeOrder + 1 < anime?.episodes.length) {
    if (Math.round(episodeTime) === anime.episodes[episodeOrder].secondsLong) {
      handleNextEpisode();
    }
  }

  if (loading) {
    return <PageSpinner />;
  }

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
                <MdOutlineArrowBackIosNew className={styles.icon} />
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
                <MdOutlineArrowForwardIos className={styles.icon} />
              </Button>
            </div>
          </div>

          <p className={styles.episodeTitle}>
            {anime.episodes[episodeOrder].name}
          </p>
          {typeof window === "undefined" ? null : (
            <ReactPlayer
              className={styles.player}
              url={ url }
              controls
              ref={playerRef}
              onStart={handlePlayerTime}
              onProgress={(progress) => {
                setEpisodeTime(progress.playedSeconds);
              }}
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
