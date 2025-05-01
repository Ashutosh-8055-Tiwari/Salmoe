'use client'
import {  useEffect } from 'react';
import MainContainer from "../components/MainContainer";
import NewUserModal from "../components/newusermodal/NewUserModal";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import api from './api/api';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { setCurrentUser } from "../model/reducer/authReducer";
import { setLanguage } from '../model/reducer/languageReducer';
import { setSetting } from '../model/reducer/settingReducer';
import { setShop } from "../model/reducer/shopReducer";
import jsonFile from "../utils/en.json";
import { setFavouriteLength, setFavouriteProductIds } from '../model/reducer/favouriteReducer';
import Maintenance from '../components/maintenance/Maintenance';
import "../utils/i18n.js";


const App = () => {
  const dispatch = useDispatch();

  const setting = useSelector(state => (state.setting));

  const city = useSelector(state => (state.city));
  console.log("city in main app",city)
  const user = useSelector(state => (state.user));
  const cart = useSelector(state => (state.cart));
  const language = useSelector((state) => (state.language));
  const shop = useSelector((state) => (state.shop));
  const cssmode = useSelector(state => state.cssmode);
  const { i18n } = useTranslation(); 
  console.log("setting",setting);

  const applyTheme = () => {
    const storedTheme = cssmode?.cssmode;
    if (storedTheme) {
      document.body.setAttribute('data-bs-theme', storedTheme);
    }
  };

  useEffect(() => {
    if (user?.jwtToken !== "") {
      getCurrentUser(user?.jwtToken);
    }
    getSetting();
    applyTheme();
  }, []);

  useEffect(() => {
    // if (language?.current_language === null)
    api.getSystemLanguage(0, 1)
      .then(response => response.json())
      .then(result => {
        document.documentElement.dir = result?.data?.type;
        if (result.status === 1) {
          // if (language.current_language === null) {
          // console.log(result.data);
          if (result.data !== undefined) {
            dispatch(setLanguage({ data: result.data }));
          }
          else {
            dispatch(setLanguage({
              data: {
                "id": 15,
                "name": "English",
                "code": "en",
                "type": "LTR",
                "system_type": 3,
                "is_default": 1,
                "json_data": jsonFile,
                "display_name": "English",
                "system_type_name": "Website"
              }
            }));
          }

        }
      });

  }, []);



  useEffect(() => {
    if (language?.current_language) {
      const translateFile = typeof language.current_language.json_data === "object"
        ? { ...language.current_language.json_data }
        : { ...jsonFile };
     
      i18n.addResourceBundle(
        language.current_language.code,
        'translation',
        translateFile,
        true,
        false
      );
      i18n.changeLanguage(language.current_language.code);
    }
  }, [language, i18n]);

  


  const getCurrentUser = (token) => {
    api.getUser(token)
      .then(response => response.json())
      .then(result => {
        if (result.status === 1) {
          dispatch(setCurrentUser({ data: result.user }));
        }
      });
  };
  //fetching app-settings
  const getSetting = async () => {
    // if (setting?.setting == null)
    await api.getSettings(user?.user ? 1 : 0, user?.user ? user?.jwtToken : null).then(response => response.json())
      .then(result => {
        if (result.status === 1) {
          dispatch(setFavouriteLength({ data: result?.data?.favorite_product_ids?.length }));
          dispatch(setFavouriteProductIds({ data: result?.data?.favorite_product_ids }));
          if (result?.data?.default_city == undefined && city?.city) {
            const updatedSetting = {
              ...setting?.setting,
              default_city: {
                id: city?.city?.id,
                name: city?.city?.name,
                state: city?.city?.state,
                formatted_address: city?.city?.formatted_address,
                latitude: city?.city?.latitude,
                longitude: city?.city?.longitude
              }
            };
            console.log("setting", updatedSetting)
            dispatch(setSetting({ data: updatedSetting }));
            // dispatch(setFavouriteLength({ data: updatedSetting?.setting?.favorite_product_ids?.length }));
            // dispatch(setFavouriteProductIds({ data: updatedSetting?.setting?.favorite_product_ids }));
          } else {
            dispatch(setSetting({ data: result?.data }));
            // dispatch(setFavouriteLength({ data: result?.data?.favorite_product_ids?.length }));
            // dispatch(setFavouriteProductIds({ data: result?.data?.favorite_product_ids }));
          }
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    const fetchShop = (latitude, longitude) => {

      api.getShop(latitude, longitude, user?.jwtToken)
        .then(response => response.json())
        .then(result => {
          if (result.status === 1) {
            dispatch(setShop({ data: result.data }));
          }
        });
    };

    if (city.city !== null) {
      fetchShop(city.city?.latitude, city.city?.longitude);
    }
    // else {
    // fetchShop(setting?.setting?.map_latitude, setting?.setting?.map_longitude);
    // }
  }, [city]);


  useEffect(() => {
    document.title = setting.setting ? setting.setting.web_settings?.site_title : "Loading...";
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = setting.setting && setting.setting.web_settings?.favicon;
  });

  const RootCss = `
  :root {
    --body-background: #f3f5f7;
    --container-bg: #f2f3f9;
    --primary-color: #141a1f;
    --secondary-color: ${setting?.setting && setting?.setting?.web_settings?.color}; 
    --secondary-color-light: ${setting?.setting && setting?.setting?.web_settings?.light_color};
    --secondary-color-dark:${setting?.setting && setting?.setting?.web_settings?.dark_color};
    --sub-text-color: #8b8b8b;
    --second-cards-color: #ffffff;
    --text-field-color: #f8f8f8;
    --breadcrumb-bg: #efefef;
    --body-background-dark: #141414;
    --primary-color-dark: #e5e5e5;
    --gray-hover-color: #dcdcdc;
    --bg-danger: rgba(209, 31, 31, 0.3);
    --font-color: black;
    --bd-radius-8: 8px;
    --bd-radius-5: 5px;
    --bd-radius-10: 10px;
    --loader-bg: #fff;
    --skeleton-highlight-color: #f5f5f5;
    --skeleton-base-color: #ebebeb;
    --border-color:#d8e0e6;
  }
  [data-bs-theme="dark"]{
    --body-background: #141414;
    --primary-color: #202934;
    --secondary-color:${setting.setting && setting.setting.web_settings?.dark_color};
    --sub-text-color: #8b8b8b;
    --second-cards-color: #202934;
    --text-field-color: white;
    --gray-hover-color: #dcdcdc;
    --container-bg: #f2f3f9;
    --font-color: white;
    
    --font-heading: #141A1F;
    --loader-bg: transparent;
    --skeleton-highlight-color: #3a4a5a;
    --skeleton-base-color: #2e3a47;
    --border-color:#4A4949;
  }
  input[type="radio"]:checked {
    background-color: var(--secondary-color); /* Change background color when checked */
    padding: 3px;
    border: 3px solid #fff;
  }
  input[type="radio"] {
    appearance: none;
    width: 13px;
    margin: auto;
    height: 13px;
    border-radius: 50%;
    border: 1px solid;
    outline: none;
}
  `;

  if (setting?.setting?.web_settings?.website_mode === "1") {
    return (
      <>
        <style key={"override-style"}>{RootCss}</style>
    
          <meta name="title" content={setting?.setting?.web_settings?.common_meta_title} />
          <meta name="description" content={setting?.setting?.web_settings?.common_meta_description} />

        <Maintenance />
      </>
    );
  }

  return (
    <AnimatePresence>
     
      <style key={"override-style"}>{RootCss}</style>
 
        <meta name="title" content={setting?.setting?.web_settings?.common_meta_title} />
        <meta name="description" content={setting?.setting?.web_settings?.common_meta_description} />

      <div key={"home-container"} className="h-auto">
        {/* <Header key="header" /> */}
        <NewUserModal key="newUserModal" />
        <MainContainer />
        

        {/* <Footer key="footer" /> */}
        <ToastContainer theme={cssmode?.cssmode} key="toastContainer" bodyClassName={"toast-body"} className={"toastContainer"} toastClassName='toast-container-class' />
      </div>
    </AnimatePresence>

  );
};

export default App;;