
import React, { useState, useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { getFeedbackForStory } from '../services/geminiService';
import { Screen } from '../types';
import Button from '../components/common/Button';
import Spinner from '../components/common/Spinner';
import BookIcon from '../components/icons/BookIcon';

const WritingScreen: React.FC = () => {
  const { currentStory, addStory, setCurrentScreen, setIsLoading, isLoading } = useAppContext();
  const [text, setText] = useState('');

  const handleSubmit = useCallback(async () => {
    if (!currentStory || text.trim().length === 0) return;
    setIsLoading(true);
    try {
      const feedback = await getFeedbackForStory(text);
      addStory({
        imagePromptUrl: currentStory.imagePromptUrl,
        imagePromptQuery: currentStory.imagePromptQuery,
        text: text,
        feedback: feedback,
      });
      setCurrentScreen(Screen.FEEDBACK);
    } catch (error) {
      console.error("Error submitting story for feedback", error);
    } finally {
      setIsLoading(false);
    }
  }, [currentStory, text, setIsLoading, addStory, setCurrentScreen]);

  if (!currentStory) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>No story prompt loaded. Please go back.</p>
        <Button onClick={() => setCurrentScreen(Screen.DASHBOARD)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background-cream">
      {isLoading && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-50">
            <Spinner text="Analyzing your story..." />
        </div>
      )}
      {/* Left Column: Image */}
      <div className="w-full md:w-[40%] h-64 md:h-screen p-6 flex items-center justify-center sticky top-0">
        <img
          src={currentStory.imagePromptUrl}
          alt="Writing prompt"
          className="w-full h-full object-contain rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Column: Text Area */}
      <div className="w-full md:w-[60%] flex flex-col p-6 md:p-10 relative">
        <BookIcon className="absolute inset-0 w-full h-full text-text-dark/10 z-0" />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Once upon a time..."
          className="flex-grow bg-transparent text-2xl text-text-dark placeholder-text-dark/40 focus:outline-none resize-none z-10 leading-relaxed tracking-wide"
          autoFocus
        />
        <div className="flex justify-end mt-4 z-10">
          <Button variant="green" onClick={handleSubmit} disabled={isLoading || text.trim().length === 0}>
            I'm Done!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WritingScreen;
