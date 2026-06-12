import Header from "@/components/Header";

import ListComics from "@/components/ListComics";
import { FORMAT } from "@/components/ListComics/types";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { Wrapper } from "@/components/Wrapper";
import { useCharactersStore } from "@/store/store";

import { useEffect } from "react";

export const Comics = () => {
  const fetchComics = useCharactersStore((s) => s.fetchComics);
  const comics = useCharactersStore((s) => s.comics);
  const setSearch = useCharactersStore((s) => s.setComicsSearch);

  useEffect(() => {
    fetchComics(comics.search);
  }, [fetchComics, comics.search]);

  return (
    <>
      <Header>
        <Search
          placeholder="Rechercher des comics"
          value={comics.search.text ?? ""}
          onChange={(v) => {
            setSearch({ ...comics.search, text: v, start: 0 });
          }}
        />
      </Header>
      <Wrapper>
        {comics && (
          <>
            <Pagination
              search={comics.search}
              total={comics.total}
              label={(v) => (v >= 2 ? "comics" : "comic")}
              onNext={(start, limit) => {
                setSearch({ ...comics.search, start, limit });
              }}
              onPrev={(start, limit) => {
                setSearch({ ...comics.search, start, limit });
              }}
            />

            <ListComics list={comics.list} format={FORMAT.full} />
          </>
        )}
      </Wrapper>
    </>
  );
};
