import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Fallback from "./components/fallbackPages/Fallback";
import Routes from "./Routes";
const NotFound = React.lazy(() => import("./components/fallbackPages/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Fallback/>}>
        <AppLayout>
          <Switch>
            {
              Routes.map((routeProps) =>
                <Route {...routeProps} key={routeProps.path}/>
              )
            }
            <Route component={NotFound}/>
          </Switch>
        </AppLayout>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
