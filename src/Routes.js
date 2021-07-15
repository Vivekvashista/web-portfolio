import React from "react";
import {Redirect} from "react-router-dom";

const SectionRenderer = React.lazy(() => import("./components/SectionRenderer"));

const Routes = [
  { path: "/:id", exact: true, component: SectionRenderer},
  { path: "/", exact: true, render: (props) => <Redirect to="/Profile"/>}
]

export default Routes;