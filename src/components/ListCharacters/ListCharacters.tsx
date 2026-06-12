import type { Character } from "@/types";
import { FORMAT, type ListCharactersProps } from "./types";
import { SquareCardCharacter } from "@/components/Character";
import { LightCardCharacter } from "../Character/LightCardCharacter";
import { FullCardCharacter } from "../Character/FullCardCharacter";
import { cn } from "@/helpers/cn";
import { HEIGHT_TOP } from "@/constants";
import { IoIosClose } from "react-icons/io";
import ScrollTop from "@/components/ScrollTop";

export const ListCharacters = ({
  list,
  selected,
  format = FORMAT.grid,
  onSelectionChange,
}: ListCharactersProps) => {
  return (
    <section className="w-full p-4">
      {format === FORMAT.grid && (
        <>
          <ul className="flex flex-wrap gap-3 justify-center">
            {list.map((character: Character) => (
              <li key={character.id}>
                <SquareCardCharacter
                  {...character}
                  selected={character.id === selected?.character.id}
                  onClick={onSelectionChange}
                />
              </li>
            ))}
          </ul>
          <ScrollTop />
        </>
      )}
      {format === FORMAT.list && (
        <div
          className={cn(`flex gap-4 min-h-150 relative`)}
          style={{ height: `calc(100vh - ${HEIGHT_TOP}px)` }} //not work in tailwind Oo
        >
          <IoIosClose
            className="absolute top-4 right-4 z-10 cursor-pointer text-white bg-black/40 rounded-full"
            size={30}
            onClick={() => {
              if (selected) onSelectionChange(selected.character);
            }}
          />
          <ul className="flex flex-col gap-3 px-4 overflow-y-auto w-100">
            {list.map((character: Character) => (
              <li key={character.id}>
                <LightCardCharacter
                  {...character}
                  selected={character.id === selected?.character.id}
                  onClick={onSelectionChange}
                />
              </li>
            ))}
          </ul>
          {selected && (
            <FullCardCharacter
              {...selected.character}
              comics={selected.comics}
            />
          )}
        </div>
      )}
    </section>
  );
};
