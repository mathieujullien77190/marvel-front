import { login, logout } from "@/helpers/user";
import { getCharacters } from "@/services/getCharacters";
import { getComics } from "@/services/getComics";
import { getComicsOfCharacter } from "@/services/getComicsOfCharacter";
import { putFavorites } from "@/services/putFavorites";
import { create } from "zustand";
import { hasCharacter, hasComic, isValidCharacter } from "./helpers";
import defaultStore from "./defaultStore";
import type { State } from "./types";

export const useStore = create<State>((set) => ({
  ...defaultStore,

  resetUser: () => {
    logout();

    return set(() => {
      return {
        isConnected: false,
        user: defaultStore.user,
      };
    });
  },

  setUser: ({ username, token, favorites }) => {
    if (username && token) login(username, token);

    return set(() => {
      return {
        isConnected: true,
        user: {
          username,
          token,
          favorites: {
            characters: favorites.characters.filter((item) =>
              isValidCharacter(item),
            ),
            comics: favorites.comics,
          },
        },
      };
    });
  },

  addFavoriteComic: (value) =>
    set((state) => {
      const exists = hasComic(state.user.favorites.comics, value.id);

      if (exists) return state; // évite doublon

      const updatedFavorites = {
        ...state.user.favorites,
        comics: [...state.user.favorites.comics, value],
      };

      putFavorites({ favorites: updatedFavorites });

      return {
        user: {
          ...state.user,
          favorites: updatedFavorites,
        },
      };
    }),

  removeFavoriteComic: (id) =>
    set((state) => {
      const updatedFavorites = {
        ...state.user.favorites,
        comics: state.user.favorites.comics.filter((c) => c.id !== id),
      };

      putFavorites({ favorites: updatedFavorites });

      return {
        user: {
          ...state.user,
          favorites: updatedFavorites,
        },
      };
    }),

  addFavoriteCharacter: (value) =>
    set((state) => {
      const exists = hasCharacter(state.user.favorites.characters, value.id);

      if (exists) return state; // évite doublon

      const updatedFavorites = {
        ...state.user.favorites,
        characters: [...state.user.favorites.characters, value],
      };

      putFavorites({ favorites: updatedFavorites });

      return {
        user: {
          ...state.user,
          favorites: updatedFavorites,
        },
      };
    }),

  removeFavoriteCharacter: (id) =>
    set((state) => {
      const updatedFavorites = {
        ...state.user.favorites,
        characters: state.user.favorites.characters.filter((c) => c.id !== id),
      };

      putFavorites({ favorites: updatedFavorites });

      return {
        user: {
          ...state.user,
          favorites: updatedFavorites,
        },
      };
    }),

  setCharactersSearch: (value) =>
    set((state) => ({
      characters: {
        ...state.characters,
        search: {
          id: value.id,
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
          id: value.id,
          text: value.text,
          start: value.start,
          limit: value.limit,
        },
      },
    })),

  toggleSelected: (value) =>
    set((state) => ({
      selected: value
        ? state.selected?.character.id === value.id
          ? undefined
          : {
              character: value,
              comics: [],
            }
        : undefined,
    })),

  fetchCharacters: async (search) => {
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
  },

  fetchComics: async (search) => {
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
  },

  fetchComicsOfCharacter: async (id) => {
    const data = await getComicsOfCharacter({ id });

    set((state) => {
      if (!state.selected) return state;

      return {
        selected: {
          ...state.selected,
          comics: data.results,
        },
      };
    });
  },
}));
