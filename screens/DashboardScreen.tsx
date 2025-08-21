
import React, { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import Button from '../components/common/Button';
import Spinner from '../components/common/Spinner';
import { generateWritingPrompt, generateImage } from '../services/geminiService';
import StarIcon from '../components/icons/StarIcon';

interface PromptData {
  prompt: string;
  theme: string;
  topic: string;
  keywords: string[];
}

const DashboardScreen: React.FC = () => {
  const { currentUser, setCurrentScreen, setCurrentStory } = useAppContext();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [promptData, setPromptData] = useState<PromptData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPromptAndImage = useCallback(async () => {
    if (!currentUser) return;
    setLoading(true);
    try {
      const writingPromptData = await generateWritingPrompt(currentUser.age);
      setPromptData(writingPromptData);
      const generatedImageUrl = await generateImage(writingPromptData.prompt, currentUser.age);
      setImageUrl(generatedImageUrl);
    } catch (error) {
      console.error("Failed to load prompt and image", error);
      setImageUrl('https://picsum.photos/800/500'); // Fallback image
      setPromptData({
        prompt: 'A magical castle in the clouds.',
        theme: 'Fantasy & Adventure',
        topic: 'Castle in the Sky',
        keywords: ['castle', 'clouds', 'magic', 'fly', 'secret']
      });
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    fetchPromptAndImage();
  }, [fetchPromptAndImage]);

  const handleStartWriting = () => {
    if (imageUrl && promptData && currentUser) {
      setCurrentStory({ 
          // Temporary story object
          id: 0,
          userId: currentUser.id,
          date: '',
          imagePromptUrl: imageUrl, 
          imagePromptQuery: promptData.prompt, 
          theme: promptData.theme,
          topic: promptData.topic,
          keywords: promptData.keywords,
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
            <img src={imageUrl ?? ''} alt={promptData?.prompt ?? 'AI-generated writing prompt'} className="w-full aspect-[16/9] object-cover rounded-2xl"/>
          )}
        </div>

        {!loading && promptData && (
            <div className="mt-6 text-center max-w-4xl w-full">
                <div className="inline-block bg-primary-blue/10 rounded-full px-5 py-1 mb-3 border-2 border-primary-blue/20">
                    <p className="font-sans text-sm font-bold text-primary-blue tracking-wider uppercase">{promptData.theme}</p>
                </div>
                <h1 className="font-patrickHand text-4xl md:text-5xl text-text-dark px-4">{promptData.topic}</h1>
                <div className="mt-4 flex flex-wrap justify-center gap-2 px-4">
                  {promptData.keywords.map((keyword) => (
                    <span key={keyword} className="bg-positive-green/10 text-positive-green font-semibold px-3 py-1 rounded-full text-sm border-2 border-positive-green/20">
                      {keyword}
                    </span>
                  ))}
                </div>
            </div>
        )}

        <div className="relative mt-8">
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