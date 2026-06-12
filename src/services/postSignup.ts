import type { Favorites } from "@/types";
import { api } from "./fetch";

export type postSignupProps = {
  email: string;
  username: string;
  password: string;
};

export type ResponseSignup = {
  username: string;
  token: string;
  favorites: Favorites;
};

export const postSignup = (params: postSignupProps): Promise<ResponseSignup> =>
  api.post(`/user/signup`, params);
