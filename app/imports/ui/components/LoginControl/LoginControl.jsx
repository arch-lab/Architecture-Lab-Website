import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import LoginButton from '../LoginButton/LoginButton.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';

function LoginControl(props) {

  const user = useTracker(() => Meteor.user(), []);

  if (user) {
    return (
      <>
      <UserMenu/>
      </>
    );
  } else {
    return(
      <LoginButton/>
    );
  }
} export default LoginControl;
