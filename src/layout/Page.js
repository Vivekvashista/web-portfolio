import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const Page = ({ children, className }) => {
  const classes = useStyles();

  return (
    <Box className={`${classes.container} ${className}`}>
      {children}
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: 'calc(100vh - 70px)',
    background: theme.palette.background.main,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 2)
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1, 10)
    },
  }
}));

export default Page;
