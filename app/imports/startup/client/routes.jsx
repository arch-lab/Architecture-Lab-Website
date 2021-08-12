import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../../ui/pages/Home.jsx';
import { EquipmentRental } from '../../ui/pages/EquipmentRental.jsx';
import { ClassroomReservation } from '../../ui/pages/ClassroomReservation.jsx';
import { SoftwareRequests } from '../../ui/pages/SoftwareRequests.jsx';
import { Admin } from '../../ui/pages/Admin.jsx';

export const Routes = (props) => {

  const user = props.user;

  return(
    <>
      <Switch>
        <Route path="/Home">
          <Home user={user}/>
        </Route>
        <Route path="/equipment-rental">
          <EquipmentRental user={user}/>
        </Route>
        <Route path="/classroom-reservation">
          <ClassroomReservation user={user}/>
        </Route>
        <Route path="/software-requests">
          <SoftwareRequests user={user}/>
        </Route>
        <Route path="/admin">
          <Admin user={user}/>
        </Route>
      </Switch>
    </>
  );
};
