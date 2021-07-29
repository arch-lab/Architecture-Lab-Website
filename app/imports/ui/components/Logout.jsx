import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const Logout = ({handleLogout}) => {

  function handleClick() {
    Meteor.logout((err) => {
      if (err) {
        console.log(err);
      } else {
        handleLogout();
        console.log('Sucessfully signed out');
      }
    });
  };

  return(
    <div>
      <Button variant='primary' onClick={handleClick}>Logout</Button>
    </div>
  );
}
