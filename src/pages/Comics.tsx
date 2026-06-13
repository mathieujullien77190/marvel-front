import Header from "@/components/Header";

import ListComics from "@/components/ListComics";
import { FORMAT } from "@/components/ListComics/types";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { Wrapper } from "@/components/Wrapper";
import { DEBOUNCE_TIME } from "@/constants";
import { getChoicesComic } from "@/helpers/utils";
import { useStore } from "@/store";

import { useEffect, useMemo, useRef } from "react";

export const Comics = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchComics = useStore((s) => s.fetchComics);
  const comics = useStore((s) => s.comics);
  const setSearch = useStore((s) => s.setComicsSearch);
  const toggleSelected = useStore((s) => s.toggleSelected);

  const choices = useMemo(() => {
    return getChoicesComic(comics.list);
  }, [comics.list]);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(
      () => fetchComics(comics.search),
      comics.search.id ? 0 : DEBOUNCE_TIME,
    );
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
          onChoose={(choice) => {
            setSearch({ ...comics.search, id: choice.id, text: choice.name });
          }}
          choices={choices}
        />
      </Header>
      <Wrapper>
        <h2 className="title-page">COMICS</h2>
        {comics && (
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
            <ListComics list={comics.list} format={FORMAT.full} />
          </>
        )}
      </Wrapper>
    </>
  );
};
