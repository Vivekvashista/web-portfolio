import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import {Toolbar} from "@material-ui/core";

const AppHeader = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        This is the header
      </Toolbar>
    </AppBar>
  );
}
export default AppHeader;