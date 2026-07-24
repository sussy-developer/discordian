import React from 'react';
import './RegisterPage.css';
import RegisterHeader from './components/RegisterHeader';
import RegisterFields from './components/RegisterFields';
import RegisterBtn from './components/RegisterBtn';
import RegisterFooter from './components/RegisterFooter';

import bgImg from '../../assets/bgimg.png';
import starBg from '../../assets/starbg.webp';
import blurredBg1 from '../../assets/blured_bg1.webp';
import blurredBg2 from '../../assets/blured_bg2.webp';

export default function RegisterPage() {
  return (
    <div className="register-page">
      <img src={bgImg} alt="Background" className="register-bg-base" />
      <img src={starBg} alt="Stars" className="register-bg-stars" />
      <img src={blurredBg1} alt="Blur 1" className="register-bg-blur1" />
      <img src={blurredBg2} alt="Blur 2" className="register-bg-blur2" />

      <div className="register-container">
        <form>
          <RegisterHeader />
          <RegisterFields />
          <RegisterBtn />
          <RegisterFooter />
        </form>
      </div>
    </div>
  );
}
