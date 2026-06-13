import { useMemo } from "react";
import type { HighlightTextProps } from "./types";

export const HighlightText = ({
  text,
  query,
  className,
}: HighlightTextProps) => {
  const content = useMemo(() => {
    if (!query) return text;

    const queryLower = query.toLowerCase();

    const index = text.toLowerCase().indexOf(queryLower);

    if (index === -1) return text;

    const before = text.slice(0, index);
    const match = text.slice(index, index + query.length);
    const after = text.slice(index + query.length);

    return (
      <>
        {before}
        <span className="bg-yellow-300">{match}</span>
        {after}
      </>
    );
  }, [text, query]);

  return <span className={className}>{content}</span>;
};
