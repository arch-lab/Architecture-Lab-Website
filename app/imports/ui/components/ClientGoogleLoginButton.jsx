import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor'
import { GoogleLogin } from 'react-google-login';

/**
* Google Sign in button
* @return {Object} A google sign in button
*/

/* Sets ClientId to the google OAuth 2.0 client ID from the Google Dev Console*/
const clientId = '406508738783-a1egbp88pr7l49o6a9dgbvu8rgeknrkk.apps.googleusercontent.com';

export const Login = () => {
  let userProfile;
/*A function to handle sucessful login*/
  const onSuccess = (res) => {
    var profile = res.getBasicProfile();
    var id_token = res.getAuthResponse().id_token;
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  };

/*A function to handle failed login*/
  const onFailure = (res) => {
    console.log('[Login Failed] res: ', res);
  };

/**/
  return (
    <div style={{padding: 10}}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};
