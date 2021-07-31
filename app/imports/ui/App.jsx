import React, {render} from 'react';
import NavBar from './components/NavBar.jsx';
import Routes from '../startup/client/routes.jsx';
import { Footer } from './components/Footer.jsx';

function App() {  
  return(
    <div>
        <NavBar/>
        <Routes/>
        <Footer/>
    </div>
  );
} export default App;
