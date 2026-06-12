import { cn } from "@/helpers/cn";
import { formatName } from "./helpers";
import type { CardCharacterProps } from "./types";
import { getSmallImage } from "@/helpers/utils";
import ImageLoader from "@/components/ImageLoader";
import { FavoritesCharacter } from "./FavoritesCharacter";

export const LightCardCharacter = ({
  onClick = () => {},
  selected,
  ...props
}: CardCharacterProps) => {
  const { image, name } = props;

  return (
    <div
      className={cn(
        "bg-canvas-card p-4 flex items-center gap-2 rounded-xl border border-solid border-border cursor-pointer animate-border",
        selected ? "bg-marvel-50" : "bg-canvas-card",
      )}
      title={name}
      onClick={() => {
        onClick(props);
      }}
    >
      <ImageLoader
        className="w-14 h-14 rounded-full object-cover shrink-0"
        image={getSmallImage(image)}
      />

      <div className="w-full flex justify-between items-center gap-1">
        <p className="text font-semibold line-clamp-1">{formatName(name)}</p>
        <FavoritesCharacter {...props} />
      </div>
    </div>
  );
};
