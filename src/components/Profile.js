import React from 'react';
import Page from "../layout/Page";
import {Grid} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import image from '../assets/photo.jpg';
import {Box} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import JobTitleWithEffect from "../layout/components/JobTitleWithEffect";
import {makeStyles} from "@material-ui/core/styles";
import {PersonalDetails} from "../utils/constants";
import {IconButton} from "@material-ui/core";
import {MailOutline} from "@material-ui/icons";
import {Call} from "@material-ui/icons";
import Heading from "./helperComponents/Heading";
import Highlight from "./helperComponents/Highlight";

const Profile = () => {
  const classes = useStyles();

  return (
    <Page>
      <Grid container className={classes.paddingTop} alignItems='center'>
        <Grid item xl={3} lg={3} md={4} sm={5} xs={12} className={classes.center}>
          <Avatar alt="Display Picture" src={image} className={classes.large}>
            V
          </Avatar>
        </Grid>
        <Grid item xl={9} lg={9} md={8} sm={7} xs={12}>
          <Box display='flex' alignItems='center'>
            <Typography variant='h4' component='h2' className={classes.marginRight}>
              {PersonalDetails.MY_NAME}
            </Typography>
            <JobTitleWithEffect
              typographyProps={{
                variant:'h2',
                component:'h1'
              }}
            />
          </Box>
          <Box display='flex' alignItems='center'>
            <IconButton disableRipple>
              <MailOutline/>
            </IconButton>
            <Typography variant='body1' component='div'>
              {PersonalDetails.EMAIL}
            </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
            <IconButton disableRipple>
              <Call/>
            </IconButton>
            <Typography variant='body1' component='div'>
              {PersonalDetails.CONTACT}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box paddingLeft={3}>
        <Heading text={'About'}/>
        <Typography variant='body1' component='div'>
          Hi, my name is Vivek Sharma. I am working as full stack engineer at s759labs (Stealth mode).<br/>
          I have
          <Highlight
            text={"1 year of experience in working with React.js, Redux, Material-UI and Microservices in Java."}/>
          <br/>
          I have also worked with
          <Highlight text={"Isomorphic React"}/>
          library. I love to explore tech and learn new things everyday.<br/>
          I am skilled in component based design with reusable, scalable and maintainable code.<br/>
          I love to write function based code with Software Engineering Principles in mind.<br/>
          I have analytical skills to keep UI simple for better UX.<br/>
        </Typography>
      </Box>
    </Page>
  );
};

const useStyles = makeStyles(theme => ({
  large: {
    width: 200,
    height: 200
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  marginRight: {
    marginRight: theme.spacing(2)
  },
  paddingTop: {
    paddingTop: theme.spacing(2)
  }
}));

export default Profile;
