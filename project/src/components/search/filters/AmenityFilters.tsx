import React from 'react';
import { Dog, Wifi, Water } from 'lucide-react';
import FilterButton from './FilterButton';

export default function AmenityFilters() {
  return (
    <div>
      <h3 className="font-medium mb-2">Amenities</h3>
      <div className="flex flex-wrap gap-2">
        <FilterButton icon={<Dog size={16} />} label="Pet Friendly" />
        <FilterButton icon={<Wifi size={16} />} label="WiFi" />
        <FilterButton icon={<Water size={16} />} label="Water Access" />
      </div>
    </div>
  );
}