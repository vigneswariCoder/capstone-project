import React, { useState } from 'react';
import { Menu, ShoppingBag, Users, Calendar, MessageSquare, Mail } from 'lucide-react';

interface ReservationFormProps {
  onSubmit: () => void;
}

export const ReservationForm = ({ onSubmit }: ReservationFormProps) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    adults: '2',
    children: '0',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

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

      <form className="reservation-form" onSubmit={handleSubmit}>
        <h2>RESERVE A TABLE</h2>
        
        <div className="form-icons">
          <div className="form-icon">
            <Users size={24} />
            <span>Party Size</span>
          </div>
          <div className="form-icon">
            <Calendar size={24} />
            <span>Date</span>
          </div>
          <div className="form-icon">
            <MessageSquare size={24} />
            <span>Special</span>
          </div>
          <div className="form-icon">
            <Mail size={24} />
            <span>Contact</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Date & Time</label>
          <input
            type="datetime-local"
            className="form-input"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Number of Adults</label>
          <input
            type="number"
            className="form-input"
            value={formData.adults}
            onChange={(e) => setFormData({...formData, adults: e.target.value})}
            min="1"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Number of Children</label>
          <input
            type="number"
            className="form-input"
            value={formData.children}
            onChange={(e) => setFormData({...formData, children: e.target.value})}
            min="0"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Special Requests</label>
          <textarea
            className="form-input"
            value={formData.specialRequests}
            onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
            rows={4}
          />
        </div>

        <button type="submit" className="reserve-button">
          Reserve a table
        </button>
      </form>
    </div>
  );
};