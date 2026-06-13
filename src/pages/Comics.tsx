import Header from "@/components/Header";

import ListComics from "@/components/ListComics";
import { FORMAT } from "@/components/ListComics/types";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { Wrapper } from "@/components/Wrapper";
import { getChoicesComic } from "@/helpers/utils";
import { useStore } from "@/store";

import { useEffect } from "react";

export const Comics = () => {
  const fetchComics = useStore((s) => s.fetchComics);
  const comics = useStore((s) => s.comics);
  const setSearch = useStore((s) => s.setComicsSearch);
  const toggleSelected = useStore((s) => s.toggleSelected);

  const choices = getChoicesComic(comics.list);

  useEffect(() => {
    fetchComics(comics.search);
  }, [fetchComics, comics.search]);

  useEffect(() => {
    toggleSelected(undefined);
  }, [toggleSelected]);

  return (
    <>
      <Header>
        <Search
          placeholder="Rechercher des comics"
          value={comics.search.text ?? ""}
          onChange={(v) => {
            setSearch({ ...comics.search, text: v, start: 0, id: undefined });
          }}
          onAutocompleteSelect={(value) => {
            setSearch({ ...comics.search, id: value });
          }}
          choices={choices}
        />
      </Header>
      <Wrapper>
        <h2 className="title-page">COMICS</h2>
        {comics && (
          <>
            {comics.list.length > 0 && (
              <>
                <Pagination
                  search={comics.search}
                  total={comics.total}
                  label={(v) => (v >= 2 ? "comics" : "comic")}
                  onNext={(start, limit) => {
                    setSearch({
                      ...comics.search,
                      start,
                      limit,
                      id: undefined,
                    });
                  }}
                  onPrev={(start, limit) => {
                    setSearch({
                      ...comics.search,
                      start,
                      limit,
                      id: undefined,
                    });
                  }}
                />
                <ListComics
                  list={comics.list}
                  format={FORMAT.full}
                  searchString={
                    !comics.search.id ? comics.search.text : undefined
                  }
                />
              </>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};
