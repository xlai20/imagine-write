
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import Button from '../components/common/Button';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import GrammarIcon from '../components/icons/GrammarIcon';
import VocabularyIcon from '../components/icons/VocabularyIcon';
import StructureIcon from '../components/icons/StructureIcon';

const FeedbackScreen: React.FC = () => {
  const { currentStory, setCurrentScreen } = useAppContext();

  const parseCorrectedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|~~.*?~~)/g).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-positive-green bg-green-100 rounded px-1">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('~~') && part.endsWith('~~')) {
        return <del key={index} className="text-primary-red bg-red-100 rounded px-1">{part.slice(2, -2)}</del>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  if (!currentStory) {
    return <div className="flex justify-center items-center h-screen">Loading feedback...</div>;
  }
  
  const { feedback, text: originalText } = currentStory;

  const scoreCards = [
    { title: 'Creativity', score: feedback.scoringBreakdown.creativity, icon: <LightbulbIcon className="w-8 h-8 text-yellow-500" /> },
    { title: 'Grammar', score: feedback.scoringBreakdown.grammar, icon: <GrammarIcon className="w-8 h-8 text-blue-500" /> },
    { title: 'Vocabulary', score: feedback.scoringBreakdown.vocabulary, icon: <VocabularyIcon className="w-8 h-8 text-purple-500" /> },
    { title: 'Structure', score: feedback.scoringBreakdown.structure, icon: <StructureIcon className="w-8 h-8 text-green-500" /> },
  ];

  return (
    <div className="min-h-screen bg-background-cream p-4 sm:p-6 md:p-10">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark text-center mb-8 font-patrickHand">Tutor's Feedback</h1>
        
        {/* Scoring Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {scoreCards.map(card => (
            <div key={card.title} className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center justify-center text-center">
              {card.icon}
              <p className="text-sm font-bold text-text-dark/80 mt-2">{card.title}</p>
              <p className="text-3xl font-bold text-text-dark">{card.score}<span className="text-lg text-text-dark/60">/10</span></p>
            </div>
          ))}
        </div>

        {/* Detailed Analysis */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-text-dark mb-4 border-b-2 pb-2">Overall Assessment</h2>
            <p className="text-text-dark/90 text-lg">{feedback.overallAssessment}</p>

            <h2 className="text-2xl font-bold text-text-dark mb-4 mt-6 border-b-2 pb-2">Analysis & Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold text-lg text-positive-green mb-2">Strengths</h3>
                    <p className="text-text-dark/90">{feedback.strengths}</p>
                </div>
                 <div>
                    <h3 className="font-bold text-lg text-primary-red mb-2">Areas for Improvement</h3>
                    <p className="text-text-dark/90 mb-2"><strong>Grammar:</strong> {feedback.areasForImprovement.grammar}</p>
                    <p className="text-text-dark/90"><strong>Vocabulary:</strong> {feedback.areasForImprovement.vocabulary}</p>
                </div>
            </div>
        </div>

        {/* Story Comparison */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-text-dark mb-4">Your Story</h2>
                <p className="text-lg leading-relaxed text-text-dark/80 whitespace-pre-wrap">{originalText}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-text-dark mb-4">Corrected Manuscript</h2>
                <p className="text-lg leading-relaxed text-text-dark whitespace-pre-wrap">
                    {parseCorrectedText(feedback.correctedText)}
                </p>
            </div>
        </div>

        {/* Concluding Statement */}
        <div className="bg-blue-100 border-l-4 border-primary-blue text-primary-blue p-4 rounded-r-lg shadow-md mb-8">
            <h2 className="font-bold text-lg mb-2">Tutor's Final Word</h2>
            <p>{feedback.concludingStatement}</p>
        </div>
        
        <div className="text-center">
            <Button variant="blue" onClick={() => setCurrentScreen(Screen.DASHBOARD)}>
              Continue to Next Adventure
            </Button>
        </div>
      </main>
    </div>
  );
};

export default FeedbackScreen;