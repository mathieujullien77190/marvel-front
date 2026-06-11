import { DEBOUNCE_FETCH } from "@/constants";
import { getCharacters } from "@/services/getCharacters";
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
  characters: {
    list: Character[];
    total: number;
    selected?: SelectedCharacterType;
    search: Search;
  };
  setSearch: (search: Search) => void;
  toggleSelected: (value: Character) => void;
  fetchCharacters: (search: Search) => Promise<void>;
  fetchComicsOfCharacter: (id: string) => Promise<void>;
};

const defaultStore = {
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
};

let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

export const useCharactersStore = create<State>((set) => ({
  ...defaultStore,

  setSearch: (value) =>
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
