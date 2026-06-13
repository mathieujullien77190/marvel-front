import { cn } from "@/helpers/cn";
import type { CardComicProps } from "./types";
import {
  cleanDescription,
  getSmallImage,
  removeValidYear,
} from "@/helpers/utils";
import ImageLoader from "../ImageLoader";
import { useState } from "react";
import { FavoritesComic } from "./FavoritesComic";

export const LightCardComic = ({
  year,

  ...props
}: CardComicProps) => {
  const { image, title, description } = props;

  const [isBig, setIsBig] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "bg-canvas-card text-xs sm:text-base p-4 flex flex-col gap-2 rounded-xl border border-solid border-border cursor-pointer animate-border items-start relative",
      )}
      title={title}
      onClick={() => {
        setIsBig((prev) => !prev);
      }}
    >
      <div className="flex flex-col gap-2 w-full items-center md:items-start md:flex-row ">
        {isBig ? (
          <ImageLoader
            image={image}
            className={cn("w-50 h-70", "rounded overflow-hidden shrink-0")}
          />
        ) : (
          <ImageLoader
            image={getSmallImage(image)}
            className={cn("w-14 h-20", "rounded overflow-hidden shrink-0")}
          />
        )}

        <p className="font-semibold line-clamp-1 flex flex-col items-center md:items-start">
          <span className="flex gap-2 items-center">
            {removeValidYear(title)}
            <FavoritesComic {...props} />
          </span>
          {year && <span>{year}</span>}
        </p>
      </div>
      <p className={cn("text-ink-light ", isBig ? "" : "line-clamp-2")}>
        {cleanDescription(description ?? "")}
      </p>
    </div>
  );
};
