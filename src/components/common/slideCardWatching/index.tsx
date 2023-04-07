import { useRouter } from "next/router";
import { EpisodeWatchingTime } from "../../../services/animesService";
import styles from "./styles.module.scss";

interface props {
  anime: EpisodeWatchingTime;
}

export const SlideCardWatching = ({ anime }: props) => {
  const router = useRouter()

  const handleEpisodePlayer = () => {
    router.push(`/anime/episode/${anime.order - 1}?animeid=${anime.anime.id}&episodeid=${anime.id}`);
  };
  return (
    <>
      <div onClick={handleEpisodePlayer}>
          <div className={styles.slide}>
            <img
              src={`${
                anime.anime.thumbnailUrl
              }`}
              alt={anime.name}
              className={styles.slideImg}
            />
            <div>
                <p className={styles.slideTitle}>E{anime.order}-{anime.name}</p>
                <p className={styles.slideDescription}>{anime.synopsis}</p>
            </div>
          </div>
      </div>
    </>
  );
};
