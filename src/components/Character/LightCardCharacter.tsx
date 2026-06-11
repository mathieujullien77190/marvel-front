import { cn } from "@/helpers/cn";
import { formatName, getSmallImage } from "./helpers";
import type { CardCharacterProps } from "./types";

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
      <img src={getSmallImage(image)} className="w-14 h-14 rounded-full" />
      <p className="text font-semibold line-clamp-1">{formatName(name)}</p>
    </div>
  );
};
