import type { Character } from "@/types";
import { FORMAT, type ListCharactersProps } from "./types";
import { SquareCardCharacter } from "@/components/Character";
import { LightCardCharacter } from "../Character/LightCardCharacter";
import { FullCardCharacter } from "../Character/FullCardCharacter";
import { cn } from "@/helpers/cn";
import ScrollTop from "@/components/ScrollTop";
import { Close } from "./Close";
import { DEVICE, useDevice } from "@/hooks/useDevice";
import { HEIGHT_TOP } from "@/constants";

export const ListCharacters = ({
  list,
  selected,
  format = FORMAT.grid,
  onSelectionChange,
}: ListCharactersProps) => {
  const device = useDevice();

  return (
    <section className="w-full p-4">
      {format === FORMAT.grid && (
        <>
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-3 justify-center">
            {list.map((character: Character) => (
              <li key={character.id} className="w-full md:w-50 h-50">
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
          <Close
            onClick={() => {
              if (selected) onSelectionChange(selected.character);
            }}
          />

          {device === DEVICE.desktop && (
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
          )}
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
