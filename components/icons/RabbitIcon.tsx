
import React from 'react';

const RabbitIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30 80 C 20 70, 20 45, 35 35 C 50 25, 65 25, 75 40 C 85 55, 80 75, 65 80 Z" stroke="#424242" strokeWidth="3" fill="white"/>
      <path d="M35 35 C 30 10, 45 10, 45 35" stroke="#424242" strokeWidth="3" fill="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M70 40 C 75 15, 60 15, 60 40" stroke="#424242" strokeWidth="3" fill="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 34 C 32 15, 43 15, 44 34" fill="#F8BBD0" />
      <path d="M69 39 C 73 20, 62 20, 61 39" fill="#F8BBD0" />
      <circle cx="45" cy="60" r="4" fill="#424242"/>
      <circle cx="60" cy="60" r="4" fill="#424242"/>
      <path d="M51 68 L 54 68 L 52.5 70 Z" fill="#E53935"/>
    </svg>
  );
};

export default RabbitIcon;