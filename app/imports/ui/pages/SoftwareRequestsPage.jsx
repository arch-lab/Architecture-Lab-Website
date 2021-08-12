import React, { useState } from 'react';
import { SoftwareRequestForm } from '../components/SoftwareRequestForm/SoftwareRequestForm.jsx'

export const SoftwareRequestsPage = (props) => {

  const user = props.user;

  return (
    <div>
      <SoftwareRequestForm user={user}/>
    </div>
  );
};
