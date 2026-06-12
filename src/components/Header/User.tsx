import { FaRegUserCircle } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import type { UserProps } from "./types";

export const User = ({
  username,
  token,
  onClickLogin,
  onClickLogout,
}: UserProps) => {
  return (
    <div className="w-20 flex justify-center">
      {username && token ? (
        <div className="flex flex-col items-center text-xs font-bold text-ink-muted">
          <PiSignOutBold
            className="text-ink-muted cursor-pointer hover:text-marvel-500 transition-transform duration-300 hover:rotate-360"
            size={20}
            onClick={onClickLogout}
          />
          <span className="w-full line-clamp-1">{username}</span>
        </div>
      ) : (
        <FaRegUserCircle
          className="text-ink-muted cursor-pointer hover:text-marvel-500 transition-transform duration-300 hover:rotate-360"
          size={36}
          onClick={onClickLogin}
        />
      )}
    </div>
  );
};
