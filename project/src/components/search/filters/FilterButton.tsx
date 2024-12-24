import React from 'react';

interface FilterButtonProps {
  icon: React.ReactNode;
  label: string;
}

export default function FilterButton({ icon, label }: FilterButtonProps) {
  return (
    <button className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 hover:border-green-500 hover:bg-green-50">
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}