import type { SelectedCharacterType } from "@/store";
import type { Character } from "@/types";

export enum FORMAT {
  grid = "grid",
  list = "list",
}

export type ListCharactersProps = {
  list: Character[];
  format?: FORMAT;
  selected?: SelectedCharacterType;
  onSelectionChange: (value: Character) => void;
};

export type CloseProps = { onClick: () => void };
