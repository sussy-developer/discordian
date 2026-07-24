import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import LoginHeader from './components/LoginHeader';
import LoginFields from './components/LoginFields';
import LoginBtn from './components/LoginBtn';
import LoginQR from './components/LoginQR';

import bgImg from '../../assets/bgimg.png';
import starBg from '../../assets/starbg.webp';
import blurredBg1 from '../../assets/blured_bg1.webp';
import blurredBg2 from '../../assets/blured_bg2.webp';

export default function LoginPage() {
  return (
    <div className="login-page">
      {/* Background Layers */}
      <img src={bgImg} alt="Background" className="login-bg-base" />
      <img src={starBg} alt="Stars" className="login-bg-stars" />
      <img src={blurredBg1} alt="Blur 1" className="login-bg-blur1" />
      <img src={blurredBg2} alt="Blur 2" className="login-bg-blur2" />

      <div className="login-container">
        <div className="login-form">
          <LoginHeader />
          
          <form>
            <LoginFields />
            
            <a href="#" className="forgot-password">Forgot your password?</a>
            
            <LoginBtn />
          </form>
          
          <div className="register-link">
            Need an account? <Link to="/register">Register</Link>
          </div>
        </div>

        <LoginQR />
      </div>
    </div>
  );
}
