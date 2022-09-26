import useSWR from "swr";
import styles from "../../../../styles/slideCategory.module.scss";
import animeService from "../../../services/animesService";
import { SlideComponent } from "../../common/slideComponent";

export const FavoriteCategory = () => {
  const { data, error } = useSWR("/favAnime", animeService.getFavAnimes);
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
      <p className={styles.titleCategory}>MINHA LISTA</p>
      {data.data.animes.length >= 1 ? (
        <SlideComponent anime={data.data.anime}/>
      ) : (
        <p className="text-center pt-3 h5">
            <strong>Você não tem nenhum curso na lista</strong>
        </p>
      )}
    </>
  );
};
