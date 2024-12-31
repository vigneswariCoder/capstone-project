import React from 'react';
import { MenuItem } from './MenuItem';
import { MenuCategories } from './MenuCategories';

const menuItems = [
  {
    name: 'Greek Salad',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago...',
    price: '12.99',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&h=200'
  },
  {
    name: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic...',
    price: '7.99',
    imageUrl: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=200&h=200'
  },
  {
    name: 'Grilled Fish',
    description: 'Fresh grilled fish served with a side of vegetables and our special sauce...',
    price: '19.99',
    imageUrl: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=200&h=200'
  }
];

export const Menu = () => {
  return (
    <div className="menu-section">
      <h2>ORDER FOR DELIVERY!</h2>
      <MenuCategories />
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};