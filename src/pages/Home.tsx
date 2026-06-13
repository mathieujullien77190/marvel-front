import Header from "@/components/Header";
import { Wrapper } from "@/components/Wrapper";
import { useStore } from "@/store";
import { useEffect } from "react";

export const Home = () => {
  const { fetchCharacters, characters, comics, fetchComics } = useStore();

  useEffect(() => {
    fetchCharacters(characters.search);
  }, [fetchCharacters, characters.search]);

  useEffect(() => {
    fetchComics(comics.search);
  }, [fetchComics, comics.search]);

  return (
    <>
      <Header></Header>
      <Wrapper>
        <h2 className="title-page">MARVEL FINDER</h2>

        <div className="w-full flex flex-col justify-start">
          <h3 className="font-bold py-4">Fonctionnalités</h3>
          <ul className="list-disc px-10">
            <li>Mise en cache des requêtes</li>
            <li>Pre-fetching des pages suivantes</li>
            <li>Autocompletion des recherches</li>
            <li>Hightlighting des recherches</li>
            <li>Classification des comics par date</li>
            <li>Compte utilisateur + autoconnexion</li>
            <li>Mise en favoris des personnages et comics</li>
          </ul>
        </div>
      </Wrapper>
    </>
  );
};
