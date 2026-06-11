import { cn } from "@/helpers/cn";

import marvelLogo from "@/assets/logo.png";
import type { HeaderProps } from "./types";

export const Header = ({ children }: HeaderProps) => {
  return (
    <header
      className={cn(
        "flex justify-between items-center",
        "py-4 px-6",
        "border-b border-solid border-b-border-strong",
      )}
    >
      <h1 className="text-marvel-500 text-xl font-semibold">
        <a href="#">
          <img src={marvelLogo} alt="MARVEL logo" className="h-10 " />
        </a>
      </h1>
      {children}
      <nav className="flex gap-2">
        <a href="#" className="link transition">
          Personnages
        </a>
        <a href="#" className="link transition">
          Comics
        </a>
        <a href="#" className="link transition">
          Favoris
        </a>
      </nav>
    </header>
  );
};
