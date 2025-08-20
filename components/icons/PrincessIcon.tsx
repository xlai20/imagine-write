
import React from 'react';

const PrincessIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25 80 L 20 40 L 40 55 L 50 30 L 60 55 L 80 40 L 75 80 Z" stroke="#424242" strokeWidth="3" fill="#FFC107" strokeLinejoin="round" strokeLinecap="round"/>
      <circle cx="50" cy="30" r="4" fill="#E53935" stroke="#424242" strokeWidth="1.5" />
      <circle cx="30" cy="48" r="4" fill="#1E88E5" stroke="#424242" strokeWidth="1.5" />
      <circle cx="70" cy="48" r="4" fill="#1E88E5" stroke="#424242" strokeWidth="1.5" />
    </svg>
  );
};

export default PrincessIcon;