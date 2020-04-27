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
      {/* {Object.keys(state).map((time, i) => {
        let show = state.time;
        console.log(show);
        return (
          <div className="countdown-segment" key={i}>
            {}
            <span className="countdown-segment-number">{show}</span>
            <span className="countdown-segment-caption">
              {time.toUpperCase()}
            </span>
          </div>
        );
      })} */}

      <div className="countdown-segment">
        <span className="countdown-segment-number">
          {addZeroes(state.days)}
        </span>
        <span className="countdown-segment-caption">DAYS</span>
      </div>
      <div className="countdown-segment">
        <span className="countdown-segment-number">
          {addZeroes(state.hours)}
        </span>
        <span className="countdown-segment-caption">HOURS</span>
      </div>
      <div className="countdown-segment">
        <span className="countdown-segment-number">
          {addZeroes(state.minutes)}
        </span>
        <span className="countdown-segment-caption">MINS</span>
      </div>
      <div className="countdown-segment">
        <span className="countdown-segment-number">
          {addZeroes(state.seconds)}
        </span>
        <span className="countdown-segment-caption">SECS</span>
      </div>
    </div>
  );
}

export default Countdown;
