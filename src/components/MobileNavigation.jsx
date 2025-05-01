import React, { useState } from 'react';
import { MenuIcon, X, ShoppingBag, Search, User } from 'lucide-react';


const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <div className="mobile-navigation">
      <div className="mobile-header">


      


        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>


        <div className="">
          <a href="/">
            <img src="/salmoe-logo.png" alt="COSMIX" className="logo-img" />
          </a>
        </div>
        
        <div className="icons">
          <button className="icon-button" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="icon-button" aria-label="Cart">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="menu-header">
              <div className="logo">
                <a href="/">
                  <img src="/logo.png" alt="COSMIX" className="logo-img" />
                </a>
              </div>
              <button onClick={toggleMenu} className="close-menu" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="menu-items">
              <div className="account-link">
                <a href="/login" className="menu-item">
                  <User size={20} />
                  <span>Login / Sign Up</span>
                </a>
              </div>
              <div className="menu-category">
                <button className="menu-category-title" onClick={() => toggleSubmenu('shop')}>
                  <span>SHOP</span>
                  <span>{activeSubmenu === 'shop' ? '-' : '+'}</span>
                </button>
                {activeSubmenu === 'shop' && (
                  <div className="submenu">
                    <h3>SHOP</h3>
                    <ul>
                      <li><a href="/products" className='text-decoration-none text-danger'>ALL PRODUCTS</a></li>
                      <li><a href="#" className='text-decoration-none text-danger' >SUPERFOODS</a></li>
                      <li><a href="#" className='text-decoration-none text-danger' >BESTSELLERS</a></li>
                      <li><a href="#" className='text-decoration-none text-danger' >BUNDLES</a></li>
                      <li><a href="#" className='text-decoration-none text-danger' >PROTEIN</a></li>
                    </ul>
                  </div>
                )}
              </div>
              <a href="/learn" className="menu-item">LEARN</a>
              <a href="/our-story" className="menu-item">ABOUT US</a>
            </div>
            <div className="promo-banner">
              <p>Get 10% OFF on your first order over ₹500 with code FIRSTJAR!</p>
            </div>
            <div className="footer-links">
              <a href="/contact">Contact Us</a>
              <a href="/faq">FAQ</a>
              <a href="/shipping">Shipping</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
