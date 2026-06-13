import { Link } from "react-router-dom";
import { LINKS } from "./constants";
import { useStore } from "@/store";

import { cn } from "@/helpers/cn";

export const Nav = () => {
  const isCo = useStore((s) => s.user.username && s.user.token);

  return (
    <nav className="flex gap-2 items-center w-full justify-center">
      <Link
        to={LINKS.characters.route}
        className={cn("link transition text-center")}
      >
        {LINKS.characters.text}
      </Link>
      <Link
        to={LINKS.comics.route}
        className={cn("link transition text-center")}
      >
        {LINKS.comics.text}
      </Link>
      {isCo && (
        <>
          <Link
            to={LINKS.favoritesCharacter.route}
            className={cn("link transition text-center")}
          >
            {LINKS.favoritesCharacter.text}
          </Link>
          <Link
            to={LINKS.favoritesComics.route}
            className={cn("link transition text-center")}
          >
            {LINKS.favoritesComics.text}
          </Link>
        </>
      )}
    </nav>
  );
};
