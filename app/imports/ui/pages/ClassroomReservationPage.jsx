import React, { useState } from 'react';
import { Calendar } from '../components/Calendar/Calendar.jsx';

export const ClassroomReservationPage = (props) => {

  const user = props.user;
  const test = props.test;

  return (
    <>
      <h1>I'm ClassroomReservation</h1>
      <Calendar title='Room 211'/>
    </>
  );
};
