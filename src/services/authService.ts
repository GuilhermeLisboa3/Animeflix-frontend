import { FaRegNewspaper } from "react-icons/fa";
import api from "./api";

interface RegisterParams {
  firstName: string;
  lastName: string;
  phone: string;
  birth: string;
  email: string;
  password: string;
}

export const authService = {
  register: async (params: RegisterParams) => {
    const res = await api.post("/auth/register", params).catch((err) => {
      if (err.response.status == 400) {
        return err.response;
      }
    });
    return res;
  },
};
