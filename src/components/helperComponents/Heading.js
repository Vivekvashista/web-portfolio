import React from 'react';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const Heading = ({ text }) => {
  const classes = useStyles();

  return (
    <Typography variant='h5' component='h6' color='textSecondary' className={classes.paddingBottom}>
      {text}
    </Typography>
  );
};

const useStyles = makeStyles(theme => ({
  paddingBottom: {
    paddingBottom: theme.spacing(1)
  }
}));

export default Heading;
