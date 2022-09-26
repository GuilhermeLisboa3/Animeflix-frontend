import useSWR from "swr";
import animeService from "../../../services/animesService";
import { SlideComponent } from "../../common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss"

export const NewestCategory = () => {
  const { data, error } = useSWR("/newest", animeService.getNewestAnimes);
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
      <p className={styles.titleCategory}>LANÇAMENTOS</p>
      <SlideComponent anime={data.data} />
    </>
  );
};
