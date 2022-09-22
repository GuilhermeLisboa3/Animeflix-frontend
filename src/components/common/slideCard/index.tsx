import styles from "./styles.module.scss";
import { AnimeType } from "../../../services/animesService";

interface props {
  anime: AnimeType;
}

export const SlideCard = ({ anime }: props) => {
  return (
    <>
      <div className={styles.slide}>
        <img
          src={`${process.env.NEXT_PUBLIC_BASEURL}/${anime.thumbnailUrl}`}
          alt={anime.name}
          className={styles.slideImg}
        />
        <p className={styles.slideTitle}>{anime.name}</p>
        <p className={styles.slideDescription}>{anime.synopsis}</p>
      </div>
    </>
  );
};
