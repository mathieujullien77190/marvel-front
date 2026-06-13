import { IoIosClose } from "react-icons/io";
import type { CloseProps } from "./types";

export const Close = ({ onClick }: CloseProps) => {
  return (
    <IoIosClose
      id="closeButton"
      className="absolute top-4 right-4 z-10 cursor-pointer text-white bg-black/40 rounded-full"
      size={30}
      onClick={onClick}
    />
  );
};
