import React, { useEffect, useRef } from 'react';

export default function ParallaxWrapper({ children, speed = 0.2, className = '' }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let currentOffset = window.scrollY * speed;
    let targetOffset = currentOffset;
    let isAnimating = false;

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const updatePosition = () => {
      currentOffset = lerp(currentOffset, targetOffset, 0.08);

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translateY(${currentOffset}px)`;
      }

      // Continue animation if we haven't reached the target
      if (Math.abs(targetOffset - currentOffset) > 0.1) {
        animationFrameId = requestAnimationFrame(updatePosition);
      } else {
        isAnimating = false;
      }
    };

    const onScroll = () => {
      targetOffset = window.scrollY * speed;
      
      // Start the animation loop if it's not already running
      if (!isAnimating) {
        isAnimating = true;
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial call to set correct position on mount
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateY(${currentOffset}px)`;
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

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
