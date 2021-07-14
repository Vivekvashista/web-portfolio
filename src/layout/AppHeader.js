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
import {useHistory, useLocation} from 'react-router-dom';
import JobTitleWithEffect from "./components/JobTitleWithEffect";
import MenuRenderer from "../components/helperComponents/MenuRenderer";

const AppHeader = () => {
  const classes = useStyles();

  const [activeTab, setActiveTab] = useState(0);
  const history = useHistory();
  const location = useLocation();

  const getNavItem = (index) => {
    return ({
      variant: 'h5',
      color: index === activeTab ? "textSecondary" : "textPrimary"
    });
  };

  const selectTab = index => () => {
    history.push(`/${constants.navItems[index]}`);
  }

  useEffect(() => {
    const id = location.pathname.replace("/","");
    const index = constants.navItems.findIndex(item => item === id);
    if(index !== -1)
      setActiveTab(index);
  }, [location]);

  return (
    <AppBar position='sticky' elevation={0} className={classes.horizontalLine}>
      <Toolbar>
        <Box display='flex' alignItems='center'>
          <Avatar src={Photo} alt='Vivek' className={classes.large}/>
          <Box className={classes.info}>
            <Typography variant='body2' component='div'>
              Vivek Sharma
            </Typography>
            <JobTitleWithEffect/>
          </Box>
        </Box>
        <List component='nav' classes={{root: classes.list}}>
          {
            constants.navItems.slice(0,4).map((item, index) => (
              <ListItem key={index} className={classes.transition} onClick={selectTab(index)}>
                <ListItemText primaryTypographyProps={getNavItem(index)}>
                  {item}
                </ListItemText>
              </ListItem>
            ))
          }
          <ListItem>
            <ListItemIcon>
              <MenuRenderer
                items={constants.navItems.slice(4)}
                Component={
                  <IconButton size='small' color='secondary'>
                    <UnfoldMore/>
                  </IconButton>
                }
              />
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
  horizontalLine: {
    borderBottom: `1px solid ${theme.palette.grey["200"]}`
  }
}));
export default AppHeader;