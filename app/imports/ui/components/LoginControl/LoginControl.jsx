import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LoginButton } from '../LoginButton/LoginButton.jsx';
import { UserMenu } from '../UserMenu/UserMenu.jsx';

export const LoginControl = (props) => {

  const user = props.user;

  if (user) {
    return (
      <>
      <UserMenu user={user}/>
      </>
    );
  } else {
    return(
      <LoginButton/>
    );
  }
};
