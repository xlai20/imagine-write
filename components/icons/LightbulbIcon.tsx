
import React from 'react';

const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M15.09 16.05A6.5 6.5 0 0 1 8.91 9.95" />
        <path d="M9 9a6.5 6.5 0 0 1 6.14 5.18" />
        <path d="M12 2a7 7 0 0 0-7 7c0 1.75 1.25 4.5 7 9.5 5.75-5 7-7.75 7-9.5a7 7 0 0 0-7-7z" />
        <path d="M12 14v.01" />
    </svg>
);

export default LightbulbIcon;