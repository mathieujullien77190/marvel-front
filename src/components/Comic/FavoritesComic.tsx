import Favorites from "@/components/Favorites";

import { useCharactersStore } from "@/store/store";
import { hasComic } from "@/store/helpers";
import type { Comic } from "@/types";

export const FavoritesComic = (props: Comic) => {
  const { id } = props;

  const isFav = useCharactersStore((s) =>
    hasComic(s.user.favorites.comics, id),
  );
  const addFavoriteComic = useCharactersStore((s) => s.addFavoriteComic);
  const removeFavoriteComic = useCharactersStore((s) => s.removeFavoriteComic);

  return (
    <Favorites
      isActive={isFav}
      onActivate={(active) => {
        if (active) addFavoriteComic(props);
        else removeFavoriteComic(id);
      }}
    />
  );
};
