import type { ComicsResponse } from "@/types";
import { api } from "./fetch";
import type { Search } from "@/store/store";

type getComicsProps = Search;

export const getComics = ({
  start,
  limit,
  text,
}: getComicsProps): Promise<ComicsResponse> =>
  api.get(`/comics`, { params: { title: text, skip: start, limit } });
