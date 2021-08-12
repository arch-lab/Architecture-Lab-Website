import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from "react-router-dom";

  function AdminLink(props){

    const user = props.user;

    if(Roles.userIsInRole(user, ['admin'])){
      return(
        <>
          <Nav.Link as={ NavLink } to="/admin" activeClassName="selected">Admin</Nav.Link>
        </>
      );
    } else {
      return null;
    }
  } export default AdminLink;
