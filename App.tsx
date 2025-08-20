
import React from 'react';
import { useAppContext } from './context/AppContext';
import ProfileSelectorScreen from './screens/ProfileSelectorScreen';
import DashboardScreen from './screens/DashboardScreen';
import WritingScreen from './screens/WritingScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import HistoryScreen from './screens/HistoryScreen';
import { Screen } from './types';

const App: React.FC = () => {
  const { currentScreen } = useAppContext();

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.PROFILE_SELECTOR:
        return <ProfileSelectorScreen />;
      case Screen.DASHBOARD:
        return <DashboardScreen />;
      case Screen.WRITING:
        return <WritingScreen />;
      case Screen.FEEDBACK:
        return <FeedbackScreen />;
      case Screen.HISTORY:
        return <HistoryScreen />;
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
