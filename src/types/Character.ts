export type Character = {
  id: string;
  name: string;
  description: string;
  image: string;
  comics: number;
};

export type CharactersResponse = {
  count: number;
  limit: number;
  results: Character[];
};

export type CharacterResponse = Character;
