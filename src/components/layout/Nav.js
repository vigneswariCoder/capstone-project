import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';

export const Nav = () => {
  return (
    <nav className="nav">
      <Menu size={24} />
      <div className="nav-icons">
        <ShoppingBag size={24} />
      </div>
    </nav>
  );
};