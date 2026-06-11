import { cn } from "@/helpers/cn";
import { formatName, getSmallImage } from "./helpers";
import type { CardCharacterProps } from "./types";
import { Tag } from "./Tag";

export const SquareCardCharacter = ({
  onClick = () => {},
  selected,
  ...props
}: CardCharacterProps) => {
  const { image, name, description, comics } = props;

  return (
    <div
      className={cn(
        "p-4 flex flex-col gap-2 items-center rounded-xl border border-solid border-border w-50 h-50 cursor-pointer animate-border",
        selected ? "bg-marvel-50" : "bg-canvas-card",
      )}
      title={name}
      onClick={() => {
        onClick(props);
      }}
    >
      <img src={getSmallImage(image)} className="w-14 h-14 rounded-full" />
      <p className="text font-semibold line-clamp-1">{formatName(name)}</p>
      <p className="text-ink-light text-sm line-clamp-2 h-10">{description}</p>
      <Tag value={`${comics.length} COMICS`} />
    </div>
  );
};
