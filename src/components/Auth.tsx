import { ROUTES } from "@/constants";
import { isAuth } from "@/helpers/user";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const Auth = ({ children }: PropsWithChildren) => {
  return (
    <>{!isAuth() ? <Navigate to={ROUTES.home} replace /> : <>{children}</>}</>
  );
};
