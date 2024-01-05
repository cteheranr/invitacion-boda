import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/es';
import './countdown.css'

function Countdown({ targetDate }) {

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getTimeRemaining() {
    const now = moment();
    const futureDate = moment(targetDate);
    const duration = moment.duration(futureDate.diff(now));
    
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className='time'>
      <div>{timeRemaining.days}</div>
      <p>:</p>
      <div>{timeRemaining.hours}</div>
      <p>:</p>
      <div>{timeRemaining.minutes}</div>
      <p>:</p>
      <div>{timeRemaining.seconds}</div>
    </div>
  );
};

export default Countdown;
