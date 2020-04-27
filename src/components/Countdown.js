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
  // const test = Object.keys(state);
  // // console.log(test);
  // test.map((key, i) => {
  //   // console.log(state.key);
  //   // console.log(state.minutes);
  // });
  return (
    <div className="countdown">
      <div className="countdown-segment">
        <span className="countdown-segment-number">{state.days}</span>
        <span className="countdown-segment-caption">DAYS</span>
      </div>
      <div className="countdown-segment">
        <span className="countdown-segment-number">{state.hours}</span>
        <span className="countdown-segment-caption">HOURS</span>
      </div>
      <div className="countdown-segment">
        <span className="countdown-segment-number">{state.minutes}</span>
        <span className="countdown-segment-caption">MINS</span>
      </div>
      <div className="countdown-segment">
        <span className="countdown-segment-number">{state.seconds}</span>
        <span className="countdown-segment-caption">SECS</span>
      </div>
    </div>
  );
}

export default Countdown;
