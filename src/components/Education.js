import React from 'react';
import Page from "../layout/Page";
import Heading from "./helperComponents/Heading";
import {Typography} from "@material-ui/core";
import constants from "../utils/constants";
import {Box} from "@material-ui/core";
import TextWithDot from "./helperComponents/TextWithDot";

const Education = () => {

  return (
    <Page>
      {
        constants.education.map(({ title, id, college, subHeading}) => (
          <Box key={id}>
            <Typography variant='h3' component='h1'>
              {title}
            </Typography>
            <Heading text={college}/>
            <Box display={'flex'}>
              {
                subHeading.map((sub, index) => (
                  <TextWithDot text={sub} key={index}/>
                ))
              }
            </Box>
          </Box>
        ))
      }
      <br/>
      <Heading text='Certifications'/>
      {
        constants.certifications.map(({ name, url}) => (
          <TextWithDot text={name} typographyProps={{
            variant:'h6',
            component:'a',
            href:url,
            target:"_blank",
          }} key={url} isLink/>
        ))
      }
    </Page>
  );
};

export default Education;
