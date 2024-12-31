import React, { useState } from 'react';
import { Home } from './components/Home';
import { ReservationForm } from './components/ReservationForm';
import { SuccessPage } from './components/SuccessPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'reservation' | 'success'>('home');

  const handleReserveTable = () => {
    setCurrentPage('reservation');
  };

  const handleReservationSubmit = () => {
    setCurrentPage('success');
  };

  const handleReturnHome = () => {
    setCurrentPage('home');
  };

  return (
    <div>
      {currentPage === 'home' && <Home onReserveTable={handleReserveTable} />}
      {currentPage === 'reservation' && <ReservationForm onSubmit={handleReservationSubmit} />}
      {currentPage === 'success' && <SuccessPage onReturn={handleReturnHome} />}
    </div>
  );
}

export default App;