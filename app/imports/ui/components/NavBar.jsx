import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, RouterLink } from "react-router-dom";
import LoginControl from './LoginControl.jsx';
import AdminLink from './AdminLink.jsx';

function NavBar(props) {

  const [currentTab, setTab] = React.useState(0);
  const handleChange = (event, newTab) => {
    setTab(newTab);
    console.log(currentTab);
  };

    return (
      <div>
        <AppBar position='static'>
          <Grid container>

            <Grid item>
              <Link to='/' onClick={null}>
                <img id='navLogo' src='/images/soa-logo.png'/>
              </Link>
            </Grid>

            <Grid item style={{flexGrow: 1}}>
              <Toolbar>
                <Tabs
                indicatorColor='primary'
                value={currentTab}
                onChange={handleChange}>
                  <Tab
                    label='Home'
                    component={Link}
                    to='/'
                  />
                  <Tab
                    label='equipment-rental'
                    component={Link}
                    to='/equipment-rental'
                  />
                  <Tab
                    label='classroom-reservation'
                    component={Link}
                    to='/classroom-reservation'
                  />
                  <Tab
                    label='software-request-forms'
                    component={Link}
                    to='/software-request-forms'
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
      </div>
    );

} export default NavBar;
