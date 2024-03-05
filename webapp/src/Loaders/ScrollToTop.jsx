import { useState, useEffect } from "react";
import { IoChevronUpOutline } from "react-icons/io5";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-5 right-5 bg-[#FC4747] opacity-80 text-white   p-3 rounded-lg`}
      onClick={scrollToTop}
    >
      <IoChevronUpOutline />
    </button>
  );
};

export default ScrollToTopButton;
