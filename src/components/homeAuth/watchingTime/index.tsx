import useSWR from "swr";
import animeService from "../../../services/animesService";
import styles from "../../../../styles/slideCategory.module.scss";
import { PageSpinner } from "../../common/spinner";
import { SlideComponentWatchTime } from "../../common/slideComponentWatchTime";
export const WatchingTime = () => {
  const { data, error } = useSWR(
    "/users/current/watching",
    animeService.getWatchingAnimes
  );
  if (error) return error;
  if (!data) {
    return <PageSpinner />;
  }
  return (
    <>
      {data.data.length >= 1 ? (
        <div>
          <p className={styles.titleCategory}>CONTINUE ASSISTINDO</p>
          <SlideComponentWatchTime anime={data.data} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
