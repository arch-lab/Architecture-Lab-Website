import React, {render} from 'react';
import NavBar from './components/NavBar.jsx';
import Routes from '../startup/client/routes.jsx';
import { Footer } from './components/Footer.jsx';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { isAuthenticated: false };
  }

  login = () => {
    this.setState({ isAuthenticated: true });
  }

  logout = () => {
    this.setState({ isAuthenticated: false });
  }

  render(){
    return(
      <div>
          <NavBar/>
          <Routes/>
          <Footer/>
      </div>
    );
  }
} export default App;
