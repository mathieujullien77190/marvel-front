import { useEffect, useRef, useState, type ChangeEvent } from "react";
import type { SearchProps } from "./types";
import { RiCloseFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import HighlightText from "../HightlightText";

export const Search = ({
  value,
  placeholder,
  choices = [],
  onChange,
  onChoose,
}: SearchProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //fonctionne mieux que le onblur
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col w-full relative" ref={wrapperRef}>
      {/* INPUT */}
      <div className="w-full bg-canvas flex gap-2 items-center rounded p-2 cursor-text animate-border relative z-20">
        <FaSearch className="text-ink-light" />

        <input
          placeholder={placeholder}
          autoComplete="off"
          className="focus:outline-none focus:ring-0 text w-full rounded"
          type="text"
          name="search"
          id="search"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onFocus={() => setOpen(true)}
        />

        {value.length > 0 && (
          <RiCloseFill
            className="absolute text-ink-light right-2 z-10 cursor-pointer hover:text-ink-muted transition"
            size={25}
            onClick={() => onChange("")}
          />
        )}
      </div>

      {open && choices.length > 0 && value.length > 0 && (
        <div className="absolute left-0 top-full mt-2 w-full bg-canvas border border-border-strong rounded shadow-md overflow-hidden z-50">
          {choices.map((choice) => (
            <div
              key={choice.id}
              className="p-2 cursor-pointer hover:bg-marvel-100"
              onClick={() => onChoose?.(choice)}
            >
              <HighlightText text={choice.name} query={value} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
