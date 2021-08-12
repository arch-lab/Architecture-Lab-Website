import React, {render} from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { Routes } from '../startup/client/routes.jsx';
import { Footer } from './components/Footer/Footer.jsx';


function App() {

  const user = useTracker(() => Meteor.user(), []);

  return(
    <div>
      <NavBar user={user}/>
      <Routes user={user}/>
      <Footer/>
    </div>
  );
} export default App;
