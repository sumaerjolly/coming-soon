import React, { useState } from 'react';
import moment, { duration } from 'moment';

function Countdown() {
  const initState = {
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  };
  const [state, setState] = useState(initState);
  return <div></div>;
}

export default Countdown;
