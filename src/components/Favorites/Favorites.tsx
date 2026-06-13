import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import type { FavoritesProps } from "./types";

import { useStore } from "@/store";

export const Favorites = ({ isActive, onActivate }: FavoritesProps) => {
  const isCo = useStore((s) => s.user.username && s.user.token);

  return (
    <>
      {isCo && (
        <>
          {isActive ? (
            <FaHeart
              className="cursor-pointer text-marvel-500 flex-none"
              onClick={(e) => {
                e.stopPropagation();
                onActivate(false);
              }}
            />
          ) : (
            <FaRegHeart
              className="cursor-pointer hover:text-marvel-500 flex-none"
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
