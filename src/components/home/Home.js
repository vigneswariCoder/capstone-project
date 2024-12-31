import React from "react";
import { Nav } from "../layout/Nav";
import { Header } from "../layout/Header";
import { Menu } from "../menu/Menu";

export const Home = ({ onReserveTable }) => {
  return (
    <div className="home">
      <Nav />
      <div>
        <Header description="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
        <div className="hero-section">
          <button className="reserve-button" onClick={onReserveTable}>
            Reserve a Table
          </button>
        </div>
      </div>
      <Menu />
    </div>
  );
};
