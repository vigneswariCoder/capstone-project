import React, { useState } from 'react';
import { Users, Calendar, MessageSquare, Mail } from 'lucide-react';
import { Nav } from '../layout/Nav';
import { Header } from '../layout/Header';

export const ReservationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    adults: '2',
    children: '0',
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <Nav />
      <Header />
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