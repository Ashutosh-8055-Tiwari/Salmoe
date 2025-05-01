import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductSlider = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const products = [
    {
      id: 1,
      src: "/api/placeholder/150/150?text=Salmon+1",
      alt: "Kashmir Trout Atlantic Salmon Garlic Herb Butter 6oz",
      label: "NEW",
      description: "Kashmir Trout Atlantic Salmon Garlic Herb Butter 6oz",
      price: "$12.99",
    },
    {
      id: 2,
      src: "/api/placeholder/150/150?text=Salmon+2",
      alt: "Kashmir Trout Atlantic Salmon Lightly Smoked (2 portions)",
      description: "Kashmir Trout Atlantic Salmon Lightly Smoked (2 portions)",
      price: "$15.99",
    },
    {
      id: 3,
      src: "/api/placeholder/150/150?text=Salmon+3",
      alt: "Kashmir Trout Atlantic Salmon Portions 12oz (2 pack)",
      description: "Kashmir Trout Atlantic Salmon Portions 12oz (2 pack)",
      price: "$18.99",
    },
    {
      id: 4,
      src: "/api/placeholder/150/150?text=Salmon+4",
      alt: "Kashmir Trout Atlantic Salmon Side 30oz",
      description: "Kashmir Trout Atlantic Salmon Side 30oz",
      price: "$22.99",
    },
    {
        id: 5,
        src: "/api/placeholder/150/150?text=Salmon+2",
        alt: "Kashmir Trout Atlantic Salmon Lightly Smoked (2 portions)",
        description: "Kashmir Trout Atlantic Salmon Lightly Smoked (2 portions)",
        price: "$15.99",
      },
      {
        id: 6,
        src: "/api/placeholder/150/150?text=Salmon+2",
        alt: "Kashmir Trout Atlantic Salmon Lightly Smoked (2 portions)",
        description: "Kashmir Trout Atlantic Salmon Lightly Smoked (2 portions)",
        price: "$15.99",
      },
  ];

  const handleNext = () => {
    if (index < (products.length )/3 - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleDotClick = (idx) => {
    setIndex(idx);
  };

  return (
    <div className="product-slider-container">
      <div className="product-slider-wrapper">
        <div
          ref={sliderRef}
          className="product-slider"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-inner">
                <div className="product-image-wrapper">
                  {product.label && (
                    <span className="product-label">{product.label}</span>
                  )}
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="product-image"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-description">
                    {product.description}
                  </h3>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className={`slider-nav-button slider-nav-button-left ${
          index === 0 ? "disabled" : ""
        }`}
        aria-label="Previous Product"
        disabled={index === 0}
      >
        <ChevronLeft className="slider-nav-icon" size={24} />
      </button>
      <button
        onClick={handleNext}
        className={`slider-nav-button slider-nav-button-right ${
          index === products.length - 1 ? "disabled" : ""
        }`}
        aria-label="Next Product"
        disabled={index === products.length - 1}
      >
        <ChevronRight className="slider-nav-icon" size={24} />
      </button>

    
    </div>
  );
};

export default ProductSlider;
