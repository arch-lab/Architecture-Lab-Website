import React from 'react';
import { Meteor } from 'meteor/meteor'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

export const UserLink = (props) => {

  const user = props.user;

  if(Roles.userIsInRole(user, ['admin'])){
    return(
      <>
        <Link to={`/user/${user._id}`}>My Profile</Link>
      </>
    );
  } else {
    return null;
  }
};
