import React from 'react';
import {Typography} from "@material-ui/core";

const Heading = ({ text }) => {
  return (
    <Typography variant='h5' component='h6' color='textSecondary'>
      {text}
    </Typography>
  );
};

export default Heading;
