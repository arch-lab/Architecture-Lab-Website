import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../ui/pages/Home.jsx';
import { EquipmentRental } from '../../ui/pages/EquipmentRental.jsx';
import { ClassroomReservation } from '../../ui/pages/ClassroomReservation.jsx';
import { SoftwareRequestForms } from '../../ui/pages/SoftwareRequestForms.jsx';

function Routes () {

  return(
    <div>
      <Switch>
        <Route path="/EquipmentRental">
          <EquipmentRental/>
        </Route>
        <Route path="/ClassroomReservation">
          <ClassroomReservation/>
        </Route>
        <Route path="/SoftwareRequestForms">
          <SoftwareRequestForms/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
} export default Routes;
