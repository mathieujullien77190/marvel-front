import { Link } from "react-router-dom";
import { LINKS } from "./constants";

export const Nav = () => {
  return (
    <nav className="flex gap-2">
      {LINKS.map((link) => (
        <Link key={link.id} to={link.routes} className="link transition">
          {link.text}
        </Link>
      ))}
    </nav>
  );
};
