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
  const selected = useCharactersStore((s) => s.selected);

  useEffect(() => {
    fetchCharacters(characters.search);
  }, [fetchCharacters, characters.search]);

  useEffect(() => {
    if (selected?.character.id) fetchComicsOfCharacter(selected?.character.id);
  }, [selected?.character, fetchComicsOfCharacter]);

  useEffect(() => {
    setSelected(undefined);
  }, [setSelected]);

  return (
    <>
      <Header>
        <Search
          placeholder="Rechercher des personnages..."
          value={characters.search.text ?? ""}
          onChange={(v) => {
            setSelected(undefined);
            setSearch({ ...characters.search, text: v, start: 0 });
          }}
        />
      </Header>
      <Wrapper>
        <h2 className="title-page">PERSONNAGES</h2>
        {characters && (
          <>
            {!selected && characters.list.length > 0 && (
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
              format={selected ? FORMAT.list : FORMAT.grid}
              onSelectionChange={setSelected}
              selected={selected}
            />
          </>
        )}
      </Wrapper>
    </>
  );
};
