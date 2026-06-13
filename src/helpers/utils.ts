import type { Choice } from "@/components/Search/types";
import { MARVEL_CREATION_DATE } from "@/constants";
import type { Character, Comic } from "@/types";

export const getSmallImage = (image: string): string => {
  return image.replace(/\.[^.]+$/, "/portrait_small$&");
};

export const cleanDescription = (description: string): string => {
  return description.replaceAll("&#39;", "'").replace(/<[^>]*>/g, "");
};

export const extractYear = (text: string): number | null => {
  const match = text.match(/\((\d{4})\)/);

  if (!match) return null;

  const year = Number(match[1]);

  return year >= MARVEL_CREATION_DATE ? year : null;
};

export const removeValidYear = (text: string): string => {
  const extract = extractYear(text);

  if (extract)
    return text.replaceAll(`(${extract})`, "").replaceAll(`${extract}`, "");
  return text;
};

export const formatName = (name: string): string =>
  name.replace(/\s*\(.*?\)\s*/g, "").trim();

export const cleanText = (text: string) => {
  return text
    .replace(/\(\d+\)/g, "") // enlève (123) uniquement
    .replace(/#\w+/g, "") // enlève #X, #123, #ABC
    .trim();
};

export const getChoicesComic = (list: Comic[]): Choice[] => {
  const map = new Map<string, Choice>();

  for (const v of list) {
    const name = v.title;

    if (!map.has(name)) {
      map.set(name, {
        id: v.id,
        name,
      });
    }
  }

  const unique = Array.from(map.values()).slice(0, 10);

  return unique.length === 1 ? [] : unique;
};

export const getChoicesCharacter = (list: Character[]): Choice[] => {
  const map = new Map<string, Choice>();

  for (const v of list) {
    const name = v.name;

    if (!map.has(name)) {
      map.set(name, {
        id: v.id,
        name,
      });
    }
  }

  const unique = Array.from(map.values()).slice(0, 10);

  return unique.length === 1 ? [] : unique;
};
