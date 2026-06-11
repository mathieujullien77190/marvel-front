import type { Comic } from "@/types";

export type CardComicProps = Comic & {
  onClick?: (value: Comic) => void;
};
