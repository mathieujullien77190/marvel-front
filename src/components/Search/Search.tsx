import { FaSearch } from "react-icons/fa";
import type { SearchProps } from "./types";
import type { ChangeEvent } from "react";

export const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="w-1/2 bg-canvas flex gap-2 items-center rounded p-2 cursor-text animate-border">
      <FaSearch className="text-ink-light" />
      <input
        className="focus:outline-none focus:ring-0 text  w-full rounded"
        type="text"
        name="search"
        id="search"
        placeholder="Rechercher un personnage..."
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  );
};
