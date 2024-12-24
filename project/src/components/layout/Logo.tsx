import React from 'react';
import { Tent } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Tent size={24} />
      <span className="text-xl font-bold">CampSpot</span>
    </Link>
  );
}