import React from 'react';

export default function PriceFilter() {
  return (
    <div>
      <h3 className="font-medium mb-2">Price Range</h3>
      <input 
        type="range" 
        min="0" 
        max="500" 
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-sm text-gray-600 mt-1">
        <span>$0</span>
        <span>$500+</span>
      </div>
    </div>
  );
}