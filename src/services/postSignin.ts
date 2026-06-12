import type { Favorites } from "@/types";
import { api } from "./fetch";

export type postSigninProps = { email: string; password: string };

export type ResponseSignin = {
  username: string;
  token: string;
  favorites: Favorites;
};

export const postSignin = (params: postSigninProps): Promise<ResponseSignin> =>
  api.post(`/user/signin`, params);
