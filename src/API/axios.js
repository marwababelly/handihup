import axios from "axios";
import { baseURL } from "./Api";

const token = localStorage.getItem("token");

export const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
