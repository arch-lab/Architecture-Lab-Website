import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

function EquipmentRentalForm() {

  const user = useTracker(() => Meteor.user(), []);

  const [email, setEmail] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [equipment, setEquipment] = useState('');
  const [location, setLocation] = useState('');
  const [studentName, setStudentName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const equipmentOptions = ["TV", "Laptop", "Mouse", "Keyboard"];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`given name: ${givenName}`);
    console.log(`family name: ${familyName}`);
    console.log(`email: ${email}`);
    console.log(`equipment: ${equipment}`);
    console.log(`location: ${location}`);
    console.log(`student name: ${studentName}`);
    console.log(`additionalInfo: ${additionalInfo}`)
  }
  if(user){
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
                      onChange={event => setGivenName(event.target.value)}
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
                      onChange={event => setFamilyName(event.target.value)}
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
                      onChange={event => setEmail(event.target.value)}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>

            <FloatingLabel label='Equipment'>
              <Form.Control
                as='select'
                placeholder='Equipment'
                onChange={event => setEquipment(event.target.value)}
              >
                <option>Select Equipment</option>
                {equipmentOptions.map((opt, i) => (
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
} export default EquipmentRentalForm;
