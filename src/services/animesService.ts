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
  thumbnailurl?: string;
  synopsis: string;
  episodes?: EpisodesType[];
  likes?: number;
};
export type EpisodeWatchingTime = {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
  anime: {
    id: number;
    name: string;
    synopsis: string;
    thumbnailUrl: string;
  };
  watchTime: {
    seconds: number;
  };
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
      .delete(`/favorites/${animeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
  like: async (animeId: number | string) => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .post(
        "/likes",
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
  removeLike: async (animeId: number | string) => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .delete(`/likes/${animeId}`, {
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
  getEpisodes: async (id: string | number) => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .get(`/animes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  getPopularAnime: async () => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .get("/animes/popular", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  getWatchingAnimes: async () => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .get("/users/current/watching", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  }
};

export default animeService;
