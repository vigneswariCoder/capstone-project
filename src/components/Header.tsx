import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';

export const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Menu size={24} />
        <div className="nav-icons">
          <ShoppingBag size={24} />
        </div>
      </nav>
      <div className="header">
        <h1 className="restaurant-name">Little Lemon</h1>
        <p className="restaurant-location">Chicago</p>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </div>
    </header>
  );
};