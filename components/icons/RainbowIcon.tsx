import React from 'react';

const RainbowIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 80 A 40 40 0 0 1 90 80" stroke="#E53935" strokeWidth="8" strokeLinecap="round"/>
      <path d="M20 80 A 30 30 0 0 1 80 80" stroke="#FFC107" strokeWidth="8" strokeLinecap="round"/>
      <path d="M30 80 A 20 20 0 0 1 70 80" stroke="#43A047" strokeWidth="8" strokeLinecap="round"/>
      <path d="M40 80 A 10 10 0 0 1 60 80" stroke="#1E88E5" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
};

export default RainbowIcon;
