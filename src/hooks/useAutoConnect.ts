import { getToken, getUsername } from "@/helpers/user";
import { getFavorites } from "@/services/getFavorites";
import { useStore } from "@/store";
import { useEffect } from "react";

export const useAutoConnect = () => {
  const setUser = useStore((s) => s.setUser);
  const isConnected = useStore((s) => s.isConnected);

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
