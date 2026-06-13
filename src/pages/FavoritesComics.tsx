import { Auth } from "@/components/Auth";
import Header from "@/components/Header";

import ListComics from "@/components/ListComics";
import { FORMAT } from "@/components/ListComics/types";
import Search from "@/components/Search";

import { Wrapper } from "@/components/Wrapper";
import { ROUTES } from "@/constants";
import { useStore } from "@/store";
import { useEffect, useState } from "react";

export const FavoritesComics = () => {
  const comics = useStore((s) => s.user.favorites.comics);
  const setSelected = useStore((s) => s.toggleSelected);

  const [value, setValue] = useState<string>("");

  const searchComics = comics.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase()),
  );

  useEffect(() => {
    setSelected(undefined);
  }, [setSelected]);

  return (
    <Auth to={ROUTES.comics}>
      <Header>
        <Search
          placeholder="Rechercher des comics dans ses favoris"
          value={value}
          onChange={setValue}
        />
      </Header>
      <Wrapper>
        <h2 className="title-page">COMICS FAVORIS</h2>
        {comics && <ListComics list={searchComics} format={FORMAT.full} />}
      </Wrapper>
    </Auth>
  );
};
