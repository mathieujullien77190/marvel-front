import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import type { FavoritesProps } from "./types";

import { useCharactersStore } from "@/store/store";

export const Favorites = ({ id }: FavoritesProps) => {
  const isFav = useCharactersStore((s) => s.favorites.characters.includes(id));

  const toggleFavoritesCharacter = useCharactersStore(
    (s) => s.toggleFavoritesCharacter,
  );

  return (
    <>
      {isFav ? (
        <FaHeart
          className="cursor-pointer text-marvel-500"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavoritesCharacter(id);
          }}
        />
      ) : (
        <FaRegHeart
          className="cursor-pointer hover:text-marvel-500"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavoritesCharacter(id);
          }}
        />
      )}
    </>
  );
};
