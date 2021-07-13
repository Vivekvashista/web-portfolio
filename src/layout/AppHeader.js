import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import {Toolbar} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import Photo from '../assets/photo.jpg';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {List} from "@material-ui/core";
import constants from "../utils/constants";
import {ListItem} from "@material-ui/core";
import {ListItemIcon} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {UnfoldMore} from "@material-ui/icons";
import {ListItemText} from "@material-ui/core";
import {useState} from "react";
import {useEffect} from "react";
import {InterestService} from "../utils/helpers";

const AppHeader = () => {
  const classes = useStyles();

  const [jobTitle, setJobTitle] = useState("");
  function getNavItem(index) {
    return ({
      variant: 'h5',
      color: index === 1 ? "textSecondary" : "textPrimary"
    });
  }

  const showInterestedJobTitles = (interests) => {
    let factor = 1;
    for(let i = 1 ; i <= interests.length ; i++){
      const title = interests.getNext();
      title.split('').forEach((ch, ind) => {
        setTimeout( () => {
          setJobTitle(title.substr(0, ind+1));
        }, 100 * factor);
        factor++;
      });
      factor+=10;
    }
  }

  useEffect(() => {
    showInterestedJobTitles(new InterestService(constants.interests));
  }, []);

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <Box display='flex' alignItems='center'>
          <Avatar src={Photo} alt='Vivek' className={classes.large}/>
          <Box className={classes.info}>
            <Typography variant='body2' component='div'>
              Vivek Sharma
            </Typography>
            <Typography variant='h5' component='div'>
              {jobTitle}
            </Typography>
          </Box>
        </Box>
        <List component='nav' classes={{root: classes.list}}>
          {
            constants.navItems.map((item, index) => (
              <ListItem key={index} className={classes.transition}>
                <ListItemText primaryTypographyProps={getNavItem(index)}>
                  {item}
                </ListItemText>
              </ListItem>
            ))
          }
          <ListItem>
            <ListItemIcon>
              <IconButton size='small' color='secondary'>
                <UnfoldMore/>
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
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
    //color: theme.palette.grey.A700,
  },
  list: {
    display: 'flex',
    marginLeft: `auto`,
    // marginRight: 'auto'
  },
  transition: {
    position: 'relative',
    cursor: 'pointer',
    "&:hover": {
      color: theme.palette.secondary.main,
      "&::after": {
        transform: 'scaleX(1)',
      }
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width : '100%',
      height : '2px',
      bottom: '0',
      left: '0',
      background: theme.palette.secondary.main,
      transform: 'scaleX(0)',
      transition : 'transform 0.4s ease-in-out'
    }
  },
}));
export default AppHeader;