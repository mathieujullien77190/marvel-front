export const defaultStore = {
  selected: undefined,
  isConnected: false,
  user: {
    username: undefined,
    token: undefined,
    favorites: {
      characters: [],
      comics: [],
    },
  },
  characters: {
    list: [],
    total: 0,
    search: {
      text: undefined,
      start: 0,
      limit: 100,
    },
  },
  comics: {
    list: [],
    total: 0,
    search: {
      text: undefined,
      start: 0,
      limit: 100,
    },
  },
};

export default defaultStore;
