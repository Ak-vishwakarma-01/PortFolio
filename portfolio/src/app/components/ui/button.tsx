import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`py-2 px-4 rounded-lg transition-all duration-300 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;