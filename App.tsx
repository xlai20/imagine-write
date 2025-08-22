
import React from 'react';
import { useAppContext } from './context/AppContext';
import ProfileSelectorScreen from './screens/ProfileSelectorScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import WritingScreen from './screens/WritingScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import HistoryScreen from './screens/HistoryScreen';
import { Screen } from './types';
import HistoryWritingScreen from './screens/HistoryWritingScreen';

const App: React.FC = () => {
  const { currentScreen } = useAppContext();

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.PROFILE_SELECTOR:
        return <ProfileSelectorScreen />;
      case Screen.WELCOME:
        return <WelcomeScreen />;
      case Screen.DASHBOARD:
        return <DashboardScreen />;
      case Screen.WRITING:
        return <WritingScreen />;
      case Screen.FEEDBACK:
        return <FeedbackScreen />;
      case Screen.HISTORY:
        return <HistoryScreen />;
      case Screen.HISTORY_WRITING:
        return <HistoryWritingScreen />;
      default:
        return <ProfileSelectorScreen />;
    }
  };

  return (
    <div className="font-sans text-text-dark min-h-screen">
      {renderScreen()}
    </div>
  );
};

export default App;