import { cn } from "@/helpers/cn";

import marvelLogo from "@/assets/logo.png";
import type { HeaderProps } from "./types";
import { Nav } from "./Nav";
import { ROUTES } from "@/constants";
import { Link } from "react-router-dom";

export const Header = ({ children }: HeaderProps) => {
  return (
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
    </header>
  );
};
