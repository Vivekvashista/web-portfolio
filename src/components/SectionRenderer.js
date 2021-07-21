import React from 'react';
import {useParams} from "react-router-dom";
import Profile from "./Profile";
import constants from "../utils/constants";
import Experience from "./Experience";
import Projects from "./Projects";

const SectionRenderer = () => {
  const { id } = useParams();
  const getIndex = text => {
    return constants.navItems.findIndex(item => item === text);
  }

  return (
    getIndex(id) === 0 ?
      <Profile/> :
      getIndex(id) === 1 ?
        <Experience/> :
        getIndex(id) === 2 ?
          <Projects/> :
          <>Other pages</>
  );
};

export default SectionRenderer;
