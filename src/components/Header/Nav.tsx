import { Link } from "react-router-dom";
import { LINKS } from "./constants";
import { useCharactersStore } from "@/store/store";

import { cn } from "@/helpers/cn";
import { useState } from "react";

export const Nav = () => {
  const isCo = useCharactersStore((s) => s.user.username && s.user.token);

  const [details, setDetails] = useState<boolean>(false);

  return (
    <nav className="flex gap-2 items-center">
      <Link to={LINKS.characters.route} className={cn("link transition")}>
        {LINKS.characters.text}
      </Link>
      <Link to={LINKS.comics.route} className={cn("link transition")}>
        {LINKS.comics.text}
      </Link>
      {isCo && (
        <div
          className="flex items-center gap-2 w-42"
          onMouseEnter={() => {
            setDetails(true);
          }}
          onMouseLeave={() => {
            setDetails(false);
          }}
        >
          {!details && (
            <span className={cn("link transition")}>
              {LINKS.favorites.text}
            </span>
          )}
          {details && (
            <>
              <div className="flex flex-col text-sm gap-0.5">
                <Link
                  to={LINKS.favoritesCharacter.route}
                  className={cn("link transition")}
                >
                  {LINKS.favoritesCharacter.text}
                </Link>
                <Link
                  to={LINKS.favoritesComics.route}
                  className={cn("link transition")}
                >
                  {LINKS.favoritesComics.text}
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
