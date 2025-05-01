'use client'
import React from 'react';
import Link from 'next/link';
import banner from "../../../public/Our promise to Customers.jpg"
import banner2 from "../../../public/doneness.jpg"
import banner3 from "../../../public/storage.jpg"
import InstagramVideoCarousel from '../../components/instagramvideocarousel/Instagramvideocarousel';
const videos = [
 
  
    { url: "/recipes2.mp4" },
    { url: "/recipes3.mp4" },
    { url: "/recipes1.mp4" },
    { url: "/recipes5.mp4" },

  ];

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const TroutBasicPage = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
    <div className="trout-basic-container trout-basic-padding trout-basic-background trout-basic-text-foreground">
      <div className="trout-basic-content">
        <div className="trout-basic-main">
          <div id="storage" className="trout-basic-section">
            <h1 className="trout-basic-title">Storage</h1>
            <p className="trout-basic-paragraph">
            The most important thing when buying rainbow trout  is to keep it at the correct temperature so that it maintains its freshness and does not represent a danger to our health, since fish are highly perishable. All fresh fish after getting delivered should be stored at temperatures between 30° and 34°F preferably in a refrigerator.
            </p>
            <img
              aria-hidden="true"
              alt="placeholder"
              src={banner3.src}
              className="trout-basic-image"
            />
            <p className="trout-basic-paragraph">
            If you go to any of KashmirTrout stores to buy your favorite rainbow trout, request for  ice   once packed if your going long distance and that it is at a good temperature all the time during the transfer home. Then when you get home, keep the trout in its plastic wrap and prepare a bowl, inside it a strainer with ice and place the salmon gently. Take to the refrigerator for a maximum of two days and change the ice daily and remove the water from the bowl. It is not recommended to consume it after two days.
            </p>
          </div>
          <div id="doneness" className="trout-basic-section">
            <h1 className="trout-basic-title">Doneness</h1>
            <p className="trout-basic-paragraph">
            The doneness of trout is important to ensure flavor and texture. Cook trout to an internal temperature of 145°F for safety and perfect doneness.But you are free to experiment for culinary experiences with trout from KashmirTrout
            </p>
            <img
              aria-hidden="true"
              alt="placeholder"
              src={banner2.src}
              className="trout-basic-image"
            />
            <p className="trout-basic-paragraph">
            To check doneness, gently press on the salmon's thickest part; it should feel slightly firm and separate easily with a fork. Pair perfectly cooked trout with sides of your choice!
            </p>
          </div>
          <div id="freshness" className="trout-basic-section">
            <h1 className="trout-basic-title">Freshness</h1>
            <p className="trout-basic-paragraph">
            Freshness is key when it comes to enjoying trout. Since most of the trout available at store is in Live condition, so it will be fresh.
            </p>
            <img
              aria-hidden="true"
              alt="placeholder"
              src={banner.src}
              className="trout-basic-image"
            />
            <p className="trout-basic-paragraph">
            If delivered check for trout’s smell, appearance, and texture. It should have a mild ocean scent, vibrant color, and firm flesh.
            </p>
          </div>
        </div>
        <div className="trout-basic-sidebar">
          <div className="trout-basic-article-nav">
            <h2 className="trout-basic-article-title">In this article:</h2>
            <ul className="trout-basic-article-list">
              <li onClick={() => scrollToSection('storage')}>Storage</li>
              <li onClick={() => scrollToSection('doneness')}>Doneness</li>
              <li onClick={() => scrollToSection('freshness')}>Freshness</li>
            </ul>
            <h2 className="trout-basic-article-title trout-basic-margin-top">SEE ALSO:</h2>
            <p className="trout-basic-related">Trout Cooking Techniques</p>
          </div>
        </div>
      </div>
    </div>

    <div className='troutbasic-videos'>

    <InstagramVideoCarousel videos={videos}/>
    </div>



    <div className="store-finders mx-auto">
        <div className="store-finder-content">
          <h2 className="store-finder-subtitle">STORE FINDER</h2>
          <h1 className="store-finder-title">
            Want to buy <span className="store-finder-highlight">Trout?</span>
          </h1>
              <Link href={`${base_url}/nearest-outlet`}> <button className="store-finder-button">FIND NEAREST KASHMIR TROUT STORE</button></Link>
        </div>
        {/* <img src={storefinder.src} alt="Person holding Kashmir Trout Salmon" className="store-finder-image" /> */}
      </div>


    </div>
  );
};

export default TroutBasicPage;
