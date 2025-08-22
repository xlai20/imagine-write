
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import Button from '../components/common/Button';
import BookIcon from '../components/icons/BookIcon';
import StarIcon from '../components/icons/StarIcon';

const WelcomeScreen: React.FC = () => {
  const { currentUser, setCurrentScreen } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-text-dark mb-4">
        Welcome, <span className="text-primary-blue">{currentUser?.name}!</span>
      </h1>
      <p className="font-patrickHand text-3xl md:text-4xl text-text-dark/80 mb-16">
        What adventure awaits you today?
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {/* Button for History */}
        <div className="relative">
            <Button 
                variant="blue" 
                onClick={() => setCurrentScreen(Screen.HISTORY)}
                className="w-72 h-40 flex flex-col items-center justify-center !rounded-[40px] !text-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
                <BookIcon className="w-12 h-12 mb-2" />
                My Historical Writings
            </Button>
            <StarIcon className="absolute -top-4 -left-4 w-10 h-10 text-star-yellow/70 fill-current transform rotate-[-15deg]" points={5} />
            <StarIcon className="absolute -bottom-5 -right-5 w-14 h-14 text-star-yellow/70 fill-current transform rotate-[20deg]" points={6} />
        </div>

        {/* Button for Writing */}
        <div className="relative">
            <Button 
                variant="red" 
                onClick={() => setCurrentScreen(Screen.DASHBOARD)}
                className="w-72 h-40 flex flex-col items-center justify-center !rounded-[40px] !text-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                I want to Write!
            </Button>
             <StarIcon className="absolute -top-5 -right-5 w-12 h-12 text-star-yellow/70 fill-current transform rotate-[15deg]" points={7} />
             <StarIcon className="absolute -bottom-4 -left-3 w-8 h-8 text-star-yellow/70 fill-current transform rotate-[-25deg]" points={4} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
