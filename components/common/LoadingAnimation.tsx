
import React, { useMemo } from 'react';
import DrawingHandAnimation from '../animations/DrawingHandAnimation';
import ThinkingCloudAnimation from '../animations/ThinkingCloudAnimation';
import PoppingStarsAnimation from '../animations/PoppingStarsAnimation';

const animations = [
  DrawingHandAnimation,
  ThinkingCloudAnimation,
  PoppingStarsAnimation,
];

const LoadingAnimation: React.FC<{ text?: string }> = ({ text }) => {
  const SelectedAnimation = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <SelectedAnimation />
      {text && <p className="text-2xl text-text-dark/80 font-patrickHand animate-pulse">{text}</p>}
    </div>
  );
};

export default LoadingAnimation;