import React, {render} from 'react';

import Paper from '@material-ui/core/Paper';

import NavBar from './components/NavBar/NavBar.jsx';
import Routes from '../startup/client/routes.jsx';
import { Footer } from './components/Footer/Footer.jsx';


function App() {
  const handle = Meteor.subscribe('users.services');
  return(
    <div>
    <Paper elevation={3}>
      <NavBar/>
      <Routes/>
      <Footer/>
    </Paper>
    </div>
  );
} export default App;
