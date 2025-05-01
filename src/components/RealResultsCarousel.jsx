import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videoData = [
  { id: 1, thumbnail: "video1.jpg", link: "" },
  { id: 2, thumbnail: "video2.jpg", link: "#" },
  { id: 3, thumbnail: "video3.jpg", link: "#" },
  { id: 4, thumbnail: "video4.jpg", link: "#" },
  { id: 5, thumbnail: "video5.jpg", link: "#" },
  { id: 6, thumbnail: "video6.jpg", link: "#" },
  { id: 7, thumbnail: "video1.jpg", link: "#" },
  { id: 8, thumbnail: "video2.jpg", link: "#" },
  { id: 9, thumbnail: "video3.jpg", link: "#" },
  { id: 10, thumbnail: "video4.jpg", link: "#" },
  { id: 11, thumbnail: "video5.jpg", link: "#" },
  { id: 12, thumbnail: "video6.jpg", link: "#" }
];

const RealResultsCarousel = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  
  // Responsive settings
  const [visibleItems, setVisibleItems] = useState(5);
  
  // Determine visible items based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(5);
      }
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalItems = videoData.length;
  const scrollAmount = 1; // How many items to scroll per click
  
  const handleScrollLeft = () => {
    setScrollIndex((prev) => (prev === 0 ? totalItems - visibleItems : prev - scrollAmount));
  };
  
  const handleScrollRight = () => {
    setScrollIndex((prev) => (prev >= totalItems - visibleItems ? 0 : prev + scrollAmount));
  };
  
  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleScrollRight();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="real-results-carousel">
      <h2 className="real-results-title">REAL PEOPLE, REAL RESULTS</h2>
      <p className="real-results-subtitle">
        How Cosmix made a difference - <a href="#" className="real-results-link">read their stories</a>
      </p>
      
      <div className="real-results-wrapper">
        <button 
          className="real-results-arrow left"
          onClick={handleScrollLeft}
        >
          <FaChevronLeft />
        </button>
        
        <div className="real-results-slider" style={{
          transform: `translateX(-${(scrollIndex * (100 / visibleItems))}%)`,
          transition: "transform 0.5s ease-in-out",
          width: `${(totalItems / visibleItems) * 100}%`
        }}>
          {videoData.map((video, index) => (
            <div 
              key={index} 
              className="real-results-item"
              style={{ width: `calc(100% / ${visibleItems} - ${visibleItems > 1 ? '15px' : '0px'})` }}
            >
              <a href={video.link} className="real-results-thumbnail">
                <img 
                  src={video.thumbnail} 
                  alt={`Success story ${video.id}`} 
                  className="real-results-img" 
                />
                <div className="real-results-overlay">▶</div>
              </a>
            </div>
          ))}
        </div>
        
        <button 
          className="real-results-arrow right"
          onClick={handleScrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RealResultsCarousel;