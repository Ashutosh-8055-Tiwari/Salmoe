import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import image1 from "../../../public/story.png";
import image2 from "../../../public/wild.png";
import image3 from "../../../public/guarantee.png";

const Partners = () => {

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const data = [
    {
      imgSrc: image1.src,
      altText: "sustainable",
      title: "OUR PRODUCTS",
      description:
        "Kashmir Trout partners with local farmers, maintaining pristine aquaculture and organic practices to ensure healthy, flavorful, and sustainable trout, produced with a focus on fish health and environmental care.",
      link: `${base_url}/products`,
    },
    {
      imgSrc: image2.src,
      altText: "wild-caught",
      title: "OUR FARMER",
      description:
        "At Kashmir Trout, we are dedicated to empowering trout farmers in the Kashmir region. By providing resources, training, and market access, we help farmers thrive while ensuring sustainable farming practices.",
      link: `${base_url}/our-farmer`,
    },
    {
      imgSrc: image3.src,
      altText: "guarantee",
      title: "OUR RECIPES",
      description:
        "Kashmir Trout is committed to bringing out the best recipes to promote healthy living. We created world’s first trout-based QSR recipes aimed at promoting delicious and wholesome trout recipes.",
      link: `${base_url}/recipes`,
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
    <div className="why-choose-us">
      <h3 className="subtitle1">
        Why Choose <span> </span>
        <span className="highlight">Kashmir Trout</span>
      </h3>
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

const Card = ({ imgSrc, altText, title, description, link }) => {
  return (
    <div className="why-choose-us-card">
      <img
        aria-hidden="true"
        alt={altText}
        src={imgSrc}
        className="why-choose-us-card-image"
      />
      <h3 className="why-choose-us-card-title">{title}</h3>
      <p className="why-choose-us-card-description">{description}</p>
      <a href={link} className="why-choose-us-card-link">
        Learn More
      </a>
    </div>
  );
};

export default Partners;