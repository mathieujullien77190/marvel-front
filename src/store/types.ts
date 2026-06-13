import type { Character, Comic, User } from "@/types";

export type SelectedCharacterType = { character: Character; comics: Comic[] };

export type Search = {
  id?: string;
  text?: string;
  start: number;
  limit: number;
};

export type State = {
  user: User;
  isConnected: boolean;
  selected?: SelectedCharacterType;
  characters: {
    list: Character[];
    total: number;
    search: Search;
  };
  comics: {
    list: Comic[];
    total: number;
    search: Search;
  };

  resetUser: () => void;
  setUser: (user: User) => void;
  addFavoriteCharacter: (value: Character) => void;
  removeFavoriteCharacter: (id: string) => void;
  addFavoriteComic: (value: Comic) => void;
  removeFavoriteComic: (id: string) => void;
  setCharactersSearch: (search: Search) => void;
  setComicsSearch: (search: Search) => void;
  toggleSelected: (value?: Character) => void;
  fetchCharacters: (search: Search) => Promise<void>;
  fetchComics: (search: Search) => Promise<void>;
  fetchComicsOfCharacter: (id: string) => Promise<void>;
};
