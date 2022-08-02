import React from 'react';
import Page from "../layout/Page";
import {Grid} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import image from '../assets/photo.jpg';
import {Box} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import JobTitleWithEffect from "./helperComponents/JobTitleWithEffect";
import {makeStyles} from "@material-ui/core/styles";
import {PersonalDetails} from "../utils/constants";
import {IconButton} from "@material-ui/core";
import {MailOutline} from "@material-ui/icons";
import {Call} from "@material-ui/icons";
import Heading from "./helperComponents/Heading";
import Highlight from "./helperComponents/Highlight";
import {Tooltip} from "@material-ui/core";
import constants from "../utils/constants";

const Profile = () => {
  const classes = useStyles();

  return (
    <Page>
      <Grid container alignItems='center' spacing={1}>
        <Grid item xl={3} lg={4} md={4} sm={12} xs={12} className={classes.center}>
          <Avatar alt="Display Picture" src={image} className={classes.large}>
            V
          </Avatar>
        </Grid>
        <Grid item xl={9} lg={8} md={8} sm={12} xs={12}>
          <Box display='flex' alignItems='center' flexWrap='wrap' className={classes.handleMobileView}>
            <Typography variant='h4' component='h2' className={classes.marginRight}>
              {PersonalDetails.MY_NAME}
            </Typography>
            <JobTitleWithEffect
              typographyProps={{
                variant:'h3',
                component:'h2'
              }}
            />
          </Box>
          <Box
            display='flex'
            alignItems='center'
          >
            <IconButton disableRipple>
              <MailOutline/>
            </IconButton>
            <Typography
              variant='body1'
              component='a'
              href={`mailto:${PersonalDetails.EMAIL}`}
              className={classes.removeLinkStyle}
            >
              {PersonalDetails.EMAIL}
            </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
            <IconButton disableRipple>
              <Call/>
            </IconButton>
            <Typography
              variant='body1'
              component='a'
              href={`tel:${PersonalDetails.EMAIL}`}
              className={classes.removeLinkStyle}
            >
              {PersonalDetails.CONTACT}
            </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
            {
              constants.socialHandles.map(({name, image, url}) => (
                <Tooltip title={name} placement={"bottom"} key={name}>
                  <IconButton color='secondary' component='a' href={url} target="_blank">
                    <img src={image} alt='Linkedin_icon' width={24} height={24}/>
                  </IconButton>
                </Tooltip>
              ))
            }
          </Box>
        </Grid>
      </Grid>

      <Box paddingTop={3}>
        <Heading text={'About'}/>
        <Typography variant='body1' component='div'>
          Hey, I am glad that you are here. <br/><br/>I works as Full Stack Engineer.
          I have almost <Highlight text={"2 years"}/>of experience in working with
          <Highlight text={"Python, Django, PostgreSQL, Elasticsearch, MongoDB, Redis, Javascript, React, Redux."}/>
          I have also worked with<Highlight text={"Java and Spring Boot."}/><br/><br/>
          I am very curious about learning tech and enjoys challenging work. Strong in replicating design into code with better UX. Code debugging is my favourite part of work.
        </Typography>
        <Box paddingTop={2}>
          <Heading text="Skills"/>
          <Typography variant='body1' component="div">
            {PersonalDetails.SKILLS.join(", ")}
          </Typography>
        </Box>
      </Box>
    </Page>
  );
};

const useStyles = makeStyles(theme => ({
  large: {
    width: 150,
    height: 150
  },
  center: {
    [theme.breakpoints.down("sm")]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  marginRight: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  removeLinkStyle: {
    ...theme.utils.link,
    color: theme.palette.text.primary,
  },
  handleMobileView: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  }
}));

export default Profile;
