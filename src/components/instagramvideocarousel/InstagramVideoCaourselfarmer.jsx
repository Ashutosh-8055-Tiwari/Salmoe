"use client"
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Importing arrow icons

const RecipeVideoGrid = ({ videos }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Function to go to the next set of videos
  const goToNextVideo = () => {
    setActiveVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to go to the previous set of videos
  const goToPreviousVideo = () => {
    setActiveVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const visibleVideos = [
    videos[activeVideoIndex % videos.length],
    videos[(activeVideoIndex + 1) % videos.length],
    videos[(activeVideoIndex + 2) % videos.length],
  ];

  return (
    <div className="recipe-video-containerss">
      {/* <h1>Our Fishermen</h1> */}
      <div className="video-gridss">
        <button className="arrow-buttonss left" onClick={goToPreviousVideo}>
          <ArrowLeft size={40} />
        </button>

        <div className="video-cardsss">
          {visibleVideos.map((recipe, index) => {
            const isActive = index === 1; // Center video is active
            return (
              <div
                key={index}
                className={`video-cardss ${isActive ? "active" : ""}`}
              >
                <div className="video-wrapperss">
                  <video
                    src={recipe.url}
                    controls
                    className="video-thumbnailss"
                    
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button className="arrow-buttonss right" onClick={goToNextVideo}>
          <ArrowRight size={40} />
        </button>
      </div>

      <div className="text-centerss mt-8">
        <Link href="https://www.instagram.com/kashmirtrout/" className="see-all-buttonss">
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default RecipeVideoGrid;
