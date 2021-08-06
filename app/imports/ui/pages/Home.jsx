import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Roles } from 'meteor/alanning:roles';

function Home() {

  const user = useTracker(() => Meteor.user());



  function handleClick() {
    console.log(Meteor.userId());
    console.log(Meteor.user());
  }

  function handleRoleClick() {
    console.log(Roles.userIsInRole(Meteor.user(), 'admin'));
  }


  if(user){
    return (
      <div>
        <h1>Welcome {user.services.google.given_name} {user.services.google.family_name}</h1>
        <Button variant='contained' onClick={handleClick}>Meteor.user()</Button>
        <Button variant='contained' onClick={handleRoleClick}>Roles.userIsInRole()</Button>
      </div>
    );
  } else {
    return(
      <div>
        <h1>Welcome, please sign in.</h1>
        <Button variant='contained' onClick={handleClick}>Meteor.user()</Button>
        <Button variant='contained' onClick={handleRoleClick}>Roles.userIsInRole()</Button>
      </div>
    );
  }
}export default Home;
