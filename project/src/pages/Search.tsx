import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';
import FilterSection from '../components/search/FilterSection';
import CampsiteCard from '../components/CampsiteCard';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SearchBar />
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <FilterSection />
        </div>
        
        <div className="md:w-3/4">
          <h2 className="text-2xl font-bold mb-4">
            {query ? `Search results for "${query}"` : 'All Campsites'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Placeholder for campsite results */}
          </div>
        </div>
      </div>
    </div>
  );
}