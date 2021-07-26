import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export const MenuBar = () => {

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
          <Nav className="ms-auto">
            <Nav.Link as={ Link } to="/">Home</Nav.Link>
            <Nav.Link as={ Link } to="/EquipmentRental">Equipment Rental</Nav.Link>
            <Nav.Link as={ Link } to="/ClassroomReservation">Classroom Reservation</Nav.Link>
            <Nav.Link as={ Link } to="/SoftwareRequestForms">Software Request Forms</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
};
