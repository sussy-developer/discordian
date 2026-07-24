import React from 'react';
import CardVideo from './CardVideo';
import CardText from './CardText';
import './BigCard.css';

export default function BigCard({ 
  videoSrc, 
  title, 
  description, 
  reverseLayout, 
  gradientClass,
  bgImage,
  children
}) {
  return (
    <div className="big-card-wrapper">
      {children}
      <div 
        className={`big-card-container ${reverseLayout ? 'reverse-layout' : ''}`}
        style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <CardVideo videoSrc={videoSrc} gradientClass={gradientClass} />
        <CardText title={title} description={description} />
      </div>
    </div>
  );
}
