import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../../ui/pages/HomePage.jsx';
import { EquipmentRentalPage } from '../../ui/pages/EquipmentRentalPage.jsx';
import { ClassroomReservationPage } from '../../ui/pages/ClassroomReservationPage.jsx';
import { SoftwareRequestsPage } from '../../ui/pages/SoftwareRequestsPage.jsx';
import { AdminPage } from '../../ui/pages/AdminPage.jsx';

/** Route definitions that tell React what component to render at a given URL */

export const Routes = (props) => {

  const user = props.user;

  return(
    <>
      <Switch>
        <Route exact path="/Home">
          <HomePage user={user}/>
        </Route>
        <Route exact path="/equipment-rental">
          <EquipmentRentalPage user={user}/>
        </Route>
        <Route exact path="/classroom-reservation">
          <ClassroomReservationPage user={user}/>
        </Route>
        <Route exact path="/software-requests">
          <SoftwareRequestsPage user={user}/>
        </Route>
        <Route exact path="/user/:userId">
          <AdminPage user={user}/>
        </Route>
        <Route exact path="/admin">
          <AdminPage user={user}/>
        </Route>
      </Switch>
    </>
  );
};
