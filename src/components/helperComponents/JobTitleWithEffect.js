import React from 'react';
import {Typography} from "@material-ui/core";
import {useState} from "react";
import {useEffect} from "react";
import TypingEffect from "../../services/TypingEffect";
import constants from "../../utils/constants";

const JobTitleWithEffect = ({ typographyProps }) => {
  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    const typingEffect = new TypingEffect();
    typingEffect.start(constants.interests, setJobTitle);
    console.debug("typing Effect started!")
    return () => {
      clearInterval(typingEffect.getInterval());
    }
  }, []);

  return (
    <>
      <Typography {...typographyProps}>
        {jobTitle}
      </Typography>
    </>
  );
};

export default JobTitleWithEffect;
