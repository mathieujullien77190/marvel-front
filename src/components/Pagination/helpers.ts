import type { PaginationProps } from "./types";

export const generateText = ({
  search,
  total,
  label,
}: Pick<PaginationProps, "search" | "total" | "label">): string => {
  const max = Math.min(search.start + search.limit, total);

  return `de ${search.start} à ${max} sur ${total} ${label(total)}`;
};
