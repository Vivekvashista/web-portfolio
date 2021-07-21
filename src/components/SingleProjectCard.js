import React from 'react';
import {Card} from "@material-ui/core";
import {CardHeader} from "@material-ui/core";
import {getMonthAndYear} from "../utils/helpers";
import {CardMedia} from "@material-ui/core";
import {CardContent} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {CardActions} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {PlayCircleFilled} from "@material-ui/icons";
import {GitHub} from "@material-ui/icons";

const SingleProjectCard = ({ project, classes }) => {
  const {
    title, preview, githubUrl, demoUrl,
    description, techStack, startDate, endDate
  } = project;

  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          title={title}
          subheader={
            <Typography variant='body2'>
              {`${getMonthAndYear(startDate)} - ${getMonthAndYear(endDate)}`}
            </Typography>
          }
        />
        <CardMedia
          component='img'
          src={preview}
          title={title}
          classes={{img: classes.projectPreview}}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {description}
          </Typography>
          <Typography variant='h6' color='textSecondary'>
            Technologies used
          </Typography>
          <Typography variant='caption' color='textSecondary'>
            {techStack.join(", ")}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton component='a' href={demoUrl} target='_blank'>
            <PlayCircleFilled/>
          </IconButton>
          <IconButton component='a' href={githubUrl} target="_blank">
            <GitHub/>
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default SingleProjectCard;
