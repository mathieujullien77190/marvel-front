import type { Character } from "./Character";
import type { Comic } from "./Comics";

export type Favorites = {
  comics: Comic[];
  characters: Character[];
};

export type User = {
  username?: string;
  token?: string;
  favorites: Favorites;
};
