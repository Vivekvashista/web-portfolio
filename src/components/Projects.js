import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import constants from "../utils/constants";
import SingleProjectCard from "./SingleProjectCard";
import Page from "../layout/Page";

const Projects = () => {
  const classes = useStyles();

  return (
    <Page>
      <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='center' className={classes.wrapper}>
        {
          constants.projects.map(project => (
            <SingleProjectCard
              key={project.id}
              project={project}
              classes={classes}
            />
          ))
        }
      </Box>
    </Page>
  );
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    "& > *": {
      margin: theme.spacing(2)
    }
  },
  projectPreview: {
    height: 100,
    filter: 'blur(1px)',

    "&:hover": {
      transform: 'scale(1.1)',
      transition: 'transform 0.5s'
    }
  },
  card: {
    maxWidth: 290
  }
}));

export default Projects;
