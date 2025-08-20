import React from 'react';
import { User } from '../types';
import RobotIcon from './icons/RobotIcon';
import DragonIcon from './icons/DragonIcon';
import RainbowIcon from './icons/RainbowIcon';
import UnicornIcon from './icons/UnicornIcon';
import PrincessIcon from './icons/PrincessIcon';
import CatIcon from './icons/CatIcon';
import RabbitIcon from './icons/RabbitIcon';

interface ProfileCardProps {
  user: User;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, onClick }) => {
  const renderAvatar = () => {
    const iconClassName = "w-24 h-24";
    switch (user.avatar) {
      case 'robot':
        return <RobotIcon className={iconClassName} />;
      case 'dragon':
        return <DragonIcon className={iconClassName} />;
      case 'princess':
        return <PrincessIcon className={iconClassName} />;
      case 'rainbow':
        return <RainbowIcon className={iconClassName} />;
      case 'unicorn':
        return <UnicornIcon className={iconClassName} />;
      case 'cat':
        return <CatIcon className={iconClassName} />;
      case 'rabbit':
        return <RabbitIcon className={iconClassName} />;
      default:
        return <RobotIcon className={iconClassName} />;
    }
  };

  return (
    <button
      onClick={onClick}
      className="relative w-64 h-56 bg-white rounded-[50%_50%_40%_60%/60%_70%_30%_40%] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
    >
      <div className="flex flex-col items-center justify-center h-full p-4">
        {renderAvatar()}
        <h2 className="text-3xl font-bold text-text-dark mt-4">{user.name}</h2>
      </div>
    </button>
  );
};

export default ProfileCard;