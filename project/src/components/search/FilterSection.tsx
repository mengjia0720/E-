import React from 'react';
import AccommodationFilters from './filters/AccommodationFilters';
import AmenityFilters from './filters/AmenityFilters';
import PriceFilter from './filters/PriceFilter';

export default function FilterSection() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        <AccommodationFilters />
        <AmenityFilters />
        <PriceFilter />
      </div>
    </div>
  );
}