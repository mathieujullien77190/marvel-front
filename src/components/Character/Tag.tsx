import type { TagProps } from "./types";

export const Tag = ({ value }: TagProps) => {
  return (
    <p className="bg-marvel-100 text-marvel-700 rounded text-xs py-1 px-2 w-fit">
      {value}
    </p>
  );
};
