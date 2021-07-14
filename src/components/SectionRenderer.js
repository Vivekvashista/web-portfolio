import React from 'react';
import {useParams} from "react-router-dom";
import Profile from "./Profile";
import constants from "../utils/constants";

const SectionRenderer = () => {
  const { id } = useParams();
  const getIndex = text => {
    return constants.navItems.findIndex(item => item === text);
  }

  return (
    getIndex(id) === 0 ?
      <Profile/> :<>Other pages</>
  );
};

export default SectionRenderer;
