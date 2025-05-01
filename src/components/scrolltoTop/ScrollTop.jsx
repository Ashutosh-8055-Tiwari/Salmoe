import React, { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";
import { useSelector } from "react-redux";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Placeholder for Redux state
  const setting = useSelector((state) => state.setting);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="back-top-container"
          role="button"
          tabIndex={0}
          aria-label="Scroll to top"
          onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
        >
          <IoChevronUp size={26} />
        </div>
      )}
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }

        .back-top-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #fa1313 ;
          color: white;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .back-top-container:hover {
          transform: scale(1.1);
          background-color:rgb(253, 9, 9);
        }

        .back-top-container:focus {
          outline: 2px solid white;
        }
      `}</style>
    </div>
  );
};

export default ScrollTop;
