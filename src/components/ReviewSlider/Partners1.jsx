'use client'
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import image1 from "../../../public/story.png";
import image2 from "../../../public/wild.png";
import image3 from "../../../public/guarantee.png";

const Partners1 = () => {

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const data = [
    {
      imgSrc: image1.src,
      altText: "sustainable",
      title: "OUR PRODUCTS",
      description:
        "Kashmir Trout partners with local farmers, maintaining pristine aquaculture and organic practices to ensure healthy, flavorful, and sustainable trout, produced with a focus on fish health and environmental care.",
      link: `${base_url}/products`,
      css:"salmar-sustainability-card-fish"
    },
    {
      imgSrc: image2.src,
      altText: "wild-caught",
      title: "OUR FARMER",
      description:
        "At Kashmir Trout, we are dedicated to empowering trout farmers in the Kashmir region. By providing resources, training, and market access, we help farmers thrive while ensuring sustainable farming practices.",
      link: `${base_url}/our-farmer`,
      css:"salmar-sustainability-card-environment"
    },
    {
      imgSrc: image3.src,
      altText: "guarantee",
      title: "OUR RECIPES",
      description:
        "Kashmir Trout is committed to bringing out the best recipes to promote healthy living. We created world’s first trout-based QSR recipes aimed at promoting delicious and wholesome trout recipes.",
      link: `${base_url}/recipes`,
      css:"salmar-sustainability-card-people"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true, // Enables swipe gestures with the mouse
  });

  return (
    <div className="salmar-sustainability-container">
       <h1 className="salmar-sustainability-heading">We Consider Sustainability In Everything We Do</h1>
  <p className="salmar-sustainability-description">
  Sustainability and community development is a core principle at Kashmir Trout. We aim to operate in a manner that supports the environment, empowers local communities, and ensures the welfare of our trout fishermen. Our commitment to sustainability is reflected in our efforts to uphold high-quality standards, minimize our ecological footprint, and create value for society.
  </p>
      <div className="why-choose-us-cards-container">
        {/* Desktop View */}
        <div className="desktop-grid">
          {data.map((item, index) => (
            <Card
              key={index}
              imgSrc={item.imgSrc}
              altText={item.altText}
              title={item.title}
              description={item.description}
              link={item.link}
              css= {item.css}
            />
          ))}
        </div>

        {/* Mobile View */}
        <div className="mobile-slider" {...handlers}>
          <div className="slider-wrapper">
            <div className="slider-content">
              <Card
                imgSrc={data[currentSlide].imgSrc}
                altText={data[currentSlide].altText}
                title={data[currentSlide].title}
                description={data[currentSlide].description}
                link={data[currentSlide].link}
                css ={data[currentSlide].css}
              />
            </div>
          </div>

          {/* Indicators */}
          <div className="slider-indicators">
            {data.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => handleIndicatorClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ imgSrc, altText, title, description, link , css}) => {
  return (
    <div className={`salmar-sustainability-card ${css}`}>
      <img
        aria-hidden="true"
        alt={altText}
        src={imgSrc}
        className="salmar-sustainability-icon"
      />
      <h3 className="salmar-sustainability-card-title">{title}</h3>
      <p className="salmar-sustainability-card-text">{description}</p>
      <a href={link} className="salmar-section-btn-secondarys">
        Read More
      </a>
    </div>
  );
};

export default Partners1;