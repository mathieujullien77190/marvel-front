import type { PaginationProps } from "./types";

export const generateText = ({
  search,
  total,
  label,
  hasPrev,
  hasNext,
}: Pick<PaginationProps, "search" | "total" | "label"> & {
  hasPrev: boolean;
  hasNext: boolean;
}): string => {
  if (!hasPrev && !hasNext) return `${total} ${label(total)}`;
  const max = Math.min(search.start + search.limit, total);

  return `de ${search.start} à ${max} sur ${total} ${label(total)}`;
};
