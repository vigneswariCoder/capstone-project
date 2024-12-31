import React from 'react';

const categories = ['Lunch', 'Mains', 'Desserts', 'A La Carte', 'Specials'];

export const MenuCategories = () => {
  return (
    <div className="menu-categories">
      {categories.map((category, index) => (
        <button 
          key={index} 
          className={`category-btn ${index === 0 ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};