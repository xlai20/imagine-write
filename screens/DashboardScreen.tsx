
import React, { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import Button from '../components/common/Button';
import Spinner from '../components/common/Spinner';
import { generateWritingPrompt, generateImage } from '../services/geminiService';
import StarIcon from '../components/icons/StarIcon';

const DashboardScreen: React.FC = () => {
  const { currentUser, setCurrentScreen, setCurrentStory } = useAppContext();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPromptAndImage = useCallback(async () => {
    setLoading(true);
    try {
      const writingPrompt = await generateWritingPrompt();
      setPrompt(writingPrompt);
      const generatedImageUrl = await generateImage(writingPrompt);
      setImageUrl(generatedImageUrl);
    } catch (error) {
      console.error("Failed to load prompt and image", error);
      setImageUrl('https://picsum.photos/800/500'); // Fallback image
      setPrompt('A magical castle in the clouds.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPromptAndImage();
  }, [fetchPromptAndImage]);

  const handleStartWriting = () => {
    if (imageUrl && prompt) {
      setCurrentStory({ 
          // Temporary story object
          id: 0,
          userId: currentUser!.id,
          date: '',
          imagePromptUrl: imageUrl, 
          imagePromptQuery: prompt, 
          text: '', 
          feedback: { score: 0, message: '', correctedText: '' } 
      });
      setCurrentScreen(Screen.WRITING);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-6 lg:p-8 bg-background-cream">
      <header className="flex justify-between items-center w-full">
        <h2 className="text-3xl font-bold text-text-dark">Hello, {currentUser?.name}!</h2>
        <Button variant="text-blue" onClick={() => setCurrentScreen(Screen.HISTORY)}>
          My Stories
        </Button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center mt-8">
        <div className="w-full max-w-4xl bg-white/50 rounded-3xl p-4 shadow-md">
          {loading ? (
            <div className="w-full aspect-[16/9] flex flex-col items-center justify-center bg-gray-200 rounded-2xl">
              <Spinner text="Imagining your prompt..." />
            </div>
          ) : (
            <img src={imageUrl ?? ''} alt="AI-generated writing prompt" className="w-full aspect-[16/9] object-cover rounded-2xl"/>
          )}
        </div>
        <div className="relative mt-12">
            <Button variant="red" onClick={handleStartWriting} disabled={loading}>
                Start Writing!
            </Button>
            {[...Array(5)].map((_, i) => (
                 <StarIcon key={i} className="absolute text-star-yellow/80 fill-current animate-pulse" style={{
                    width: `${Math.random() * 16 + 12}px`,
                    top: `${Math.random() * 100 - 50}%`,
                    left: `${Math.random() * 120 - 10}%`,
                    animationDelay: `${Math.random()}s`,
                    opacity: Math.random() * 0.5 + 0.5,
                 }} points={4} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardScreen;
