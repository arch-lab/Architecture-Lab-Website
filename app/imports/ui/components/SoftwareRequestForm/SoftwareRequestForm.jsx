import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

export const SoftwareRequestForm = (props) => {

  const user = props.user;

  if(user){

    const softwareOptions = ['ArchGIS', 'Adobe'];

    const [email, setEmail] = useState(user.services.google.email);
    const [givenName, setGivenName] = useState(user.services.google.given_name);
    const [familyName, setFamilyName] = useState(user.services.google.family_name);
    const [software, setSoftware] = useState('');
    const [location, setLocation] = useState('');
    const [studentName, setStudentName] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`given name: ${givenName}`);
      console.log(`family name: ${familyName}`);
      console.log(`email: ${email}`);
      console.log(`software: ${software}`);
      console.log(`location: ${location}`);
      console.log(`student name: ${studentName}`);
      console.log(`additionalInfo: ${additionalInfo}`)
    }

    return(
      <>
        <Container>
          <Form className='form' onSubmit={handleSubmit}>

            <Row>
              <Col>
                <Form.Group>
                  <FloatingLabel label='First Name'>
                    <Form.Control
                      type='text'
                      placeholder='First Name'
                      value={givenName}
                      readOnly
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <FloatingLabel label='Last Name'>
                    <Form.Control
                      type='text'
                      placeholder='Last Name'
                      value={familyName}
                      readOnly
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <FloatingLabel label='Email address'>
                    <Form.Control
                      type='email'
                      placeholder='Email address'
                      value={email}
                      readOnly
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>

            <FloatingLabel label='Software'>
              <Form.Control
                as='select'
                placeholder='Software'
                onChange={event => setSoftware(event.target.value)}
              >
                <option>Select Software</option>
                {softwareOptions.map((opt, i) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </Form.Control>
            </FloatingLabel>

            <Form.Group>
              <FloatingLabel label='Location'>
                <Form.Control
                  type='text'
                  placeholder='Location'
                  value={location}
                  onChange={event => setLocation(event.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel label='Student authorised for pick-up'>
                <Form.Control
                  type='text'
                  placeholder='Student authorised for pick-up'
                  value={studentName}
                  onChange={event => setStudentName(event.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel label='Additional Information'>
                <Form.Control
                  type='text'
                  placeholder='Additional Information'
                  value={additionalInfo}
                  onChange={event => setAdditionalInfo(event.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Button variant='outline-success' onClick={handleSubmit}>Submit</Button>
          </Form>
        </Container>
      </>
    );
  } else {
    /* This will spin forever until a user is loaded */
    return(
      <Spinner animation="border" role="status"/>
    );
  }
};
