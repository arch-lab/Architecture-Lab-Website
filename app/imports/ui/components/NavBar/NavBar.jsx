import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";
import { NavLinks } from './NavLinks/NavLinks.jsx'
import { LoginControl } from '../LoginControl/LoginControl.jsx';
import styles from './NavBar.css';

export const NavBar = (props) => {

  const user = props.user;

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/Home'>
            <img id='navLogo' src='/images/soa-logo.png'/>
          </Navbar.Brand>
          <NavLinks user={user}/>
          <LoginControl user={user}/>
        </Container>
      </Navbar>
    </>
  );
};
