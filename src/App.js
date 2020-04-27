import React from 'react';
import './styles/comingSoon.css';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="background">
      <h1>Upcoming Page</h1>
      <Countdown futureDate="2020-06-01 00:00:00" />
    </div>
  );
}

export default App;
