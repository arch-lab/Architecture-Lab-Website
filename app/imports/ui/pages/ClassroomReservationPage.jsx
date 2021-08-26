import React, { useState, useEffect } from 'react';
import { Calendar } from '../components/Calendar/Calendar.jsx';

export const ClassroomReservationPage = (props) => {

  const user = props.user;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <>
      <h1>I'm ClassroomReservation</h1>
      <Calendar title='Room 211' date={date}/>
    </>
  );
};
