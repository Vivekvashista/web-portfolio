import React from 'react';
import AppHeader from "./AppHeader";

const AppLayout = ({ children }) => {
  return (
    <>
      <AppHeader/>
      {children}
    </>
  );
}

export default AppLayout;