import type { Character, Comic } from "@/types";

export const hasCharacter = (characters: Character[], id: string): boolean => {
  return !!characters.find((item) => item.id === id);
};

export const hasComic = (comics: Comic[], id: string): boolean => {
  return !!comics.find((item) => item.id === id);
};

export const isValidCharacter = (character: any): boolean => {
  return !!character && character.id && character.name;
};

export const isValidComic = (comic: any): boolean => {
  return !!comic && comic.id && comic.title;
};
