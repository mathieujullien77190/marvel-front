import { cn } from "@/helpers/cn";
import type { CardComicProps } from "./types";
import { getSmallImage } from "./helpers";

export const LightCardComic = ({
  onClick = () => {},
  ...props
}: CardComicProps) => {
  const { image, title, description } = props;

  return (
    <div
      className={cn(
        "bg-canvas-card p-4 flex gap-2 rounded-xl border border-solid border-border cursor-pointer animate-border items-start",
      )}
      title={title}
      onClick={() => {
        onClick(props);
      }}
    >
      <img src={getSmallImage(image)} className="w-14 h-20 rounded" />
      <div className="flex flex-col gap-2">
        <p className="text font-semibold line-clamp-1">{title}</p>
        <p className="text-ink-light text-sm">{description}</p>
      </div>
    </div>
  );
};
