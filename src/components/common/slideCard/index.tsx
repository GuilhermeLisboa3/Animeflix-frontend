import styles from "./styles.module.scss";
import animeService, { AnimeType } from "../../../services/animesService";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";

interface props {
  anime: AnimeType;
}

export const SlideCard = ({ anime }: props) => {
  return (
    <>
      <Link href={`anime/${anime.id}`}>
        <div className={styles.slide}>
          <img
            src={`${anime.thumbnailUrl || anime.thumbnailurl}`}
            alt={anime.name}
            className={styles.slideImg}
          />
          <p className={styles.slideTitle}>{anime.name}</p>
          {anime.likes ? (
            <p className={styles.containerLikes}>
              <span className={styles.iconLike}>
                <AiFillLike />
              </span>
              <span className={styles.titleLikes}>{anime.likes}</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </Link>
    </>
  );
};
