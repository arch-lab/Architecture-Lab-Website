import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import LoginControl from './LoginControl.jsx';
import AdminLink from './AdminLink.jsx';

function NavBar(props) {

    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="/images/soa-logo.png"
              height="45"
            />{' '}
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={ Link } to="/">Home</Nav.Link>
            <Nav.Link as={ Link } to="/equipment-rental">Equipment Rental</Nav.Link>
            <Nav.Link as={ Link } to="/classroom-reservation">Classroom Reservation</Nav.Link>
            <Nav.Link as={ Link } to="/software-request-forms">Software Request Forms</Nav.Link>
            <AdminLink/>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <LoginControl/>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );

} export default NavBar;
