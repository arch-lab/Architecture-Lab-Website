import React, {render} from 'react';

import NavBar from './components/NavBar/NavBar.jsx';
import Routes from '../startup/client/routes.jsx';
import { Footer } from './components/Footer/Footer.jsx';


function App() {
  //const handle = Meteor.subscribe('users.services');
  //const rolesSub = Meteor.subscribe('')
  return(
    <div>
      <NavBar/>
      <Routes/>
      <Footer/>
    </div>
  );
} export default App;
