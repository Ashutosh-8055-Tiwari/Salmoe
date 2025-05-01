import React from 'react';
import swiggy from "../../../public/swiggy.png";
import zomato from '../../../public/zomato.jpg';
import Link from 'next/link';


const AvailableAt = () => {
    return (
        <div className='dflex flex-col gap-3'>
        <div className="available-at-container">
            <div className="available-at-inner">
                <h2 className="available-at-heading">AVAILABLE AT</h2>
                <div className="available-at-content">
                <Link href={`https://www.swiggy.com/city/srinagar/kashmir-trout-rajbagh-rainawari-rest764044`} target='#' >
                    <img src={swiggy.src} alt="Swiggy Instamart" className="available-at-img" />
                </Link>

                <Link href={`https://www.zomato.com/srinagar/kashmir-trout-rainawari`} target='#' >
                    <img src={zomato.src} alt="Zomato" className="available-at-img" />
                </Link>
                </div>
            </div>

            
        </div>

    




        </div>
    );
};

export default AvailableAt;