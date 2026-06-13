import type { CharactersResponse } from "@/types";
import { api } from "./fetch";
import type { Search } from "@/store";

type getCharactersProps = Search;

export const getCharacters = ({
  start,
  limit,
  text,
  id,
}: getCharactersProps): Promise<CharactersResponse> =>
  api.get(`/characters`, { params: { name: text, skip: start, limit, id } });
