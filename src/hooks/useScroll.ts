import { useEffect, useRef } from "react";

export const useScroll = (activate: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && activate) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activate]);

  return ref;
};
