
import React from 'react';

const UnicornIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M75 30 L65 20 L60 35 L40 30 C 25 30 20 45 25 60 C 30 75 45 85 60 80 L 70 70 C 85 60 85 40 75 30 Z" stroke="#424242" strokeWidth="3" fill="white" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M55 42 C 57 40, 60 40, 60 45" fill="#F8BBD0" />
      <path d="M65 20 L75 10 L70 25 Z" stroke="#424242" strokeWidth="3" fill="#FFC107" strokeLinejoin="round" strokeLinecap="round"/>
      <circle cx="45" cy="45" r="5" fill="#424242"/>
      <path d="M30 55 C 35 50 45 50 50 55" stroke="#424242" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
};

export default UnicornIcon;