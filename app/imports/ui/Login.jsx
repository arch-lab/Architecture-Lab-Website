import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '406508738783-a1egbp88pr7l49o6a9dgbvu8rgeknrkk.apps.googleusercontent.com';

export const Login = () => {
  const onSuccess = (res) => {
    console.log('[Login Success] current user: ', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('[Login Failed] res: ', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Log in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};
