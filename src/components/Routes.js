import React from "react";

const Profile = React.lazy(() => import("./Profile/Profile"));

const Routes = [
  { path: "/", exact: true, component: Profile}
]

export default Routes;