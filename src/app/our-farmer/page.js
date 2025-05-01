
import React from 'react';
import RecipeVideoGrid from "../../components/instagramvideocarousel/InstagramVideoCaourselfarmer.jsx";
import image1 from "../../../public/new-our-farmer-banner.jpg";
import logo from "../../../public/biglogowhite.png"

export const metadata = {
  metadataBase: new URL("https://www.kashmirtrout.com/"),
  title: "Farmers of Kashmir Trout - Integrate With J&K Largest Rainbow Trout Sellers",
  description: "Get your farm integrated with Kashmir Trout and sell your produce within a click of a button.",
  keywords: ["rainbow trout", "trout farming", "sell trout online", "Kashmir trout farmers", "rainbow trout marketplace", "J&K trout fish business", "fresh trout suppliers"],
  openGraph: {
    title: "Farmers of Kashmir Trout - Integrate With J&K Largest Rainbow Trout Sellers",
    description: "Get your farm integrated with Kashmir Trout and sell your produce within a click of a button.",
    url: "https://www.kashmirtrout.com/our-farmer",
    siteName: "Kashmir Trout",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmers of Kashmir Trout - Integrate With J&K Largest Rainbow Trout Sellers",
    description: "Get your farm integrated with Kashmir Trout and sell your produce within a click of a button.",
  },
  icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kashmirtrout.com/our-farmer" },
};


const FishermanInfo = () => {


  const videos = [
    { url: "/farmer11 (2).mp4" },
    { url: "/farmer1.mp4" },
    { url: "/farmer15.mp4" },
    { url: "/farmer3.mp4" },
    { url: "/farmer20.mp4" },
    { url: "/farmer11 (1).mp4" },
  ];

  const fishermenData = [
    { name: 'Waqar Bashir (Tral)', img: "/farmer1.jpg" },
    { name: 'Hilal Ahmad (Ferozpora)', img: "/farmer2.jpg" },
    { name: 'Azam Khan (Tangmarg)', img: "/farmer3.jpg" },
    { name: 'Mohd Subhan (Tangmarg)', img: "/farmer4.jpg" },
    { name: 'Shabir Ahmad (Dhara)', img: "/farmer5.jpg" },
    { name: 'Mushtaq (Fakir Gurji)', img: "/farmer6.jpg" },
    { name: 'Shabir Wani (Bandipora)', img: "/farmer7.jpg" },
    { name: 'Sajjad Ahmad (Bidihar)', img: "/farmer8.jpg" },
    { name: 'Khurshid Ahmad (Chattergul)', img: "/farmer9.jpg" },
    { name: 'Sameer Ahmad (Kokernag)', img: "/farmer10.jpg" },
    { name: 'Jahangir Ahmad (Kulgam)', img: "/farmer11.jpg" },
    { name: 'Bashir Ahmad (Tral)', img: "/farmer12.jpg" },
  ];

  const text = {
    knowYourFishermanTitle: "KNOW YOUR FISHERMAN",
    knowYourFishermanDescription: "At Kashmir Trout, skilled hands carefully bring every trout, ensuring pristine handling and delivering unparalleled freshness and quality from fishermen to your table.",
    collaborationHeading: "Kashmir Trout collaborates with over 200 farmers from key trout farming districts, fostering a thriving network dedicated to sustainable aquaculture and exceptional quality.",
    collaborationDescription: "Trout farming in Kashmir demands unwavering dedication, resilience, and teamwork, especially as temperatures often plunge below 0°C. Our fishermen work tirelessly, even during the harshest conditions and peak harvest seasons, to deliver the finest trout.",
    meetOurTitle: "MEET OUR",
    meetOurSubtitle: "Farmers",
    joinTeamTitle: "Be a part of a network of more than 200 Trout farmers of Kashmir.",
    joinTeamDescription: "If you’re a Kashmir Trout fisherman who wants to tell your story, we’d like to hear it!",
    joinTeamLink: "https://docs.google.com/forms/d/e/1FAIpQLSfwFe673avHFxhuuuGNhbVOFD3Ely_arjRDV-1OQXpDIZNXEw/viewform?usp=header",
    joinTeamButton: "Join us today"
  };

  return (
    <>
      <div className="widget-header11">
              <div className="image-containersss">
            <img src={image1.src} alt="Background" className="background-imagesss" />
            <div className="logo-containersss">
              <img src={logo.src} alt="Logo" className="logosss" />
              <div className='logo-text-products'>OUR FARMERS</div>
            </div>
          </div>
               
              </div>
      <h2 className="knowyourfishermen">{text.knowYourFishermanTitle}</h2>
      <p className="knowyourfishermentext mx-auto">{text.knowYourFishermanDescription}</p>
      <RecipeVideoGrid videos={videos} />
      <div className="fishermen-container">
        <h1 className="fishermen-heading">{text.collaborationHeading}</h1>
        <p className="fishermen-paragraph">{text.collaborationDescription}</p>
      </div>
      <div className='our-farmer-heading-style'>
        <h2>{text.meetOurTitle}</h2>
        <p>{text.meetOurSubtitle}</p>
      </div>
      <div className="fishermen-grid">
        {fishermenData.map((fisherman, index) => {
          const [name, location] = fisherman.name.split(' (');
          const locationText = location ? `(${location}` : '';
          return (
            <div className="fishermen-card" key={index}>
              <img src={fisherman.img} alt={fisherman.name} className="fishermen-card-image" />
              <div className="fishermen-card-content">
                <h3 className="fishermen-card-title">
                  {name} <br />
                  <span className="fishermen-card-location">{locationText}</span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="join-team1">
        <h2 className="join-team-title1 fs-2">{text.joinTeamTitle}</h2>
        <p className="join-team-description">{text.joinTeamDescription}</p>
        <a href={text.joinTeamLink} target='blank' className="join-team-button">
          {text.joinTeamButton}
        </a>
      </div>
    </>
  );
};

export default FishermanInfo;
