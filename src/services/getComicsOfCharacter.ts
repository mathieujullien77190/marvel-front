import type { ComicsResponse } from "@/types";
import { api } from "./fetch";

type getComicsOfCharacterProps = { id: string };

export const getComicsOfCharacter = ({
  id,
}: getComicsOfCharacterProps): Promise<ComicsResponse> =>
  api.get(`/comics/${id}`);
