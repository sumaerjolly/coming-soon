import React, { useState, useEffect } from 'react';
import moment, { duration } from 'moment';

function Countdown(props) {
  const initState = {
    days: 0,
    hours: 0,
    minutess: 0,
    secondss: 0
  };

  const [state, setState] = useState(initState);

  const setCountdown = () => {
    const futureDate = moment(props.futureDate);
    const today = moment();
    const clockDuration = duration(futureDate.diff(today));
    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const minutes = clockDuration.minutes();
    const seconds = clockDuration.seconds();
    setState({ days, hours, minutes, seconds });
  };

  // set interval when component mounts and clean up
  useEffect(() => {
    setCountdown();
    const interval = setInterval(() => {
      setCountdown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      {Object.keys(state).map((key, i) => {
        <div className="countdown-segment">
          <span className="countdown-segment-number">{state.key}</span>
          <span className="countdown-segment-caption">{key.toUpperCase()}</span>
        </div>;
      })}
    </div>
  );
}

export default Countdown;
