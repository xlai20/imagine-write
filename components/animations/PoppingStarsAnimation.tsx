
import React from 'react';
import StarIcon from '../icons/StarIcon';

const PoppingStarsAnimation: React.FC = () => {
    const stars = [
        { color: 'text-star-yellow', size: 'w-12 h-12', delay: '0s', position: 'top-4 left-8' },
        { color: 'text-primary-red', size: 'w-8 h-8', delay: '0.2s', position: 'top-12 right-6' },
        { color: 'text-primary-blue', size: 'w-10 h-10', delay: '0.4s', position: 'bottom-2 left-16' },
        { color: 'text-positive-green', size: 'w-6 h-6', delay: '0.6s', position: 'bottom-10 right-14' },
    ];

    return (
        <div className="w-40 h-32 relative">
            {stars.map((star, i) => (
                <div key={i} className={`absolute ${star.position}`}>
                    <StarIcon 
                        className={`${star.color} ${star.size} animate-pop fill-current`} 
                        points={5} 
                        style={{ animationDelay: star.delay }}
                    />
                </div>
            ))}
        </div>
    );
};

export default PoppingStarsAnimation;