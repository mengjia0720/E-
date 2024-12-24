import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = '' }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`bg-white rounded-lg shadow-lg p-2 ${className}`}>
      <div className="flex items-center">
        <Search className="w-6 h-6 text-gray-400 ml-2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by location or campsite name..."
          className="flex-1 p-2 outline-none"
        />
        <button 
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}