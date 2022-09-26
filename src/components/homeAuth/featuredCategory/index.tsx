import useSWR from "swr";
import styles from "../../../../styles/slideCategory.module.scss";
import animeService from "../../../services/animesService";
import { SlideComponent } from "../../common/slideComponent";

export const FeaturedCategory = () => {
  const { data, error } = useSWR("/featured", animeService.getFeaturedAnimes);
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
      <p className={styles.titleCategory}>EM DESTAQUE</p>
      <SlideComponent anime={data.data}/>
    </>
  );
};
