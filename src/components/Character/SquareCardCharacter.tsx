import { cn } from "@/helpers/cn";
import type { CardCharacterProps } from "./types";
import { Tag } from "./Tag";
import { getSmallImage } from "@/helpers/utils";
import ImageLoader from "@/components/ImageLoader";
import { FavoritesCharacter } from "./FavoritesCharacter";

export const SquareCardCharacter = ({
  onClick = () => {},

  selected,
  ...props
}: CardCharacterProps) => {
  const { image, name, comics } = props;

  return (
    <div
      className={cn(
        "p-4 flex flex-col gap-2 items-center rounded-xl border border-solid border-border w-full h-full cursor-pointer animate-border",
        selected ? "bg-marvel-50" : "bg-canvas-card",
      )}
      title={name}
      onClick={() => {
        onClick(props);
      }}
    >
      <ImageLoader
        className="w-14 h-14 rounded-full overflow-hidden"
        image={getSmallImage(image)}
      />

      <p className="text font-semibold line-clamp-2 text-center">n{name}</p>
      <FavoritesCharacter {...props} />
      <Tag value={`${comics} COMICS`} />
    </div>
  );
};
