import React from 'react';
import './EndSection.css';
import starBg from '../../assets/starbg.webp';

const EndSection = () => {
  return (
    <div className="end-section-container">
      <div className="end-stars-container">
        <img src={starBg} alt="Stars" className="end-stars-bg" />
      </div>
      <h2 className="end-title">
        YOU CAN'T SCROLL ANYMORE.<br />
        BETTER GO CHAT.
      </h2>
      <button className="end-download-btn">
        <svg
          className="download-icon"
          aria-hidden="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download for Linux
      </button>
    </div>
  );
};

export default EndSection;
