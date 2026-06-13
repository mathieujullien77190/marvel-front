import Header from "@/components/Header";
import ListCharacters from "@/components/ListCharacters";
import { FORMAT } from "@/components/ListCharacters/types";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { Wrapper } from "@/components/Wrapper";
import { DEBOUNCE_TIME } from "@/constants";
import { getChoicesCharacter } from "@/helpers/utils";
import { useStore } from "@/store";

import { useEffect, useMemo, useRef } from "react";

export const Home = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    fetchCharacters,
    fetchComicsOfCharacter,
    characters,
    toggleSelected,
    setCharactersSearch,
    selected,
  } = useStore();

  const choices = useMemo(() => {
    return getChoicesCharacter(characters.list);
  }, [characters.list]);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(
      () => fetchCharacters(characters.search),
      characters.search.id ? 0 : DEBOUNCE_TIME,
    );
  }, [fetchCharacters, characters.search]);

  useEffect(() => {
    if (selected?.character.id) fetchComicsOfCharacter(selected?.character.id);
  }, [selected?.character, fetchComicsOfCharacter]);

  useEffect(() => {
    toggleSelected(undefined);
  }, [toggleSelected]);

  return (
    <>
      <Header>
        <Search
          placeholder="Rechercher des personnages..."
          value={characters.search.text ?? ""}
          onChange={(v) => {
            toggleSelected(undefined);
            setCharactersSearch({
              ...characters.search,
              text: v,
              start: 0,
              id: undefined,
            });
          }}
          onChoose={(choice) => {
            setCharactersSearch({
              ...characters.search,
              id: choice.id,
              text: choice.name,
            });
          }}
          choices={choices}
        />
      </Header>
      <Wrapper>
        <h2 className="title-page">PERSONNAGES</h2>
        {characters && (
          <>
            {!selected && (
              <Pagination
                search={characters.search}
                total={characters.total}
                label={(v) => (v >= 2 ? "personnages" : "personnage")}
                onNext={(start, limit) => {
                  setCharactersSearch({
                    ...characters.search,
                    start,
                    limit,
                    id: undefined,
                  });
                }}
                onPrev={(start, limit) => {
                  setCharactersSearch({
                    ...characters.search,
                    start,
                    limit,
                    id: undefined,
                  });
                }}
              />
            )}
            <ListCharacters
              list={characters.list}
              format={selected ? FORMAT.list : FORMAT.grid}
              onSelectionChange={toggleSelected}
              selected={selected}
            />
          </>
        )}
      </Wrapper>
    </>
  );
};
