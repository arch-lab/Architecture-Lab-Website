import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from "react-router-dom";

  function AdminLink(){

    const user = useTracker(() => Meteor.user(), []);

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
