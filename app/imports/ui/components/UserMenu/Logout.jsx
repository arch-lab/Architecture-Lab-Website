import React from 'react';
import Button from 'react-bootstrap/Button'

export const Logout = () => {

  function handleClick() {
    Meteor.logout((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Sucessfully signed out');
      }
    });
  };

  return(
    <div>
      <Button onClick={handleClick}>Logout</Button>
    </div>
  );
};
