import { cn } from "@/helpers/cn";
import { generateText } from "./helpers";
import type { PaginationProps } from "./types";

export const Pagination = ({
  search,
  total,
  label,
  onPrev,
  onNext,
}: PaginationProps) => {
  const hasPrev = search.start > 0;
  const hasNext = search.start + search.limit < total;

  return (
    <div className="flex p-4 justify-between ">
      <button
        className={cn(
          "text-sm link transition w-25 ",
          hasPrev ? "visible" : "invisible",
        )}
        onClick={() => {
          if (hasPrev) onPrev(search.start - search.limit, search.limit);
        }}
      >
        Précédent
      </button>

      <p className="text-sm text-ink-light w-full flex justify-center font-semibold">
        {generateText({ search, total, label, hasPrev, hasNext })}
      </p>

      <button
        className={cn(
          "text-sm link transition w-25",
          hasNext ? "visible" : "invisible",
        )}
        onClick={() => {
          if (hasNext) onNext(search.start + search.limit, search.limit);
        }}
      >
        Suivant
      </button>
    </div>
  );
};
