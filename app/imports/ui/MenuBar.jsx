import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const MenuBar = () => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          React Bootstrap
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/NotHome">Not Home</Nav.Link>
      </Navbar>
    </div>
  );
};
