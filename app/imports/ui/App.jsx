import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import { Home } from './pages/Home.jsx';
import { EquipmentRental } from './pages/EquipmentRental.jsx';
import { ClassroomReservation } from './pages/ClassroomReservation.jsx';
import { SoftwareRequestForms } from './pages/SoftwareRequestForms.jsx';
import { Footer } from './components/Footer.jsx';

export const App = () => (
  <div>
      <NavBar/>
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
      <Footer/>
  </div>
);
