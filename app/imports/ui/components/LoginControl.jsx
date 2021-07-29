import React, { useState, useEffect } from 'react';
import LoginButton from './LoginButton.jsx'
import { MiniProfile } from './MiniProfile.jsx'
import { Logout } from './Logout.jsx'

function LoginControl() {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  let button;

  console.log({isLoggedIn});

  function handleLogin() {
    setisLoggedIn({isLoggedIn: true});
    console.log({isLoggedIn});
  }

  function handleLogout() {
    setisLoggedIn({isLoggedIn: false});
    console.log({isLoggedIn});
  }

  if (isLoggedIn) {
    return (
      <Logout handleLogout={handleLogout}/>
    );

  } else {
    return(
      <LoginButton handleLogin={handleLogin}/>
    );
  }
} export default LoginControl;
