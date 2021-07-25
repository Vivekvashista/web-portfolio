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
import {IconButton} from "@material-ui/core";
import {UnfoldMore} from "@material-ui/icons";
import {ListItemText} from "@material-ui/core";
import {useState} from "react";
import {useEffect} from "react";
import {useHistory, useLocation} from 'react-router-dom';
import JobTitleWithEffect from "../components/helperComponents/JobTitleWithEffect";
import MenuRenderer from "../components/helperComponents/MenuRenderer";
import {PersonalDetails} from "../utils/constants";
import {AccountCircle} from "@material-ui/icons";
import {Brightness3} from "@material-ui/icons";
import {selectTab} from "../utils/helpers";
import {getMenuItems} from "../utils/helpers";
import {getSocialMediaItems} from "../utils/helpers";
import {Tooltip} from "@material-ui/core";

const AppHeader = () => {
  const classes = useStyles();

  const [activeTab, setActiveTab] = useState(0);
  const history = useHistory();
  const location = useLocation();

  const getNavTypographyProps = (index) => {
    return ({
      variant: 'h5',
      className: activeTab === index ? classes.active : classes.textSecondary
    });
  };

  useEffect(() => {
    const id = location.pathname.replace("/","");
    const index = constants.navItems.findIndex(item => item === id);
    if(index !== -1)
      setActiveTab(index);
  }, [location]);

  return (
    <AppBar position='sticky' elevation={0} className={classes.horizontalLine}>
      <Toolbar>
        {
          activeTab !==0 &&
          <Box display='flex' alignItems='center'>
            <Avatar src={Photo} alt='Vivek' className={`${classes.large} ${classes.handleVisibility}`}/>
            <Box>
              <Typography variant='body2' component='div' className={classes.handleVisibility}>
                {PersonalDetails.MY_NAME}
              </Typography>
              <JobTitleWithEffect
                typographyProps={{
                  variant: 'h5',
                  component: 'div'
                }}
              />
            </Box>
          </Box>
        }
        <Box className={classes.navContainer}>
          <Box display="flex" alignItems='center' className={classes.showOnDesktop}>
            <List component='nav' classes={{root: classes.list}}>
              {
                constants.navItems.slice(0,4).map((item, index) => (
                  <ListItem key={index} className={classes.transition} onClick={selectTab(history, index)}>
                    <ListItemText primaryTypographyProps={getNavTypographyProps(index)}>
                      {item}
                    </ListItemText>
                  </ListItem>
                ))
              }
            </List>
            <MenuRenderer
              items={getMenuItems(history, 4)}
              Component={
                <IconButton color='secondary'>
                  <UnfoldMore/>
                </IconButton>
              }
              typographyProps={getNavTypographyProps}
              startIndex={4}
            />
          </Box>
          <Box className={classes.showOnMobile}>
            <MenuRenderer
              items={getMenuItems(history, 0)}
              Component={
                <IconButton color='secondary'>
                  <UnfoldMore/>
                </IconButton>
              }
              typographyProps={getNavTypographyProps}
              startIndex={0}
            />
          </Box>
          <MenuRenderer
            items={getSocialMediaItems()}
            Component={
              <IconButton>
                <AccountCircle/>
              </IconButton>
            }
          />
          <Tooltip title='toggle light/dark mode'>
            <IconButton>
              <Brightness3/>
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(theme => ({
  large: {
    width: 55,
    height: 55,
    marginRight: theme.spacing(1),
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
  },
  textSecondary: {
    color: theme.palette.text.secondary,
  },
  active: {
    color: theme.palette.text.hint,
  },
  showOnDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  list: {
    display: "flex"
  },
  showOnMobile: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  handleVisibility: {
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    }
  }
}));
export default AppHeader;