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
    return res;
  },
  getFeaturedAnimes: async () => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .get("/animes/featured", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  addToFav: async (animeId: number | string) => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .post(
        "/favorites",
        { animeId },
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
  removeFav: async (animeId: string | number) => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .delete("/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { animeId },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  getFavAnimes: async () => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .get("/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  getSearch: async (name: string) => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .get(`/animes/search?name=${name}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
};

export default animeService;
