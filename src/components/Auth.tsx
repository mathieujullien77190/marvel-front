import { isAuth } from "@/helpers/user";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const Auth = ({ to, children }: { to: string } & PropsWithChildren) => (
  <>{!isAuth() ? <Navigate to={to} replace /> : <>{children}</>}</>
);
