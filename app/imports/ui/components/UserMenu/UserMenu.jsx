
import React, { useState, useRef } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay'
import Popover from "react-bootstrap/Popover";
import styles from './UserMenu.css';
import { Logout } from './Logout.jsx';

/*
* Takes a Meteor User Object that has google added as a service.
*
* Renders a circular button of the users google profile picture. When clicked a
* popover menu is displayed.
*/
export const UserMenu = (props) => {

  const user = props.user;
  const [show, setShow] = useState(false);
  const target = useRef(null);

/* Toggles the visibility of the popover menu when the button is clicked */
  const handleClick = () => {
    setShow(!show);
  }

/* Hides popover when user clicks outside of it.
* Since this will run whenever the popover hides it needs to forcefuly
* set show to false or it breaks the users ability to toggle off via the button.
*/
  const handleHide = () => {
    setShow(false);
  }

  if(user){
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
        rootClose={true}
        onHide={handleHide}
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
  } else {
    return(null);
  }
};
