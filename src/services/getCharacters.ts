import type { CharactersResponse } from "@/types";
import { api } from "./fetch";

export const getCharacteres = (): Promise<CharactersResponse> =>
  api.get(`/characters`);
