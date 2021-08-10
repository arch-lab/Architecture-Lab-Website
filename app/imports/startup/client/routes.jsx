import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../ui/pages/Home.jsx';
import { EquipmentRental } from '../../ui/pages/EquipmentRental.jsx';
import { ClassroomReservation } from '../../ui/pages/ClassroomReservation.jsx';
import { SoftwareRequests } from '../../ui/pages/SoftwareRequests.jsx';
import Admin from '../../ui/pages/Admin.jsx';

function Routes () {

  return(
    <div>
      <Switch>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/equipment-rental">
          <EquipmentRental/>
        </Route>
        <Route path="/classroom-reservation">
          <ClassroomReservation/>
        </Route>
        <Route path="/software-requests">
          <SoftwareRequests/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
      </Switch>
    </div>
  );
} export default Routes;
