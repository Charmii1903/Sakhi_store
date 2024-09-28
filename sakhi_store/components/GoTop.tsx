// components/GoToTop.tsx
'use client'
import { useEffect, useState } from "react";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolled down 100px
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6">
          <button
            onClick={scrollToTop}
            className="bg-orange-300 text-white px-4 py-2 rounded-full hover:bg-orange-400 hover:translate-y-1 transition-transform duration-200"
          >
            ↑ Top
          </button>
        </div>
      )}
    </>
  );
};

export default GoTop;
