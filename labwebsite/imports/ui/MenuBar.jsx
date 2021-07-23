import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

export const MenuBar = () => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          React Bootstrap
          </Navbar.Brand>
      </Navbar>
    </div>
  );
};
