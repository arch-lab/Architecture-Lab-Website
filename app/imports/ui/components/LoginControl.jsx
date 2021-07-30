import React, { useState, useEffect } from 'react';
import LoginButton from './LoginButton.jsx';
import { MiniProfile } from './MiniProfile.jsx';
import Logout from './Logout.jsx';

class LoginControl extends React.Component {

  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLogin = () => {
    this.setState({isLoggedIn: true});
    console.log(this.state.isLoggedIn);
  }

  handleLogout = () => {
    this.setState({isLoggedIn: false});
    console.log(this.state.isLoggedIn);
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return (
        <Logout handleLogout={this.handleLogout}/>
      );

    } else {
      return(
        <LoginButton handleLogin={this.handleLogin}/>
      );
    }
  }
} export default LoginControl;
