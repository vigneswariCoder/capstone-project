import React from 'react';
import { Header } from './Header';
import { Menu } from './Menu';

interface HomeProps {
  onReserveTable: () => void;
}

export const Home = ({ onReserveTable }: HomeProps) => {
  return (
    <div className="home">
      <Header />
      <div className="hero-section">
        <button className="reserve-button" onClick={onReserveTable}>
          Reserve a Table
        </button>
      </div>
      <Menu />
    </div>
  );
};