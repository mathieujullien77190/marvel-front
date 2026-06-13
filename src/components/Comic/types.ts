import type { Comic } from "@/types";

export type CardComicProps = Comic & { year?: number; searchString?: string };
