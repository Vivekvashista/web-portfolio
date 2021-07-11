import React from 'react';
import Backdrop from "@material-ui/core/Backdrop";
import {makeStyles} from "@material-ui/core/styles";
import {FiberManualRecord} from "@material-ui/icons";

const Fallback = () => {
  const classes = useStyles();

  return (
    <Backdrop open={true} className={classes.backdrop}>
      <div className={classes.loader}>
        <FiberManualRecord className={classes.light}/>
        <FiberManualRecord className={classes.main}/>
        <FiberManualRecord className={classes.dark}/>
      </div>
    </Backdrop>
  );
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    background: "transparent"
  },
  light: {
    color: theme.palette.secondary.light,
  },
  main: {
    color: theme.palette.secondary.main,
  },
  dark: {
    color: theme.palette.secondary.dark,
  },
  loader: {
    background: theme.palette.background.default,
    borderRadius: theme.spacing(1)
  }
}));

export default Fallback;
