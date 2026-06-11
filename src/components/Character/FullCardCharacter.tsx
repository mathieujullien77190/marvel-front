import ListComics from "../ListComics";
import { formatName } from "./helpers";
import { Tag } from "./Tag";
import type { FullCardCharacterProps } from "./types";
import { cn } from "@/helpers/cn";
import { HEIGHT_TOP } from "@/constants";

export const FullCardCharacter = ({
  image,
  name,
  description,
  comics,
}: FullCardCharacterProps) => {
  return (
    <div
      className={cn(
        `bg-canvas-card w-full rounded-2xl border border-solid border-border-strong flex flex-col gap-4 min-h-150 h-[calc(100vh-${HEIGHT_TOP}px)]`,
      )}
      title={name}
    >
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          className="w-full h-48 object-cover  transition-transform duration-300 ease-(--ease-smooth) hover:scale-110"
        />
      </div>

      <div className="px-4 flex flex-col gap-4">
        <p className="text-xl font-semibold line-clamp-1">{formatName(name)}</p>

        {description && <p className="text-ink-light text-sm">{description}</p>}

        <Tag value={`${comics.length} COMICS`} />
      </div>

      <div className="flex-1 overflow-y-auto m-4 ml-0">
        <ListComics list={comics} />
      </div>
    </div>
  );
};
