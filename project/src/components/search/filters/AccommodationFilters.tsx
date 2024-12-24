import React from 'react';
import { Tent, Truck, Home } from 'lucide-react';
import FilterButton from './FilterButton';

export default function AccommodationFilters() {
  return (
    <div>
      <h3 className="font-medium mb-2">Accommodation Type</h3>
      <div className="flex flex-wrap gap-2">
        <FilterButton icon={<Tent size={16} />} label="Tent Sites" />
        <FilterButton icon={<Truck size={16} />} label="RV Parks" />
        <FilterButton icon={<Home size={16} />} label="Cabins" />
      </div>
    </div>
  );
}