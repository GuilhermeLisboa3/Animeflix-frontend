import api from "./api";
import { AnimeType } from "./animesService";

export type CategoryType = {
  id: number;
  name: string;
  position: number;
  anime?: AnimeType[];
};

const categoriesService = {
  getCategory: async () => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .get("/categories", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  getAnimes: async (id:number) => {
    const token = sessionStorage.getItem("animeflix-token");
    const res = await api
      .get(`/categories/${id}`, {
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

export default categoriesService;