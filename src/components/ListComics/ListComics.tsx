import type { Comic } from "@/types";
import { type ListComicsProps } from "./types";
import { LightCardComic } from "../Comic";

export const ListComics = ({ list }: ListComicsProps) => {
  return (
    <section className="w-full p-4">
      <ul className="flex flex-col gap-3 justify-center">
        {list.map((comic: Comic) => (
          <li key={comic.id}>
            <LightCardComic {...comic} />
          </li>
        ))}
      </ul>
    </section>
  );
};
