import Header from "@/components/Header";
import ListCharacters from "@/components/ListCharacters";
import { FORMAT } from "@/components/ListCharacters/types";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { Wrapper } from "@/components/Wrapper";
import { useCharactersStore } from "@/store/store";

import { useEffect } from "react";

export const Home = () => {
  const fetchCharacters = useCharactersStore((s) => s.fetchCharacters);
  const fetchComicsOfCharacter = useCharactersStore(
    (s) => s.fetchComicsOfCharacter,
  );
  const characters = useCharactersStore((s) => s.characters);
  const setSelected = useCharactersStore((s) => s.toggleSelected);
  const setSearch = useCharactersStore((s) => s.setCharactersSearch);

  useEffect(() => {
    fetchCharacters(characters.search);
  }, [fetchCharacters, characters.search]);

  useEffect(() => {
    if (characters.selected?.character.id)
      fetchComicsOfCharacter(characters.selected?.character.id);
  }, [characters.selected?.character, fetchComicsOfCharacter]);

  return (
    <>
      <Header>
        <Search
          placeholder="Rechercher des personnages..."
          value={characters.search.text ?? ""}
          onChange={(v) => {
            setSearch({ ...characters.search, text: v, start: 0 });
          }}
        />
      </Header>
      <Wrapper>
        {characters && (
          <>
            {!characters.selected && (
              <Pagination
                search={characters.search}
                total={characters.total}
                label={(v) => (v >= 2 ? "personnages" : "personnage")}
                onNext={(start, limit) => {
                  setSearch({ ...characters.search, start, limit });
                }}
                onPrev={(start, limit) => {
                  setSearch({ ...characters.search, start, limit });
                }}
              />
            )}

            <ListCharacters
              list={characters.list}
              format={characters.selected ? FORMAT.list : FORMAT.grid}
              onSelectionChange={setSelected}
              selected={characters.selected}
            />
          </>
        )}
      </Wrapper>
    </>
  );
};
