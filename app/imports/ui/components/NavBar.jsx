import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { LoginButton } from './LoginButton.jsx'

export const NavBar = () => {

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
          <Nav.Link as={ Link } to="/EquipmentRental">Equipment Rental</Nav.Link>
          <Nav.Link as={ Link } to="/ClassroomReservation">Classroom Reservation</Nav.Link>
          <Nav.Link as={ Link } to="/SoftwareRequestForms">Software Request Forms</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <LoginButton/>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
