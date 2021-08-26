import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';

import { addCalendar } from '../../api/calendars/calendarsMethods.jsx'

export const AdminPage = (props) => {

  const user = props.user;

  return(
    <>
      <h1>I'm the Admin page.</h1>
      <Container>
        <InputGroup>
          <DropdownButton
            variant="outline-secondary"
            title="Dropdown"
          >
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton>
          <FormControl aria-label="Text input with dropdown button" />
        </InputGroup>
      </Container>
    </>
  );
};
