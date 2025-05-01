// import React from 'react';
// import { useSelector } from 'react-redux';

// const About = () => {
//   const setting = useSelector(state => (state.setting));
//   return (
//     <div>


        
//     <div className="about-container">
//       <div className="content-wrapper">
//         <div className="left-panel">
//           <h1 className="text-white bold-text large-text">3</h1>
//         </div>
//         <div className="right-panel">
//           <img
//             className="image"
//             src="https://placehold.co/600x600?text=Image+Placeholder"
//             alt="Salmon Origins"
//           />
//         </div>
//         <div className="center-overlay">
//           <h2 className="bold-text overlay-heading">About US</h2>
//           {/* <p className="overlay-subheading">SALMON ORIGINS</p> */}
//         </div>
//       </div>
//     </div>


//     {/* <Map/> */}


//     <div className="experience-container ">
//       <div className="experience-text">
//         <h2 className="experience-heading">60 Years of experience</h2>
//         <p className="experience-paragraph">
//           At Kashmir Trout, we fulfill one-fifth of the world’s demand for farm-raised Atlantic salmon, committed to both premium
//           quality and environmental responsibility. Our dedication extends across seven distinct origins—Norway,
//           Scotland, Iceland, Ireland, Faroe Islands, Canada, and Chile—each contributing to the unique taste and
//           character of our salmon.
//         </p>
//         <p className="experience-paragraph">
//           From the epic fjords of Norway to the vibrant coasts of Chile, Kashmir Trout connects oceans, cultures, and cuisines. We
//           take pride in not just providing salmon but crafting a culinary journey that encapsulates tradition,
//           sustainability, and the sheer joy of savoring the world’s finest Atlantic Salmon.
//         </p>
//       </div>
//       <div className="experience-image-container">
//         <img
//           src="https://openui.fly.dev/openui/600x400.svg?text=Image+of+Kashmir Trout+Experience"
//           alt="Image of Kashmir Trout Experience"
//           className="experience-image"
//         />
//       </div>
//     </div>









//     <div className="container1">
//       <h2 className="title1">CHAIN OF VALUE</h2>
//       <h3 className="subtitle1">
//         Discover our <span className="highlight">7 Values</span>
//       </h3>
//       <p className="description">
//         We keep challenging every step of the process: all Kashmir Trout salmon comes from a unique breed that originated in the
//         wildest rivers in Norway, and can be traced back to generations. To produce the finest salmon, Kashmir Trout feeds it a
//         special diet rich in marine ingredients and other proprietary recipes. Our farming and selection process have
//         the highest standards in the industry that result in quality tasty salmon.
//       </p>
//       <div className="grid">
//         <div className="grid-item">
//           <img alt="feed" src="https://openui.fly.dev/openui/50x50.svg?text=🐟" />
//           <span>FEED</span>
//         </div>
//         <div className="grid-item">
//           <img alt="breeding" src="https://openui.fly.dev/openui/50x50.svg?text=🧬" />
//           <span>BREEDING</span>
//         </div>
//         <div className="grid-item">
//           <img alt="smolt" src="https://openui.fly.dev/openui/50x50.svg?text=🐠" />
//           <span>SMOLT</span>
//         </div>
//         <div className="grid-item">
//           <img alt="farming" src="https://openui.fly.dev/openui/50x50.svg?text=🌊" />
//           <span>FARMING</span>
//         </div>
//         <div className="grid-item">
//           <img alt="harvesting" src="https://openui.fly.dev/openui/50x50.svg?text=🚜" />
//           <span>HARVESTING</span>
//         </div>
//         <div className="grid-item">
//           <img alt="processing" src="https://openui.fly.dev/openui/50x50.svg?text=🔪" />
//           <span>PROCESSING & PACKAGING</span>
//         </div>
//         <div className="grid-item">
//           <img alt="products" src="https://openui.fly.dev/openui/50x50.svg?text=🍣" />
//           <span>PRODUCTS & CUSTOMERS</span>
//         </div>
//       </div>
//     </div>




//     <div className="image-grid">
//       <div className="image-item">
//         <img src="https://placehold.co/600x400" alt="Person 1 and Person 2" />
//       </div>
//       <div className="image-item">
//         <img src="https://placehold.co/600x400" alt="Fishing boat on water" />
//       </div>
//       <div className="image-item">
//         <img src="https://placehold.co/600x400" alt="Underwater fish" />
//       </div>
//       <div className="image-item">
//         <img src="https://placehold.co/600x400" alt="Hands holding fish" />
//       </div>
//     </div>




//     <div className="container1">
//       <h2 className="title1">CHAIN OF VALUE</h2>
//       <h3 className="subtitle1">
//         Discover our <span className="highlight">7 Values</span>
//       </h3>
//       <p className="description">
//         We keep challenging every step of the process: all Kashmir Trout salmon comes from a unique breed that originated in the
//         wildest rivers in Norway, and can be traced back to generations. To produce the finest salmon, Kashmir Trout feeds it a
//         special diet rich in marine ingredients and other proprietary recipes. Our farming and selection process have
//         the highest standards in the industry that result in quality tasty salmon.
//       </p>
//       <div className="grid">
//         <div className="grid-item">
//           <img alt="feed" src="https://openui.fly.dev/openui/50x50.svg?text=🐟" />
//           <span>FEED</span>
//         </div>
//         <div className="grid-item">
//           <img alt="breeding" src="https://openui.fly.dev/openui/50x50.svg?text=🧬" />
//           <span>BREEDING</span>
//         </div>
//         <div className="grid-item">
//           <img alt="smolt" src="https://openui.fly.dev/openui/50x50.svg?text=🐠" />
//           <span>SMOLT</span>
//         </div>
//         <div className="grid-item">
//           <img alt="farming" src="https://openui.fly.dev/openui/50x50.svg?text=🌊" />
//           <span>FARMING</span>
//         </div>
//         <div className="grid-item">
//           <img alt="harvesting" src="https://openui.fly.dev/openui/50x50.svg?text=🚜" />
//           <span>HARVESTING</span>
//         </div>
//         <div className="grid-item">
//           <img alt="processing" src="https://openui.fly.dev/openui/50x50.svg?text=🔪" />
//           <span>PROCESSING & PACKAGING</span>
//         </div>
//         <div className="grid-item">
//           <img alt="products" src="https://openui.fly.dev/openui/50x50.svg?text=🍣" />
//           <span>PRODUCTS & CUSTOMERS</span>
//         </div>
//       </div>
//     </div>


//     <div className="services-container">
//       <div className="services-text">
//         <h2>Our Services</h2>
//         <p>
//           At Kashmir Trout, we fulfill one-fifth of the world’s demand for farm-raised Atlantic salmon, committed to both premium quality and environmental responsibility. Our dedication extends across seven distinct
//           origins—Norway, Scotland, Iceland, Ireland, Faroe Islands, Canada, and Chile—each contributing to the unique taste and character of our salmon.
//         </p>
//       </div>
//       <div className="services-cards">
//         <div className="card">
//           <img src="https://placehold.co/300x200" alt="Pre Packed Salmon" />
//           <h3>Pre Packed</h3>
//         </div>
//         <div className="card">
//           <img src="https://placehold.co/300x200" alt="Food Service Salmon" />
//           <h3>Food Service</h3>
//         </div>
//       </div>
//     </div>




//     <div className="form-container">
//       <form>
//         <div className="form-group">
//           <label htmlFor="name">Name and Last name</label>
//           <input type="text" id="name" placeholder="John Doe" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">E-mail address</label>
//           <input type="email" id="email" placeholder="example@mail.com" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="company">Company</label>
//           <input type="text" id="company" placeholder="Your Company" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="subject">Subject</label>
//           <input type="text" id="subject" placeholder="Subject" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea id="message" rows="4" placeholder="Your message here..." required></textarea>
//         </div>

//         <div className="checkbox-group">
//           <label>
//             <input type="checkbox" required />
//             <span>
//               I agree with{' '}
//               <a href="#" className="link">
//                 Terms and Conditions
//               </a>
//             </span>
//           </label>
//         </div>

//         <div className="checkbox-group">
//           <label>
//             <input type="checkbox" required />
//             <span>
//               I agree with{' '}
//               <a href="#" className="link">
//                 Privacy Policy
//               </a>
//             </span>
//           </label>
//         </div>

//         <button type="submit" className="submit-btn">GET IN TOUCH</button>
//       </form>
//       <div className="questions">
//         <h2>Any Questions?</h2>
//         <p>
//           Contact us with any questions, suggestions or comments! We want to hear from you. Somebody at Kashmir Trout will be in touch with you briefly.
//         </p>
//       </div>
//     </div>




    

//     </div>
//   );
// };

// export default About;


"use client"
import React from 'react';
import map from "../../../public/map.png"
import TestimonialSlider from '../media';
import expo from "../../../public/expo.png";
import iim from "../../../public/iim_jammu.png"
import jk from "../../../public/jk.png"
import 'swiper/swiper-bundle.css'; // import Swiper styles
import Link from 'next/link';
import singlefish from "../../../public/singlefish.png";
import img from "../../../public/products-2banner.jpg";
import banner from "../../../public/Our promise to Customers.jpg"
import MediaAwardsSection from '../MediaAwardSlider';
import Partners1 from '../ReviewSlider/Partners1';
import logo from "../../../public/biglogowhite.png"
import howitallstarted from "../../../public/howitallstarted.webp"
import HealthConcernFlower from "../HealthConcernFlower"
import source1 from "../../../public/source1.webp"
import source2 from "../../../public/source2.webp"
import testing from "../../../public/testing.webp"
import superfood from "../../../public/superfood.webp"



const About = () => {

  



  const base_url = process.env.NEXT_PUBLIC_BASE_URL;


  
  return (
    <div>

<div class="new-our-story">
  <img src={banner.src} alt="Background Image" class="new-our-story-img" />
  <div class="new-our-story-overlay">
    <div class="new-our-story-content">
    <div className="logo-containerssss ">
        <img src={logo.src} alt="Logo" className="logosss" />
        <div className='logo-text-products'>ABOUT US</div>
      </div>
    </div>
  </div>
</div>

<div className="custom-circle-nav">
      <span className="start-here">START HERE</span>
      <div className="circles-container">
        <div className="circle" style={{ backgroundColor: "#e7968d" }}>
          Founders' Note
        </div>
        <div className="circle" style={{ backgroundColor: "#d67565" }}>
          How We Do It
        </div>
        <div className="circle" style={{ backgroundColor: "#9aa778" }}>
          Sourcing & Manufacturing
        </div>
        <div className="circle" style={{ backgroundColor: "#7b8557" }}>
          Our Standards
        </div>
        <div className="circle" style={{ backgroundColor: "#3d5b33" }}>
          Superfood Solutions
        </div>
      </div>
    </div>





    <section className="how-it-started">
      <h2 className="section-title">HOW IT ALL STARTED</h2>
      <div className="content-containerss d-flex">
        <div className="image-container">
          <img
            src={howitallstarted.src} 
            alt="Smiling couple reading"
            className="section-image"
          />
        </div>
        <div className="text-container">
          <p className="bold-text">There was a problem in the wellness industry.</p>
          <p>
            Hello there! My name is Vibha and I’m a herbalist. In 2016 I was diagnosed 
            with PCOS and I tried everything to “fix” myself and fast. When I turned to the 
            wellness industry for solutions all I got was a miracle serum that promised to 
            fix my acne overnight or a specialist that told me to just lose some weight.
          </p>
          <p>
            Tired of the insecurity marketing that came along with the instant fixes and 
            band-aid solutions, I turned to herbalism and ancient Ayurveda that looked 
            deeper than just the symptoms.
          </p>
          <p>
            After experiencing the power of adaptogens and herbs, I knew I had to share it 
            with everyone. So along with my husband, Soorya, we set out to revolutionize 
            the modern-day wellness industry!
          </p>
        </div>
      </div>
    </section>



    <section className="solving-problem">
      <h2 className="section-titless">How we’re solving the problem</h2>
    </section>


<HealthConcernFlower />


<section className="solving-problem">
      <h2 className="section-titless">So, we got some herbs.</h2>
    </section>



    <div className="sourcing-container">
      <h2 className="sourcing-heading">SOURCING & MANUFACTURING</h2>
      <div className="sourcing-icons">
        <div className="sourcing-icon">🌱 FARM</div>
        <div className="sourcing-line"></div>
        <div className="sourcing-icon">🫙 JAR</div>
      </div>
      <p className="sourcing-description">
        We directly source everything we add to our mixes from our farm partners across India & worldwide. 
        Be it the herbs, the fruits, or even the simple plant extracts we use to create the unflavoured protein.
      </p>
      <div className="sourcing-images">
        <img src={source1.src} alt="Farm roots" className="sourcing-image" />
        <img src={source2.src} alt="Fresh herbs" className="sourcing-image" />
      </div>
      <p className="sourcing-footer">
        Our blends are manufactured in-house to give us complete control over what goes into the mixes. 
        It allows us to maintain the highest quality while ensuring the most cost-effective price for you!
      </p>
    </div>



    <section className="solving-problem">
      <h2 className="section-titless">And made sure they met our standards</h2>
    </section>




    <div className="testing-container">
      <h2 className="testing-heading">TESTING</h2>
      <div className="testing-content">
        <img src={testing.src} alt="Testing Process" className="testing-image" />
        <div className="testing-text">
          <p className="testing-description">
            Every batch of our superfood mixes is tested for purity, identity, and composition, 
            so that you can be sure what’s on the label is what you're getting.
          </p>
          <p className="testing-note">
            We use a third-party FSSAI-approved NABL-accredited lab to check for heavy metals and microbes 
            to ensure you get the cleanest solution for your health needs.
          </p>
        </div>
      </div>
    </div>




    <section className="solving-problem">
      <h2 className="section-titless">Did You Know?
        <br/> <br />
We update these reports regularly and you can find them on all of our
product pages under ‘third party testing’.</h2>
    </section>



    <div className="showcase-container">
      <h2 className="showcase-heading">AND FINALLY COSMIX WAS BORN</h2>
      <div className="showcase-image-container">
        <img src={superfood.src} alt="Cosmix Product" className="showcase-image" />
      </div>
      <p className="showcase-description">
        Superfood mixes for all parts of health - gut, skin, hair, sleep, hormones, and even plant protein!
      </p>
      <button className="showcase-button">EXPLORE</button>
    </div>




{/* <div className="salmar-container">
  <h1 className="salmar-heading">Kashmir Trout has a strong presence across J&K</h1>
  <p className="salmar-paragraph">
  KashmirTrout has integrated more than 200 farmers across J&K and focused on integrating farmers especially from far flung areas of Kashmir having limited market access and close to natural and pristine streams thus ensuring quality. Our passion for the industry has been a key driver for us that has helped us make leaps across the supply chains in the aquaculture industry of J&K especially in Trout farming and marketing.
  </p>

</div> */}



{/* 
<div className="new-origins">
<h3 className="subtitle3 ">
  Explore our  <span className="highlight"> 9 Origins</span>
  </h3>
  <div className="new-origins-container">
  
    <div className="new-origins-left">
      

      <h3 className="subtitle2 ">
  Explore our  <span className="highlight"> 9 Origins</span>
  </h3>
      <ul className="new-origins-list">
        <li className="new-origins-list-item">Anantnag</li>
        <li className="new-origins-list-item">Kokernag</li>
        <li className="new-origins-list-item">Bandipora</li>
        <li className="new-origins-list-item">Tangmarg</li>
        <li className="new-origins-list-item">Srinagar</li>
        <li className="new-origins-list-item">Handwara</li>
        <li className="new-origins-list-item">Kulgam</li>
        <li className="new-origins-list-item">Shopian</li>
        <li className="new-origins-list-item">Tral</li>
      </ul>
    </div>
    <div className="new-origins-right">
      <img
        src={map.src}
        alt="Map showing origins"
        className="new-origins-image"
      />
    </div>
  </div>
</div> */}




<div className="salmar-section-container">
  <div className="salmar-section-image">
    <img src={img.src} alt="Salmon swimming underwater" className="salmar-section-img" />
  </div>
  <div className="salmar-section-content">
    <h1 className="salmar-section-heading">We are the  largest  rainbow trout sellers of J&K</h1>
    <p className="salmar-section-paragraph">
    
    Kashmir Trout through its integrated fishermen ensures heathy and quality trout being produced and  being sold across our centres in J&K. With local procurement and our technological interventions in city centre locations we have made quality rainbow trout available 24/7 across major districts in J&K.
    </p>
    <div className="salmar-section-buttons">
      <Link href={`${base_url}/our-farmer`} className="salmar-section-btn-secondary">OUR FARMERS</Link>
      <Link href={`${base_url}/products`} className="salmar-section-btn-secondary">OUR PRODUCTS</Link>
    </div>
  </div>
</div>




<Partners1 />



<MediaAwardsSection />

<div className="awards-section">
  <div className="awards-container">
    <div className="award-item">
    <img
   
  className="award-logo"
  src={expo.src}
  alt="G20 Logo"
 
/>

      <p className="award-description">Proud Participant</p>
    </div>
    <div className="award-item">
      <img className="award-logo" src={iim.src} alt="Quantic Logo" />
      <p className="award-description">Incubated Startup</p>
    </div>
    <div className="award-item">
      <img className="award-logo" src={jk.src} alt="VC Circle Logo" />
      <p className="award-description">Fisheries Supported</p>
    </div>
  </div>
</div>



{/* <div className="new-actions">
  <h1 className="new-actions-title">Actions Speak Louder Than Words</h1>
  <p className="new-actions-description">
    Anyone can talk about their values. The true differentiator is what happens next—how these words come to life. We recognize we're on a lifelong journey, and the following steps are where we start.
  </p>

  <div className="new-actions-grid">
    <div className="new-actions-card">
      <img src="https://openui.fly.dev/openui/100x100.svg?text=🌱" alt="holistic-approach" />
      <h2 className="new-actions-card-title">A Holistic Approach</h2>
      <p className="new-actions-card-description">
        Understanding the connections between farmers, animals, the planet, our team, and our members is where it all begins.
      </p>
    </div>

    <div className="new-actions-card">
      <img src="https://openui.fly.dev/openui/100x100.svg?text=🎁" alt="giving-mindset" />
      <h2 className="new-actions-card-title">A Giving Mindset</h2>
      <p className="new-actions-card-description">
        We carefully partner with charitable organizations to make the most impact possible. Please 
        <a href="#" className="new-actions-card-link">contact us</a> 
        for more information on giving.
      </p>
    </div>


    <div className="new-actions-card">
      <img src="https://openui.fly.dev/openui/100x100.svg?text=🎁" alt="giving-mindset" />
      <h2 className="new-actions-card-title">A Giving Mindset</h2>
      <p className="new-actions-card-description">
        We carefully partner with charitable organizations to make the most impact possible. Please 
        <a href="#" className="new-actions-card-link">contact us</a> 
        for more information on giving.
      </p>
    </div>

    <div className="new-actions-card">
      <img src="https://openui.fly.dev/openui/100x100.svg?text=🔍" alt="transparency-reporting" />
      <h2 className="new-actions-card-title">Transparency and Reporting</h2>
      <p className="new-actions-card-description">
        We’re on a journey, and we’re learning along the way. We invite everyone to follow—we’ll be sharing updates, and we’ll be open and honest about our progress. View our annual Social and Environmental Responsibility Reports below.
      </p>
      <ul className="new-actions-card-list">
        <li><a href="#" className="new-actions-card-link">2020</a></li>
        <li><a href="#" className="new-actions-card-link">2021</a></li>
        <li><a href="#" className="new-actions-card-link">2022</a></li>
      </ul>
    </div>
  </div>
</div> */}



<div className="new-story">
  <img src={singlefish.src} alt="butcherbox-logo" className="new-story-logo" />
  <h2 className="new-story-title">More About Our Story</h2>
  <div>
  <p className="new-story-paragraph">
  Driven by the desire to support fishermen struggling to sell their produce, Kashmir Trout was founded in 2019 by Eeshan Bashir, Mir Autif, and Aasim Bashir. The journey began with a deep understanding of the challenges faced by fishermen in the remote areas of Anantnag, Jammu & Kashmir.
  </p>
  <blockquote className="new-story-quote">“Live trout was not available in city locations, and consumers had access only to frozen trout, often with limited availability” 
  </blockquote>
  <p className="new-story-paragraph">
  To bridge this gap, Kashmir Trout was born out of a commitment to solve a problem that had long been overlooked.
  </p>
  <blockquote className="new-story-quote">“The current system isn’t working.”</blockquote>
  <p className="new-story-paragraph">
  Recognizing the shortcomings of the current system, Kashmir Trout introduced an innovative solution: a setup to keep live trout available in city conditions round the clock. This system was first established in Anantnag and later expanded to Srinagar. Today, with over five centers across Kashmir, the system has not only revolutionized access to fresh trout but also inspired others to adopt similar live vending systems.
  </p>

  <blockquote className="new-story-quote">"Expanding Horizons"
  </blockquote>


  <p className="new-story-paragraph-last">
  Staying true to our mission of making high-quality trout accessible, the Kashmir Trout team launched Kashmir Trout QSR—a groundbreaking initiative in trout-based culinary experiences in Jammu & Kashmir.
  </p>

  <p className="new-story-paragraph-last">
  What began as a small effort to connect fishermen with urban consumers has grown into a robust network that delivers fresh trout to doorsteps across the region. With this success, Kashmir Trout is now expanding nationally, sharing the hard work of local fishermen with a wider audience and showcasing the potential of Kashmir’s aquaculture industry.
  </p>
  </div>
</div>











{/* 
<div className="investors-section">
  <h2 className="investors-title">Investors who put their faith in us</h2>
  <div className="investors-underline-container">
    <div className="investors-underline investors-underline-top"></div>
    <div className="investors-underline investors-underline-bottom"></div>
  </div>
  <div className="investors-logos">
    <div className="investors-logo-row investors-logo-row-left">
      <div className="investors-logo">
        <img src={logo1.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo2.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo3.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo4.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo5.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo6.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo7.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo8.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo9.src} alt='logo' />
      </div>
    </div>
    <div className="investors-logo-row investors-logo-row-right">
      <div className="investors-logo">
      <img src={logo5.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo6.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo7.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo8.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo9.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo10.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo1.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo2.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo3.src} alt='logo' />
      </div>
      <div className="investors-logo">
      <img src={logo4.src} alt='logo' />
      </div>
    </div>
  </div>
</div> */}





{/* <div className="new-testimonial-section">
  <h2 className="new-testimonial-title">What are people saying about Kashmir Trout</h2>
  <div className="new-testimonial-divider"></div>
  <div className="flex flex-col items-center text-center">
    <p className="new-testimonial-text">
      At Trifecta, we have always been mindful of the opportunity in F&V logistics.Kashmir Trout has done a great job in delivering fresh produce to retailers efficiently while removing
      non-value-adding middlemen to improve the earnings realized by farmers. We are excited to help them get even bigger and better in their journey, as they use our debt to invest in
      fulfillment, collection, and distribution centers.
    </p>
    <p className="new-testimonial-author">
      Nilesh Kothari,<br />
      Co-founder of Trifecta Capital
    </p>
    <img src="https://placehold.co/100x100" alt="Nilesh Kothari" className="new-testimonial-author-img" />
  </div>
  <div className="new-testimonial-controls">
    <button className="new-testimonial-button">❮</button>
    <button className="new-testimonial-button">❯</button>
  </div>
</div> */}


<TestimonialSlider/>





<div className="join-team">
  <h2 className="join-team-title">Join Our Team</h2>
  <p className="join-team-description">
    Our team is made up of people who collaborate and support one another. We’re always looking for outstanding folks to join our mission. Visit our careers page to learn more.
  </p>
  <Link href={`${base_url}/career`} className="join-team-button">VIEW CAREERS</Link>
  {/* <div className="join-team-as-seen">
    <p>AS SEEN ON</p>
    <div className="join-team-logos">
      <div>Tc</div>
      <div>Fortune</div>
      <div>Forbes</div>
      <div>delish</div>
      <div>Today</div>
    </div>
  </div> */}
</div>

    

    </div>
  );
};

export default About;
