import axios from "axios";
import { getToken } from "@/helpers/user";
import { BASE_PATH_API } from "@/constants";

export const api = axios.create({
  baseURL: BASE_PATH_API,
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error?.response?.data?.message ?? error.message;
    console.error("API Error:", error);
    return Promise.reject(new Error(message));
  },
);
