import React from 'react';
import {Box} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Favorite} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const AppFooter = () => {
  const classes = useStyles();

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      className={classes.border}
    >
      <Typography variant='h6'>
        Made with
      </Typography>
      <Favorite fontSize='small' className={classes.love}/>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  love: {
    color: theme.palette.error.main
  },
  border: {
    borderTop: `1px solid ${theme.palette.grey["200"]}`
  }
}));

export default AppFooter;
