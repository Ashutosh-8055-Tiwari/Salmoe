"use client";

import "../styles/globals.css";
import React, { useEffect } from "react";
import store from "../model/store";
import { Provider } from "react-redux";
import { Persiststore } from "../model/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../utils/i18n.js";
import Navbar from "./navbar/navbar";
import Header from "./header/Header";
import Footer from "./newfooter/footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import ScrollTop from "./scrolltoTop/ScrollTop";
import "aos/dist/aos.css";
import walogo from "../../public/wa-logo.png";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/css/bootstrap.min.css");
      import("bootstrap");
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={Persiststore}>
          <Header />
          {/* <Navbar /> */}
          {children}
          <ScrollTop key="scrollTop" />
          <Footer />
          <a
  href="https://wa.me/+916005833945"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    backgroundColor: "#FA1313", 
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "14px",
    textDecoration: "none",
    gap: "10px",
  }}
>
  <img src={walogo.src} alt="WhatsApp" style={{ height: "24px", width: "24px" }} />
  Order on WhatsApp
</a>
        </PersistGate>
        <ToastContainer key="toastContainer" bodyClassName={"toast-body"} className={"toastContainer"} toastClassName="toast-container-class" />
      </Provider>
    </>
  );
}
