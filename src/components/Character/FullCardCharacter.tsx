import ListComics from "../ListComics";
import { Tag } from "./Tag";
import type { FullCardCharacterProps } from "./types";
import { cn } from "@/helpers/cn";
import { HEIGHT_TOP } from "@/constants";
import { TypeWriterText } from "./TypeWriterText";
import { FORMAT } from "@/components/ListComics/types";
import { useState } from "react";
import { FavoritesCharacter } from "./FavoritesCharacter";

const MIN_HEIGHT_IMAGE = 150;

export const FullCardCharacter = ({ ...props }: FullCardCharacterProps) => {
  const { comics, image, name, description } = props;

  const [heightImage, setHeightImage] = useState<number>(MIN_HEIGHT_IMAGE);

  return (
    <div
      className={cn(
        `bg-canvas-card w-full rounded-2xl border border-solid border-border-strong flex flex-col gap-4 min-h-150 `,
      )}
      style={{ height: `calc(100vh - ${HEIGHT_TOP}px)` }} //not work in tailwind Oo
      title={name}
    >
      <div
        className="overflow-hidden rounded-t-2xl"
        onMouseEnter={() => {
          setHeightImage(window.innerHeight / 2 - HEIGHT_TOP);
        }}
        onMouseLeave={(e) => {
          //hack
          if ((e.relatedTarget as any)?.id !== "closeButton")
            setHeightImage(MIN_HEIGHT_IMAGE);
        }}
      >
        <img
          src={image}
          className="w-full h-48 object-cover "
          style={{ height: heightImage, transition: "height 0.3s ease" }}
        />
      </div>

      <div className="px-4 flex flex-col gap-4">
        <p className="text-xl font-semibold line-clamp-1 flex justify-between">
          <span>{name}</span>
          <FavoritesCharacter {...props} comics={[]} />
        </p>

        {description && <TypeWriterText text={description} />}

        <Tag value={`${comics.length} COMICS`} />
      </div>

      <div className="flex-1 overflow-y-auto m-4 ml-0">
        <ListComics list={comics} format={FORMAT.in} />
      </div>
    </div>
  );
};
