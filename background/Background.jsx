import React from 'react';
import './style.css'; 

const Background = () => {
  return (
    <div className="container">
      <div className="bubbles">
        {[...Array(40)].map((_, i) => (
          <span key={i} style={{'--i': i + 10}}></span>
        ))}
      </div>
    </div>
  );
};

export default Background;
