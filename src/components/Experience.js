import React from 'react';
import Page from "../layout/Page";
import {Box} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import constants from "../utils/constants";
import TextWithDot from "./helperComponents/TextWithDot";
import {getMonthFromIndex} from "../utils/helpers";
import {makeStyles} from "@material-ui/core/styles";
import Heading from "./helperComponents/Heading";
import {FiberManualRecord} from "@material-ui/icons";

const Experience = () => {
  const classes = useStyles();

  const getDuration = startDate => {
    const diff = new Date().getTime() - startDate.getTime();
    const months = Math.floor(Math.round(diff / ( 1000*60*60*24*30 )));
    const years = Math.floor(months / 12);

    if(years)
      return years + " year " + (months % 12) +" months";
    return months % 12 + " months";
  }

  const getStartDate = (startDate, endDate) => {
    return `${getMonthFromIndex(startDate.getMonth())} ${startDate.getFullYear()} - ${endDate}`;
  }

  return (
    <Page className={classes.page}>
      <Grid container direction='column' spacing={1}>
        {
          constants.experiences.map(experience => {
            const {
              jobTitle, company, startDate,
              endDate, responsibilities, techStack,
              links
            } = experience;

            return (
              <React.Fragment key={company}>
                <Grid item>
                  <Box>
                    <Typography variant='h3' component='h1'>
                      {jobTitle}
                    </Typography>
                    <Box display='flex' alignItems='center' className={classes.marginRight}>
                      <Typography variant='body2' component='h5' color='textSecondary'>
                        {company}
                      </Typography>
                      <TextWithDot text={getStartDate(startDate, endDate)}/>
                      <TextWithDot text={getDuration(startDate)}/>
                    </Box>
                  </Box>
                </Grid>
                <Grid item>
                  <Heading text='Description'/>
                  {
                    responsibilities.map((res, index) => (
                      <TextWithDot text={res} key={index} typographyProps={{variant:'h6' ,color: "textPrimary"}}/>
                    ))
                  }
                </Grid>
                <Grid item>
                  <Heading text='Technologies used'/>
                  <TextWithDot text={techStack.join(", ")} typographyProps={{variant: 'h6', color: "textPrimary"}}/>
                </Grid>
                <Grid item>
                  <Heading text='Project Links'/>
                  {
                    links.map(({ name, url}) => (
                      <TextWithDot text={name} typographyProps={{
                        variant:'h6',
                        component:'a',
                        href:url,
                        target:"_blank",
                        className:classes.link
                      }} key={url}/>
                    ))
                  }
                </Grid>
              </React.Fragment>
            )
          })
        }
      </Grid>
    </Page>
  );
};

const useStyles = makeStyles(theme => ({
  marginRight: {
    "& > *": {
      marginRight: theme.spacing(1)
    }
  },
  page: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 2)
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1, 10)
    },
  },
  stepper: {
    width: '100%',
    height: "100%",
    borderRight: `1px solid ${theme.palette.secondary.main}`
  },
  link: {
    ...theme.utils.link,
    color: theme.palette.secondary.main,
  }
}));

export default Experience;
