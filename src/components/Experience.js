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

const Experience = () => {
  const classes = useStyles();

  const getDuration = startDate => {
    const diff = new Date().getTime() - startDate.getTime();
    const months = Math.floor(Math.round(diff / ( 1000*60*60*24*30 )));
    const years = Math.floor(months / 12);

    if(years)
      return years + "yrs " + (months % 12) +" months";
    return months % 12 + " months";
  }

  const getStartDate = (startDate, endDate) => {
    return `${getMonthFromIndex(startDate.getMonth())} ${startDate.getFullYear()} - ${endDate}`;
  }

  return (
    <Page className={classes.page}>
      <Grid container direction='column'>
        {
          constants.experiences.map(experience => {
            const {
              jobTitle, company, startDate,
              endDate, responsibilities
            } = experience;

            return (
              <>
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
                <Grid item container>
                  <Grid item>
                    <div className={classes.stepper}/>
                  </Grid>
                  <Grid item>
                    <Heading text='Description'/>
                    {
                      responsibilities.map((res, index) => (
                        <TextWithDot text={res} key={index} typographyProps={{variant:'h6' ,color: "textPrimary"}}/>
                      ))
                    }
                  </Grid>
                </Grid>
              </>
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
    padding: theme.spacing(1, 10)
  },
  stepper: {
    width: 1,
    height: "100%",
    borderRight: `1px solid ${theme.palette.secondary.main}`
  }
}));

export default Experience;
