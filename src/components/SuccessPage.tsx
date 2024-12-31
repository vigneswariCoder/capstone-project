import React from 'react';
import { Menu, ShoppingBag, CheckCircle } from 'lucide-react';

interface SuccessPageProps {
  onReturn: () => void;
}

export const SuccessPage = ({ onReturn }: SuccessPageProps) => {
  return (
    <div>
      <nav className="nav">
        <Menu size={24} />
        <div className="nav-icons">
          <ShoppingBag size={24} />
        </div>
      </nav>
      <header className="header">
        <h1 className="restaurant-name">Little Lemon</h1>
        <p className="restaurant-location">Chicago</p>
      </header>

      <div className="success-page">
        <CheckCircle size={80} className="success-icon" />
        <h2 className="success-title">The Table Has Been Reserved Successfully!</h2>
        <p className="success-message">
          You Will Get A Confirmation And Reminder Within The Contact Method Selected By You
        </p>
        <button className="reserve-button" onClick={onReturn}>
          Return to home
        </button>
      </div>
    </div>
  );
};