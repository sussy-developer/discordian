import React from 'react';
import './MarqueeBanner.css';
import discIcon from '../../assets/disc.webp'; // Discord logo icon

export default function MarqueeBanner() {
  // The repeating sequence of text and icons
  const BannerContent = () => (
    <div className="marquee-content-inner">
      <span>HANG OUT</span>
      <img src={discIcon} alt="discord icon" className="marquee-icon" />
      <span>TALK</span>
      <img src={discIcon} alt="discord icon" className="marquee-icon" />
      <span>PLAY</span>
      <img src={discIcon} alt="discord icon" className="marquee-icon" />
      <span>CHAT</span>
      <img src={discIcon} alt="discord icon" className="marquee-icon" />
    </div>
  );

  return (
    <div className="marquee-container">
      <div className="marquee-scrolling-content">
        {/* Render twice for seamless looping */}
        <BannerContent />
        <BannerContent />
      </div>
    </div>
  );
}
