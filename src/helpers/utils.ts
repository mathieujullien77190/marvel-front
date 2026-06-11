import { MARVEL_CREATION_DATE } from "@/constants";

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
