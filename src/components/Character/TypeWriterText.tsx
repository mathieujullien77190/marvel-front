import { useEffect, useRef } from "react";
import type { TypeWriterTextProps } from "./types";

const SPEED = 30;

export const TypeWriterText = ({ text }: TypeWriterTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const timer = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      let i = 0;

      el.textContent = "";

      timer.current = setInterval(() => {
        i++;
        el.textContent = text.slice(0, i);

        if (i >= text.length) clearInterval(timer.current);
      }, SPEED);

      return () => clearInterval(timer.current);
    }
  }, [text]);

  return (
    <p
      ref={ref}
      className="text-ink-light text-sm"
      onMouseEnter={() => {
        clearInterval(timer.current);
        if (ref.current) ref.current.textContent = text;
      }}
    />
  );
};
