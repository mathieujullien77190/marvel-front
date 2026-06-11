import { api } from "./fetch";

export type postSignupProps = {
  email: string;
  username: string;
  password: string;
  newsletter: boolean;
};

export type ResponseSignup = {
  account: { username: string };
  email: string;
  token: string;
  _id: string;
};

export const postSignup = (params: postSignupProps): Promise<ResponseSignup> =>
  api.post(`/user/signup`, params);
