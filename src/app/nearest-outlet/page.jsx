

'use client'
import React, { useEffect, useState } from "react";
import store3 from "../../../public/store3.jpg";
import banner from "../../../public/nearest-store-banner.jpg";
import soura from "../../../public/Soura.jpg";
import rainawari from "../../../public/rainawari.jpg";
import natipora from "../../../public/natipora.jpg";

const stores = [
  {
    name: "Kashmir Trout - Natipora",
    rating: 4.5,
    reviews: 112,
    type: " Live Trout Centre",
    location: "Natipora, Jammu and Kashmir",
    phone: "060058 33945",
    services: ["Dine-in", "Takeaway", "Delivery"],
    image: natipora.src,
    coordinates: { lat: 34.0655, lng: 74.8090 },
    link: "https://maps.app.goo.gl/V3kLXkPhsVwrbsDz9?g_st=ic",
  },
  {
    name: "Kashmir Trout - Rainawari",
    rating: 4.4,
    reviews: 220,
    type: " Lounge and Live Trout Centre",
    location: "Rainawari, Jammu and Kashmir",
    phone: "060058 33945",
    services: ["Dine-in", "Drive-through", "No-contact delivery"],
    image: rainawari.src,
    coordinates: { lat: 34.0860, lng: 74.8090 },
    link: "https://maps.app.goo.gl/AJVqdG5vTY4PSm4a8?g_st=ic",
  },
  {
    name: "Kashmir Trout - Anantnag",
    rating: 4.1,
    reviews: 202,
    type: "Live Trout Centre",
    location: "Anantnag, Jammu and Kashmir",
    phone: "060058 33945",
    services: ["Dine-in", "Drive-through", "No-contact delivery"],
    image: store3.src,
    coordinates: { lat: 33.7300, lng: 75.1530 },
    link: "https://maps.app.goo.gl/55nLYeTgYpnxce9AA?g_st=ic",
  },
  {
    name: "Kashmir Trout - Soura",
    rating: 4.1,
    reviews: 202,
    type: " QSR and Live Trout Centre",
    location: "Soura, Jammu and Kashmir",
    phone: "060058 33945",
    services: ["Dine-in", "Drive-through", "No-contact delivery"],
    image: soura.src,
    coordinates: { lat: 34.1100, lng: 74.8100 },
    link: "https://maps.app.goo.gl/xfXG7NzSXs26s2aU9?g_st=ic",
  },
  {
    name: "Kashmir Trout - Bemina",
    rating: 4.1,
    reviews: 202,
    type: " QSR and Live Trout Centre",
    location: "Bemina, Jammu and Kashmir",
    phone: "060058 33945",
    services: ["Dine-in", "Drive-through", "No-contact delivery"],
    image: store3.src,
    coordinates: { lat: 34.1100, lng: 74.8100 },
    link: "#",
  },
];

const NearestStorePage = () => {
  const [time, setTime] = useState("");

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString()); 
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  
  return (
    <div className="nearest-store-page-container">
      <img src={banner.src} alt="Background" className="background-imagesss" />

      <div className="p-3">
        <h1 className="nearest-store-page-title">Kashmir Trout Outlet's</h1>
        <p className="nearest-store-page-paragraph">
          At Kashmir Trout, you’ll find the finest range of fresh trout, delivered with unmatched quality. Visit our stores in Rainawari, Natipora, Soura, and Anantnag to explore our offerings firsthand.
        </p>
        <p className="nearest-store-page-paragraph">
          Experience the convenience of our live trout vending concept and bring home the freshest trout – straight from the source!
        </p>

        <div className="nearest-store-page">
          <div className="card-container">
            {stores.map((store, index) => (
              <div key={index} className="store-card">
                <h2 className="store-name">{store.name}</h2>
                <img alt={store.name} src={store.image} className="store-image" />
                <p className="store-location">{store.location}</p>
                <p className="store-rating">
                  <strong>Rating:</strong> {store.rating} ({store.reviews} reviews)
                </p>
                <p className="store-type">
                  <strong>Type:</strong> {store.type}
                </p>
                <p className="store-services">
                  <strong>Services:</strong> {store.services.join(", ")}
                </p>
                
                <p className="store-phone">
                  <strong>Phone:</strong> {store.phone}
                </p>
                {/* Add the current time */}
                <p className="store-timing">
                  <strong>Current Time:</strong> 10:00 am to 9:30 pm
                </p>

                <a
                  href={store.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-link"
                >
                  Get directions
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>




      <div className="join-team1">
  <h2 className="join-team-title1">Become A Kashmir Trout Franchisee Owner Today !!</h2>
  <p className="join-team-description">
    Currently Applications Are Closed.
  </p>
  <a href={`${base_url}/contact-us/`} className="join-team-button">Get In Touch with Us</a>
 <div>             </div>
</div>


    </div>
  );
};

export default NearestStorePage;
