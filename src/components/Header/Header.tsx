import { cn } from "@/helpers/cn";

import marvelLogo from "@/assets/logo.png";
import type { HeaderProps } from "./types";
import { Nav } from "./Nav";
import { ROUTES } from "@/constants";
import { Link } from "react-router-dom";
import { useState } from "react";

import Signin from "@/components/Signin";
import { User as UserComponent } from "./User";
import { useCharactersStore } from "@/store/store";

export const Header = ({ children }: HeaderProps) => {
  const [showConnexion, setShowConnexion] = useState<boolean>(false);
  const user = useCharactersStore((s) => s.user);
  const resetUser = useCharactersStore((s) => s.resetUser);

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
          "flex justify-between items-center",
          "py-4 px-6",
          "border-b border-solid border-b-border-strong",
        )}
      >
        <h1 className="text-marvel-500 text-xl font-semibold">
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
          }}
        />
      </header>
    </>
  );
};
