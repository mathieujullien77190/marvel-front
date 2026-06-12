import Favorites from "@/components/Favorites";

import { useCharactersStore } from "@/store/store";
import { hasCharacter } from "@/store/helpers";
import type { Character } from "@/types";

export const FavoritesCharacter = (props: Character) => {
  const { id } = props;

  const isFav = useCharactersStore((s) =>
    hasCharacter(s.user.favorites.characters, id),
  );
  const addFavoriteCharacter = useCharactersStore(
    (s) => s.addFavoriteCharacter,
  );
  const removeFavoriteCharacter = useCharactersStore(
    (s) => s.removeFavoriteCharacter,
  );

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
