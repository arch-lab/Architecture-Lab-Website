import React from 'react';
import Button from 'react-bootstrap/Button'

function Logout() {

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
      <Button variant='contained' onClick={handleClick}>Logout</Button>
    </div>
  );
} export default Logout;
