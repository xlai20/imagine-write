
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'red' | 'blue' | 'green' | 'text-blue';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'red', className = '', ...props }) => {
  const baseClasses = 'px-8 py-3 rounded-[30px] font-bold text-xl md:text-[22px] transition-all duration-300 transform hover:shadow-inner-subtle focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    'red': 'bg-primary-red text-white hover:brightness-110 focus:ring-primary-red',
    'blue': 'bg-primary-blue text-white hover:brightness-110 focus:ring-primary-blue',
    'green': 'bg-positive-green text-white hover:brightness-110 focus:ring-positive-green',
    'text-blue': 'bg-transparent text-primary-blue hover:bg-primary-blue/10 focus:ring-primary-blue',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
