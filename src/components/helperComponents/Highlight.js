import React from 'react';
import {Typography} from "@material-ui/core";

const typographyProps = {variant: "h5", component: 'span'};

const Highlight = ({ text }) => {

  return (
    <Typography {...typographyProps} color="secondary">
      &nbsp;{text}&nbsp;
    </Typography>
  );
};

export default Highlight;
