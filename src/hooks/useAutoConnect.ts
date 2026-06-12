import { getToken, getUsername } from "@/helpers/user";
import { getFavorites } from "@/services/getFavorites";
import { useCharactersStore } from "@/store/store";
import { useEffect } from "react";

export const useAutoConnect = () => {
  const setUser = useCharactersStore((s) => s.setUser);
  const isConnected = useCharactersStore((s) => s.isConnected);

  useEffect(() => {
    const tokenCookie = getToken();
    const usernameCookie = getUsername();

    if (!isConnected && tokenCookie && usernameCookie) {
      getFavorites().then((response) => {
        setUser({
          username: usernameCookie,
          token: tokenCookie,
          favorites: response,
        });
      });
    }
  }, [setUser, isConnected]);
};
