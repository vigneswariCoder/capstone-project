import React from "react";

export const Header = ({ description }) => {
  return (
    <header className="header">
      <div className="">
        <h1 className="restaurant-name">Little Lemon</h1>
        <p className="restaurant-location">Chicago</p>
        {description && <p>{description}</p>}
      </div>
      <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&h=200" className="hero-img" alt="" />
    </header>
  );
};
