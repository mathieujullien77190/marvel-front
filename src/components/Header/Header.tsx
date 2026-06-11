import { cn } from "@/helpers/cn";
import { FaSearch } from "react-icons/fa";
import marvelLogo from "@/assets/logo.png";

export const Header = () => {
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
      <div className="w-1/2 bg-canvas flex gap-2 items-center rounded p-2 cursor-text animate-border">
        <FaSearch className="text-ink-light" />
        <input
          className="focus:outline-none focus:ring-0 text  w-full rounded"
          type="text"
          name="search"
          id="search"
          placeholder="Rechercher un personnage..."
        />
      </div>
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
