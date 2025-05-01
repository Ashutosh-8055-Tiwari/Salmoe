import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as newApi from "../../app/api/apiCollection";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { setProductSizes } from "../../model/reducer/productSizesReducer";
import { clearAllFilter, setFilterCategory, setFilterSection } from '../../model/reducer/productFilterReducer';
import Loader from '../loader/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCards from './ProductCards';
import { useRouter } from 'next/navigation';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const ProductContainer = React.memo(({ BelowSectionOfferArray, isCartSidebarOpen, setIsCartSidebarOpen }) => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const { t } = useTranslation();
  const city = useSelector(state => state.city);
  const shop = useSelector(state => state.shop);

  console.log("shop in product container",shop)
  const sizes = useSelector(state => state.productSizes);
  const [productSizes, setproductSizes] = useState(null);
  const [offerConatiner, setOfferContainer] = useState(0);
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (sizes.sizes === null || sizes.status === 'loading') {
          if (city.city !== null) {
            const result = await newApi.productByFilter({ latitude: city.city.latitude, longitude: city.city.longitude });
            if (result.status === 1) {
              setproductSizes(result.sizes);
              dispatch(setProductSizes({ data: result.sizes }));
            }
          }
        } else {
          setproductSizes(sizes.sizes);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchProducts();
  }, [city, sizes]);

  return (
    <section id="products">
      <div className="container">
        {shop.shop === null || productSizes === null ? (
          <div className="d-flex justify-content-center">
            <Loader width={"100%"} height={"500px"} />
          </div>
        ) : (
          <>
            {shop?.shop?.sections?.map((section, index0) => {
              if (section.products.length > 0) {
                return (
                  <div key={index0}>
                    <div className='product_section row flex-column mx-auto' value={index0} onChange={(e) => { setOfferContainer(index0); }}>
                      <div className="d-flex product_title_content justify-content-between align-items-center col-md-12 mx-auto">
                        <div>
                          <div className="product-title-content-container">
                            <p className=''> Best Sellers <span className='text-decoration-underline text-secondary'>_____</span> </p>
                          </div>
                        </div>
                        <div className='d-flex align-items-center flex-md-row flex-column view-all-button'>
                          <div>
                            <Link href={`${base_url}/products`}>{t('see_all')}</Link>
                          </div>
                        </div>
                      </div>

                      <div className="product_section_content mx-auto position-relative">
                        {/* Custom Navigation Buttons */}
                        <div className='arrow-buton-div'>
                        <button
                          className={`prev-arrow-category prev-arrow-country section-${index0} `}
                        >
                          <IoIosArrowBack size={24} />
                        </button>
                        <button
                          className={`next-arrow-category next-arrow-country section-${index0}`}
                        >
                          <IoIosArrowForward  size={24} />
                        </button>
                        </div>

                        <Swiper
                          modules={[Navigation, Pagination]}
                          navigation={{
                            prevEl: `.prev-arrow-country.section-${index0}`,
                            nextEl: `.next-arrow-country.section-${index0}`,
                          }}
                          pagination={{ clickable: true }}
                          breakpoints={{
                            1200: {
                              slidesPerView: 3,
                              spaceBetween: 10
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 10
                            },
                            768: {
                              slidesPerView: 1,
                              spaceBetween: 10
                            },
                            500: {
                              slidesPerView: 1,
                              spaceBetween: 10
                            },
                            300: {
                              slidesPerView: 1,
                              spaceBetween: 10
                            },
                          }}
                        >
                          {section?.products?.map((product, index) => (
                            <SwiperSlide key={index}>
                              <ProductCards product={product} setIsCartSidebarOpen={setIsCartSidebarOpen} isCartSidebarOpen={isCartSidebarOpen} />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                    {BelowSectionOfferArray?.filter((offer) => offer?.section?.title === section?.title)?.map((offer) => (
                      <div
                        className='col-md-12 p-0 col-12 my-5'
                        key={offer?.id}
                        onClick={() => {
                          if (offer?.category) {
                            dispatch(setFilterCategory({ data: offer?.category?.id.toString() }));
                            navigate.push(`${base_url}/products`);
                          } else if (offer?.product) {
                            navigate.push(`${base_url}/product/${offer.product.slug}`);
                          } else if (offer?.offer_url) {
                            window.open(offer?.offer_url, "_blank");
                          }
                        }}
                      >
                        <img
                          className={`offerImages ${offer?.category ? "cursorPointer" : ""} ${offer?.product ? "cursorPointer" : ""} ${offer?.offer_url ? "cursorPointer" : ""}`}
                          src={offer.image_url}
                          alt="offers"
                        />
                      </div>
                    ))}
                  </div>
                );
              }
            })}
          </>
        )}
      </div>
    </section>
  );
});

export default ProductContainer;
