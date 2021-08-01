import React, {render} from 'react';
import NavBar from './components/NavBar.jsx';
import Routes from '../startup/client/routes.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  const handle = Meteor.subscribe('users.services');
  return(
    <div>
        <NavBar/>
        <Routes/>
        <Footer/>
    </div>
  );
} export default App;
