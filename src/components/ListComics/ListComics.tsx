import { type ListComicsProps } from "./types";
import { LightCardComic } from "../Comic";
import { groupComicsByYear, sortYears } from "./helpers";
import ScrollTop from "@/components/ScrollTop";

export const ListComics = ({ list }: ListComicsProps) => {
  const grouped = groupComicsByYear(list);
  const sortedYears = sortYears(grouped);

  return (
    <section className="w-full p-4 relative">
      <ul className="flex flex-col gap-6">
        {sortedYears.map((key) => (
          <div key={key} className="flex flex-col gap-3">
            <div className="text-xl font-bold sticky top-0 bg-canvas-card p-2 z-10 rounded-sm">
              {key === "no_date" ? "autres" : key}
            </div>

            {grouped[key].map((comic) => (
              <li key={comic.id}>
                <LightCardComic
                  {...comic}
                  year={key === "no_date" ? undefined : Number(key)}
                />
              </li>
            ))}
          </div>
        ))}
      </ul>
      <ScrollTop />
    </section>
  );
};
