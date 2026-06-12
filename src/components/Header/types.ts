import type { PropsWithChildren } from "react";

export type HeaderProps = PropsWithChildren;

export type UserProps = {
  username?: string;
  token?: string;
  onClickLogin: () => void;
  onClickLogout: () => void;
};
