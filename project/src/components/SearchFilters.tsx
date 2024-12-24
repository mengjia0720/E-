import React from 'react';
import { Tent, Truck, Home, Dog, Wifi, Water } from 'lucide-react';

export default function SearchFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Accommodation Type</h3>
          <div className="flex flex-wrap gap-2">
            <FilterButton icon={<Tent size={16} />} label="Tent Sites" />
            <FilterButton icon={<Truck size={16} />} label="RV Parks" />
            <FilterButton icon={<Home size={16} />} label="Cabins" />
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Amenities</h3>
          <div className="flex flex-wrap gap-2">
            <FilterButton icon={<Dog size={16} />} label="Pet Friendly" />
            <FilterButton icon={<Wifi size={16} />} label="WiFi" />
            <FilterButton icon={<Water size={16} />} label="Water Access" />
          </div>
        </div>

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
      </div>
    </div>
  );
}

function FilterButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 hover:border-green-500 hover:bg-green-50">
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}