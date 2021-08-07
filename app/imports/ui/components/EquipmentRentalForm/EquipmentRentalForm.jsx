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
  const [studentName, setStudentName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`given name: ${givenName}`);
    console.log(`family name: ${familyName}`);
    console.log(`email: ${email}`);
    console.log(`equipment: ${equipment}`);
    console.log(`student name: ${studentName}`);
    console.log(`additionalInfo: ${additionalInfo}`)
  }
  if(user){
    return(
      <>
        <Container>
          <Form onSubmit={handleSubmit}>

            <Row className="g-2">
              <Col md>
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

              <Col md>
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

              <Col md>
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
                <option value="TV">TV</option>
                <option value="Laptop">Laptop</option>
                <option value="Mouse">Mouse</option>
              </Form.Control>
            </FloatingLabel>

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
/*
<Form.Group>
  <FloatingLabel label='Email address'>
    <Form.Control
      type='email'
      placeholder='example@mail.com'
      value={email}
      onChange={event => setEmail(event.target.value)}
    />
  </FloatingLabel>
</Form.Group>
*/
