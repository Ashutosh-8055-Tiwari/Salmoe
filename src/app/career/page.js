'use client'
import React, { useState } from "react";

import biglogo from "../../../public/biglogoblack.png";
import Link from "next/link";

const CallToAction = () => {
  const [message, setMessage] = useState(""); // State to manage the message

  const handleButtonClick = () => {
    setMessage("No opportunities right now");
  };

  return (
    <div className="cta-container">
      {/* Left Content */}
      <div className="cta-content">
        <h1 className="cta-title">Join us in building better lives</h1>
        <div className="cta-line"></div>
        <p className="cta-description">
          Be a part of the greatest agri-revolution. Start your journey with us
          today.
        </p>
        <Link href={`https://www.linkedin.com/company/kashmirtrout/jobs/`} target="blank">
        <button className="cta-button" >
          Explore Opportunities
        </button>
        </Link>
        {message && <p className="cta-message">{message}</p>} {/* Message display */}
      </div>

      {/* Right Image */}
      <div className="cta-image-container">
        <div className="cta-background-circle"></div>
        <img
          src={biglogo.src}
          alt="Person"
          className="cta-image"
        />
      </div>
    </div>
  );
};

export default CallToAction;
