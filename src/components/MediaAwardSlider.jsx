'use client'
import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import media1 from "../../public/media1.jpg";
import media2 from "../../public/media2.jpg";
import media3 from "../../public/media3.jpg";

const MediaAwardsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const slides = [
    {
      image: media1.src,
      title: "KashmirTrout was a part of the Jammu and Kashmir business delegation led by Lieutenant Governor Manoj Sinha to Dubai during the Jammu & Kashmir Week held in Dubai expo 2020",
      link: "https://www.indianewsnetwork.com/20220119/dubai-expo-2020-jammu-kashmir-showcases-startups-seals-deals-for-major-projects-1"
    },
    {
      image: media2.src,
      title: "Kashmir Trout, a Kashmir-based Trout procurement platform, which works towards procuring the fresh trout to processing, storage, and delivery to the customer was selected by J&K Government to be part of the business delegation to visit Dubai.",
      link: "https://www.greaterkashmir.com/business/kashmir-startups-impress-global-investors-at-dubai-expo/"
    },
    {
      image: media3.src,
      title: "KashmirTrout a startup from J&K was selected for participating in the event during which the Jammu and Kashmir government sealed several investment deals with Dubai-based companies.",
      link: "https://www.indiablooms.com/finance/dubai-expo-2021-kashmir-startups-impress-global-investors/details"
    }
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="new-media-component-section">
      <div className="new-media-component-header">
        <h2>Media & Awards</h2>
        <div></div>
        <p>
          Kashmir Trout is making waves in the aquaculture industry, supporting fishermen with marketing, insurance, and a range of services to empower their growth and sustainability.
        </p>
      </div>

      <div className="new-media-component-slider-wrapper">
        {isMobile ? (
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="new-media-component-slider"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="new-media-component-slide">
                  <div className="new-media-component-card">
                    <a href={slide.link} target="_blank" rel="noopener noreferrer">
                      <img src={slide.image} alt="Media coverage" />
                    </a>
                    <h3>{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="new-media-component-slider-button new-media-component-slider-button-left"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <IoIosArrowBack className="w-8 h-8" />
            </button>
            <button 
              className="new-media-component-slider-button new-media-component-slider-button-right"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              <IoIosArrowForward className="w-8 h-8" />
            </button>

            <div className="new-media-component-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`new-media-component-indicator ${currentSlide === index ? 'new-media-component-indicator-active' : 'new-media-component-indicator-inactive'}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="new-media-component-desktop-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="new-media-component-desktop-card">
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <img src={slide.image} alt="Media coverage" />
                </a>
                <h3>{slide.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaAwardsSection;
