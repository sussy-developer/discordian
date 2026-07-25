import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './StarryBackground3D.css';

export default function StarryBackground3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing stars (useful for strict mode double renders)
    container.innerHTML = '';

    const numStars = 250;
    const colors = ['#ffffff', '#ffffff', '#5865F2', '#EB459E', '#57F287']; // Mostly white, some discord colors
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star-3d');
      
      if (Math.random() > 0.8) {
        star.classList.add('pulse');
      }

      // Random color
      star.style.color = colors[Math.floor(Math.random() * colors.length)];
      star.style.backgroundColor = star.style.color;
      
      container.appendChild(star);

      // Hollow cylinder distribution
      const angle = Math.random() * Math.PI * 2;
      
      // Radius between 300 (hollow center) and 2000 (wide edges)
      const minRadius = 400;
      const maxRadius = 2500;
      const radius = minRadius + Math.random() * (maxRadius - minRadius);
      
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      // Distribute Z depth from far behind to far ahead
      const startZ = Math.random() * 4000;

      // Initial placement
      gsap.set(star, {
        x: x,
        y: y,
        z: startZ,
        opacity: Math.random() * 0.7 + 0.3, // opacity between 0.3 and 1
        scale: Math.random() * 1.5 + 0.5,
      });

      stars.push(star);
    }

    // Animate stars moving forward through the Z axis
    const ctx = gsap.context(() => {
      stars.forEach((star) => {
        // Find current Z and animate it relative so they all move at the same speed
        const currentZ = gsap.getProperty(star, "z");
        
        // We want them to travel from far away (Z=4000) to past the camera (Z=-1000)
        // If a star is at currentZ, we animate it to Z=-1000, then reset to Z=4000 and loop
        
        gsap.to(star, {
          z: -1000,
          duration: (currentZ - (-1000)) / 400, // speed = distance / time. 
          ease: "none",
          onComplete: () => {
            // Once it passes the camera, reset it to far away and loop
            gsap.set(star, { z: 4000 });
            gsap.to(star, {
              z: -1000,
              duration: 5000 / 400, // Total distance is 5000 (from 4000 to -1000)
              ease: "none",
              repeat: -1
            });
          }
        });
      });
      
      // Optional: Gentle rotation of the whole container
      gsap.to(container, {
        rotationZ: 360,
        duration: 150,
        ease: "none",
        repeat: -1
      });
    }, containerRef); // Scope to containerRef

    return () => {
      ctx.revert(); // Clean up all GSAP animations inside this context
    };
  }, []);

  return (
    <div className="starry-bg-3d-wrapper">
      <div className="starry-bg-3d-container" ref={containerRef}></div>
    </div>
  );
}
