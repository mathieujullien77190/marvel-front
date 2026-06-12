import { FaSearch } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import type { SearchProps } from "./types";
import type { ChangeEvent } from "react";

export const Search = ({ value, placeholder, onChange }: SearchProps) => {
  return (
    <div className="w-full md:w-1/2 bg-canvas flex gap-2 items-center rounded p-2 cursor-text animate-border relative">
      <FaSearch className="text-ink-light" />
      <input
        autoComplete="off"
        className="focus:outline-none focus:ring-0 text  w-full rounded"
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
      {value.length > 0 && (
        <RiCloseFill
          className="absolute text-ink-light right-2 z-10 cursor-pointer hover:text-ink-muted transition"
          size={25}
          onClick={() => {
            onChange("");
          }}
        />
      )}
    </div>
  );
};
