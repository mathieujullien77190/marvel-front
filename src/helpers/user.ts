import Cookies from "js-cookie";

export const getToken = () => Cookies.get("token");

export const isAuth = (): boolean => {
  return !!getToken();
};

export const setToken = (token: string) => {
  Cookies.set("token", token, { expires: 7 });
};

export const getUsername = () => Cookies.get("username");

export const setUsername = (name: string) => {
  Cookies.set("username", name, { expires: 7 });
};

export const login = (name: string, token: string) => {
  setToken(token);
  setUsername(name);
};

export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("username");
};
