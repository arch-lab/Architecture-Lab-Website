
import React, { useState, useRef } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay'
import Popover from "react-bootstrap/Popover";
import styles from './UserMenu.css';
import Logout from './Logout.jsx';

function UserMenu() {

  const user = useTracker(() => Meteor.user(), []);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  function handleClick() {
    console.log('I was clicked');
    setShow(!show);
  }

  return (
    <>
        <Image
          id='profileButton'
          src={user.services.google.picture}
          ref={target}
          onClick={handleClick}
          roundedCircle
        />
        <Overlay
        target={target.current}
        show={show}
        hideArrow={true}
        placement="bottom-end">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <Popover {...props}>
              <Popover.Header as="h3">{user.services.google.given_name} {user.services.google.family_name}</Popover.Header>
              <Popover.Body>
                <Logout/>
              </Popover.Body>
            </Popover>
          )}
        </Overlay>
    </>
  );
} export default UserMenu
/*
<div
  {...props}
  style={{
    backgroundColor: 'rgba(255, 100, 100, 0.85)',
    padding: '2px 10px',
    color: 'white',
    borderRadius: 3,
    ...props.style,
  }}
>
  Simple tooltip
</div>
*/
