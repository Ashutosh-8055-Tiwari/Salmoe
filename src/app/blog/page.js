
import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.jpg";
import blog4 from "../../../public/blog4.jpg";
import blog5 from "../../../public/blog5.jpg";
import blog121 from "../../../public/blog121.jpg";
import logo from "../../../public/biglogoblack.png"
import React from "react";


export const metadata = {
  metadataBase: new URL("https://www.kashmirtrout.com/"),
  title: "Blog - Kashmir Trout",
  description: "Read the latest blogs and updates about Kashmir Trout, seafood delights, and culinary experiences.",
  keywords: ["buy trout online", "Kashmir trout", "fresh rainbow trout", "order trout fish"],
  openGraph: {
    title: "Blog - Kashmir Trout",
    description: "Read the latest blogs about Kashmir Trout and its journey in the trout industry.",
    url: "https://www.kashmirtrout.com/blog",
    siteName: "Kashmir Trout",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Blogs | Kashmir Trout",
    description: "Read about the latest trends in the trout industry at Kashmir Trout.",
   
  },
  icons: {
    icon: "/favicon.ico",
  },
robots: { index: true, follow: true },
  alternates: { canonical: "https://www.kashmirtrout.com/blog" },
};


const BlogPost = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <div className="blog-container">
      {/* Header Banner */}
      <div className="blog-header">
        <div className="blog-header-content">
          <div className="blog-header-left">
            <img src={logo.src} height={100} width={170} className="mb-3" />
            {/* <h1 className="blog-title">My Pivot to <br /> T.A.P</h1> */}
            <p className="blog-subtitle">Platform | QSR | Live-Centre</p>
            {/* <div className="blog-author-tag">VENKATESH</div> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="blog-main-content">
        {/* Article Content */}
        <div className="blog-article-content">
          <div className="blog-article-text">
            

          <br /> <br />
            <h2 className="blog-heading">MasterChef Ruksaar Sayeed Applauds Kashmir Trout for Elevating the Trout Industry</h2>
            <img src={blog2.src} alt="Office environment" className="blog-image" />
            <p className="blog-paragraph">
            During her visit to the Incubation Center at IIM Jammu, MasterChef Ruksaar Sayeed praised the efforts of Kashmir Trout in bringing the trout industry into the limelight. She described trout as a "hidden industry" and commended the team for their innovation and dedication in making it a culinary sensation.
            </p>

            

           
          <br /> <br />
            <h2 className="blog-heading">Peter Descoli Raves About Kashmir Trout: A “Fantafabulous” Culinary Experience</h2>
            <img src={blog1.src} alt="Office environment" className="blog-image" />
            <p className="blog-paragraph">
            Renowned traveler and food enthusiast Peter Descoli recently visited Kashmir Trout, where he was left in awe of the delectable trout preparations. Enthralled by the flavors and culinary artistry, he described the experience as nothing short of “fantafabulous.”
           </p>

           


           
          <br /> <br />
            <h2 className="blog-heading">Celebrity Chef Ranveer Brar Praises Kashmir Trout’s Exquisite Flavors
            </h2>
            <img src={blog121.src} alt="Office environment" className="blog-image" />
            <p className="blog-paragraph">
            Renowned celebrity chef Ranveer Brar recently visited Kashmir Trout and was highly impressed by the exceptional flavors introduced in the trout fish culinary industry.

Brar, known for his deep appreciation of regional cuisines, praised the restaurant’s innovative approach to trout preparations, highlighting the perfect blend of tradition and modern culinary techniques. He commended the way Kashmir Trout has elevated the art of trout cooking, making it a must-visit destination for seafood lovers.
           </p>



            
          <br /> <br />
            <h2 className="blog-heading">Rajdeep Sardesai Impressed by Kashmir Trout’s Grilled Delicacies and Ambiance</h2>
            <img src={blog5.src} alt="Office environment" className="blog-image" />
            <p className="blog-paragraph">
            
            Renowned journalist and news anchor Rajdeep Sardesai recently visited Kashmir Trout, where he was left amazed by the exquisite flavors of the grilled trout. Enthralled by the perfect balance of seasoning and freshness, he thoroughly enjoyed the delicacy, calling it a must-try for seafood lovers.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="blog-sidebar">
          <div className="blog-sidebar-sticky">
            <div className="blog-sidebar-box">
              <h3 className="blog-sidebar-title">COMPANY</h3>
              <ul className="blog-sidebar-list">
                <li><a href={`${base_url}/our-story`} className="blog-sidebar-link">About Us</a></li>
                <li><a href={`${base_url}/career`} className="blog-sidebar-link">Career</a></li>
               
              </ul>
            </div>

            <div className="blog-sidebar-box">
              <h3 className="blog-sidebar-title">RECENT POSTS</h3>
              <div className="blog-recent-posts">
                <div className="blog-recent-post">
                  <img src={blog4.src} alt="Blog thumbnail" className="blog-thumbnail" />
                  <div className="blog-recent-post-info">
                    <a href="#" className="blog-recent-post-title">Savoring Kashmir’s Delight: The Exquisite Taste of Trout</a>
                    <p className="blog-recent-post-summary">Read more...</p>
                  </div>
                </div>
                {/* Additional recent posts can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;