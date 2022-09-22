import axios from "axios";
import process from "process";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

const api = axios.create({
  baseURL,
});

export default api;
