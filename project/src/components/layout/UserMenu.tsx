import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface UserMenuProps {
  onOpenAuth: () => void;
}

export default function UserMenu({ onOpenAuth }: UserMenuProps) {
  const { user, signOut } = useAuth();

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <Link to="/profile" className="hover:text-green-200">
          {user.email}
        </Link>
        <button onClick={() => signOut()} className="hover:text-green-200">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={onOpenAuth}
      className="p-2 hover:bg-green-600 rounded-full"
      aria-label="Sign in"
    >
      <User size={20} />
    </button>
  );
}