import React from 'react';
import SearchBar from '../search/SearchBar';

export default function HeroSection() {
  return (
    <div 
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect Camping Spot
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Discover thousands of campsites, RV parks, and unique outdoor stays across the country
        </p>
        <SearchBar className="w-full max-w-2xl" />
      </div>
    </div>
  );
}