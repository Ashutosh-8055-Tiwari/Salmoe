
import InstagramVideoCarousel from '../../components/instagramvideocarousel/Instagramvideocarousel';
import React from 'react';
import logo from "../../../public/biglogowhite.png"
import backgroundImage from "../../../public/recipes-container-background.jpg";
import image1 from "../../../public/story.png";
import storefinder from "../../../public/storefinder.jpg"
import image3 from "../../../public/guarantee.png";
import Link from 'next/link';
import banner from '../../../public/recipes-banner.jpg'

export const metadata = {
  metadataBase: new URL("https://www.kashmirtrout.com/"),
  title: "Get Your Fresh Rainbow Trout from Farm to Plate With Just a Click",
  description: "Learn to cook delicious Kashmir Trout with our simple, flavorful recipes, and bring the authentic taste of trout to your kitchen!",
  keywords: ["buy trout fish", "trout recipes", "cook Kashmir trout", "fresh rainbow trout dishes", "trout cooking guide", "best trout recipes", "Kashmir trout cuisine"],
  openGraph: {
    title: "Get Your Fresh Rainbow Trout from Farm to Plate With Just a Click",
    description: "Learn to cook delicious Kashmir Trout with our simple, flavorful recipes, and bring the authentic taste of trout to your kitchen!",
    url: "https://www.kashmirtrout.com/recipes",
    siteName: "Kashmir Trout",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Fresh Rainbow Trout from Farm to Plate With Just a Click",
    description: "Learn to cook delicious Kashmir Trout with our simple, flavorful recipes, and bring the authentic taste of trout to your kitchen!",
  },
  icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kashmirtrout.com/recipes" },
};




const videos = [
  { url: "/recipes2.mp4" },
  { url: "/recipes3.mp4" },
  { url: "/recipes1.mp4" },
  { url: "/recipes5.mp4" },
];


const recipes = {url :"/recipes.mp4"};


const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const TastyRecipes = () => {
  return (
    <div className="tasty-recipes-container">
    
      <div className="widget-header11">
              <div className="image-containersss">
            <img src={banner.src} alt="Background" className="background-imagesss" />
            <div className="logo-containersss">
              <img src={logo.src} alt="Logo" className="logosss" />
              <div className='logo-text-products'>OUR RECIPES</div>
            </div>
          </div>
               
              </div>

      <InstagramVideoCarousel videos={videos}/>



      


      <div className="video-cards">
        <div className="video-containers">
        <iframe 
  className="videos" 
  width="320" 
  height="180" 
  src="https://www.youtube.com/embed/Y62BoGSfE44" 
  title="Kashmir Trout for Every Occasion" 
  frameBorder="0" 
  allowFullScreen 
/>

        </div>
        <div className="video-contents">
          <h2 className="video-titles">Trout For every occasion at home</h2>
          <p className="video-descriptions">
          KashmirTrout offers a trout that has delicious skin-packed ready-to-cook trout for those everyday meals. We bring the best trout to your table that’s fresh, never frozen. Now, you can cook at home like a Chef does at his restaurant.
          </p>
          <a href="https://www.youtube.com/@kashmirtrout7528" target='blank' className="cta-buttons">WATCH MORE VIDEOS</a>
        </div>
      </div>


      <div className="recipes-main-container">

        <img src={backgroundImage.src} className='recipes-container-Image' />
        <div className='recipes-container'>
        <div>
  <h2>Preparation Techniques</h2>
  <h1>Trout Cleaning Techniques</h1>
  <p>Experience best quality  rainbow trout from the best fishermen of Kashmir ensuring highest quality standards.</p>
  </div>
  <div className="d-flex grids">
    <Link href={`${base_url}/trout-basic`} className="card-links group">
      <img aria-hidden="true" alt="Salmon Basics Icon" src={image1.src} className='recipes-card-img' />
      <span className=''>Trout Basics</span>
    </Link>
    <a href="https://www.instagram.com/share/reel/BBUe56qE6j" target='blank' className="card-links group">
      <img aria-hidden="true" alt="Salmon Cooking Techniques Icon" src={image3.src} className='recipes-card-img'/>
      <span className=''>Trout Cleaning Techniques</span>
    </a>
  </div>
  </div>
</div>



<div className="store-finder mx-auto">
  <img src={storefinder.src}alt="Store Finder" />
  <div className="store-finder-content">
    <h2 className="store-finder-subtitle">STORE FINDER</h2>
    <h1 className="store-finder-title">
      Want to buy <span className="store-finder-highlight">Trout?</span>
    </h1>
    <Link href={`${base_url}/nearest-outlet`}>
      <button className="store-finder-button">FIND NEAREST KASHMIR TROUT STORE</button>
    </Link>
  </div>
</div>
    </div>
  );
};

export default TastyRecipes;
