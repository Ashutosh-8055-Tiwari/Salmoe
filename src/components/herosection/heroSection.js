import React, { useEffect } from "react";

import "aos/dist/aos.css"; // Make sure to include AOS CSS
import cookbook from "../../../public/Cook Book.png";
import ourproducts from "../../../public/newproducts.png";
import promisetocustomer from "../../../public/Our Story 1.png";
import recipes from "../../../public/Our Recipes.png";
import wecare from "../../../public/farmer1main.png";

import farmer from "../../../public/fisherman.png";
import logo from "../../../public/logohero.png";
import ourproduct from "../../../public/ourproductshero.png";
import mainlogo from "../../../public/mainlogo.png";
import mainlogowhite from "../../../public/mainlogowhite.png";

import { FaArrowAltCircleRight } from "react-icons/fa";

import image1 from "../../../public/discover-more1.jpg"
import image2 from "../../../public/discover-more2.jpg"
import image3 from "../../../public/discover-more3.jpg"
import image4 from "../../../public/discover-more4.jpg"

import Link from "next/link";

const OurPromise = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  
  const handleDownloadPdf = () => {
    const pdfUrl = "/cookbook.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CookBook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const promises = [
    {
      image: image1.src,
    
      logoText: "Our Story",
      text: "SALMON ORIGINS",
      buttonLink: `${base_url}/our-story`,
      buttonText: "Our Story",
      textPosition: "left",
      logoPosition: "top-left",
    },
    {
      image: image2.src,
      
      logoText: "Our Products",
      text: "KASHMIR TROUT® OFFERS A DIVERSE SELECTION...",
      buttonLink: `${base_url}/products`,
      buttonText: "Our Products",
      textPosition: "right",
      logoPosition: "top-center",
    },
    {
      image: image3.src,
    
      logoText: "Tasty Recipes",
      text: "THIS HOLIDAY SEASON, DELIGHT YOUR TASTE BUDS...",
      buttonLink: `${base_url}/recipes`,
      buttonText: "Tasty Recipes",
      buttonFunction: handleDownloadPdf,
      textPosition: "left",
      logoPosition: "top-left",
    },
    {
      image: image4.src,
     
      logoText: "Our Farmer",
      text: "YOU HAVE A RIGHT TO CARE ABOUT HOW YOUR SALMON WAS FARMED AND RAISED...",
      buttonLink: `${base_url}/our-farmer`,
      buttonText: "Our Farmer",
      textPosition: "left",
      logoPosition: "top-left",
    },
  ];

  return (
    <div className="our-promise-container">
      <h3 className="subtitle1">
    Discover<span>  </span><span className="highlight">More</span>
  </h3>
      <div className="our-promise-grid">
        {promises.map((promise, index) => (
          <div className="our-promise-card" key={index}>
            <img
              src={promise.image}
              alt={`Scenic view for ${promise.text}`}
              className="our-promise-image"
            />
            {/* <img
              src={promise.mainlogo}
              alt="Main Logo"
              className="our-promise-main-logo"
            /> */}
            <div className=""></div>
            <div className="our-promise-content">
              {/* <div
                className={`our-promise-logo ${promise.logoPosition}`}
              >
                <img
                  src={promise.logo}
                  alt={`${promise.text} Logo`}
                  className="herosection-img"
                />
                <span className="our-promise-logo-text">{promise.logoText}</span>
              </div> */}
              <Link href={promise.buttonLink} className="our-promise-button">
              
                {promise.buttonText}
                <FaArrowAltCircleRight size={35} fill="#fa1313"/>
        
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPromise;
