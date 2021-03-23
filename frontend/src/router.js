import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import { Loader } from "simple-react-loader";

const publicRoutes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("./containers/createTeam")),
  },
  {
    path: "/trackscore",
    exact: true,
    component: lazy(() => import("./containers/trackScore")),
  },
];

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
