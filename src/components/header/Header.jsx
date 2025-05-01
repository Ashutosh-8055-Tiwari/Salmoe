'use client'
import React, { useState, useEffect, useRef } from 'react';
// import './header.css';
import salmoelogo from "../../../public/salmoe-logo.png"
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../app/api/api';
import * as newApi from '../../app/api/apiCollection';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import relax from "../../../public/Relax.webp"
import immunity from "../../../public/Immunity.webp"
import MobileNavigation from "../MobileNavigation"

import { Dropdown as AntdDropdown, Space } from 'antd';
import { Menu, Modal } from 'antd';
// import "../location/location.css";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { IoMdCall } from "react-icons/io";
import image1 from "../../../public/products.png"
import image2 from "../../../public/farmer.png"
import image3 from "../../../public/recepies.png"
import image4 from "../../../public/story.png"
import { IoCloseOutline } from "react-icons/io5";

// reducres import
import { setCity } from "../../model/reducer/locationReducer";
import { setPaymentSetting } from '../../model/reducer/settingReducer';
import { setLanguage, setLanguageList } from "../../model/reducer/languageReducer";
import { setFilterSearch, setFilterCategory, setProductBySearch, setFilterBrands, setFilterSection } from "../../model/reducer/productFilterReducer";
import { setCSSMode } from '../../model/reducer/cssmodeReducer';
import { setCart, setCartProducts, setCartSubTotal, setIsGuest, setTotalCartValue } from '../../model/reducer/cartReducer';


// icons import
import { BsMoon, BsShopWindow } from 'react-icons/bs';
import { BiBell, BiBookmarkHeart, BiCartAlt, BiMoneyWithdraw, BiUserCircle, BiWallet } from 'react-icons/bi';
import { MdSearch, MdGTranslate, MdNotificationsActive, MdOutlineWbSunny, MdOutlinePhoneInTalk, MdPhoneInTalk } from "react-icons/md";
import { IoNotificationsOutline, IoHeartOutline, IoCartOutline, IoPersonOutline, IoContrast, IoCloseCircle, IoLocationOutline, IoWalletOutline } from 'react-icons/io5';
import { IoMdArrowDropdown, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoLocation } from 'react-icons/go';
import { FiMenu, FiFilter, FiUser } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaSearch, FaPhoneVolume, FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { BsCart2, BsThreeDotsVertical } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { BiMoon, BiSun } from "react-icons/bi";
import { AiFillInstagram ,  AiFillYoutube, AiFillFacebook } from "react-icons/ai";
// components imports
import Location from '../location/Location';
import Login from '../login/Login';
import Cart from '../cart/Cart';
import { label } from 'yet-another-react-lightbox';
import { logoutAuth } from '../../model/reducer/authReducer';
import { removelocalstorageOTP } from '../../utils/manageLocalStorage';
import { clearAllFilter } from '../../model/reducer/productFilterReducer';
import { setCategory, setSelectedCategory } from '../../model/reducer/categoryReducer';



const Header = () => {

    const [shopMenuOpen, setShopMenuOpen] = useState(false);

    const base_url = process.env.NEXT_PUBLIC_BASE_URL;
    
    const closeSidebarRef = useRef();
    const searchNavTrigger = useRef();
    const { t } = useTranslation();
    const navigate = useRouter();
    const dispatch = useDispatch();

   
    const shop = useSelector(state => state.shop);
    const city = useSelector(state => (state.city));
    const cssmode = useSelector(state => (state.cssmode));
    const user = useSelector(state => (state.user));
    const cart = useSelector(state => (state.cart));
    console.log("city",city);
    const favorite = useSelector(state => (state.favourite));
    const setting = useSelector(state => (state.setting));
    const languages = useSelector((state) => (state.language));
    const category = shop && shop?.shop?.categories;
    console.log("seller",shop?.shop?.sellers)
    const filter = useSelector(state => state.productFilter);


    const [isSticky, setIsSticky] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [bodyScroll, setBodyScroll] = useState(false);
    const [locModal, setLocModal] = useState(false);
    const [mobileNavActKey, setMobileNavActKey] = useState(null);
    const [isLocationPresent, setisLocationPresent] = useState(false);
    const [totalNotification, settotalNotification] = useState(null);
    const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 768);
    const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedCategoryId, setSelectedCategoryId] = useState("")
    const [query, setQuery] = useState("")
    const [typingTimeout, setTypingTimeout] = useState(null);

    const pathname  =  usePathname();

    // const openCanvasModal = () => {
    //     handleModal();
    //     closeSidebarRef.current.click();
    // };

    const socialMedia = [
        {
          id: 1,
          icon: "fab fa-instagram",
          link: "https://www.instagram.com/kashmirtrout/",
        },
        {
          id: 5,
          icon: "fab fa-facebook",
          link: "https://www.facebook.com/kashmirtrout",
        },
      ];

    const FIRST_TIME_LOCATION_MODAL_KEY = "firstTimeLocationModal"; // Changed to a string

    useEffect(() => {
        const hasModalBeenShown = localStorage.getItem(FIRST_TIME_LOCATION_MODAL_KEY);
        const allowedRoutes = ["/", "/products"];

        if (hasModalBeenShown === null && allowedRoutes.includes(pathname)) {                           
            setTimeout(() => {
                setLocModal(true);
                localStorage.setItem(FIRST_TIME_LOCATION_MODAL_KEY, "true");
            }, 10000);
        }
    }, [pathname]); 




    const handleWhatsAppClick = () => {
        const phoneNumber = "6005833945"; 
        const message = "Hello there! I want to chat with you.";
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, "_blank"); 
      };

    const handleDownloadPdf = () => {
    
        const pdfUrl = '/cookbook.pdf';
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CookBook.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
      };




    const handleLogout = () => {

        confirmAlert({
            title: t('logout_title'),
            message: t('logout_message'),
            buttons: [
                {
                    label: t("Ok"),
                    onClick: async () => {
                        await api.logout(user?.jwtToken).then(response => response.json())
                            .then(result => {
                                if (result.status === 1) {
                                    removelocalstorageOTP();
                                    dispatch(setFilterBrands({ data: [] }));
                                    dispatch(setFilterCategory({ data: null }));
                                    dispatch(setFilterSearch({ data: null }));
                                    dispatch(setFilterSection({ data: null }));
                                    dispatch(setCartProducts({ data: [] }));
                                    dispatch(setCartSubTotal({ data: 0 }));
                                    dispatch(logoutAuth({ data: null }));
                                    dispatch(setIsGuest({ data: true }));
                                    toast.success("You're Successfully Logged Out");
                                    navigate.push('/');
                                }
                                else {
                                    toast.info(result.message);
                                }
                            });

                    }
                },
                {
                    label: t('Cancel'),
                    onClick: () => { }
                }
            ]
        });


    };

    const items = [
        {
            key: '1',
            label: (
                <span onClick={() => navigate.push(`${base_url}/profile`)} className="custom-dropdown-item">
                    <BiUserCircle size={22} />
                    {t("editProfile")}
                </span>
            ),
        },
        {
            key: '2',
            label: (
                <span onClick={() => navigate.push(`${base_url}/profile/orders`)} className="custom-dropdown-item">
                    <BiCartAlt size={22} />
                    {t("orders")}
                </span>
            )
        },
        {
            key: '3',
            label: (
                <span onClick={() => navigate.push(`${base_url}/wishlist`)} className="custom-dropdown-item">
                    <BiBookmarkHeart size={22} />
                    {t("wishlist")}
                </span>
            )
        },
        {
            key: '4',
            label: (
                <span onClick={() => navigate.push(`${base_url}/notification`)} className="custom-dropdown-item">
                    <BiBell size={22} />
                    {t("notification")}
                </span>
            )
        },
        {
            key: '5',
            label: (
                <span className="custom-dropdown-item" onClick={() => navigate.push(`${base_url}/profile/address`)}>
                    <IoLocationOutline size={22} />
                    {t("myAddress")}
                </span>
            )
        },
        {
            key: '6',
            label: (
                <span className="custom-dropdown-item" onClick={() => navigate.push(`${base_url}/profile/wallet-transaction`)}>
                    <BiWallet size={22} />
                    {t("walletBalance")}
                </span>
            )
        },
        {
            key: '7',
            label: (
                <span onClick={() => navigate.push(`${base_url}/profile/transactions`)} className="custom-dropdown-item">
                    <BiMoneyWithdraw size={22} />
                    {t("myTransaction")}
                </span>
            )
        },
        {
            key: '8',
            label: (
                <span className="custom-dropdown-item" onClick={handleLogout}>
                    <RiLogoutCircleRLine size={20} />
                    {t("logout")}
                </span>
            )
        },
    ];



    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const result = await newApi.getCart({ latitude: city?.city?.latitude, longitude: city?.city?.longitude })
                if (result.status == 1) {
                    const productsData = result?.data?.cart?.map((product) => {
                        return {
                            product_id: product?.product_id,
                            product_variant_id: product?.product_variant_id,
                            qty: product?.qty
                        };
                    });
                    dispatch(setCartProducts({ data: productsData }));
                    dispatch(setCartSubTotal({ data: result?.data?.sub_total }))

                } else if (result.message == "No item(s) found in users cart") {
                    dispatch(setCartProducts({ data: [] }));
                }
            } catch (err) {
                console.log(err?.message);
            }
        };
        if (user?.jwtToken) {
            fetchCartData()
        }
    }, [user?.jwtToken])

    // cart?.cartSubTotal, cart?.guestCartTotal
    useEffect(() => {
        if (bodyScroll) {
            document.body.style.overflow = 'auto';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    }, [bodyScroll]);


    const handleModal = () => {
        setLocModal(true);
        setBodyScroll(true);
    };

    useEffect(() => {
        if (pathname != "/products") {

            dispatch(setFilterSearch({ data: null }));
        }
    }, [navigate]);


    // useEffect(() => {
    //     const fetchCity = async () => {
    //         try {
    //             if (setting.setting?.default_city && city.city == null) {
    //                 // Default city is set and no city is selected yet
    //                 setisLocationPresent(true);
    //                 const latitude = parseFloat(setting.setting.default_city.latitude);
    //                 const longitude = parseFloat(setting.setting.default_city.longitude);
    //                 const response = await newApi.getCity({ latitude, longitude });
    
    //                 if (response.status === 1) {
    //                     dispatch(setCity({ data: response.data }));
    //                 } else {
    //                     setLocModal(true); // Show modal if fetching city fails
    //                 }
    //             } else if (!setting.setting?.default_city && city?.city == null) {
    //                 // No default city and no city is selected
    //                 setLocModal(true);
    //             }
    
    //             // Prompt the user to add their location after a delay
    //             setTimeout(() => {
    //                 setLocModal(true);
    //             }, 5000); // Example: Show the modal after 10 seconds
    //         } catch (error) {
    //             console.log("Error fetching city:", error);
    //         }
    //     };
    
    //     fetchCity();
    // }, [setting]);
    useEffect(() => {
        const FIRST_TIME_LOCATION_MODAL_KEY = false;
         
            
            const fetchCity = async () => {
                        try {
                            if (setting.setting?.default_city && city.city == null) {
                                // Default city is set and no city is selected yet
                                setisLocationPresent(true);
                                const latitude = parseFloat(setting.setting.default_city.latitude);
                                const longitude = parseFloat(setting.setting.default_city.longitude);
                                const response = await newApi.getCity({ latitude, longitude });
                
                                if (response.status === 1) {
                                    dispatch(setCity({ data: response.data }));
                                    
                                } else {
                                   
                                        setLocModal(true);
                                        
                                }
                            } 
                
            
                    
                        } catch (error) {
                            console.log("Error fetching city:", error);
                        }
                    };
                
                    fetchCity();

    }, [setting]);
    

    useEffect(() => {
        // if (languages?.available_languages === null) {
        api.getSystemLanguage(0, 0)
            .then((response) => response.json())
            .then((result) => {
                dispatch(setLanguageList({ data: result.data }));
            });
        // }
        if (pathname === "/" || 
            pathname === "/profile/wallet-transaction" || 
            pathname === "/checkout") {
            fetchPaymentSetting();
        }
        // dispatch(setFilterSearch({ data: null }));
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        const handleClickOutside = (event) => {
            if (closeSidebarRef.current && !closeSidebarRef.current.contains(event.target) && !event.target.closest(".lang-mode-utils")) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const fetchPaymentSetting = async () => {
        await api.getPaymentSettings(user?.jwtToken)
            .then(response => response.json())
            .then(result => {
                if (result.status === 1) {
                    dispatch(setPaymentSetting({ data: JSON.parse(atob(result.data)) }));
                }
            })
            .catch(error => console.log(error));
    };

    const handleChangeLanguage = (id) => {
        api.getSystemLanguage(id, 0)
            .then(response => response.json())
            .then(result => {
                if (result.status === 1) {
                    document.documentElement.dir = result.data.type;
                    dispatch(setLanguage({ data: result.data }));
                }
            });
    };

    const selectCategory = (category) => {
        dispatch(clearAllFilter())
        dispatch(setFilterCategory({ data: category.id }));
        if (category?.has_child === true) {
            navigate.push(`${base_url}/category/${category.slug}`);
            dispatch(setSelectedCategory(category));
            // navigate.push(`/category/${category.slug}`, { state: { categoryName: category.name } });
        } else {
            navigate.push(`${base_url}/products`);
        }
    };

    const placeHolderImage = (e) => {
        e.target.src = setting.setting?.web_logo;
    };

    const handleResize = () => {
        setIsDesktopView(window.innerWidth > 768);
    };

    // console.log(isDesktopView)
    const handleMobileNavActKey = (key) => {
        setMobileNavActKey(key == mobileNavActKey ? null : key);
    };

    const handleThemeChange = (theme) => {
        document.body.setAttribute("data-bs-theme", theme);
        dispatch(setCSSMode({ data: theme }));
    };

    const handleCatChange = (category) => {
        setSelectedCategory(category?.name)
        setSelectedCategoryId(category?.id)
    }

    const handleSearch = async (query) => {
        try {
            const response = await newApi.productByFilter({ latitude: city?.city?.latitude, longitude: city?.city?.longitude, filters: filter })
            dispatch(setProductBySearch({ data: response?.data }))
        } catch (error) {
            console.log("error", error)
        }
    }

    const handleQueryChange = (e) => {
        const value = e.target.value;
        if (value.trim() === "") {
            dispatch(setFilterSearch({ data: "" }))
            // dispatch(setFilterCategory({ data: value }))
            clearTimeout(typingTimeout)
            return
        }
        setQuery(value);
        dispatch(setFilterSearch({ data: e.target.value }))
        dispatch(setFilterCategory({ data: selectedCategoryId }))

        // Clear the previous timeout
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        // Set a new timeout for 5 seconds
        const timeout = setTimeout(() => {
            handleSearch(e.target.value);
        }, 2000);

        // Store the timeout ID
        setTypingTimeout(timeout);
    };
    // console.log("setting", setting.setting.web_settings?.placeholder_image)
    return (
        <>
         <MobileNavigation />
        <header className="cosmix-header">
        {/* Top sliding message bar */}
        <div className="message-bar">
          <div className="sliding-messages">
            <p className="message wallet-currency">Get 10% OFF on your first order over ₹500 with code FIRSTJAR!</p>
            <p className="message wallet-currency ">Free shipping on all orders above ₹999!</p>
            <p className="message wallet-currency ">Buy 2, get 1 FREE on select products!</p>
            <p className="message wallet-currency ">Get 10% OFF on your first order over ₹500 with code FIRSTJAR!</p>
            <p className="message wallet-currency ">Free shipping on all orders above ₹999!</p>
            <p className="message wallet-currency ">Buy 2, get 1 FREE on select products!</p>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="main-nav sticky-position">
          <div className="nav-left">
            <div 
              className="nav-item dropdown-trigger"
              onMouseEnter={() => setShopMenuOpen(true)}
              onMouseLeave={() => setShopMenuOpen(false)}
            >
              <span>SHOP</span>
              {shopMenuOpen && (
                <div className="mega-menu">
                  <div className="menu-container">
                    <div className="menu-column">
                      <h3>SHOP</h3>
                      <ul>
                        <li><a href="/products"><span>›</span> ALL PRODUCTS</a></li>
                        <li><a href="#"><span>›</span> SUPERFOODS</a></li>
                        <li><a href="#"><span>›</span> BESTSELLERS</a></li>
                        <li><a href="#"><span>›</span> BUNDLES</a></li>
                        <li><a href="#"><span>›</span> PROTEIN</a></li>
                      </ul>
                    </div>
                    
                    <div className="menu-column">
                      <h3>BY SOLUTION</h3>
                      <ul>
                        <li><a href="#"><span>›</span> DIGESTION</a></li>
                        <li><a href="#" className="highlight"><span>›</span> PROTEIN</a></li>
                        <li><a href="#"><span>›</span> HORMONAL HEALTH</a></li>
                        <li><a href="#"><span>›</span> SKIN & HAIR</a></li>
                        <li><a href="#"><span>›</span> RELAX</a></li>
                        <li><a href="#"><span>›</span> ENERGY</a></li>
                        <li><a href="#"><span>›</span> IMMUNITY</a></li>
                        <li><a href="#"><span>›</span> LIVER HEALTH</a></li>
                      </ul>
                    </div>
                    
                    <div className="menu-column">
                      <h3>BUILD YOUR OWN<br />PROTEIN BUNDLE</h3>
                      <ul>
                        <li><a href="#"><span>›</span> 500GM</a></li>
                        <li><a href="#"><span>›</span> SINGLE SERVE SACHETS</a></li>
                        <li><a href="#"><span>›</span> 1KG</a></li>
                      </ul>
                    </div>
                    
                    <div className="menu-promos">
                      <div className="promo-card">
                        <img src={relax.src} alt="Customer testimonial" />
                        <div className="promo-text">
                          <h4>Real People,<br />Real Results</h4>
                        </div>
                      </div>
                      
                      <div className="promo-card">
                        <img src={immunity.src} alt="Protein product" />
                        <div className="promo-text">
                          <h4>Eat Your Protein!</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a href="/learn" className="nav-item">Learn</a>
            <a href="/our-story" className="nav-item">ABOUT US</a>
          </div>
          
          <div className="logo">
            <a href='/'>
            <img src={salmoelogo.src} alt="COSMIX" />
            </a>
          </div>
          
          <div className="nav-right">
            <a href="#" className="nav-item">SEARCH</a>
            <a href="#" className="nav-item">CART</a>
            <a href="#" className="nav-item">Login</a>
          </div>
        </nav>
      </header>
      </>
    );
};

export default Header;
