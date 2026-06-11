import { useEffect, useState } from "react";

export const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed w-12 h-12 bottom-6 right-6 bg-canvas-card shadow-md p-3 rounded-full transition text-xl cursor-pointer z-20"
        >
          ↑
        </button>
      )}
    </>
  );
};
