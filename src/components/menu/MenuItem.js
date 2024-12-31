import React from 'react';

export const MenuItem = ({ name, description, price, imageUrl }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">${price}</span>
      </div>
      <img src={imageUrl} alt={name} className="menu-item-image" />
    </div>
  );
};