import { Auth } from "@/components/Auth";
import Header from "@/components/Header";
import ListCharacters from "@/components/ListCharacters";
import { FORMAT } from "@/components/ListCharacters/types";
import Search from "@/components/Search";
import { Wrapper } from "@/components/Wrapper";
import { ROUTES } from "@/constants";
import { useStore } from "@/store";
import { useEffect, useState } from "react";

export const FavoritesCharacters = () => {
  const characters = useStore((s) => s.user.favorites.characters);
  const selected = useStore((s) => s.selected);
  const toggleSelected = useStore((s) => s.toggleSelected);
  const fetchComicsOfCharacter = useStore((s) => s.fetchComicsOfCharacter);

  const [value, setValue] = useState<string>("");

  const searchCharacters = characters.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase()),
  );

  useEffect(() => {
    if (selected?.character.id) fetchComicsOfCharacter(selected?.character.id);
  }, [selected?.character, fetchComicsOfCharacter]);

  useEffect(() => {
    toggleSelected(undefined);
  }, [toggleSelected]);

  return (
    <Auth to={ROUTES.characters}>
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
