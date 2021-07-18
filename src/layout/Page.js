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
    background: theme.palette.background.main
  }
}));

export default Page;
