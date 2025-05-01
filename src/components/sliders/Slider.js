import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/Loader';
import { useRouter } from 'next/navigation';
import { setSelectedProductId } from '../../utils/manageLocalStorage';
import { setFilterCategory } from '../../model/reducer/productFilterReducer';
import { setSelectedProduct } from '../../model/reducer/selectedProduct';
import Link from 'next/link';
import logo from "../../../public/biglogowhite.png";
// import logo from "../../../public/mainlogo.png";

const Slider = () => {
    const navigate = useRouter();
    const dispatch = useDispatch();

    const language = useSelector((state) => state.language);
    const setting = useSelector((state) => state.setting);
    const shop = useSelector((state) => state.shop);

    const base_url = process.env.NEXT_PUBLIC_BASE_URL;

    const handleImageUrl = (slide) => {
        switch (slide.type) {
            case "category":
                dispatch(setFilterCategory({ data: slide.type_id }));
                navigate.push(`${base_url}/products`);
                break;
            case "product":
                dispatch(setSelectedProduct({ data: slide.type_id }));
                setSelectedProductId(slide.type_id);
                const productNameArr = slide.type_name?.split(" ")?.map(name => name.toLowerCase());
                navigate.push(`${base_url}/product/${productNameArr?.join("-")}`);
                break;
            default:
                break;
        }
    };

    const placeHolderImage = (e) => {
        e.target.src = setting.setting?.web_logo;
    };

    return (
        <div className="slider">
            {shop.shop === null ? (
                <Loader width="100%" height="500px" screen="full" />
            ) : (
                <div>
                    <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        spaceBetween={0}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        key={language.current_language && language.current_language.type}
                    >
                       {shop?.shop?.sliders?.map((sld, index) => (
                        <>
    <SwiperSlide key={index}>
        <div className="slider-container">
            <img
                src={sld.image_url}
                className="imgclass"
                onError={placeHolderImage}
                alt={sld.type}
                id="slider-photo"
            />
            <div className="slider-logo">
                <button className={`btn ${sld.id === 32 ? 'border border-black' : ''}`}>
                    <Link 
                        href={`${base_url}/products`} 
                        className={`text-decoration-none sliderlogo-button ${sld.id === 32 ? 'text-black' : 'text-white'}`}
                    >
                        Shop Now
                    </Link>
                </button>
            </div>
        </div>
    </SwiperSlide>
    
   </>
))}
 <div className="custom-marquee">
     <div className="marquee-content">
       <span>REAL INGREDIENTS &nbsp; ✦ &nbsp; ROOT-CAUSE APPROACH &nbsp; ✦ &nbsp; COMMUNITY FIRST &nbsp; ✦ &nbsp; THOUGHTFULLY FORMULATED &nbsp; ✦ &nbsp; SUSTAINABLY SOURCED &nbsp; ✦ &nbsp; REAL INGREDIENTS &nbsp; ✦ &nbsp; ROOT-CAUSE APPROACH &nbsp; ✦ &nbsp; COMMUNITY FIRST  ✦ &nbsp; ROOT-CAUSE APPROACH &nbsp; ✦ &nbsp; COMMUNITY FIRST &nbsp; ✦ &nbsp; THOUGHTFULLY FORMULATED &nbsp; ✦ &nbsp; SUSTAINABLY SOURCED &nbsp; ✦ &nbsp; REAL INGREDIENTS &nbsp; ✦ &nbsp; ROOT-CAUSE APPROACH &nbsp; ✦ &nbsp; COMMUNITY FIRST</span>
     </div>
   </div>


                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default Slider;
