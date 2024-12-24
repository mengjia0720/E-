import React from 'react';
import { Star, MapPin } from 'lucide-react';
import type { Campsite } from '../types';

interface CampsiteCardProps {
  campsite: Campsite;
}

export default function CampsiteCard({ campsite }: CampsiteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={campsite.images[0]} 
        alt={campsite.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{campsite.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1">{campsite.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mt-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{campsite.location.address}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {campsite.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-green-700 font-semibold">
            ${campsite.price}/night
          </span>
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}