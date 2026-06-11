import { api } from "./fetch";

export type postSigninProps = {
  email: string;
  password: string;
};

export type ResponseSignin = {
  account: { username: string };
  email: string;
  token: string;
  _id: string;
};

export const postSignin = (params: postSigninProps): Promise<ResponseSignin> =>
  api.post(`/user/login`, params);
