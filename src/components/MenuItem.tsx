import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const MenuItem = ({ name, description, price, imageUrl }: MenuItemProps) => {
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