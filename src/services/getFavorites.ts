import type { Favorites } from "@/types";
import { api } from "./fetch";

export const getFavorites = (): Promise<Favorites> =>
  api.get(`/user/favorites`);
