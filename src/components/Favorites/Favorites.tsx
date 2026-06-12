import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import type { FavoritesProps } from "./types";

import { useCharactersStore } from "@/store/store";

export const Favorites = ({ isActive, onActivate }: FavoritesProps) => {
  const isCo = useCharactersStore((s) => s.user.username && s.user.token);

  return (
    <>
      {isCo && (
        <>
          {isActive ? (
            <FaHeart
              className="cursor-pointer text-marvel-500"
              onClick={(e) => {
                e.stopPropagation();
                onActivate(false);
              }}
            />
          ) : (
            <FaRegHeart
              className="cursor-pointer hover:text-marvel-500"
              onClick={(e) => {
                e.stopPropagation();
                onActivate(true);
              }}
            />
          )}
        </>
      )}
    </>
  );
};
