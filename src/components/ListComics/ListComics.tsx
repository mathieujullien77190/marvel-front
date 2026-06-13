import { FORMAT, type ListComicsProps } from "./types";
import { LightCardComic } from "../Comic";
import { groupComicsByYear, sortYears } from "./helpers";
import ScrollTop from "@/components/ScrollTop";
import { cn } from "@/helpers/cn";

export const ListComics = ({ list, format }: ListComicsProps) => {
  const grouped = groupComicsByYear(list);
  const sortedYears = sortYears(grouped);

  return (
    <section className="w-full p-4 relative">
      <ul className="flex flex-col gap-6">
        {sortedYears.map((key) => (
          <div key={key} className="flex flex-col gap-3">
            <div
              className={cn(
                "text-xl font-bold sticky bg-canvas-card p-2 z-10 rounded-sm",
                format === FORMAT.full ? "top-47 md:top-20" : "top-0",
              )}
            >
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
