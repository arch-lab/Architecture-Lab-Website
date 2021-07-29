import { Meteor } from 'meteor/meteor'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const Home = () => {

  function handleClick() {
    console.log(Meteor.userId());
    console.log(Meteor.user());
  };

  function logout() {
    Meteor.logout((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Sucessfully signed out');
      }
    });
  };

  return (
    <div>
      <h1>I'm Home</h1>
      <Button variant='primary' onClick={handleClick}>Meteor.user()</Button>
      <Button variant='primary' onClick={logout}>Logout</Button>
    </div>
  );
};
