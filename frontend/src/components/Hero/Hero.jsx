import React from 'react';
import './Hero.css';
import HeroImage from './HeroImage';
import starBg from '../../assets/starbg.webp';

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={starBg} alt="Stars Background" className="hero-stars-bg" />
      <div className="hero-text-section">
        <h1 className="hero-title">
          GROUP CHAT<br />
          THAT'S ALL<br />
          FUN & GAMES
        </h1>
        <p className="hero-subtitle">
          Discord is great for playing games and chilling <br /> with friends, or even building a
          worldwide <br /> community. Customize your own space to talk,<br /> play, and hang out.
        </p>
      </div>
      <HeroImage />
    </div>
  );
}
