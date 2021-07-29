import React from 'react';
import Button from 'react-bootstrap/Button';

export const LoginButton = () => {

  function handleClick() {
    Meteor.loginWithGoogle({
      requestPermissions: ['profile']
    }, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(Meteor.user());
      }
    });
  };

  return (
    <div>
      <Button variant='primary' id='googleButton' onClick={handleClick}>
        <img
          id='googleLogo'
          src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'
        />Sign-In
      </Button>
    </div>
  );
};
