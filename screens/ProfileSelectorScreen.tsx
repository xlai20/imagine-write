
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen, User } from '../types';
import ProfileCard from '../components/ProfileCard';

const ProfileSelectorScreen: React.FC = () => {
  const { users, setCurrentUser, setCurrentScreen } = useAppContext();

  const handleProfileSelect = (user: User) => {
    setCurrentUser(user);
    setCurrentScreen(Screen.WELCOME);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl md:text-[48px] font-bold text-text-dark mb-16">
        Who's Writing?
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {users.map((user) => (
          <ProfileCard key={user.id} user={user} onClick={() => handleProfileSelect(user)} />
        ))}
      </div>
    </div>
  );
};

export default ProfileSelectorScreen;