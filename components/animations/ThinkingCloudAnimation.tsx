
import React from 'react';

const ThinkingCloudAnimation: React.FC = () => {
  return (
    <div className="w-40 h-32">
        <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M 60,20 A 20,20 0 0 1 85,30 A 15,15 0 0 1 90,60 H 30 A 15,15 0 0 1 25,30 A 20,20 0 0 1 60,20 Z" 
                fill="#1E88E5"
                opacity="0.2"
                stroke="#1E88E5"
                strokeWidth="2"
            />
            <circle cx="45" cy="45" r="4" fill="#1E88E5" className="animate-fadeInOut" style={{ animationDelay: '0s' }} />
            <circle cx="60" cy="45" r="4" fill="#1E88E5" className="animate-fadeInOut" style={{ animationDelay: '0.3s' }} />
            <circle cx="75" cy="45" r="4" fill="#1E88E5" className="animate-fadeInOut" style={{ animationDelay: '0.6s' }} />
        </svg>
    </div>
  );
};

export default ThinkingCloudAnimation;