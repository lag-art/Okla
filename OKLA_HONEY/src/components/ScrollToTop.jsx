import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show the arrow when scrolling past a certain point
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-2 text-lg bg-[#4c1500]  p-3 rounded-full transition duration-300"
          aria-label="Back to top"
        >
          👆
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;