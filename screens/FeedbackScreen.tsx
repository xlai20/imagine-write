
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import Button from '../components/common/Button';
import StarIcon from '../components/icons/StarIcon';
import RobotIcon from '../components/icons/RobotIcon';

const FeedbackScreen: React.FC = () => {
  const { currentStory, setCurrentScreen } = useAppContext();

  const parseCorrectedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|~~.*?~~)/g).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-positive-green">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('~~') && part.endsWith('~~')) {
        return <del key={index} className="text-primary-red">{part.slice(2, -2)}</del>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  if (!currentStory) {
    // This should not happen in the normal flow
    return <div className="flex justify-center items-center h-screen">Loading feedback...</div>;
  }
  
  const { feedback } = currentStory;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background-cream text-center">
      <main className="w-full max-w-3xl flex flex-col items-center">
        <div className="relative w-64 h-64 mb-8">
          <StarIcon className="text-star-yellow fill-current" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <span className="text-6xl font-bold">{feedback.score}</span>
            <span className="text-2xl font-bold">/10</span>
          </div>
          <div className="absolute -left-24 bottom-0 transform scale-x-[-1]">
              <RobotIcon className="w-40 h-40 opacity-80" />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-text-dark mb-6">{feedback.message}</h2>
        
        <div className="bg-white rounded-3xl p-6 w-full text-left shadow-md mb-10">
            <p className="text-xl leading-relaxed text-text-dark">
                {parseCorrectedText(feedback.correctedText)}
            </p>
        </div>
        
        <Button variant="blue" onClick={() => setCurrentScreen(Screen.DASHBOARD)}>
          Continue
        </Button>
      </main>
    </div>
  );
};

export default FeedbackScreen;
