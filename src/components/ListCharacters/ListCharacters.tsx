import type { Character } from "@/types";
import type { ListCharactersProps } from "./types";
import { CardCharacter } from "../Character";

export const ListCharacters = ({ total, list }: ListCharactersProps) => {
  return (
    <section className="w-full">
      <p className="text-xs text-ink-light p-4 w-full flex justify-center font-semibold">
        {total} PERSONNAGES
      </p>
      <ul className="flex flex-wrap gap-3 justify-center">
        {list.map((character: Character) => (
          <li key={crypto.randomUUID()}>
            <CardCharacter {...character} />
          </li>
        ))}
      </ul>
    </section>
  );
};
