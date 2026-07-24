import React from 'react';
import './BigCard.css';

export default function CardVideo({ videoSrc, gradientClass }) {
  return (
    <div className={`card-video-section ${gradientClass || ''}`}>
      <video 
        className="card-video" 
        src={videoSrc} 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
    </div>
  );
}
