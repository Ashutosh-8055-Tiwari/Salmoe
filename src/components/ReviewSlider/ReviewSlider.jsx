// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";


// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const testimonials = [
//     { rating: 5, content: "Product is tasty and delicious", author: "Arindam P", role: "Verified Customer" },
//     { rating: 5, content: "Very tasty and same taste.", author: "Gokul SD", role: "Verified Buyer" },
//     { rating: 5, content: "Best and healthy product and quality is also brilliant.", author: "Prem Grover", role: "Regular Customer" },
//     { rating: 5, content: "Amazing quality and packaging!", author: "Divya S", role: "Verified Purchase" },
//     { rating: 5, content: "Worth every penny!", author: "Rohit M", role: "Loyal Customer" },
//     { rating: 5, content: "Product is tasty and delicious", author: "Arindam P", role: "Verified Customer" },
//     { rating: 5, content: "Very tasty and same taste.", author: "Gokul SD", role: "Verified Buyer" },
//     { rating: 5, content: "Best and healthy product and quality is also brilliant.", author: "Prem Grover", role: "Regular Customer" },
//     { rating: 5, content: "Amazing quality and packaging!", author: "Divya S", role: "Verified Purchase" },
//     { rating: 5, content: "Worth every penny!", author: "Rohit M", role: "Loyal Customer" },
//     { rating: 5, content: "Product is tasty and delicious", author: "Arindam P", role: "Verified Customer" },
//     { rating: 5, content: "Very tasty and same taste.", author: "Gokul SD", role: "Verified Buyer" },
//     { rating: 5, content: "Best and healthy product and quality is also brilliant.", author: "Prem Grover", role: "Regular Customer" },
//     { rating: 5, content: "Amazing quality and packaging!", author: "Divya S", role: "Verified Purchase" },
//     { rating: 5, content: "Worth every penny!", author: "Rohit M", role: "Loyal Customer" },
//     { rating: 5, content: "Product is tasty and delicious", author: "Arindam P", role: "Verified Customer" },
//     { rating: 5, content: "Very tasty and same taste.", author: "Gokul SD", role: "Verified Buyer" },
//     { rating: 5, content: "Best and healthy product and quality is also brilliant.", author: "Prem Grover", role: "Regular Customer" },
//     { rating: 5, content: "Amazing quality and packaging!", author: "Divya S", role: "Verified Purchase" },
//     { rating: 5, content: "Worth every penny!", author: "Rohit M", role: "Loyal Customer" },
//     { rating: 5, content: "Product is tasty and delicious", author: "Arindam P", role: "Verified Customer" },
//     { rating: 5, content: "Very tasty and same taste.", author: "Gokul SD", role: "Verified Buyer" },
//     { rating: 5, content: "Best and healthy product and quality is also brilliant.", author: "Prem Grover", role: "Regular Customer" },
//     { rating: 5, content: "Amazing quality and packaging!", author: "Divya S", role: "Verified Purchase" },
//     { rating: 5, content: "Worth every penny!", author: "Rohit M", role: "Loyal Customer" },
//   ];

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 5));
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 5)) % Math.ceil(testimonials.length / 3));
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="testimonials-container">
//       <div className="testimonials-header">
//         <h2 className="testimonials-title">What Our Customers Say</h2>
//         <div className="testimonials-stars">
//           {[...Array(5)].map((_, i) => (
//             <Star key={i} className="star-icon" />
//           ))}
//         </div>
//         <p className="testimonials-count">{testimonials.length} verified reviews</p>
//       </div>

//       <div className="testimonials-slider">
//         <div className="slider-wrapper">
//           <div
//             className="slider-track"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="slider-item">
//                 <div className="testimonial-card">
//                   <div className="card-stars">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="star-icon" />
//                     ))}
//                   </div>
//                   <p className="testimonial-content">"{testimonial.content}"</p>
//                   <div className="testimonial-author">
//                     <span className="author-name">{testimonial.author}</span>
//                     <span className="author-role">{testimonial.role}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button onClick={prevSlide} className="slider-btn left-btn" disabled={isAnimating}>
//           <ChevronLeft className="btn-icon" />
//         </button>
//         <button onClick={nextSlide} className="slider-btn right-btn" disabled={isAnimating}>
//           <ChevronRight className="btn-icon" />
//         </button>

//         {/* <div className="slider-dots">
//           {Array.from({ length: Math.ceil(testimonials.length / 5) }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`dot ${currentIndex === index ? 'active-dot' : ''}`}
//             />
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// const Testimonials = () => {
//   const [reviews, setReviews] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Replace with your API key and location ID
//   const API_KEY = "AIzaSyC0rWM2oO2fVnbqtL7VakTPifBzIA0dEGE";
//   const LOCATION_ID = "10166732613847012081";
//   const ACCOUNT_ID = ""; // Replace with your account ID
  
//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get(
//         `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`,
//         { headers: { Authorization: `Bearer ${API_KEY}` } }
//       );
//       console.log("ye hai response",response)

//       // Transform reviews into your component's format
//       const fetchedReviews = response.data.reviews.map((review) => ({
//         rating: review.starRating,
//         content: review.comment,
//         author: review.reviewer.displayName,
//         role: "Google Reviewer",
//       }));

//       setReviews(fetchedReviews);
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     }
//   };

//   fetchReviews();
//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(reviews.length / 5));
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(reviews.length / 5)) % Math.ceil(reviews.length / 5));
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [reviews]);

//   return (
//     <div className="testimonials-container">
//       <div className="testimonials-header">
//         <h2 className="testimonials-title">What Our Customers Say</h2>
//         <div className="testimonials-stars">
//           {[...Array(5)].map((_, i) => (
//             <Star key={i} className="star-icon" />
//           ))}
//         </div>
//         <p className="testimonials-count">{reviews.length} verified reviews</p>
//       </div>

//       <div className="testimonials-slider">
//         <div className="slider-wrapper">
//           <div
//             className="slider-track"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {reviews.map((review, index) => (
//               <div key={index} className="slider-item">
//                 <div className="testimonial-card">
//                   <div className="card-stars">
//                     {[...Array(review.rating)].map((_, i) => (
//                       <Star key={i} className="star-icon" />
//                     ))}
//                   </div>
//                   <p className="testimonial-content">"{review.content}"</p>
//                   <div className="testimonial-author">
//                     <span className="author-name">{review.author}</span>
//                     <span className="author-role">{review.role}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button onClick={prevSlide} className="slider-btn left-btn" disabled={isAnimating}>
//           <ChevronLeft className="btn-icon" />
//         </button>
//         <button onClick={nextSlide} className="slider-btn right-btn" disabled={isAnimating}>
//           <ChevronRight className="btn-icon" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// const Testimonials = () => {
//   const [reviews, setReviews] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const API_KEY = "AIzaSyC0rWM2oO2fVnbqtL7VakTPifBzIA0dEGE";
//   const LOCATION_ID = "10166732613847012081";
//   const ACCOUNT_ID = ""; // Replace with your account ID

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`,
//           { headers: { Authorization: `Bearer ${API_KEY}` } }
//         );

//         const fetchedReviews = response.data.reviews.map((review) => ({
//           rating: review.starRating,
//           content: review.comment,
//           author: review.reviewer.displayName,
//           role: "Google Reviewer",
//         }));

//         setReviews(fetchedReviews);
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//         setReviews([]); // Fallback to an empty state
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, [API_KEY, LOCATION_ID, ACCOUNT_ID]);

//   const nextSlide = () => {
//     if (!isAnimating && reviews.length > 0) {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(reviews.length / 5));
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating && reviews.length > 0) {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(reviews.length / 5)) % Math.ceil(reviews.length / 5));
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [reviews]);

//   if (loading) {
//     return <p className="loading-text">Loading reviews...</p>;
//   }

//   if (reviews.length === 0) {
//     return <p className="empty-text">No reviews available at the moment.</p>;
//   }

//   return (
//     <div className="testimonials-container">
//       <div className="testimonials-header">
//         <h2 className="testimonials-title">What Our Customers Say</h2>
//         <div className="testimonials-stars">
//           {[...Array(5)].map((_, i) => (
//             <Star key={i} className="star-icon" />
//           ))}
//         </div>
//         <p className="testimonials-count">{reviews.length} verified reviews</p>
//       </div>

//       <div className="testimonials-slider">
//         <div className="slider-wrapper">
//           <div
//             className="slider-track"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {reviews.map((review, index) => (
//               <div key={index} className="slider-item">
//                 <div className="testimonial-card">
//                   <div className="card-stars">
//                     {[...Array(review.rating)].map((_, i) => (
//                       <Star key={i} className="star-icon" />
//                     ))}
//                   </div>
//                   <p className="testimonial-content">"{review.content}"</p>
//                   <div className="testimonial-author">
//                     <span className="author-name">{review.author}</span>
//                     <span className="author-role">{review.role}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button onClick={prevSlide} className="slider-btn left-btn" disabled={isAnimating}>
//           <ChevronLeft className="btn-icon" />
//         </button>
//         <button onClick={nextSlide} className="slider-btn right-btn" disabled={isAnimating}>
//           <ChevronRight className="btn-icon" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

// import React, { useEffect } from 'react';

// const ElfsightWidget = () => {
//   useEffect(() => {
//     // Create script element
//     const script = document.createElement('script');
//     script.src = 'https://static.elfsight.com/platform/platform.js';
//     script.async = true;
    
//     // Append script to document
//     document.body.appendChild(script);

//     // Cleanup function
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []); // Empty dependency array means this runs once on mount

//   return (
//     <div 
//       className="elfsight-app-34b8d195-b623-405f-bff8-85ddb25bec6d" 
//       data-elfsight-app-lazy
//     />
//   );
// };

// export default ElfsightWidget;
// components/ReviewSlider/ReviewSlider.jsx
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const GoogleReviewsFetcher = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.result?.reviews) {
          setReviews(data.result.reviews);
        } else {
          setError('No reviews found');
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div className="text-center">Loading reviews...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;
  if (!reviews.length) return <div className="text-center">No reviews available</div>;

  const filteredReviews = reviews.filter((review) => review.rating === 5);

  const trimText = (text, maxLength = 210) => {
    return text.length > maxLength ? text.substring(0, maxLength) + ' ' + '.....' : text;
  };

  return (
    <div className="google-reviews-container">
      <div className="testimonials-header">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        <div className="testimonials-stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="star-icon" />
          ))}
        </div>
      </div>

      <div className="reviews-wrapper">
        {filteredReviews.slice(0, 4).map((review, index) => (
          <div className="review-card" key={index}>
            <div className="author-info">
              <img
                src={review.profile_photo_url || '/default-avatar.png'}
                alt={`${review.author_name}'s profile`}
                className="review-avatar"
              />
              <span className="font-medium">{review.author_name}</span>
            </div>

            <div className="rating">
              <span className="font-bold">{review.rating}.0</span>
              <div className="stars ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
            </div>

            <p className="review-text">{trimText(review.text, 210)}</p>
            <span className="review-date">
              {new Date(review.time * 1000).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviewsFetcher;
