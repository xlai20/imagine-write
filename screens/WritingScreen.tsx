
import React, { useState, useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { getFeedbackForStory } from '../services/geminiService';
import { Screen } from '../types';
import Button from '../components/common/Button';
import Spinner from '../components/common/Spinner';
import BookIcon from '../components/icons/BookIcon';

const WritingScreen: React.FC = () => {
  const { currentStory, addStory, setCurrentScreen, setIsLoading, isLoading, currentUser } = useAppContext();
  const [text, setText] = useState('');

  const handleSubmit = useCallback(async () => {
    if (!currentStory || text.trim().length === 0 || !currentUser) return;
    setIsLoading(true);
    try {
      const feedback = await getFeedbackForStory(text, currentUser.age);
      addStory({
        imagePromptUrl: currentStory.imagePromptUrl,
        imagePromptQuery: currentStory.imagePromptQuery,
        theme: currentStory.theme,
        topic: currentStory.topic,
        keywords: currentStory.keywords,
        text: text,
        feedback: feedback,
      });
      setCurrentScreen(Screen.FEEDBACK);
    } catch (error) {
      console.error("Error submitting story for feedback", error);
    } finally {
      setIsLoading(false);
    }
  }, [currentStory, text, setIsLoading, addStory, setCurrentScreen, currentUser]);

  if (!currentStory) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>No story prompt loaded. Please go back.</p>
        <Button onClick={() => setCurrentScreen(Screen.DASHBOARD)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {isLoading && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-50">
            <Spinner text="Analyzing your story..." />
        </div>
      )}
      {/* Left Column: Image & Prompt Info */}
      <div className="w-full md:w-[40%] h-auto md:h-screen p-6 flex flex-col gap-6 sticky top-0">
        <img
          src={currentStory.imagePromptUrl}
          alt="Writing prompt"
          className="w-full h-auto aspect-[16/9] object-contain rounded-2xl shadow-lg"
        />
        <div className="bg-white/60 rounded-2xl p-4 text-center">
            <h3 className="text-xl font-bold text-text-dark/80">Your Writing Quest</h3>
            <div className="inline-block bg-primary-blue/10 rounded-full px-4 py-1 mt-3 border border-primary-blue/20">
                <p className="font-sans text-xs font-bold text-primary-blue tracking-wider uppercase">{currentStory.theme}</p>
            </div>
            <h2 className="font-patrickHand text-3xl text-text-dark mt-1">{currentStory.topic}</h2>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {currentStory.keywords.map((keyword) => (
                <span key={keyword} className="bg-positive-green/10 text-positive-green font-semibold px-2 py-0.5 rounded-full text-xs border border-positive-green/20">
                  {keyword}
                </span>
              ))}
            </div>
        </div>
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