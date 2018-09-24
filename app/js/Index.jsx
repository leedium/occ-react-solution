/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import OCCProps from "./Context";

import RouterListener from "./router/RouterListener";
import Home from "./views/pages/Home";
import AsyncRoute from "./router/AsyncRoute";

const Index = () => (
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
);

export default Index;
