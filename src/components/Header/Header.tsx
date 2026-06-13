import { cn } from "@/helpers/cn";

import marvelLogo from "@/assets/logo.png";
import type { HeaderProps } from "./types";
import { Nav } from "./Nav";
import { ROUTES } from "@/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import Signin from "@/components/Signin";
import { User as UserComponent } from "./User";
import { useStore } from "@/store";
import { useAutoConnect } from "@/hooks/useAutoConnect";

export const Header = ({ children }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showConnexion, setShowConnexion] = useState<boolean>(false);
  const user = useStore((s) => s.user);
  const resetUser = useStore((s) => s.resetUser);

  useAutoConnect();

  return (
    <>
      <Signin
        show={showConnexion}
        onClose={() => {
          setShowConnexion(false);
        }}
      />

      <header
        className={cn(
          "bg-white sticky top-0 z-40",
          "flex justify-between items-center gap-4 flex-col md:flex-row",
          "py-4 px-6 h-46 md:h-18.75",
          "border-b border-solid border-b-border-strong",
        )}
      >
        <h1 className="text-marvel-500 text-xl font-semibold flex-none">
          <Link to={ROUTES.home}>
            <img src={marvelLogo} alt="MARVEL logo" className="h-10 " />
          </Link>
        </h1>
        {children}
        <Nav />

        <UserComponent
          username={user.username}
          token={user.token}
          onClickLogin={() => {
            setShowConnexion(true);
          }}
          onClickLogout={() => {
            resetUser();
            if (location.pathname === ROUTES.favoritesCharacters)
              navigate(ROUTES.characters);
            if (location.pathname === ROUTES.favoritesComics)
              navigate(ROUTES.comics);
          }}
        />
      </header>
    </>
  );
};
