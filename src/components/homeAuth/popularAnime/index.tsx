import useSWR from "swr";
import { PageSpinner } from "../../common/spinner";
import styles from "../../../../styles/slideCategory.module.scss";
import { SlideComponent } from "../../common/slideComponent";
import animeService from "../../../services/animesService";

export const PopularAnime = ()=>{
    const { data, error } = useSWR("/animes/popular", animeService.getPopularAnime);
    if (error) return error;
    if (!data) {
      return <PageSpinner/>;
    }
    return (
      <>
        <p className={styles.titleCategory}>POPULARES</p>
        <SlideComponent anime={data.data}/>
      </>
    );
}