import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, RouterLink } from "react-router-dom";
import LoginControl from '../LoginControl/LoginControl.jsx';
import AdminLink from '../AdminLink/AdminLink.jsx';
import styles from './NavBar.css';

function NavBar(props) {

  const [currentTab, setTab] = React.useState(window.location.pathname);

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

    return (
        <AppBar position='static' color="default">
          <Grid container id='navBar'>

            <Grid item id='navItem'>
              <Link to='/' onClick={null}>
                <img id='navLogo' src='/images/soa-logo.png'/>
              </Link>
            </Grid>

            <Grid item id='navLinks'>
              <Toolbar>
                <Tabs
                indicatorColor='primary'
                value={currentTab}
                onChange={handleChange}>
                  <Tab
                    label='Home'
                    component={Link}
                    to='/'
                    value='/'
                  />
                  <Tab
                    label='equipment-rental'
                    component={Link}
                    to='/equipment-rental'
                    value='/equipment-rental'
                  />
                  <Tab
                    label='classroom-reservation'
                    component={Link}
                    to='/classroom-reservation'
                    value='/classroom-reservation'
                  />
                  <Tab
                    label='software-request-forms'
                    component={Link}
                    to='/software-request-forms'
                    value='/software-request-forms'
                  />
                  <AdminLink/>
                </Tabs>
              </Toolbar>
            </Grid>

            <Grid item id='navItem'>
              <LoginControl/>
            </Grid>

          </Grid>
        </AppBar>
    );

} export default NavBar;
