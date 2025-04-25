import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import './ScrollingAnimation.css';
import { gsap } from 'gsap';

const ScrollingAnimation = forwardRef((props, ref) => {
  const gridRef = useRef(null);

  const animateSquares = () => {
    const squares = gridRef.current.querySelectorAll('.square');

    // First make the grid visible
    gsap.to(gridRef.current, {
      opacity: 1,
      duration: 0.3
    });

    // Then animate the squares
    gsap.to(squares, {
      height: '100%',
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out',
      random: true,
    });
  };

  useImperativeHandle(ref, () => ({
    triggerAnimation: animateSquares,
  }));

  return (
    <div className="scroll_animation_container">
      <div className="grid_container" ref={gridRef}>
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="square"></div>
        ))}
      </div>
    </div>
  );
});

export default ScrollingAnimation;
