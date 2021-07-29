import React from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export const MiniProfile = () => {

  let user = Meteor.user();

  return (
    <div>
      <Button>
        {user.services.google.given_name} {user.services.google.family_name}
        <Image style={{height: 45, marginLeft: 10}} src={Meteor.user().services.google.picture} roundedCircle/>
      </Button>
    </div>
  );
};
