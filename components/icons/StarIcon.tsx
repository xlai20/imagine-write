import React from 'react';

interface StarIconProps {
    className?: string;
    points?: number;
    style?: React.CSSProperties;
}

const StarIcon: React.FC<StarIconProps> = ({ className, points = 8, style }) => {
    const starPath = (points: number) => {
        let path = '';
        const centerX = 50;
        const centerY = 50;
        const outerRadius = 50;
        const innerRadius = 25;
        const angleStep = Math.PI / points;

        for (let i = 0; i < 2 * points; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            path += (i === 0 ? 'M' : 'L') + `${x},${y}`;
        }
        path += 'Z';
        return path;
    };

    return (
        <svg viewBox="0 0 100 100" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
            <path d={starPath(points)} />
        </svg>
    );
};

export default StarIcon;
