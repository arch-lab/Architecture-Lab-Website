import { Meteor } from 'meteor/meteor'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const Home = () => {

  function handleClick() {
    console.log(Meteor.userId());
    console.log(Meteor.user());
  }



  return (
    <div>
      <h1>I'm Home</h1>
      <Button variant='primary' onClick={handleClick}>Meteor.user()</Button>
    </div>
  );
};
