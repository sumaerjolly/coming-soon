import React, { useState, useEffect } from 'react';
import moment, { duration } from 'moment';

function Countdown(props) {
  const initState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  const [state, setState] = useState(initState);

  const addZeroes = value => {
    value = String(value);
    while (value.length < 2) {
      value = `0${value}`;
    }
    return value;
  };

  const getCountdown = () => {
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
    getCountdown();
    const interval = setInterval(() => {
      getCountdown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      {Object.keys(state).map((time, i) => {
        return (
          <div className="countdown-segment" key={i}>
            {}
            <span className="countdown-segment-number">
              {addZeroes(state[time])}
            </span>
            <span className="countdown-segment-caption">
              {time.toUpperCase()}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Countdown;
