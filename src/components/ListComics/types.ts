import type { Comic } from "@/types";

export enum FORMAT {
  grid = "grid",
  list = "list",
}

export type ListComicsProps = {
  list: Comic[];
  format?: FORMAT;
};
