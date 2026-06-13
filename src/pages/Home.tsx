import Header from "@/components/Header";
import ListCharacters from "@/components/ListCharacters";
import { FORMAT } from "@/components/ListCharacters/types";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { Wrapper } from "@/components/Wrapper";
import { useStore } from "@/store";

import { useEffect } from "react";

export const Home = () => {
  const {
    fetchCharacters,
    fetchComicsOfCharacter,
    characters,
    toggleSelected,
    setCharactersSearch,
    selected,
  } = useStore();

  const searchString = useStore((s) => s.characters.search.text);

  const choices = characters.list.map((v) => ({ id: v.id, name: v.name }));

  useEffect(() => {
    fetchCharacters(characters.search);
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
            setCharactersSearch({ ...characters.search, text: v, start: 0 });
          }}
          choices={choices}
        />
      </Header>
      <Wrapper>
        <h2 className="title-page">PERSONNAGES</h2>
        {characters && (
          <>
            {!selected && characters.list.length > 0 && (
              <>
                <Pagination
                  search={characters.search}
                  total={characters.total}
                  label={(v) => (v >= 2 ? "personnages" : "personnage")}
                  onNext={(start, limit) => {
                    setCharactersSearch({ ...characters.search, start, limit });
                  }}
                  onPrev={(start, limit) => {
                    setCharactersSearch({ ...characters.search, start, limit });
                  }}
                />

                <ListCharacters
                  list={characters.list}
                  format={selected ? FORMAT.list : FORMAT.grid}
                  onSelectionChange={toggleSelected}
                  selected={selected}
                  searchString={searchString}
                />
              </>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};
