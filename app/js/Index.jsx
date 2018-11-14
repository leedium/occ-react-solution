/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-react-solution
 * @file Index.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated; 14/11/2018
 * @description Defines the ReactRouter for the Application
 *              Here the React Context Consumer receives the injected props from the
 *
 *              occData is the ContextObject that contains the injected props from the Context.Provider
 *
 *              <RouterListener> - custom Higher Order Component(HOC) used to subscribe to
 *                                 events when the route changes
 *
 *              dynamic imports are used to split out rout logic in the case a route is never accessed
 */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import OCCProps from "./Context";

import RouterListener from "./router/RouterListener";
import Home from "./views/pages/Home";
import AsyncRoute from "./router/AsyncRoute";

const Index = () => (
  <React.Fragment>
    <Router>
      <OCCProps.Consumer>
        {occData => (
          <RouterListener {...occData}>
            <div>
              <Route
                exact
                path="/"
                component={props => <Home {...occData} {...props} />}
              />
              <Route
                exact
                path="/home"
                component={props => (
                  <AsyncRoute
                    {...occData}
                    {...props}
                    loadingImport={import(/* webpackChunkName: "main0" */
                    /* webpackMode: "lazy-once" */
                    "./views/pages/Home")}
                  />
                )}
              />
              <Route
                exact
                path="/:article"
                component={props => (
                  <AsyncRoute
                    {...occData}
                    {...props}
                    loadingImport={import(/* webpackChunkName: "main0" */
                    /* webpackMode: "lazy-once" */
                    "./views/pages/Article")}
                  />
                )}
              />
            </div>
          </RouterListener>
        )}
      </OCCProps.Consumer>
    </Router>
  </React.Fragment>
);

export default Index;
