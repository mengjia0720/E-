import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'py-2 px-4 rounded-md transition-colors';
  const variantStyles = {
    primary: 'bg-green-700 text-white hover:bg-green-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}