import { DEBOUNCE_FETCH } from "@/constants";
import { getCharacters } from "@/services/getCharacters";
import { getComics } from "@/services/getComics";
import { getComicsOfCharacter } from "@/services/getComicsOfCharacter";
import type { Character, Comic } from "@/types";
import { create } from "zustand";

export type SelectedCharacterType = { character: Character; comics: Comic[] };

export type Search = {
  text?: string;
  start: number;
  limit: number;
};

type State = {
  favorites: {
    characters: string[];
    comics: string[];
  };
  characters: {
    list: Character[];
    total: number;
    selected?: SelectedCharacterType;
    search: Search;
  };
  comics: {
    list: Comic[];
    total: number;
    search: Search;
  };
  toggleFavoritesCharacter: (id: string) => void;
  isFavoritesCharacter: (id: string) => boolean;
  setCharactersSearch: (search: Search) => void;
  setComicsSearch: (search: Search) => void;
  toggleSelected: (value: Character) => void;
  fetchCharacters: (search: Search) => Promise<void>;
  fetchComics: (search: Search) => Promise<void>;
  fetchComicsOfCharacter: (id: string) => Promise<void>;
};

const defaultStore = {
  favorites: {
    characters: [],
    comics: [],
  },
  characters: {
    list: [],
    total: 0,
    selected: undefined,
    search: {
      text: undefined,
      start: 0,
      limit: 100,
    },
  },
  comics: {
    list: [],
    total: 0,
    search: {
      text: undefined,
      start: 0,
      limit: 100,
    },
  },
};

let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

export const useCharactersStore = create<State>((set, get) => ({
  ...defaultStore,

  toggleFavoritesCharacter: (id) =>
    set((state) => {
      const exists = state.favorites.characters.includes(id);

      return {
        favorites: {
          ...state.favorites,
          characters: exists
            ? state.favorites.characters.filter((c) => c !== id)
            : [...state.favorites.characters, id],
        },
      };
    }),

  isFavoritesCharacter: (id: string) => {
    return get().favorites.characters.includes(id);
  },

  setCharactersSearch: (value) =>
    set((state) => ({
      characters: {
        ...state.characters,
        search: {
          text: value.text,
          start: value.start,
          limit: value.limit,
        },
      },
    })),

  setComicsSearch: (value) =>
    set((state) => ({
      comics: {
        ...state.comics,
        search: {
          text: value.text,
          start: value.start,
          limit: value.limit,
        },
      },
    })),

  toggleSelected: (value) =>
    set((state) => ({
      characters: {
        ...state.characters,
        selected:
          state.characters.selected?.character.id === value.id
            ? undefined
            : {
                character: value,
                comics: [],
              },
      },
    })),
  fetchCharacters: async (search) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(async () => {
      //prefetch des page suivante qui seront mis en cache via les interceptors
      getCharacters({ ...search, start: search.start + search.limit });

      const data = await getCharacters(search);

      set((state) => ({
        characters: {
          list: data.results,
          total: data.count,
          selected: undefined,
          search: state.characters.search,
        },
      }));
    }, DEBOUNCE_FETCH);
  },

  fetchComics: async (search) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(async () => {
      //prefetch des page suivante qui seront mis en cache via les interceptors
      getComics({ ...search, start: search.start + search.limit });

      const data = await getComics(search);

      set((state) => ({
        comics: {
          list: data.results,
          total: data.count,
          search: state.comics.search,
        },
      }));
    }, DEBOUNCE_FETCH);
  },

  fetchComicsOfCharacter: async (id) => {
    const data = await getComicsOfCharacter({ id });

    set((state) => {
      if (!state.characters.selected) return state;

      return {
        characters: {
          ...state.characters,
          selected: {
            ...state.characters.selected,
            comics: data.results,
          },
        },
      };
    });
  },
}));
