
import React from 'react';

const CatIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M25 90 C 10 70, 10 40, 30 30 L 70 30 C 90 40, 90 70, 75 90 Z" stroke="#424242" strokeWidth="3" fill="#FFD180"/>
        <path d="M30 30 L 20 15 L 40 25" stroke="#424242" strokeWidth="3" fill="#FFD180" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M70 30 L 80 15 L 60 25" stroke="#424242" strokeWidth="3" fill="#FFD180" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31 28 L 25 20 L 37 25" fill="#F8BBD0"/>
        <path d="M69 28 L 75 20 L 63 25" fill="#F8BBD0"/>
        <circle cx="40" cy="55" r="5" fill="#424242"/>
        <circle cx="60" cy="55" r="5" fill="#424242"/>
        <path d="M48 68 L 52 68 L 50 71 Z" fill="#E53935"/>
        <path d="M20 60 L 35 60" stroke="#424242" strokeWidth="2" strokeLinecap="round"/>
        <path d="M25 65 L 35 65" stroke="#424242" strokeWidth="2" strokeLinecap="round"/>
        <path d="M80 60 L 65 60" stroke="#424242" strokeWidth="2" strokeLinecap="round"/>
        <path d="M75 65 L 65 65" stroke="#424242" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export default CatIcon;