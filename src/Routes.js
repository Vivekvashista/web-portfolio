import React from "react";

const SectionRenderer = React.lazy(() => import("./components/SectionRenderer"));

const Routes = [
  { path: "/:id", exact: true, component: SectionRenderer}
]

export default Routes;