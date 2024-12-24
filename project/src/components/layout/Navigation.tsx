import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/search', label: 'Find Camps' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navLinks.map(({ to, label }) => (
        <Link key={to} to={to} className="hover:text-green-200">
          {label}
        </Link>
      ))}
    </nav>
  );
}