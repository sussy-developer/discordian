import React, { useEffect, useRef } from 'react';

export default function ParallaxWrapper({ children, speed = 0.2, mouseSpeed = 0.05, className = '' }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let currentScrollOffset = window.scrollY * speed;
    let targetScrollOffset = currentScrollOffset;
    
    let currentMouseX = 0;
    let currentMouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    
    let isAnimating = false;

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const updatePosition = () => {
      currentScrollOffset = lerp(currentScrollOffset, targetScrollOffset, 0.08);
      currentMouseX = lerp(currentMouseX, targetMouseX, 0.05); // Smooth floating effect
      currentMouseY = lerp(currentMouseY, targetMouseY, 0.05);

      if (wrapperRef.current) {
        // Use translate3d for hardware acceleration
        wrapperRef.current.style.transform = `translate3d(${currentMouseX}px, ${currentScrollOffset + currentMouseY}px, 0)`;
      }

      // Continue animation if we haven't reached the target
      const distScroll = Math.abs(targetScrollOffset - currentScrollOffset);
      const distMouseX = Math.abs(targetMouseX - currentMouseX);
      const distMouseY = Math.abs(targetMouseY - currentMouseY);

      if (distScroll > 0.1 || distMouseX > 0.1 || distMouseY > 0.1) {
        animationFrameId = requestAnimationFrame(updatePosition);
      } else {
        isAnimating = false;
      }
    };

    const startAnimation = () => {
      if (!isAnimating) {
        isAnimating = true;
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };

    const onScroll = () => {
      targetScrollOffset = window.scrollY * speed;
      startAnimation();
    };

    const onMouseMove = (e) => {
      // Calculate mouse position relative to the center of the screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // The further from center, the larger the target displacement
      targetMouseX = (e.clientX - centerX) * mouseSpeed;
      targetMouseY = (e.clientY - centerY) * mouseSpeed;
      
      startAnimation();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    
    // Initial call to set correct position on mount
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translate3d(${currentMouseX}px, ${currentScrollOffset + currentMouseY}px, 0)`;
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, mouseSpeed]);

  return (
    <div 
      ref={wrapperRef} 
      className={className} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none', 
        zIndex: 1, 
        willChange: 'transform' 
      }}
    >
      {children}
    </div>
  );
}
