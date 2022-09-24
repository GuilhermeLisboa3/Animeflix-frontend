import styles from "./styles.module.scss";
import useSwr from "swr";
import animeService, { AnimeType } from "../../../services/animesService";
import { HeaderAuth } from "../../common/headerAuth";
import { Button, Container } from "reactstrap";
import Link from "next/link";

export const FeaturedSection = () => {
  const { data, error } = useSwr("/featured", animeService.getFeaturedAnimes);
  if (error) return error;
  if (!data) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  return (
    <>
      {
        data.data?.map((anime: AnimeType) => (
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),url(${process.env.NEXT_PUBLIC_BASEURL}/${anime.thumbnailUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              height: "550px",
            }}
            key={anime.id}
          >
            <HeaderAuth />
            <Container className="pt-5">
              <p className={styles.title}>{anime.name}</p>
              <p className={styles.description}>{anime.synopsis}</p>
              <Link href={`/animes/${anime.id}`}>
                <Button outline color="light" className={styles.button}>
                  ACESSE AGORA!
                  <img
                    src="/buttonPlay.svg"
                    alt="buttonImg"
                    className={styles.buttonImg}
                  />
                </Button>
              </Link>
            </Container>
          </div>
        ))[0]
      }
    </>
  );
};
