import styles from "./styles.module.scss";
import { AnimeType } from "../../../services/animesService";
import Link from "next/link";

interface props {
  anime: AnimeType;
}

export const SlideCard = ({ anime }: props) => {
  return (
    <>
      <Link href={`anime/${anime.id}`}>
        <div className={styles.slide}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASEURL}/${anime.thumbnailUrl}`}
            alt={anime.name}
            className={styles.slideImg}
          />
          <p className={styles.slideTitle}>{anime.name}</p>
        </div>
      </Link>
    </>
  );
};
