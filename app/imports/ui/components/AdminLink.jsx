import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

  function AdminLink(){

    const user = useTracker(() => Meteor.user());

    if(Roles.userIsInRole(user, ['admin'])){
      console.log(user);
      return(
        <>
          <Nav.Link as={ Link } to="/admin">Admin</Nav.Link>
        </>
      );
    } else {
      console.log(user);
      return null;
    }
  } export default AdminLink;
