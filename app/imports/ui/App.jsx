import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { Routes } from '../startup/client/routes.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Events } from '../db/Events.jsx';
import { Inventory } from '../db/Inventory.jsx';


function App() {

/*****************
 * Trackers
 *****************/
  const user = useTracker(() => Meteor.user(), []);

  const events = useTracker(() => {
    if (! Meteor.user()) {
      return null;
    }
    const handler = Meteor.subscribe('events');

    return Events.find().fetch();
  });

  const inventory = useTracker(() => {
    if (! Meteor.user()) {
      return null;
    }
    const handler = Meteor.subscribe('inventory');

    return Inventory.find().fetch();
  });

  return(
    <div>
      <NavBar user={user}/>
      <Routes user={user}/>
      <Footer/>
    </div>
  );
} export default App;
