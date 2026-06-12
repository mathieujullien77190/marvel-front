export type Comic = {
  id: string;
  title: string;
  description: string | null;
  image: string;
};

export type ComicsResponse = {
  count: number;
  limit: number;
  results: Comic[];
};

export type ComicResponse = Comic;
