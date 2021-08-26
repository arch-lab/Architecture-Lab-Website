import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import styles from './Calendar.css'

export const Calendar = (props) => {

  const title = props.title;
  const date = props.date;

  return(
    <Container>
      <h1>{title}</h1>
      <h1>{date.toLocaleString()}</h1>
      <Row className='row'>
        <Col className='col'>
          Monday
        </Col>

        <Col className='col'>
          Tuesday
        </Col>

        <Col className='col'>
          Wednesday
        </Col>

        <Col className='col'>
          Thursday
        </Col>

        <Col className='col'>
          Friday
        </Col>

        <Col className='col'>
          Saturday
        </Col>

        <Col className='col'>
          Sunday
        </Col>
      </Row>

      <Row>
        <Col className='col'>
          Item 1
        </Col>

        <Col className='col'>
          Item 2
        </Col>

        <Col className='col'>
          Item 3
        </Col>

        <Col className='col'>
          Item 4
        </Col>

        <Col className='col'>
          Item 5
        </Col>

        <Col className='col'>
          Item 6
        </Col>

        <Col>
          Item 7
        </Col>
      </Row>
    </Container>
  );
};
