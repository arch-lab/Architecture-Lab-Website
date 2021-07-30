import React from 'react';
import Button from 'react-bootstrap/Button';

function LoginButton() {

  function handleClick() {
    Meteor.loginWithGoogle({
      requestPermissions: ['profile']
    }, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Sucessfully signed in');
      }
    });
  };

  return (
    <div id='googleBtn' onClick={handleClick}/>
  );
} export default LoginButton;
