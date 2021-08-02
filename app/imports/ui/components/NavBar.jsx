import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { RouterLink } from "react-router-dom";
import LoginControl from './LoginControl.jsx';
import AdminLink from './AdminLink.jsx';

function NavBar(props) {

  const [currentTab, setTab] = React.useState(0);
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Tabs
            value={currentTab}
            onChange={handleChange}>
              <Tab
                label='Home'
                component={RouterLink}
                to='/'
              />
              <Tab
                label='equipment-rental'
                component={RouterLink}
                to='/equipment-rental'
              />
              <Tab
                label='classroom-reservation'
                component={RouterLink}
                to='/classroom-reservation'
              />
              <Tab
                label='software-request-forms'
                component={RouterLink}
                to='/software-request-forms'
              />
              <AdminLink/>
              <LoginControl/>
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );

} export default NavBar;
