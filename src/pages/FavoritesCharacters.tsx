import { Auth } from "@/components/Auth";
import Header from "@/components/Header";
import ListCharacters from "@/components/ListCharacters";
import { FORMAT } from "@/components/ListCharacters/types";
import Search from "@/components/Search";
import { Wrapper } from "@/components/Wrapper";
import { useCharactersStore } from "@/store/store";
import { useEffect, useState } from "react";

export const FavoritesCharacters = () => {
  const comics = useCharactersStore((s) => s.user.favorites.characters);
  const selected = useCharactersStore((s) => s.selected);
  const toggleSelected = useCharactersStore((s) => s.toggleSelected);
  const fetchComicsOfCharacter = useCharactersStore(
    (s) => s.fetchComicsOfCharacter,
  );

  const [value, setValue] = useState<string>("");

  const searchCharacters = comics.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase()),
  );

  useEffect(() => {
    if (selected?.character.id) fetchComicsOfCharacter(selected?.character.id);
  }, [selected?.character, fetchComicsOfCharacter]);

  useEffect(() => {
    toggleSelected(undefined);
  }, [toggleSelected]);

  return (
    <Auth>
      <Header>
        <Search
          placeholder="Rechercher des personnages dans ses favoris"
          value={value}
          onChange={(v) => {
            toggleSelected(undefined);
            setValue(v);
          }}
        />
      </Header>
      <Wrapper>
        <h2 className="title-page">PERSONNAGES FAVORIS</h2>
        {searchCharacters && (
          <>
            <ListCharacters
              list={searchCharacters}
              format={selected ? FORMAT.list : FORMAT.grid}
              onSelectionChange={toggleSelected}
              selected={selected}
            />
          </>
        )}
      </Wrapper>
    </Auth>
  );
};
