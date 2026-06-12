import { extractYear } from "@/helpers/utils";
import type { Comic } from "@/types";

type GroupKey = number | "no_date";

export const groupComicsByYear = (list: Comic[]) =>
  list.reduce<Record<string, Comic[]>>((acc, comic) => {
    const year = extractYear(comic.title);
    const key: GroupKey = year ?? "no_date";

    if (!acc[key]) acc[key] = [];

    acc[key].push(comic);

    return acc;
  }, {});

export const sortYears = (grouped: Record<string, Comic[]>) =>
  Object.keys(grouped).sort((a, b) => {
    if (a === "no_date") return 1;
    if (b === "no_date") return -1;
    return Number(b) - Number(a);
  });
