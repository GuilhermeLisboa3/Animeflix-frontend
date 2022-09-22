import api from "./api";

export type EpisodesType = {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
};
export type AnimeType = {
  id: number;
  name: string;
  thumbnailUrl: string;
  synopsis: string;
  episodes?: EpisodesType[];
};

const animeService = {
  getNewestAnimes: async () => {
    const res = await api.get("/animes/newest").catch((err) => {
      return err.response;
    });
    return res
  },
};

export default animeService;
