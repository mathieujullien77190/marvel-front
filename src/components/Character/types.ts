import type { Character, Comic } from "@/types";

export type CardCharacterProps = Character & {
  selected?: boolean;
  onClick?: (value: Character) => void;
};

export type TagProps = { value: string };

export type FullCardCharacterProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  comics: Comic[];
};

export type TypeWriterTextProps = { text: string };
