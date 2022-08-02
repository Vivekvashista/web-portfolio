import React from 'react';
import {Typography} from "@material-ui/core";
import {Box} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const TextWithDot = ({ typographyProps={}, text, isLink }) => {
  const classes = useStyles();

  return (
    <Box display='flex' alignItems='center'>
      <IconButton disabled size='medium'>
        <div className={classes.style}/>
      </IconButton>
      <Typography
        variant='body2'
        color='textSecondary'
        className={isLink ? classes.link : ''}
        {...typographyProps}>
        {text}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  link: {
    ...theme.utils.link,
    color: theme.palette.secondary.main,
  },
  style: {
    width: 5,
    height: 5,
    background: theme.palette.text.secondary,
    borderRadius: '50%'
  }
}));

export default TextWithDot;
