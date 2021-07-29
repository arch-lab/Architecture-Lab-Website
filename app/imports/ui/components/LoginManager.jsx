import React from 'react';
import { LoginButton } from './LoginButton.jsx'
import { MiniProfile } from './MiniProfile.jsx'

export const LoginManager = () => {

  if(Meteor.user()===null){
    return(
      <LoginButton/>
    );
  } if(Meteor.user()!==null) {
    return(
      <MiniProfile/>
    );
  } else {
    return(null);
  }
};
