import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import Logo from './layout/Logo';
import Navigation from './layout/Navigation';
import UserMenu from './layout/UserMenu';
import AuthModal from './auth/AuthModal';

export default function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Logo />
            <Navigation />
            
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 hover:bg-green-600 rounded-full"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              
              <UserMenu onOpenAuth={() => setIsAuthModalOpen(true)} />
              
              <button 
                className="md:hidden p-2 hover:bg-green-600 rounded-full"
                aria-label="Menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}