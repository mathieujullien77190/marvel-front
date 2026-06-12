import { Link } from "react-router-dom";
import { LINKS } from "./constants";
import { useCharactersStore } from "@/store/store";

export const Nav = () => {
  const isCo = useCharactersStore((s) => s.user.username && s.user.token);

  return (
    <nav className="flex gap-2">
      {LINKS.map((link) => (
        <>
          {link.id === "favorites" ? (
            <>
              {isCo && (
                <Link
                  key={link.id}
                  to={link.routes}
                  className="link transition"
                >
                  {link.text}
                </Link>
              )}
            </>
          ) : (
            <Link key={link.id} to={link.routes} className="link transition">
              {link.text}
            </Link>
          )}
        </>
      ))}
    </nav>
  );
};
