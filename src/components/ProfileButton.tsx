import React from 'react';
import { User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface ProfileButtonProps {
  onClick: () => void;
}

export function ProfileButton({ onClick }: ProfileButtonProps) {
  const { user } = useAuth();

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-gray-700 hover:text-amber-600"
    >
      <User className="h-6 w-6" />
      <span className="text-sm font-medium">
        {user ? user.name : 'Entrar'}
      </span>
    </button>
  );
}