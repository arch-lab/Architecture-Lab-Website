import React from 'react';
import Button from '@material-ui/core/Button';

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
    <div id='navItem'>
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
} export default LoginButton;
