import type { Search } from "@/store/store";

export type PaginationProps = {
  search: Search;
  total: number;
  label: (total: number) => string;
  onNext: (start: number, limit: number) => void;
  onPrev: (start: number, limit: number) => void;
};
