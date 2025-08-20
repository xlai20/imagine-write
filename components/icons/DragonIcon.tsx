
import React from 'react';

const DragonIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M45 80 C 25 75, 20 50, 30 35 C 40 20, 60 20, 70 35 C 85 55, 80 75, 60 80 Q 55 85, 50 80 Q 45 85, 45 80 Z" stroke="#424242" strokeWidth="3" fill="white"/>
        <circle cx="45" cy="50" r="5" fill="#424242"/>
        <circle cx="65" cy="50" r="5" fill="#424242"/>
        <path d="M 50 65 Q 55 70, 60 65" stroke="#424242" strokeWidth="3" strokeLinecap="round"/>
        <path d="M30 35 C 25 25, 35 20, 40 25" stroke="#424242" strokeWidth="3" strokeLinecap="round"/>
        <path d="M70 35 C 75 25, 65 20, 60 25" stroke="#424242" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
};

export default DragonIcon;
