import React from 'react';
import { EquipmentRentalForm } from '../components/EquipmentRentalForm/EquipmentRentalForm.jsx';

export const EquipmentRentalPage = (props) => {

  const user = props.user;

  return (
    <div>
      <EquipmentRentalForm user={user}/>
    </div>
  );
};
