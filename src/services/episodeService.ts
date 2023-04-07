import api from "./api";

interface WatchTimeParams {
  episodeId: number;
  seconds: number;
}

export const watchEpisodeService = {
  getWatchTime: async (episodeId: number) => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .get(`/episodes/${episodeId}/watchTime`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  setWatchTime: async ({ episodeId, seconds }: WatchTimeParams) => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .post(
        `/episodes/${episodeId}/watchTime`,
        { seconds },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => {
        return err.response;
      });
    return res;
  },

  getStreamEpisode: async ({ animeId, order }: { animeId: number, order: number}) => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .get(`/episode/stream?token=${token}&animeId=${animeId}&order=${order}`,)
      .catch((err) => {
        return err.response;
      });
    return res;
  },
};
