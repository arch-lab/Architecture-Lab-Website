import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuBar } from './MenuBar.jsx';
import { Home } from './Home.jsx';
import { EquipmentRental } from './EquipmentRental.jsx';
import { ClassroomReservation } from './ClassroomReservation.jsx';
import { SoftwareRequestForms } from './SoftwareRequestForms.jsx';
import { Footer } from './Footer.jsx';

export const App = () => (
  <div>
    <Router>
      <MenuBar/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/EquipmentRental">
        <EquipmentRental/>
      </Route>
      <Route path="/ClassroomReservation">
        <ClassroomReservation/>
      </Route>
      <Route path="/SoftwareRequestForms">
        <SoftwareRequestForms/>
      </Route>
      <Footer/>
    </Router>
  </div>
);
