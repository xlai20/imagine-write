
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import StoryCard from '../components/StoryCard';
import Button from '../components/common/Button';

const HistoryScreen: React.FC = () => {
  const { currentUser, stories, setCurrentScreen, logout } = useAppContext();

  const userStories = stories.filter(story => story.userId === currentUser?.id);

  return (
    <div className="min-h-screen p-6 md:p-10">
        <header className="flex justify-between items-center mb-12">
            <h1 className="text-5xl font-bold text-text-dark">My Stories</h1>
            <div>
              <Button variant="text-blue" onClick={() => setCurrentScreen(Screen.DASHBOARD)} className="mr-4">Dashboard</Button>
              <Button variant="red" onClick={logout}>Switch Profile</Button>
            </div>
        </header>

        {userStories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {userStories.map(story => (
                    <StoryCard key={story.id} story={story} onClick={() => alert('Viewing story details coming soon!')}/>
                ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold text-text-dark">No stories yet!</h2>
                <p className="text-xl text-text-dark/80 mt-4">Start writing from your dashboard to see your stories here.</p>
                <Button onClick={() => setCurrentScreen(Screen.DASHBOARD)} className="mt-8">
                    Start My First Story
                </Button>
            </div>
        )}
    </div>
  );
};

export default HistoryScreen;