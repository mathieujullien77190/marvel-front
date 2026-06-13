import Favorites from "@/components/Favorites";

import { useStore } from "@/store";
import { hasComic } from "@/store/helpers";
import type { Comic } from "@/types";

export const FavoritesComic = (props: Comic) => {
  const { id } = props;

  const isFav = useStore((s) => hasComic(s.user.favorites.comics, id));
  const addFavoriteComic = useStore((s) => s.addFavoriteComic);
  const removeFavoriteComic = useStore((s) => s.removeFavoriteComic);

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
