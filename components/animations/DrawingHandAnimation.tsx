
import React from 'react';

const DrawingHandAnimation: React.FC = () => {
  return (
    <div className="w-48 h-32">
      <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sparkle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="50%" stopColor="#E53935" />
            <stop offset="100%" stopColor="#1E88E5" />
          </linearGradient>
        </defs>
        
        {/* The line being drawn */}
        <path
          d="M 10,80 Q 50,20 90,60 T 140,50"
          stroke="url(#sparkle)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="200"
          strokeDashoffset="200"
          className="animate-draw"
        />

        {/* Hand and Pen SVG */}
        <g transform="translate(-20, -10)">
          <path 
            d="M 103.5 68.5 L 108.5 73.5 L 133.5 48.5 L 128.5 43.5 Z M 108.5 73.5 L 105.5 76.5 L 125.5 96.5 L 132 93 L 112 73 Z M 105.5 76.5 L 101.5 72.5 L 96.5 77.5 L 92.5 73.5 L 98.5 67.5 L 94.5 63.5 L 100.5 57.5 L 105.5 62.5 L 110.5 57.5 L 113.5 60.5 L 108.5 65.5 L 112.5 69.5 L 105.5 76.5 Z" 
            fill="#ffc2a6" 
            stroke="#424242" 
            strokeWidth="1.5"
            strokeLinejoin="round"
          >
            <animateMotion dur="2s" fill="freeze" path="M 10,80 Q 50,20 90,60 T 140,50" />
          </path>
        </g>
      </svg>
    </div>
  );
};

export default DrawingHandAnimation;