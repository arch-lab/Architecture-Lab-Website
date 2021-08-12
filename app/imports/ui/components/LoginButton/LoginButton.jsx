import React from 'react';
import Button from 'react-bootstrap/Button'
import styles from './LoginButton.css';

export const LoginButton = () => {

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
    <div>
      <Button
        variant='contained'
        id='googleBtn'
        onClick={handleClick}
      >
        <img id='btnImg' src='/images/g-logo.png'/>
        Sign in with Google
      </Button>
    </div>
  );
};
