import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../ui/pages/Home.jsx';
import { EquipmentRental } from '../../ui/pages/EquipmentRental.jsx';
import { ClassroomReservation } from '../../ui/pages/ClassroomReservation.jsx';
import { SoftwareRequestForms } from '../../ui/pages/SoftwareRequestForms.jsx';
import Admin from '../../ui/pages/Admin.jsx';

function Routes () {

  return(
    <div>
      <Switch>
        <Route path="/equipment-rental">
          <EquipmentRental/>
        </Route>
        <Route path="/classroom-reservation">
          <ClassroomReservation/>
        </Route>
        <Route path="/software-request-forms">
          <SoftwareRequestForms/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
} export default Routes;
