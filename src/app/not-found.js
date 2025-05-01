import React from 'react';
import Not_Found from '../utils/zero-state-screens/404.svg';



export const metadata = {
      metadataBase: new URL("https://www.kashmirtrout.com/"),
  title: "Not Found - Kashmir Trout",
};

const NotFound = (props) => {
 


  return (
    <section id='not-found' className='not-found'>
       
      <div className='container'>
        <div className='not-found-container'>

          <img src={Not_Found.src} alt='not-found' ></img>
          <p >{props.text ? props.text :"Page Not Found"}</p>
          <a href="/" className="btn btn-danger">Go To Home</a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
