import React from "react";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="salmoe-footer">
      {/* Top Section */}
      <div className="salmoe-footer-top">
        <h2>JUST LIKE OUR MIXES, OUR EMAILS ARE BS-FREE TOO!</h2>
        <div className="salmoe-footer-subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>➜</button>
        </div>
        <div className="salmoe-footer-social">
          <a href="#"><Instagram size={34} /></a>
          <a href="#"><Linkedin size={34} /></a>
          <a href="#"><Youtube size={34} /></a>
          <a href="#"><Facebook size={34} /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="salmoe-footer-bottom">
        <div className="salmoe-footer-column">
          <h3>ABOUT US</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Learn with Cosmix</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className="salmoe-footer-column">
          <h3>CERTIFICATIONS</h3>
          <ul>
            <li><a href="#">GMP Certified</a></li>
            <li><a href="#">HACCP Certified</a></li>
            <li><a href="#">USFDA Certified</a></li>
            <li><a href="#">FSSAI Certified</a></li>
          </ul>
        </div>
        <div className="salmoe-footer-column">
          <h3>HELP</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="salmoe-footer-column salmoe-footer-contact">
          <h3>CONTACT</h3>
          <p>Cosmix Wellness</p>
          <p>📍 Shed no S3, Kanakapura Taluk, Karnataka, 562112</p>
          <p>📞 +91 63661 60553 (10AM - 12PM, 2PM - 4PM IST Mon-Fri)</p>
          <p>📩 <a href="mailto:info@cosmix.in">info@cosmix.in</a></p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="salmoe-footer-disclaimer">
        <p>DISCLAIMER: All statements are based on clinically studied benefits. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
        <p>All Rights Reserved © Cosmix Wellness Pvt. Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;