import React from 'react';
import desktopImage from '../../../../assets/desktop.webp';
import standingGirl from '../../../../assets/standing_girl.webp';
import robo from '../../../../assets/robo.webp';
import roboPig from '../../../../assets/robo_pig.webp';
import standingBoy from '../../../../assets/standing_boy.webp';
import leaf from '../../../../assets/leaf.webp';
import bluredBg1 from '../../../../assets/blured_bg1.webp';
import bluredBg2 from '../../../../assets/blured_bg2.webp';
import ParallaxWrapper from '../ParallaxWrapper/ParallaxWrapper';

export default function HeroImage() {
  return (
    <div className="hero-image-container">
      <div className="hero-image-wrapper">
        <ParallaxWrapper speed={-0.04} mouseSpeed={0.06}>
          <img src={bluredBg1} alt="Blurred Background 1" className="hero-layer blured-bg-1" />
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.03} mouseSpeed={0.04}>
          <img src={bluredBg2} alt="Blurred Background 2" className="hero-layer blured-bg-2" />
        </ParallaxWrapper>
        <img src={desktopImage} alt="Desktop illustration" className="hero-base-image" />
        <img src={standingGirl} alt="Standing girl" className="hero-layer standing-girl" />
        <img src={robo} alt="Robot" className="hero-layer robo" />
        <img src={roboPig} alt="Robot pig" className="hero-layer robo-pig" />
        <img src={leaf} alt="Floating leaf" className="hero-layer robo-leaf" />
        <img src={standingBoy} alt="Standing boy" className="hero-layer standing-boy" />
      </div>
    </div>
  );
}
