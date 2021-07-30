import React from 'react';
import Button from 'react-bootstrap/Button';

function LoginButton({handleLogin}) {

  function handleClick() {
    Meteor.loginWithGoogle({
      requestPermissions: ['profile']
    }, (err) => {
      if (err) {
        console.log(err);
      } else {
        handleLogin();
        console.log('Sucessfully signed in');
      }
    });
  };

  return (
    <div>
      <button id='googleBtn' onClick={handleClick}>
        <img id='googleBtnImg' src='/images/btn_google_signin_dark_normal_web@2x.png'/>
      </button>
    </div>
  );
} export default LoginButton;
