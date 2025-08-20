
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { User, Story, Feedback, Screen } from '../types';
import { MOCK_USERS, MOCK_STORIES } from '../data/mock';

interface AppContextType {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  users: User[];
  stories: Story[];
  addStory: (story: Omit<Story, 'id' | 'userId' | 'date'>) => void;
  currentStory: Story | null;
  setCurrentStory: (story: Story | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.PROFILE_SELECTOR);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [stories, setStories] = useState<Story[]>(MOCK_STORIES);
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addStory = useCallback((newStoryData: Omit<Story, 'id' | 'userId' | 'date'>) => {
    if (!currentUser) return;
    const newStory: Story = {
      ...newStoryData,
      id: Date.now(),
      userId: currentUser.id,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
    };
    setStories(prevStories => [newStory, ...prevStories]);
    setCurrentStory(newStory);
  }, [currentUser]);
  
  const logout = useCallback(() => {
    setCurrentUser(null);
    setCurrentScreen(Screen.PROFILE_SELECTOR);
  }, []);

  const value = {
    currentScreen,
    setCurrentScreen,
    currentUser,
    setCurrentUser,
    users: MOCK_USERS,
    stories,
    addStory,
    currentStory,
    setCurrentStory,
    isLoading,
    setIsLoading,
    error,
    setError,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
