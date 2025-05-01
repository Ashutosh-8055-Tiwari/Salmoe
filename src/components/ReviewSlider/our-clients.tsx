

import React, { useState, useEffect } from "react";


import client3 from "../../../public/client3.png";
import client21 from "../../../public/client21.png";
import client22 from "../../../public/client22.png";
import client23 from "../../../public/client23.png";
import client28 from "../../../public/client28.png";
import client30 from "../../../public/client30.jpg";

import swiggy from "../../../public/swiggy.png";
import zomato from "../../../public/zomato.jpg";
import Link from "next/link";





const partnerLogos = [
 client3 ,  client21, client30, client22, client23, client28
];

const PartnerLogo = ({ client, index }) => (
  <div className="  col-4 col-md-4 col-lg-2 mb-4">
    <div className="partner-logo  bg-white rounded shadow-sm client-card h-75 d-flex align-items-center justify-content-center">
      <img
        src={client.src}
        alt={`Client ${index + 1}`}
        className=" img-fluid partner-image"
      />
    </div>
  </div>
);

const Partner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(partnerLogos.length / itemsPerSlide);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalSlides]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsPlaying(false);
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
        <h2 className="partners-title">Our Clients</h2>
        </div>

        <div className="position-relative">
          <div
            id="partnerCarousel"
            className="carousel slide"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <div className="carousel-inner">
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`carousel-item ${slideIndex === currentSlide ? "active" : ""}`}
                >
                  <div className="row">
                    {partnerLogos
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((client, index) => (
                        <PartnerLogo
                          key={slideIndex * itemsPerSlide + index}
                          client={client}
                          index={slideIndex * itemsPerSlide + index}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* <button
              className="carousel-control-prev"
              type="button"
              onClick={handlePrevious}
              style={{ width: "5%" }}
            >
              <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={handleNext}
              style={{ width: "5%" }}
            >
              <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button> */}
          </div>

          {/* <div className="mt-4">
            <div className="d-flex justify-content-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                
                  className={` btn-css rounded-circle ${
                    currentSlide === index ? "btn-primar" : "btn-outline-primar"
                  }`}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsPlaying(false);
                  }}
                >
                  
                </button>
              ))}
            </div>
          </div> */}

       
        </div>
      </div>



      <div className='dflex flex-col gap-3'>
        <div className="available-at-container">
            <div className="available-at-inner">
            <h2 className="partners-title">Available At</h2>
                <div className="available-at-content">
                <Link href={`https://www.swiggy.com/city/srinagar/kashmir-trout-rajbagh-rainawari-rest764044`} target='#' >
                    <img src={swiggy.src} alt="Swiggy Instamart" className="available-at-img" />
                </Link>

                <Link href={`https://www.zomato.com/srinagar/kashmir-trout-rainawari`} target='#' >
                    <img src={zomato.src} alt="Zomato" className="available-at-img" />
                </Link>
                </div>
            </div>

            
        </div>
        </div>

      

      <style jsx>{`
        .partner-logo {
          transition: transform 0.3s ease-in-out;
          cursor: pointer;
        }

        .partner-logo:hover {
          transform: scale(1.05);
        }

        .partner-image {
          max-height: 75px;
          object-fit: contain;
        }
          .btn-primar{
          background-color: #fa1313;
        
          }
          .btn-outline-primar{
          border:1px solid #fa1313;
          }

        .carousel-control-prev,
        .carousel-control-next {
          opacity: 0.8;
        }

        .carousel-control-prev:hover,
        .carousel-control-next:hover {
          opacity: 1;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          padding: 1rem;
        }

        .carousel .carousel-item {
          transition: transform 0.6s ease-in-out;
        }

        .btn-css{
        border: none;
        width:10px;
        height:10px;
        border: 1px solid #fa1313;
        }
      `}</style>
    </section>
  );
};

export default Partner;
