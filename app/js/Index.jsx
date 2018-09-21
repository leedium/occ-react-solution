/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import OCCProps from './context'

import RouterListener from './router/RouterListener';
import Home from './pages/Home'
import AsyncRoute from "./router/AsyncRoute";

const Index = () => (
  <Router>
    <OCCProps.Consumer>{ occProps =>
      (<RouterListener {...occProps}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/:page" component={props =>
            <AsyncRoute props={props} loadingImport={import(/* webpackChunkName: "main0" */ './pages/DLTest')}/>
          }/>
        </div>
      </RouterListener>)}
    </OCCProps.Consumer>
  </Router>
);

export default Index;


