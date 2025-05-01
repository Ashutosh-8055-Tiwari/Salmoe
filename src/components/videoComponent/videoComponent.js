import React, { useState } from 'react';

const VideoComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoThumbnails = [
    { id: 1, src: 'https://placehold.co/320x200', alt: 'Video Thumbnail 1', videoUrl: 'https://www.youtube.com/embed/video1' },
    { id: 2, src: 'https://placehold.co/320x200', alt: 'Video Thumbnail 2', videoUrl: 'https://www.youtube.com/embed/video2' },
    { id: 3, src: 'https://placehold.co/320x200', alt: 'Video Thumbnail 3', videoUrl: 'https://www.youtube.com/embed/video3' },
    { id: 4, src: 'https://placehold.co/320x200', alt: 'Video Thumbnail 4', videoUrl: 'https://www.youtube.com/embed/video4' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoThumbnails.length) % videoThumbnails.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoThumbnails.length);
  };

  return (
    <div className="main-container">
      <div className="video-container">
        <h2 className="video-title">OUR VIDEOS</h2>
        <h3 className="video-subtitle">Learn about Kashmir Trout</h3>
        <p className="video-description">
          From our carefully nurtured broodstock, to the final product you buy in the store, every aspect of Kashmir Trout salmon is managed in exquisite detail.
        </p>

        <div className="video-player-wrapper">
          <iframe
            className="video-player"
            src={videoThumbnails[currentIndex].videoUrl}
            title={`Video ${currentIndex + 1}`}
            frameBorder="0"
            allowFullScreen></iframe>
        </div>

        <div className="video-controls">
          <button className="video-button" onClick={handlePrev}>←</button>
          <button className="video-button" onClick={handleNext}>→</button>
        </div>

        <div className="video-thumbnails">
          {videoThumbnails.map((thumbnail, index) => (
            <img
              key={thumbnail.id}
              className={`thumbnail ${index === currentIndex ? 'active-thumbnail' : ''}`}
              src={thumbnail.src}
              alt={thumbnail.alt}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="video-actions">
          <button className="action-button primary">SUBSCRIBE TO OUR CHANNEL</button>
          <button className="action-button secondary">VIEW ALL VIDEOS</button>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
