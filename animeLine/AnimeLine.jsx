import React, { useEffect } from 'react';
import './style.css'; 

const AnimeLine = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const body = document.querySelector('body');
      const heart = document.createElement('span');
      const x = e.offsetX;
      const y = e.offsetY;
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';

      body.appendChild(heart);

      setTimeout(function () {
        heart.remove();
      }, 10000);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  return <></>; 
};

export default AnimeLine;
