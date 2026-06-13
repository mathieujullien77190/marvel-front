import { useEffect, useState } from "react";

export const useElementTop = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      setTop(rect.top);
    };

    update();

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [ref]);

  return top;
};
