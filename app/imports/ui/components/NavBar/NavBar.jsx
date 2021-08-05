import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import LoginControl from '../LoginControl/LoginControl.jsx';
import AdminLink from '../AdminLink/AdminLink.jsx';
import styles from './NavBar.css';

function NavBar() {

    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand as={Link} to='/Home'>
              <img id='navLogo' src='/images/soa-logo.png'/>
            </Navbar.Brand>
            <Nav>
            <Nav.Link as={ NavLink } to='/Home' activeClassName="selected">Home</Nav.Link>
              <Nav.Link as={ NavLink } to='/equipment-rental' activeClassName="selected">Equipment Rental</Nav.Link>
              <Nav.Link as={ NavLink } to='/classroom-reservation' activeClassName="selected">Classroom Reservation</Nav.Link>
              <Nav.Link as={ NavLink } to='/software-request-forms' activeClassName="selected">Software Request Forms</Nav.Link>
              <AdminLink/>
            </Nav>
            <LoginControl/>
          </Container>
        </Navbar>
      </div>
    );

} export default NavBar;
