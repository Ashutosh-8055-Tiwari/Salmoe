import React from "react";
import Link from "next/link";
const recipesvideos1 = [
  { url: "/recipes1.mp4" },
  { url: "/recipes2.mp4" },
  
];

const recipesvideos2 = [
  { url: "/recipes3.mp4" },
  { url: "/recipes5.mp4" },
  
];

const VideoComponent = () => {
  return (
    <div className="main-container-cooking-with-us">
      <h5>Recipes & Tutorials</h5>
      <h1>Cook with us!</h1>
    <div className="cooking-with-us-video-grid">
      {recipesvideos1.map((video, index) => (
        <div key={index} className="cooking-with-us-card">
          <video
            src={video.url}
            className="cooking-with-us-video"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>

    <div className="cooking-with-us-video-grid2">
      {recipesvideos2.map((video, index) => (
        <div key={index} className="cooking-with-us-card">
          <video
            src={video.url}
            className="cooking-with-us-video"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>

   {/* <Link href={`https://www.instagram.com/kashmirtrout/`} className=""> <button className="cooking-with-us-button">View All Recipes</button> </Link> */}
    
   <div className="instagram-section">
      {/* Main Container */}
      <div className="instagram-container">
     


        {/* Content */}
        <div className="instagram-content">
          <p className="subtitle">STAY UP TO DATE</p>
          <h1 className="title">
            Kashmir Trout on Instagram
          </h1>
          <a href="https://www.instagram.com/kashmirtrout/" className="follow-button">
            Follow Us On Instagram
          </a>
        </div>
      </div>
    </div>
    
    </div>

    
  );
};

export default VideoComponent;
