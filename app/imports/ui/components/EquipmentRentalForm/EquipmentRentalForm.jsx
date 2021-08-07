import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function EquipmentRentalForm() {

  const [email, setEmail] = useState("");

  function handleChange(event) {
    setEmail({email.value});
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`An email was submitted: ${email}`);
  }

  return(
    <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email.value} onChange={handleChange}/>
        </Form.Group>

        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
    </>
  );

} export default EquipmentRentalForm;
