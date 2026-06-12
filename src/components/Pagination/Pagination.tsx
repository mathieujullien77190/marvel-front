import { generateText } from "./helpers";
import type { PaginationProps } from "./types";

export const Pagination = ({
  search,
  total,
  label,
  onPrev,
  onNext,
}: PaginationProps) => {
  return (
    <div className="flex p-4 justify-between ">
      {search.start > 0 && (
        <button
          className="text-sm link transition"
          onClick={() => {
            onPrev(search.start - search.limit, search.limit);
          }}
        >
          Précédent
        </button>
      )}
      <p className="text-sm text-ink-light w-full flex justify-center font-semibold">
        {generateText({ search, total, label })}
      </p>

      {search.start + search.limit < total && (
        <button
          className="text-sm link transition"
          onClick={() => {
            onNext(search.start + search.limit, search.limit);
          }}
        >
          Suivant
        </button>
      )}
    </div>
  );
};
