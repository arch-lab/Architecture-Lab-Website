import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from "react-router-dom";
import AdminLink from '../../AdminLink/AdminLink.jsx';

export const NavLinks = (props) => {

  const user = props.user;

  return(
    <Nav>
      <Nav.Link as={ NavLink } to='/Home' activeClassName="selected">Home</Nav.Link>
      <Nav.Link as={ NavLink } to='/equipment-rental' activeClassName="selected">Equipment Rental</Nav.Link>
      <Nav.Link as={ NavLink } to='/classroom-reservation' activeClassName="selected">Classroom Reservation</Nav.Link>
      <Nav.Link as={ NavLink } to='/software-requests' activeClassName="selected">Software Requests</Nav.Link>
      <AdminLink user={user}/>
    </Nav>
  );
}
