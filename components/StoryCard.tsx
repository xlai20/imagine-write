
import React from 'react';
import { Story } from '../types';
import StarIcon from './icons/StarIcon';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onClick }) => {
  return (
    <div 
        onClick={onClick}
        className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
    >
      <img src={story.imagePromptUrl} alt={story.imagePromptQuery} className="w-full h-40 object-cover" />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
            <p className="text-lg text-text-dark/80">{story.date}</p>
            <p className="font-patrickHand text-2xl text-text-dark mt-2 truncate">{story.topic}</p>
        </div>
        <div className="flex items-center gap-2 mt-4 self-end">
            <div className="relative w-8 h-8">
                <StarIcon className="text-star-yellow fill-current" points={5} />
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-text-dark">{story.feedback.score}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;