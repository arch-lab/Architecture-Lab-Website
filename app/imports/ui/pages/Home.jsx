import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Home() {

  const user = useTracker(() => Meteor.user());

  function handleClick() {
    console.log(Meteor.userId());
    console.log(Meteor.user());
  }

  function handleRoleClick() {
    console.log(Roles.userIsInRole(Meteor.userId(), ['admin']));

  }


  if(user){
    return (
      <div>
        <h1>Welcome {user.services.google.given_name} {user.services.google.family_name}</h1>
        <Button variant='primary' onClick={handleClick}>Meteor.user()</Button>
        <Button variant='primary' onClick={handleRoleClick}>Roles.userIsInRole()</Button>
      </div>
    );
  } else {
    return(
      <div>
        <h1>Welcome, please sign in.</h1>
        <Button variant='primary' onClick={handleClick}>Meteor.user()</Button>
        <Button variant='primary' onClick={handleRoleClick}>Roles.userIsInRole()</Button>
      </div>
    );
  }
}export default Home;
