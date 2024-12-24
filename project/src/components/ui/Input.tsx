import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={inputId}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
          focus:border-green-500 focus:ring-green-500 ${className}`}
        {...props}
      />
    </div>
  );
}