import styles from "../../styles/animePage.module.scss";
import Head from "next/head";
import { HeaderAuth } from "../../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import animeService, { AnimeType } from "../../src/services/animesService";
import { Button, Container } from "reactstrap";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { PageSpinner } from "../../src/components/common/spinner";
import { EpisodiosList } from "../../src/components/episodesList";
import { Footer } from "../../src/components/common/footer";

const AnimePage = () => {
  const [anime, setAnime] = useState<AnimeType>();
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const getAnime = async () => {
    if (typeof id !== "string") return;
    const res = await animeService.getEpisodes(id);

    if (res.status === 200) {
      setAnime(res.data);
      setLiked(res.data.liked);
      setFavorited(res.data.favorited);
    }
  };
  useEffect(() => {
    getAnime();
  }, [id]);

  const handleLikeAnime = async () => {
    if (typeof id !== "string") return;
    if (liked === true) {
      await animeService.removeLike(id);
      setLiked(false);
    } else {
      await animeService.like(id);
      setLiked(true);
    }
  };

  const handleFavAnime = async () => {
    if (typeof id !== "string") return;
    if (favorited === true) {
      await animeService.removeFav(id);
      setFavorited(false);
    } else {
      await animeService.addToFav(id);
      setFavorited(true);
    }
  };

  if (anime === undefined) return <PageSpinner />;

  return (
    <>
      <Head>
        <title>Animeflix - {anime?.name}</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${anime?.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            minHeight: "550px",
          }}
        >
          <HeaderAuth />
        </div>
        <Container className={styles.animeInfo}>
          <p className={styles.animeTitle}>{anime?.name}</p>
          <p className={styles.animeDescription}>{anime?.synopsis}</p>
          <Button
            outline
            className={styles.animeBtn}
            disabled={anime?.episodes?.length === 0 ? true : false}
          >
            ASSISTIR AGORA!
            <img
              src="/buttonPlay.svg"
              alt="buttonImg"
              className={styles.buttonImg}
            />
          </Button>
          <div className={styles.interactions}>
            {liked === false ? (
              <AiOutlineLike
                className={styles.interactionLikedImages}
                onClick={handleLikeAnime}
              />
            ) : (
              <AiFillLike
                className={styles.interactionFullLikedImages}
                onClick={handleLikeAnime}
              />
            )}
            {favorited === false ? (
              <AiOutlineHeart
                className={styles.interactionImages}
                onClick={handleFavAnime}
              />
            ) : (
              <AiFillHeart
                className={styles.interactionFullImages}
                onClick={handleFavAnime}
              />
            )}
          </div>
        </Container>

        <Container className={styles.episodeInfo}>
          <p className={styles.episodeDivision}>EPISÓDIOS</p>
          <p className={styles.episodeLength}>
            {anime?.episodes?.length} Episodios
          </p>
          {anime?.episodes?.length === 0 ? (
            <p>
              <strong>
                {" "}
                Não temos episódios ainda, volte outra hora! &#x1F606;
              </strong>
            </p>
          ) : (
            anime?.episodes?.map((episode) => (
              <EpisodiosList key={episode.id} episode={episode} />
            ))
          )}
        </Container>
        <Footer/>
      </main>
    </>
  );
};

export default AnimePage;
