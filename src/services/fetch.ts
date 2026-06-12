import axios from "axios";
import { getToken } from "@/helpers/user";
import { BASE_PATH_API } from "@/constants";

export const api = axios.create({
  baseURL: BASE_PATH_API,
});

// cache memoire
const cache = new Map<string, any>();

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;

  // cache uniquement GET
  if (config.method === "get") {
    const key = config.url + JSON.stringify(config.params || {});

    if (cache.has(key)) {
      config.adapter = async () => {
        //on courcircuite l'appel serveur et on retourne directo le cache
        return {
          data: cache.get(key),
          status: 200,
          statusText: "OK",
          headers: {},
          config,
          request: {},
        };
      };
    }

    config.headers["x-cache-key"] = key;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    const key = response.config.headers?.["x-cache-key"];

    if (key) {
      cache.set(key, response.data);
    }

    return response.data;
  },
  (error) => {
    const message = error?.response?.data?.message ?? error.message;
    console.error("API Error:", error);
    return Promise.reject(new Error(message));
  },
);
