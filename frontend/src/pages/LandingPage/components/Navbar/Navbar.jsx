import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';
import NavbarLogin from './NavbarLogin';
import './Navbar.css';

const HamburgerIcon = () => (
  <svg className="hamburger-icon" viewBox="0 0 24 24" width="32" height="32" fill="white">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
);

const CloseIcon = () => (
  <svg className="close-icon" viewBox="0 0 24 24" width="32" height="32" fill="white">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <NavbarLogo />
        <NavbarMenu />
        <div className="navbar-right-actions">
          <NavbarLogin />
          <button 
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div style={{color: 'white'}}>
            <NavbarLogo />
          </div>
          <button 
            className="mobile-menu-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="mobile-menu-links">
          <div className="mobile-menu-item-group">
            <a href="#">Home</a>
          </div>
          <div className="mobile-menu-divider"></div>
          <div className="mobile-menu-item-group">
            <a href="#">Download</a>
            <a href="#">Nitro</a>
            <a href="#">Discover</a>
            <a href="#">Safety</a>
            <a href="#">Quests</a>
            <a href="#">Support</a>
            <a href="#">Blog</a>
            <a href="#">Developers</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="mobile-menu-footer">
          <button className="mobile-download-btn">Download App</button>
        </div>
      </div>
    </>
  );
}
