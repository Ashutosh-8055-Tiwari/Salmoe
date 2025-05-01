'use client'
import React, { useState, useEffect } from "react";
import people from "../../public/people.jpg";

import Link from "next/link";
import people10 from "../../public/people10.jpg" 
import people11 from "../../public/people11.jpeg" 
import people12 from "../../public/people12.jpg" 

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "Kashmir trout team you are building something awesome!",
      author: "Anuj Sharma, Founder - ALSiSAR IMPACT",
      image: people.src,
    },
    {
      text: "Rajdeep Sardesai Praises Kashmir Trout: A Must-Try Delight for Seafood Lovers",
      author: "Rajdeep Sardesai - Senior Journalist, Author, News Anchor",
      image: people12.src,
    },
    {
      text: "MasterChef Ruksaar Sayeed Applauds Kashmir Trout for Revolutionizing the Industry",
      author: "Ruksaar Syed - MasterChef India | Runner-up.",
      image: people11.src,
    },
    {
      text: "Chef Ranveer Brar Applauds Kashmir Trout for Redefining Trout Cuisine",
      author: "Ranveer Brar - Masterchef India judge, Author, Restaurateur and Actor.",
      image: people10.src,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">
        What People Are Saying About Kashmir Trout
      </h2>
      <div className="testimonial-divider"></div>

      <div className="testimonial-slider">
        <div
          className="testimonial-items"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author">{testimonial.author}</p>
              </div>
              <Link
                href={`${base_url}/blog`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="testimonial-image"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator-button ${
              currentIndex === index ? "active-indicator" : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
