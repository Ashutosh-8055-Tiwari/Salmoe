'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Importing arrow icons

const RecipeVideoGrid = ({ videos }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Function to go to the next set of videos
  const goToNextVideo = () => {
    // Pause the currently playing video
    const videoElements = document.querySelectorAll('.video-thumbnail');
    videoElements.forEach((video) => video.pause());

    // Go to the next video
    setActiveVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to go to the previous set of videos
  const goToPreviousVideo = () => {
    // Pause the currently playing video
    const videoElements = document.querySelectorAll('.video-thumbnail');
    videoElements.forEach((video) => video.pause());

    // Go to the previous video
    setActiveVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  // Get the videos to display based on the active video index
  const visibleVideos = [
    videos[activeVideoIndex % videos.length],
    videos[(activeVideoIndex + 1) % videos.length],
    videos[(activeVideoIndex + 2) % videos.length],
  ];

  return (
    <div className="recipe-video-container">
      <h1>Tasty Recipes</h1>
        
        <h2>Try this!</h2>
      <div className="video-gridss">
        <button className="arrow-button left" onClick={goToPreviousVideo}>
          <ArrowLeft size={40} />
        </button>

        <div className="video-cardsss">
          {visibleVideos.map((recipe, index) => {
            const isActive = index === 1; // Center video is active
            return (
              <div
                key={index}
                className={`video-cardss ${isActive ? 'active' : ''}`}
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

        <button className="arrow-button right" onClick={goToNextVideo}>
          <ArrowRight size={40} />
        </button>
      </div>
      <div className="text-center mt-8">
        <Link href={`https://www.instagram.com/kashmirtrout/`} className="see-all-button">
          SEE ALL RECIPES
        </Link>
      </div>
    </div>
  );
};

export default RecipeVideoGrid;
