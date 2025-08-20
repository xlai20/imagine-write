
import React from 'react';

const Spinner: React.FC<{ size?: number; text?: string }> = ({ size = 12, text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className={`w-${size} h-${size} animate-spin rounded-full border-4 border-solid border-primary-blue border-t-transparent`}
      ></div>
      {text && <p className="text-xl text-text-dark animate-pulse">{text}</p>}
    </div>
  );
};

export default Spinner;
