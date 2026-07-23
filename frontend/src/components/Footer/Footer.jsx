import React from 'react';
import './Footer.css';
import FooterSocial from './FooterSocial';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';
import footFig from '../../assets/footfig.webp';
import footPig from '../../assets/footpig.webp';
import leaf from '../../assets/leaf.webp';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* Decorative characters poking out from top of footer */}
      <img src={footPig} alt="Pig character" className="foot-pig-img" />
      <img src={leaf} alt="Leaf" className="foot-leaf-img" />
      <img src={footFig} alt="Figure character" className="foot-fig-img" />

      <div className="footer-content">
        <div className="footer-top">
          <FooterSocial />
          <FooterLinks />
        </div>
        
        <div className="footer-divider"></div>
        
        <FooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
