import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import {Toolbar} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import Photo from '../assets/photo.jpg';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import {Typography} from "@material-ui/core";

const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <Box display='flex' alignItems='center'>
          <Avatar src={Photo} alt='Vivek' className={classes.large}/>
          <Box className={classes.info}>
            <Typography variant='body2' component='div'>
              Vivek Sharma
            </Typography>
            <Typography variant='h5' component='div' color='textPrimary'>
              Full Stack Engineer
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles(theme => ({
  large: {
    width: 55,
    height: 55,
    marginRight: theme.spacing(1)
  },
  info: {
    color: theme.palette.grey.A700,
  }
}));
export default AppHeader;