import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HomeContainer from './homecontainer/HomeContainer';
import Loader from './loader/Loader';
import ProductContainer from './product/ProductContainerSwiper';
import { AiOutlineClose } from 'react-icons/ai';
import { Modal } from 'react-bootstrap';
import CategorySection from './categorySection/categorySection';
import OurPromise from './herosection/heroSection';
import storefinder from "../../public/storefinder.jpg"
import VideoComponent from './cookingwithus/cookingwithus';
import AvailableAt from './available at/availableat';
import InstagramFollowSection from './instacomponent/instaComponent';
import img1 from "../../public/Relax.webp"
import img2 from "../../public/Immunity.webp"
import img3 from "../../public/Protein.webp"

import benefit1 from "../../public/benefit1.jpg"
import benefit2 from "../../public/benefit2.jpg"
import benefit3 from "../../public/benefit3.png"
import benefit4 from "../../public/benefit4.png"
import benefit5 from "../../public/benefit5.png"
import benefit6 from "../../public/benefit6.png"
import benefit7 from "../../public/benefit7.png"
import benefit8 from "../../public/benefit8.png"
import benefit9 from "../../public/benefit9.png"
import Testimonials from './ReviewSlider/ReviewSlider';
import Partners from './ReviewSlider/Partners';
import Partner from './ReviewSlider/our-clients';
import Link from 'next/link';
import Cart from './cart/Cart';
import Herobanner from './Herobanner';
import RealResultsCarousel from "./RealResultsCarousel"

import proteinbanner from "../../public/protein-banner.webp"
import homenew from '../../public/home-new.webp'

const MainContainer = () => {

    const modalRef = useRef();
     const [isCartSidebarOpen,setIsCartSidebarOpen]= useState(false);

    const setting = useSelector(state => state.setting);
    const city = useSelector(state => state.city.city);

    
    const shop = useSelector(state => state.shop.shop);
    const aboveHomeSlider = shop?.offers?.filter((offer) => offer?.position === "top");
    const BelowHomeSlider = shop?.offers?.filter((offer) => offer.position === "below_slider");
    const BelowCategory = shop?.offers?.filter((offer) => offer.position === "below_category");
    const BelowSectionOfferArray = shop?.offers?.filter((offer) => offer.position === "below_section");
    console.log("shop in maincontainer",shop);
    useEffect(() => {

        if (modalRef.current && setting.setting !== null) {
            modalRef.current.click();
        }
    }, [setting]);

    const [showPop, setShowPop] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const placeHolderImage = (e) => {
        e.target.src = setting.setting?.web_logo;
    };
    return (
        <>
            {setting.setting === null
                ? <Loader screen='full' />
                : (
                    <>
                        <div className={`home-page content `} style={{ paddingBottom: "5px", minHeight: "75vh" }}>
                            
                            <HomeContainer OfferImagesArray={aboveHomeSlider} BelowSliderOfferArray={BelowHomeSlider} BelowCategoryOfferArray={BelowCategory} />
                            {/* <CategorySection/> */}
                            <Herobanner />
                            <div className='mx-auto'>
                            <ProductContainer showModal={showModal} setShowModal={setShowModal} BelowSectionOfferArray={BelowSectionOfferArray} setIsCartSidebarOpen={setIsCartSidebarOpen} isCartSidebarOpen={isCartSidebarOpen} />
                            </div>




                           <div class="how-we-do-it-container">
    <h1 class="how-we-do-it-title">HOW WE DO IT</h1>
    
    <div class="how-we-do-it-grid">

      <div class="how-we-do-it-card">
        <div class="how-we-do-it-overlay"></div>
        <img src={img1.src} alt="In-house Manufacturing" class="how-we-do-it-img" />
        <div class="how-we-do-it-badge">Our blends are manufactured in-house</div>
        <div class="how-we-do-it-text">
          <h2>Manufacturing</h2>
          <p>Our blends are manufactured in-house</p>
        </div>
        <div class="how-we-do-it-icon-container">
          <svg class="how-we-do-it-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
      
   
      <div class="how-we-do-it-card">
        <div class="how-we-do-it-overlay"></div>
        <img src={img2.src} alt="Quality Control" class="how-we-do-it-img" />
        <div class="how-we-do-it-badge">Our blends are manufactured in-house</div>
        <div class="how-we-do-it-text">
          <h2>Quality Control</h2>
          <p>Rigorous testing ensures product excellence</p>
        </div>
        <div class="how-we-do-it-icon-container">
          <svg class="how-we-do-it-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
      

      <div class="how-we-do-it-card">
        <div class="how-we-do-it-overlay"></div>
        <img src={img3.src} alt="Sustainability" class="how-we-do-it-img" />
        <div class="how-we-do-it-badge">Our blends are manufactured in-house</div>
        <div class="how-we-do-it-text">
          <h2>Sustainability</h2>
          <p>Environmentally conscious processes</p>
        </div>
        <div class="how-we-do-it-icon-container">
          <svg class="how-we-do-it-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>





  <section className="protein-banner-container">
      <div className="protein-banner-image">
        <img src={proteinbanner.src} alt="Protein Product" />
      </div>
      <div className="protein-banner-content">
        <div className="protein-banner-badge">FOR EVERYONE'S NEEDS!</div>
        <h2 className="protein-banner-title">Protein redefined</h2>
        <p className="protein-banner-subtitle">no-nonsense plant protein</p>
        <ul className="protein-banner-list">
          <li>✔ GOOD FOR YOUR GUT</li>
          <li>✔ CLEANEST INGREDIENT LIST</li>
          <li>✔ BLENDS EFFORTLESSLY</li>
        </ul>
        <button className="protein-banner-button">SHOP NOW</button>
      </div>
    </section>



<RealResultsCarousel />


<div className="custom-banner-container">
  <div className="custom-banner-text">
    <h2 className="custom-banner-heading">Wellness Begins from Within</h2>
    <p className="custom-banner-subtext">
      Nourish your body, energize your mind, and embrace the journey to a healthier you.
    </p>
    <button className="custom-shop-button">SHOP NOW</button>
  </div>
  <div className="custom-banner-image">
    <img src={homenew.src} alt="Man drinking water" />
  </div>
</div>


                            {/* <OurPromise/> */}

{/* <div className='trout-naturally'>
                            <h3 className="subtitle1 text-center">
  Trout Naturally  <span className="highlight"> Better</span>
  </h3>
  </div>
 */}

                            {/* <div className="container1 mx-auto ">
 

  <div className="grid mx-auto">
    {[
      { src: benefit1.src, text: "Brain Booster" },
      { src: benefit2.src, text: "Eagle Eyes" },
      { src: benefit3.src, text: "Radiant Hair + Skin" },
      { src: benefit4.src, text: "Heart Healthy" },
      { src: benefit5.src, text: "A Joint Effort" },
      {
        src: benefit6.src,
        text: "Trout Protein",
      },
      { src: benefit7.src, text: "Trust Your Gut" },
      { src: benefit8.src, text: "Healthy Mom & Baby" },
      // { src: benefit9.src, text: "Make No Bones About It" },
    ].map((benefit, index) => (
      <div
        key={index}
        className="grid-item"
        style={{ "--index": index }}
      >
        <img alt={benefit.text} src={benefit.src} className='image-filter' />
        <span>{benefit.text}</span>
      </div>
    ))}
  </div>
</div> */}


                           
                           


                         
      {/* <Partners />
     

      <Testimonials /> */}

      <Partner />

      <div className="store-finder mx-auto">
  <img src={storefinder.src}alt="Store Finder" />
  <div className="store-finder-content">
    <h2 className="store-finder-subtitle">STORE FINDER</h2>
    <h1 className="store-finder-title">
      Want to buy <span className="store-finder-highlight">Trout?</span>
    </h1>
    <Link href={`/nearest-outlet`}>
      <button className="store-finder-button">FIND NEAREST KASHMIR TROUT STORE</button>
    </Link>
  </div>
</div>


      
                            {/* <AvailableAt /> */}
                            <VideoComponent/>


                                





                            
                            {/* <InstagramFollowSection/> */}
                        </div>
                        {parseInt(setting.setting.popup_enabled) === 1 ?
                            (
                                <>
                                    <Modal className='popup'
                                        centered
                                        show={showPop}
                                        // onBackdropClick={() => setShowPop(false)}
                                        backdrop={"static"}
                                    >
                                        <Modal.Header onClick={() => { setShowPop(false); }}>
                                            <AiOutlineClose size={32} fill='#fff' />
                                        </Modal.Header>
                                        <Modal.Body>
                                            <img src={setting.setting.popup_image} alt='popup_image' onClick={() => {
                                                if (setting.setting?.popup_type === "popup_url") {
                                                    window.location = setting.setting.popup_url;
                                                }
                                                else if (setting.setting?.popup_type === "category") {
                                                }
                                            }}
                                                style={{ width: "100%", height: "100%" }} onError={placeHolderImage}></img>
                                        </Modal.Body>
                                    </Modal>

                                </>
                            ) : null}
                    </>)}

                    < Cart isCartSidebarOpen={isCartSidebarOpen} setIsCartSidebarOpen={setIsCartSidebarOpen} />
        </>

    );
};

export default MainContainer;
