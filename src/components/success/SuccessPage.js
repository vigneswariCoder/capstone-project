import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Nav } from '../layout/Nav';
import { Header } from '../layout/Header';

export const SuccessPage = ({ onReturn }) => {
  return (
    <div>
      <Nav />
      <Header />
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