import type { Comic } from "@/types";

export enum FORMAT {
  full = "full",
  in = "in",
}

export type ListComicsProps = {
  list: Comic[];
  format?: FORMAT;
  searchString?: string;
};
