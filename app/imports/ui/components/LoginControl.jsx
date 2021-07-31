import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import LoginButton from './LoginButton.jsx';
import { MiniProfile } from './MiniProfile.jsx';
import Logout from './Logout.jsx';

function LoginControl(props) {

  const user = useTracker(() => Meteor.user());

  if (user) {
    return (
      <Logout/>
    );
  } else {
    return(
      <LoginButton/>
    );
  }
} export default LoginControl;
