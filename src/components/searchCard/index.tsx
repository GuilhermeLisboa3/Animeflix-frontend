import Link from "next/link";
import { AnimeType } from "../../services/animesService";
import styles from "./styles.module.scss";

interface props {
  anime: AnimeType;
}

export const SearchCard = ({ anime }: props) => {
  return (
    <>
      <Link href={`/animes/${anime.id}`}>
        <div className={styles.searchCard}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASEURL}/${anime.thumbnailUrl}`}
            alt={anime.name}
            className={styles.searchCardImg}
          />
          <p className={styles.searchCardName}>{anime.name}</p>
          <p className={styles.searchCardDescription}>{anime.synopsis}</p>
        </div>
      </Link>
    </>
  );
};
