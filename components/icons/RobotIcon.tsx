
import React from 'react';

const RobotIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" y="30" width="60" height="50" rx="5" stroke="#424242" strokeWidth="3" fill="white" />
      <circle cx="35" cy="55" r="5" fill="#424242" />
      <circle cx="65" cy="55" r="5" fill="#424242" />
      <rect x="40" y="70" width="20" height="5" rx="2" fill="#424242" />
      <line x1="45" y1="20" x2="55" y2="20" stroke="#424242" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="20" x2="50" y2="30" stroke="#424242" strokeWidth="3" />
    </svg>
  );
};

export default RobotIcon;
