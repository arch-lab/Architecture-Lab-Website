import React, { useState } from 'react';

export const ClassroomReservationPage = (props) => {

  const user = props.user;
  const test = props.test;

  return (
    <>
      <h1>I'm ClassroomReservation</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=800&wkst=1&bgcolor=%23ffffff&ctz=Pacific%2FHonolulu&src=Y19hdW02NGowM2x2dTE1OHZ0ajBhaGI0N2I3c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000&showTabs=0&mode=WEEK"
        width="1000"
        height="800"
        frameBorder="0"
        scrolling="no">
      </iframe>
    </>
  );
};
