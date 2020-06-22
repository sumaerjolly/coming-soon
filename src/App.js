import React, { useState } from 'react';
import './styles/comingSoon.css';
import Countdown from './components/Countdown';

function App() {
  const initState = {
    countdown: {
      futureDate: '2020-11-05 00:00:00'
    }
  };
  const [state, setState] = useState(initState);
  const { countdown } = state;
  return (
    <div className="background">
      <h1>Upcoming Page</h1>
      <Countdown futureDate={countdown.futureDate} />
    </div>
  );
}

export default App;
