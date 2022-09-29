import { useRouter } from "next/router";
import { AnimeType, EpisodesType } from "../../services/animesService";
import styles from "./styles.module.scss";

interface props {
  episode: EpisodesType;
  anime: AnimeType
}

export const EpisodiosList = ({ episode, anime }: props) => {
  const router = useRouter();

  const handleSecondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    function toString(num: number) {
      return num.toString().padStart(2, "0");
    }

    const result = `${toString(minutes)}:${toString(seconds)}`;
    return result;
  };

  const handleEpisodePlayer = () => {
    router.push(`/anime/episode/${episode.order - 1}?animeid=${anime.id}&episodeid=${episode.id}`);
  };
  return (
    <>
      <div className={styles.episodeCard} onClick={handleEpisodePlayer}>
        <div className={styles.episodeOrderTime}>
          <p className={styles.episodeOrder}>Episódio N° {episode.order}</p>
          <p className={styles.episodeTime}>
            {handleSecondsToMin(episode.secondsLong)}
          </p>
        </div>
        <div className={styles.episodeTitleDescription}>
          <p className={styles.episodeTitle}>{episode.name}</p>
          <p className={styles.episodeDescription}>{episode.synopsis}</p>
        </div>
      </div>
    </>
  );
};
