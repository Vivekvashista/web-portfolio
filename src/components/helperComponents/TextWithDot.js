import React from 'react';
import {Typography} from "@material-ui/core";
import {Box} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {theme} from "../../theming/theme";

const TextWithDot = ({ typographyProps={}, text }) => {
  return (
    <Box display='flex' alignItems='center'>
      <IconButton disabled size='medium'>
        <div style={style}/>
      </IconButton>
      <Typography variant='body2' color='textSecondary' {...typographyProps}>
        {text}
      </Typography>
    </Box>
  );
};

const style = {
  width: 5,
  height: 5,
  background: theme.palette.text.secondary,
  borderRadius: '50%'
};

export default TextWithDot;
