import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { addCalendar } from '../../api/calendars/calendarsMethods.jsx'

export const AdminPage = (props) => {

  const user = props.user;

  const [show, setShow] = useState(false);

  const [input, setInput] = useState('');

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setInput('');
  }

  const handleSubmit = () => {
    addCalendar.call({
      title: input
    }, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log('success!');
      }
    });
    handleClose();
  }

  return(
    <>
      <h1>I'm the Admin page.</h1>
      <Container>
        <Button onClick={handleShow}>
          Add Calendar
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Calendar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Calendar Title
            <Form.Control
              type='text'
              placeholder=''
              value={input}
              onChange={event => setInput(event.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};
