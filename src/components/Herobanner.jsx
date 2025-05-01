import { useEffect, useRef } from "react";
import image1 from "../../public/Digestion.webp"
import image2 from "../../public/Relax.webp"
import image3 from "../../public/Beauty.webp"
import image4 from "../../public/Energy.webp"
import image5 from "../../public/Overall.webp"
import image6 from "../../public/Hormonal.webp"
import image7 from "../../public/Protein.webp"
import image8 from "../../public/Immunity.webp"

export default function Herobanner() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const scrollAmount = window.innerWidth < 768 ? 250 : 300;
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

        // Loop back to the start
        if (
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth - 50
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 250 : 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hero-container">
      <h1 className="hero-mission">Our Mission</h1>
      <h2 className="hero-heading">Prioritizing Holistic Health</h2>
      <p className="hero-subtext">
        Overwhelmed by quick fixes, diet culture, and toxic beauty standards, we
        set out to revolutionize the health industry.
      </p>

      <div className="slider-wrapper">
        <button className="nav-button" onClick={() => scroll("left")}>
          {"<"}
        </button>

        <div className="slider" ref={sliderRef}>
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} className="card-image" />
              <p className="card-label">{card.title}</p>
            </div>
          ))}
        </div>

        <button className="nav-button" onClick={() => scroll("right")}>
          {">"}
        </button>
      </div>
      
      <style jsx>{`
        .hero-container {
          text-align: center;
          padding: 20px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .hero-mission {
          font-size: 30px;
          font-weight: 600;
          margin: 10px 0;
        }
        
        .hero-heading {
          font-size: 34px;
          font-weight: bold;
          margin: 10px 0;
        }
        
        .hero-subtext {
          font-size: 20px;
          color: #666;
          max-width: 800px;
          margin: 0 auto 20px;
        }
        
        .slider-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
        }
        
        .slider {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-behavior: smooth;
          width: 80%;
          padding: 10px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        
        .slider::-webkit-scrollbar {
          display: none;
        }
        
        .card {
          min-width: 300px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          text-align: center;
          background: #fff;
          flex-shrink: 0;
        }
        
        .card-image {
          width: 100%;
          height: auto;
          border-radius: 10px 10px 0 0;
        }
        
        .card-label {
          padding: 10px;
          font-size: 14px;
          font-weight: bold;
        }
        
        .nav-button {
          background: #ddd;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 18px;
          border-radius: 50%;
          margin: 0 10px;
          z-index: 2;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .hero-mission {
            font-size: 24px;
          }
          
          .hero-heading {
            font-size: 28px;
          }
          
          .hero-subtext {
            font-size: 16px;
            padding: 0 10px;
          }
          
          .card {
            min-width: 250px;
          }
          
          .nav-button {
            padding: 8px 12px;
            font-size: 16px;
            margin: 0 5px;
          }
        }
        
        /* Small mobile styles */
        @media (max-width: 480px) {
          .hero-mission {
            font-size: 22px;
          }
          
          .hero-heading {
            font-size: 24px;
          }
          
          .card {
            min-width: 200px;
          }
          
          .slider {
            width: 85%;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
}

const cards = [
  {
    image: image1.src,
    title: "DIGESTION",
  },
  {
    image: image2.src,
    title: "PROTEIN",
  },
  {
    image: image3.src,
    title: "HORMONAL HEALTH",
  },
  {
    image: image4.src,
    title: "SKIN & HAIR",
  },
  {
    image: image5.src,
    title: "RELAX",
  },
  {
    image: image6.src,
    title: "DIGESTION",
  },
  {
    image: image7.src,
    title: "PROTEIN",
  },
  {
    image: image8.src,
    title: "HORMONAL HEALTH",
  },
  {
    image: image1.src,
    title: "SKIN & HAIR",
  },
  {
    image: image2.src,
    title: "RELAX",
  },
];