import Favorites from "@/components/Favorites";

import { useStore } from "@/store";
import { hasCharacter } from "@/store/helpers";
import type { Character } from "@/types";

export const FavoritesCharacter = (props: Character) => {
  const { id } = props;

  const isFav = useStore((s) => hasCharacter(s.user.favorites.characters, id));
  const addFavoriteCharacter = useStore((s) => s.addFavoriteCharacter);
  const removeFavoriteCharacter = useStore((s) => s.removeFavoriteCharacter);

  return (
    <Favorites
      isActive={isFav}
      onActivate={(active) => {
        if (active) addFavoriteCharacter(props);
        else removeFavoriteCharacter(id);
      }}
    />
  );
};
