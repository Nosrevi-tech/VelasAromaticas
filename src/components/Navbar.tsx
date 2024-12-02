import React from 'react';
import { ShoppingCart, Flame } from 'lucide-react';
import { ProfileButton } from './ProfileButton';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onAuthClick: () => void;
}

export function Navbar({ cartItemsCount, onCartClick, onAuthClick }: NavbarProps) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Flame className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-xl font-semibold">Velas Aromáticas</span>
          </div>
          <div className="flex items-center gap-6">
            <ProfileButton onClick={onAuthClick} />
            <button onClick={onCartClick} className="relative p-2">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}