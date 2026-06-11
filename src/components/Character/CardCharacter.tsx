import { formatName } from "./helpers";
import type { CardCharacterProps } from "./types";

export const CardCharacter = ({
  image,
  name,
  description,
  comics,
}: CardCharacterProps) => {
  return (
    <div
      className="bg-canvas-card p-4 flex flex-col gap-2 items-center rounded-xl border border-solid border-border- w-50 h-50 cursor-pointer animate-border"
      title={name}
    >
      <img src={image} className="w-14 h-14 rounded-full" />
      <p className="text font-semibold line-clamp-1">{formatName(name)}</p>
      <p className="text-ink-light text-sm line-clamp-2 h-10">{description}</p>
      <p className="bg-marvel-100 text-marvel-700 rounded text-xs py-1 px-2">
        {comics.length} comics
      </p>
    </div>
  );
};
