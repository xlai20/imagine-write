
import React from 'react';

const VocabularyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M14 3l7 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9z" />
        <polyline points="14 3 14 10 21 10" />
        <path d="M12 18h-1a2 2 0 0 1-2-2v-1h3v1a2 2 0 0 0 2 2h1" />
        <path d="M9 13h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
    </svg>
);

export default VocabularyIcon;