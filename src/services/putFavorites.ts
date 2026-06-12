import type { Favorites } from "@/types";
import { api } from "./fetch";

export type putFavoritesProps = { favorites: Favorites };

export const putFavorites = (params: putFavoritesProps): Promise<Favorites> =>
  api.put(`/user/favorites`, params);
